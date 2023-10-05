using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using MaisBeleza.Controllers;
using MaisBeleza.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Runtime.ConstrainedExecution;

namespace MaisBeleza.Tests
{
    [TestClass]
    public class Tests
    {
        private static DbContextOptions<AppDbContext>? _dbContextOptions;

        [ClassInitialize]
        public static void ClassInitialize(TestContext context) //Inicializa um banco de dados em memória para ser usado durante os testes
        {
            _dbContextOptions = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "TestDb")
                .Options;

            using (var dbContext = new AppDbContext(_dbContextOptions))
            {
                var meis = new List<Mei>
                {
                    new Mei { Id = 10, NomeMei = "Mei 1", Email = "mei1@gmail.com", Telefone = "3199999-9999", Rua = "A", Numero = "10a", Bairro = "B", Cidade = "BH", Estado = Estado.BA, Perfil = Perfil.Administrador, Password = "abc123", HorarioFuncionamento = "8h às 12h" },
                    new Mei { Id = 12, NomeMei = "Mei 2", Email = "mei2@gmail.com", Telefone = "3198888-8888", Rua = "C", Numero = "20a", Bairro = "D", Cidade = "RJ", Estado = Estado.BA, Perfil = Perfil.Administrador, Password = "abc123", HorarioFuncionamento = "8h às 18h" },
                };
                dbContext.Meis.AddRange(meis);
                dbContext.SaveChanges();
            }
        }

        [TestMethod]
        public async Task GetAll_ReturnsListOfMeis() //Retorna a lista de MEIs registrados (Testa o GetAll)
        {
            // Arrange
            using (var dbContext = new AppDbContext(_dbContextOptions))
            {
                var controller = new MeisController(dbContext);

                // Act
                var result = await controller.GetAll();

                // Assert
                var okResult = result as OkObjectResult;
                Assert.IsNotNull(okResult);

                var models = okResult.Value as List<Mei>;
                Assert.IsNotNull(models);
                Assert.AreEqual(2, models.Count);
            }
        }


        [TestMethod]
        public async Task GetById_NonExistingId_ReturnsNotFound() //Faz a pesquisa de um ID que não existe (Testa o GetByID)
        {
            // Arrange
            using (var dbContext = new AppDbContext(_dbContextOptions))
            {
                var controller = new MeisController(dbContext);

                // Act
                var result = await controller.GetById(1);

                // Assert
                Assert.IsInstanceOfType(result, typeof(NotFoundResult));
            }
        }
    }

    [TestClass]
    public class AgendamentoTests
    {
        [TestMethod]
        public void Agendamento_ValidProperties_ReturnsValid() //Faz um registro de agendamento válido (Testa se um registro válido é considerado válido)
        {
            // Arrange
            var agendamento = new Agendamento
            {
                Id = 1,
                Data = DateTime.Now,
                Horario = "10:00",
                MeiId = 1,
                ClienteId = 2
            };

            // Act
            var context = new ValidationContext(agendamento, null, null);
            var result = new List<ValidationResult>();
            var isValid = Validator.TryValidateObject(agendamento, context, result, true);

            // Assert
            Assert.IsTrue(isValid);
        }

        [TestMethod]
        public void Agendamento_InvalidProperties_ReturnsInvalid() //Tenta fazer um registro de um agendamento com valor nulo (Testa se um registro inválido é considerado inválido)
        {
            // Arrange
            var agendamento = new Agendamento
            {
                Id = 1,
                Data = DateTime.Now,
                Horario = null,  // Horario é obrigatório
                MeiId = 1,
                ClienteId = 2
            };

            // Act
            var context = new ValidationContext(agendamento, null, null);
            var result = new List<ValidationResult>();
            var isValid = Validator.TryValidateObject(agendamento, context, result, true);

            // Assert
            Assert.IsFalse(isValid);
        }

        [TestMethod]
        public async Task GetAll_ReturnsListOfAgendamentos() //Retorna a lista de agendamentos (Testa o GetAll)
        {
            // Arrange
            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "TestDb")
                .Options;

            using var context = new AppDbContext(options);
            var controller = new AgendamentosController(context);

            // Act
            var result = await controller.GetAll();
            var okResult = result as OkObjectResult;

            // Assert
            Assert.IsNotNull(okResult);
            Assert.IsNotNull(okResult.Value);
        }

        [TestMethod]
        public void AppDbContext_EnsureDatabaseCreated() //Testa a criação do banco de dados
        {
            // Arrange
            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "TestDb")
                .Options;

            using var context = new AppDbContext(options);

            // Act & Assert
            Assert.IsTrue(context.Database.EnsureCreated());
        }
    }
}
