using MaisBeleza.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Abstractions;
using Microsoft.IdentityModel.Tokens;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json.Serialization;

namespace MaisBeleza.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MeisController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MeisController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Meis.ToListAsync();
            return Ok(model);
        }

        [HttpPost]
        public async Task<ActionResult> Create(MeiDto model)
        {
            Mei novo = new Mei()
            {
                NomeMei = model.NomeMei,
                Email = model.Email,
                Telefone = model.Telefone,
                Rua = model.Rua,
                Numero = model.Numero,
                Bairro = model.Bairro,
                Cidade = model.Cidade,
                Estado = model.Estado,
                Perfil = model.Perfil,  
                Password = BCrypt.Net.BCrypt.HashPassword(model.Password),
                HorarioFuncionamento = model.HorarioFuncionamento
            };

            _context.Meis.Add(novo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = novo.Id }, novo);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {

            var model = await _context.Meis
                .Include(t => t.Servicos)
                .Include(t => t.Faturamentos)
                .Include(t => t.Agendamentos)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();

            GerarLinks(model);
            return Ok(model);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, MeiDto model)
        {
            if (id != model.Id) return BadRequest();

            var modeloDb = await _context.Meis.AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == id);

            if (modeloDb == null) return NotFound();

            modeloDb.NomeMei = model.NomeMei;
            modeloDb.Email = model.Email;
            modeloDb.Telefone = model.Telefone;
            modeloDb.Rua = model.Rua;
            modeloDb.Numero = model.Numero;
            modeloDb.Bairro = model.Bairro;
            modeloDb.Cidade = model.Cidade;
            modeloDb.Estado = model.Estado;
            modeloDb.Perfil = model.Perfil;
            modeloDb.Password = BCrypt.Net.BCrypt.HashPassword(model.Password);
            modeloDb.HorarioFuncionamento = model.HorarioFuncionamento;

            _context.Meis.Update(modeloDb);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Meis.FindAsync(id);

            if (model == null) return NotFound();

            _context.Meis.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private void GerarLinks(Mei model)
        {
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "GET"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "delete", metodo: "Delete"));
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<ActionResult> Authenticate(AuthenticateDto model)
        {
            var meiDb = await _context.Meis.FindAsync(model.Id);

            if (meiDb == null || !BCrypt.Net.BCrypt.Verify(model.Password, meiDb.Password))
                return Unauthorized();

            var jwt = GenerateJwtToken(meiDb);

            return Ok(new {jwt = jwt});
        }

        private string GenerateJwtToken(Mei model)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("Ry74cBQva5dThwbwchR9jhbtRFnJxWSZ");
            var claims = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.NameIdentifier, model.Id.ToString()),
                new Claim(ClaimTypes.Role, model.Perfil.ToString())
            });

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claims,
                Expires = DateTime.UtcNow.AddHours(8),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
