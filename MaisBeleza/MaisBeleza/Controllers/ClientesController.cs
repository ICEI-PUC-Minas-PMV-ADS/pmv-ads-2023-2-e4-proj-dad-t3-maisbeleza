using MaisBeleza.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MaisBeleza.Controllers
{
    //[Authorize]
    [Route("/")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClientesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Clientes.ToListAsync();
            return Ok(model);
        }

        [HttpPost]
        public async Task<ActionResult> Create(ClienteDto model)
        {
            Cliente novo = new Cliente()
            { 
                    Nome = model.Nome,
                    Email = model.Email,
                    Telefone = model.Telefone,
                    Perfil = model.Perfil,
                    Password = BCrypt.Net.BCrypt.HashPassword(model.Password)
                };

                _context.Clientes.Add(novo);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetById", new { id = novo.Id }, novo);
            }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {

            var model = await _context.Clientes
                .Include(t => t.Agendamentos)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();

            return Ok(model);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, ClienteDto model)
        {
            if (id != model.Id) return BadRequest();

            var modeloDb = await _context.Clientes.AsNoTracking()
                .Include(t => t.Agendamentos)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (modeloDb == null) return NotFound();

            modeloDb.Nome = model.Nome;
            modeloDb.Email = model.Email;
            modeloDb.Telefone = model.Telefone;
            modeloDb.Perfil = model.Perfil;
            modeloDb.Password = BCrypt.Net.BCrypt.HashPassword(model.Password);

            _context.Clientes.Update(modeloDb);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Clientes.FindAsync(id);

            if (model == null) return NotFound();

            _context.Clientes.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<ActionResult> Authenticate(AuthenticateDto model)
        {
            var clienteDb = await _context.Clientes.FirstOrDefaultAsync(c => c.Email == model.Email);

            if (clienteDb == null || !BCrypt.Net.BCrypt.Verify(model.Password, clienteDb.Password))
                return Unauthorized();

            var jwt = GenerateJwtToken(clienteDb);

            return Ok(new { jwt = jwt });
        }

        private string GenerateJwtToken(Cliente model)
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

        private void GerarLinks(Cliente model)
        {
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "GET"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "delete", metodo: "Delete"));
        }


    }
}
