using MaisBeleza.Controllers;
using MaisBeleza.Models;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Moq.EntityFrameworkCore;
using System;


namespace MaisBeleza_Test
{
    public class FaturamentosControllerTestes
    {


        [Fact]
        public async void DeveRetornarListaDeFaturamentosQuandoChamarGetAll()
        {
            //Arrange - Given
            var listFaturamento = new List<Faturamento>();
            var faturamento1 = new Faturamento()
            {
                Id = 1,
                ValorTotal = 150,
                MeiId = 1
            };
            var faturamento2 = new Faturamento()
            {
                Id = 2,
                ValorTotal = 200,
                MeiId = 2
            };
            listFaturamento.Add(faturamento1);
            listFaturamento.Add(faturamento2);
            var mockContext = new Mock<AppDbContext>();
            var faturamentosController = new FaturamentosController(mockContext.Object);
            mockContext.Setup(x => x.Faturamentos).ReturnsDbSet(listFaturamento);
            //Act - When
            var recebeValor = await faturamentosController.GetAll();
            //Assert - Then
            mockContext.Verify(x => x.Faturamentos, Times.Once);
            var res = recebeValor as OkObjectResult;
            var resposta = Assert.IsAssignableFrom<List<Faturamento>>(res.Value);
            Assert.Equal(2, resposta.Count);
        }

        [Fact]
        public async void DevAdicionarUmItemQuandoChamarOCreate()
        {
            //Arrange
            var listFaturamento = new List<Faturamento>();
            var faturamento3 = new Faturamento()
            {
                Id = 3,
                ValorTotal = 250,
                MeiId = 2
            };
            var faturamento4 = new Faturamento()
            {
                Id = 4,
                ValorTotal = 500,
                MeiId = 3
            };
            listFaturamento.Add(faturamento3);
            listFaturamento.Add(faturamento4);

            var novoFaturamento = new Faturamento()
            {
                Id = 3,
                ValorTotal = 400,
                MeiId = 4
            };


            var mockContext = new Mock<AppDbContext>();
            var faturamentosController = new FaturamentosController(mockContext.Object);
            mockContext.Setup(x => x.Faturamentos).ReturnsDbSet(listFaturamento);

            //Act - When
            var adicaoFaturamento = await faturamentosController.Create(novoFaturamento);

            //Assert - Then
            var createdAtActionResult = Assert.IsType<CreatedAtActionResult>(adicaoFaturamento);
            var model = Assert.IsAssignableFrom<Faturamento>(createdAtActionResult.Value);
            Assert.Equal(3, model.Id);
        }

        [Fact]
        public async void DeveIdentificarUmItemQuandoChamarOGetById()
        {
            //Arrange
            var listFaturamento = new List<Faturamento>();
            var faturamento5 = new Faturamento()
            {
                Id = 5,
                ValorTotal = 150,
                MeiId = 3
            };
            var faturamento6 = new Faturamento()
            {
                Id = 6,
                ValorTotal = 200,
                MeiId = 4
            };
            listFaturamento.Add(faturamento5);
            listFaturamento.Add(faturamento6);

            var mockContext = new Mock<AppDbContext>();
            var faturamentosController = new FaturamentosController(mockContext.Object);
            mockContext.Setup(x => x.Faturamentos).ReturnsDbSet(listFaturamento);

            //Act - When
            var buscarId = await faturamentosController.GetById(5);

            //Assert - Then
            var res = Assert.IsType<OkObjectResult>(buscarId);
            var resposta = Assert.IsAssignableFrom<Faturamento>(res.Value);
            Assert.Equal(5, resposta.Id);
        }

        [Fact]
        public async void DeveRetornarNotFoundQuandoNãoEncontrarOIdNaListaDeFaturamento()
        {
            var listFaturamento = new List<Faturamento>();
            var faturamento7 = new Faturamento()
            {
                Id = 1,
                ValorTotal = 150,
                MeiId = 1
            };
            var faturamento8 = new Faturamento()
            {
                Id = 2,
                ValorTotal = 200,
                MeiId = 2
            };
            listFaturamento.Add(faturamento7);
            listFaturamento.Add(faturamento8);

            var mockContext = new Mock<AppDbContext>();
            var faturamentosController = new FaturamentosController(mockContext.Object);
            mockContext.Setup(x => x.Faturamentos).ReturnsDbSet(listFaturamento);

            var buscarId = await faturamentosController.GetById(3);


            Assert.IsType<NotFoundResult>(buscarId);

        }

        [Fact]
        public async void DeveDarErroDeBadRequestQuandoASoliticacaoForInvalida()
        {
            var listFaturamento = new List<Faturamento>();
            var id = 6;
            var faturamento9 = new Faturamento()
            {
                Id = 3,
                ValorTotal = 150,
                MeiId = 1
            };
            listFaturamento.Add(faturamento9);

            var mockContext = new Mock<AppDbContext>();
            var faturamentosController = new FaturamentosController(mockContext.Object);
            mockContext.Setup(x => x.Faturamentos).ReturnsDbSet(listFaturamento);

            var alterarId = await faturamentosController.Update(id, faturamento9);

            Assert.IsType<BadRequestResult>(alterarId);
        }

        [Fact]
        public async void DeveDarOErroDeNotFoundQuandoNaoEncontrarOResultadoEsperado()
        {

            var listFaturamento = new List<Faturamento>();
            var id = 20;
            var faturamentoInvalido = new Faturamento()
            {
                Id = 20,
                ValorTotal = 150,
                MeiId = 1
            };

            var mockContext = new Mock<AppDbContext>();
            var faturamentosController = new FaturamentosController(mockContext.Object);
            mockContext.Setup(x => x.Faturamentos).ReturnsDbSet(listFaturamento);

            var alterarId = await faturamentosController.Update(id, faturamentoInvalido);

            Assert.IsType<NotFoundResult>(alterarId);
        }
        [Fact]
        public async void DeveAlterarOValorTotalQuandoForChamadoOUpdate()
        {

            var listFaturamento = new List<Faturamento>();
            var alteracaoId = 5;
            var faturamentoNovo = new Faturamento()
            {

                Id = alteracaoId,
                ValorTotal = 200,
                MeiId = 1

            };
            listFaturamento.Add(faturamentoNovo);


            var mockContext = new Mock<AppDbContext>();
            var faturamentosController = new FaturamentosController(mockContext.Object);
            mockContext.Setup(x => x.Faturamentos).ReturnsDbSet(listFaturamento);

            var idAlterado = await faturamentosController.Update(alteracaoId, faturamentoNovo);

            Assert.IsType<NoContentResult>(idAlterado);
        }

        [Fact]
        public async void DeveRetornarNotFoundQuandoUmFaturamentoForExcluidoDaLista()
        {

            var listFaturamento = new List<Faturamento>();
            var faturamento10 = new Faturamento()
            {
                Id = 6,
                ValorTotal = 150,
                MeiId = 1
            };
            listFaturamento.Add(faturamento10);

            var mockContext = new Mock<AppDbContext>();
            var faturamentosController = new FaturamentosController(mockContext.Object);
            mockContext.Setup(x => x.Faturamentos).ReturnsDbSet(listFaturamento);

            var deletarFaturamento = await faturamentosController.Delete(6);

            Assert.IsType<NotFoundResult>(deletarFaturamento);
        }
    }
}


