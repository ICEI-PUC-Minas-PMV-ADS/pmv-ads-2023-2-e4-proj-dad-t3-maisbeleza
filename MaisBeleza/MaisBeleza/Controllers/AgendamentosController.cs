using MaisBeleza.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.EntityFrameworkCore;

namespace MaisBeleza.Controllers
{
    //[Authorize]
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
                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();

            GerarLinks(model, Url); // Passando o objeto IUrlHelper para GerarLinks

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

        private void GerarLinks(Agendamento model, IUrlHelper urlHelper)
        {
            if (urlHelper == null)
            {
                // Adicione uma mensagem de log para diagnosticar o problema
                Console.WriteLine("urlHelper é nulo.");
                return;
            }

            if (urlHelper.ActionContext == null)
            {
                // Adicione uma mensagem de log para diagnosticar o problema
                Console.WriteLine("urlHelper.ActionContext é nulo.");
                return;
            }

            if (urlHelper.ActionContext.HttpContext == null)
            {
                // Adicione uma mensagem de log para diagnosticar o problema
                Console.WriteLine("urlHelper.ActionContext.HttpContext é nulo.");
                return;
            }

            // Se todas as verificações passaram, continue com a geração de links
            model.Links.Add(new LinkDto(model.Id, urlHelper.ActionLink(nameof(GetById), "Agendamentos", new { id = model.Id }), rel: "self", metodo: "GET"));
            model.Links.Add(new LinkDto(model.Id, urlHelper.ActionLink(nameof(Update), "Agendamentos", new { id = model.Id }), rel: "update", metodo: "PUT"));
            model.Links.Add(new LinkDto(model.Id, urlHelper.ActionLink(nameof(Delete), "Agendamentos", new { id = model.Id }), rel: "delete", metodo: "DELETE"));
        }
    }
}

