using MaisBeleza.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MaisBeleza.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AgendamentosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AgendamentosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Agendamentos.ToListAsync();
            return Ok(model);
        }

        [HttpPost]
        public async Task<ActionResult> Create(Agendamento model)
        {

            _context.Agendamentos.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = model.Id }, model);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {

            var model = await _context.Agendamentos
                .Include(t => t.Servicos).ThenInclude(t => t.Servico)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();

            GerarLinks(model);
            return Ok(model);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Agendamento model)
        {
            if (id != model.Id) return BadRequest();

            var modeloDb = await _context.Agendamentos.AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == id);

            if (modeloDb == null) return NotFound();

            _context.Agendamentos.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Agendamentos.FindAsync(id);

            if (model == null) return NotFound();

            _context.Agendamentos.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private void GerarLinks(Agendamento model)
        {
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "GET"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "delete", metodo: "Delete"));
        }

        [HttpPost("{id}/servicos")]
        public async Task<ActionResult> AddServico(int id, Agenda model)
        {
            if (id != model.AgendamentoId) return BadRequest();
            _context.Agendas.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = model.AgendamentoId }, model);
        }

        [HttpDelete("{id}/servicos/{servicoId}")]
        public async Task<ActionResult> DeleteServico(int id, int servicoId)
        {
            var model = await _context.Agendas
                .Where(c => c.AgendamentoId == id && c.ServicoId == servicoId)
                .FirstOrDefaultAsync();

            if (model == null) return NotFound();

            _context.Agendas.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
