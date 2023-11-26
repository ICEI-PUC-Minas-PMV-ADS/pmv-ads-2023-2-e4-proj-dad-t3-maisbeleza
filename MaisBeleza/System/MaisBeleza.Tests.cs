using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using MaisBeleza.Models;
using System.Linq;

namespace MaisBeleza.Tests
{
    [TestClass]
    public class AppDbContextTests
    {
        [TestMethod]
        public void CanInsertAndRetrieveData()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase")
                .Options;

            // Act
            using (var context = new AppDbContext(options))
            {
                // Adicione uma inst�ncia de Agendamento
                context.Agendamentos.Add(new Agendamento
                {
                    Data = DateTime.Now,
                    Horario = "08:00",  // Certifique-se de fornecer um formato v�lido para o hor�rio
                    MeiId = 1,  // Certifique-se de ter um Mei com Id = 1
                    ClienteId = 1,  // Certifique-se de ter um Cliente com Id = 1
                    // Outras propriedades necess�rias
                });

                // Adicione uma inst�ncia de Cliente
                context.Clientes.Add(new Cliente
                {
                    Nome = "Nome do Cliente",
                    Email = "cliente@teste.com",
                    Telefone = "123456789",
                    Perfil = Perfil.UsuarioCliente,
                    Password = "senha123",
                    // Outras propriedades necess�rias
                });

                // Adicione uma inst�ncia de Faturamento
                context.Faturamentos.Add(new Faturamento
                {
                    Data = DateTime.Now,
                    ValorTotal = 100.0m,
                    MeiId = 1,  // Certifique-se de ter um Mei com Id = 1
                    // Outras propriedades necess�rias
                });

                // Adicione uma inst�ncia de Mei
                context.Meis.Add(new Mei
                {
                    NomeMei = "Nome do Mei",
                    Email = "mei@teste.com",
                    Telefone = "987654321",
                    Rua = "Rua Mei",
                    Numero = "123",
                    Bairro = "Bairro Mei",
                    Cidade = "Cidade Mei",
                    Estado = "Estado Mei",
                    Perfil = Perfil.UsuarioMei,
                    Password = "senha456",
                    HorarioFuncionamento = "09:00 - 18:00",
                    // Outras propriedades necess�rias
                });

                // Adicione uma inst�ncia de Servico
                context.Servicos.Add(new Servico
                {
                    NomeServico = "Corte de Cabelo",
                    Descricao = "Corte moderno",
                    Duracao = 30,
                    Valor = 50.0m,
                    MeiId = 1,  // Certifique-se de ter um Mei com Id = 1
                    // Outras propriedades necess�rias
                });

                context.SaveChanges();
            }

            // Assert
            using (var context = new AppDbContext(options))
            {
                Assert.AreEqual(1, context.Agendamentos.Count());
                Assert.AreEqual(1, context.Clientes.Count());
                Assert.AreEqual(1, context.Faturamentos.Count());
                Assert.AreEqual(1, context.Meis.Count());
                Assert.AreEqual(1, context.Servicos.Count());
            }
        }
    }
}

