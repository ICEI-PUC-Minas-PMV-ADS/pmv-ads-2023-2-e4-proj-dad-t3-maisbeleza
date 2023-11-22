using MaisBeleza.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MaisBeleza.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ServicosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ServicosController( AppDbContext context)
        {
            _context = context;

        }
        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Servicos.ToListAsync();

            return Ok(model);

        }

        [HttpPost]
        public async Task<ActionResult> Create(Servico model)
        {

            _context.Servicos.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = model.Id }, model);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Servicos
                .Include(t => t.Mei)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) NotFound();

            GerarLinks(model);
            return Ok(model);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Servico model)
        {
            if(id  != model.Id) return BadRequest();
            var modeloDb = await _context.Servicos.AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == id);

            if (modeloDb == null) return NotFound();

            _context.Servicos.Update(model);
            await _context.SaveChangesAsync();
                
           
            return NoContent();
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Servicos.FindAsync(id);

            if (model == null) NotFound();

            _context.Servicos.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
            
        }

        private void GerarLinks(Servico model)
        {
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "GET"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "delete", metodo: "Delete"));
        }

    }
}
