using MaisBeleza.Controllers;
using MaisBeleza.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FluentAssertions;

namespace TesteIntegracao
{
    public class AgendamentosControllerIntegrationTests : IDisposable
    {
        private DbContextOptions<AppDbContext> _options;

        public AgendamentosControllerIntegrationTests()
        {
            _options = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "InMemoryDatabase")
                .Options;
        }

        public void Dispose()
        {
            // Limpe os recursos após cada teste, se necessário
            GC.SuppressFinalize(this);
        }

        [Fact]
        public async Task CanPerformCRUDOperationsOnAgendamentos()
        {
            // Arrange
            using (var context = new AppDbContext(_options))
            {
                var controller = new AgendamentosController(context);
                var agendamento = new Agendamento
                {
                    Data = DateTime.Now,
                    Horario = "10:00",
                    MeiId = 1,
                    ClienteId = 1,
                    ServicoId = 1
                };

                // Act: Create
                var createActionResult = await controller.Create(agendamento) as CreatedAtActionResult;
                var createdAgendamento = createActionResult?.Value as Agendamento;

                // Assert: Create
                createdAgendamento.Should().NotBeNull();
                createdAgendamento.Should().BeEquivalentTo(agendamento, options => options.ExcludingMissingMembers());

                // Act: Read
                var getByIdActionResult = await controller.GetById(createdAgendamento?.Id ?? 0) as OkObjectResult;
                var readAgendamento = getByIdActionResult?.Value as Agendamento;

                // Assert: Read
                readAgendamento.Should().NotBeNull();
                readAgendamento.Should().BeEquivalentTo(createdAgendamento, options => options.ExcludingMissingMembers());

                // Act: Update
                if (readAgendamento != null)
                {
                    readAgendamento.Horario = "14:00";
                    var updateActionResult = await controller.Update(readAgendamento.Id, readAgendamento) as NoContentResult;

                    // Assert: Update
                    updateActionResult.Should().NotBeNull();
                    updateActionResult?.StatusCode.Should().Be(204);
                }

                // Act: Delete
                if (readAgendamento != null)
                {
                    var deleteActionResult = await controller.Delete(readAgendamento.Id) as NoContentResult;

                    // Assert: Delete
                    deleteActionResult.Should().NotBeNull();
                    deleteActionResult?.StatusCode.Should().Be(204);
                }
            }
        }
    }
}


