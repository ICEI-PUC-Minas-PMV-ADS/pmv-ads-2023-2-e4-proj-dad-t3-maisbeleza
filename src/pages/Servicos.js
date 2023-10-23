import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../App.css';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Menu from "../components/Navbar";
import Footer from "../components/Footer2";



function Servicos() {

  const baseUrl = "https://localhost:7075/api/servicos";

  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState(true);

  const [modalIncluir, setModalIncluir] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalExcluir, setModalExcluir] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState({
    id: '',
    nomeServico: '',
    descricao: '',
    valor: '',
    meiId: 1
  })

  const selecionarServico = (servicos, opcao) => {
    setServicoSelecionado(servicos);
    (opcao === "Editar") ?
      AbrirFecharModalEditar() : AbrirFecharModalExcluir();
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setServicoSelecionado({
      ...servicoSelecionado, [name]: value
    });
    console.log(servicoSelecionado);
  }

  const pedidoGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    if (updateData) {
      pedidoGet();
      setUpdateData(false);
    }
  }, [updateData])

  const pedidoPost = async () => {
    delete servicoSelecionado.id;
    await axios.post(baseUrl, servicoSelecionado)
      .then(response => {
        setData(data.concat(response.data));
        setUpdateData(true);
        AbrirFecharModalIncluir();
      }).catch(error => {
        console.log(error);
      })
  }

  const pedidoDelete = async () => {
    await axios.delete(baseUrl + "/" + servicoSelecionado.id)
      .then(response => {
        setData(data.filter(servicos => servicos.id !== response.data));
        setUpdateData(true);
        AbrirFecharModalExcluir();
      }).catch(error => {
        console.log(error);
      })
  }

  const AbrirFecharModalIncluir = () => {
    setModalIncluir(!modalIncluir);
  }
  const AbrirFecharModalEditar = () => {
    setModalEditar(!modalEditar);
  }
  const AbrirFecharModalExcluir = () => {
    setModalExcluir(!modalExcluir);
  }

  const pedidoPut = async () => {
    try {
      const response = await axios.put(baseUrl + "/" + servicoSelecionado.id, servicoSelecionado);
      const resposta = response.data;
      setData(data.map((servicos) => {
        if (servicos.id === servicoSelecionado.id) {
          servicos.nomeServico = resposta.nomeServico;
          servicos.descricao = resposta.descricao;
          servicos.duracao = resposta.duracao;
          servicos.valor = resposta.valor;
        }
        return servicos;
      }));

      setUpdateData(true);
      AbrirFecharModalEditar();
    } catch (error) {
      console.log(error);
    }
  };
  return (
 
    <div className = "cadastro-container">
       <Menu />
            <h3>Serviços</h3>
            <header>
                {' '}
        <button  onClick={()=>AbrirFecharModalIncluir()}>Incluir serviço</button> {' '}
      </header>
    <div className="table-responsive">
    <table className= "table table-bordered">
      <thead>
        <tr>
          <th>Procedimento</th>
          <th>Descrição</th>
          <th>Duração (min)</th>
          <th>Valor (R$)</th>
          <th>Gestão</th>
        </tr>
      </thead>
      <tbody>
        {data.map(servicos=>(
          <tr key = {servicos.id}>
            <td>{servicos.nomeServico}</td>
          <td>{servicos.descricao}</td>
          <td>{servicos.duracao}</td>
          <td>{servicos.valor}</td>
            <td>
            <button className="btn btn-primary" onClick={()=>selecionarServico(servicos,"Editar")}>Editar</button>{"  "}
            <button className="btn btn-secondary" onClick={()=>selecionarServico(servicos,"Excluir")}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

    <Modal isOpen ={modalIncluir} >
      <ModalHeader>Incluir novo Serviço: </ModalHeader>
      <ModalBody>
        <div className = "form-group">
          <label>Procedimento: </label>
          <input  className = "form-control mb-2" name ="nomeServico" onChange={handleChange}/>
          <p/>
          <label>Descrição: </label>
          <input  className = "form-control mb-2" name ="descricao" onChange={handleChange}/>
          <p/>
          <label>Duração: </label>
          <input  type = "number" className = "form-control mb-2" name ="duracao" onChange={handleChange}/>
        </div>
        <p/>
          <label>Valor: </label>
          <input type="decimal" className="form-control mb-2" name="valor" onChange={handleChange} />
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => pedidoPost()}>Incluir</button>{"   "}
          <button className="btn btn-danger" onClick={() => AbrirFecharModalIncluir()}>Cancelar</button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modalEditar} >
        <ModalHeader>Editar serviço: </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Procedimento: </label>
            <input className="form-control mb-2" name="nomeServico" onChange={handleChange}
              value={servicoSelecionado && servicoSelecionado.nomeServico} />
            <p />
            <label>Descrição: </label>
            <input className="form-control mb-2" name="descricao" onChange={handleChange}
              value={servicoSelecionado && servicoSelecionado.descricao} />
            <p />
            <label>Duração: </label>
            <input type="number" className="form-control mb-2" name="duracao" onChange={handleChange}
              value={servicoSelecionado && servicoSelecionado.duracao} />
            <p />
            <label>Valor: </label>
            <input type="decimal" className="form-control mb-2" name="valor" onChange={handleChange}
              value={servicoSelecionado && servicoSelecionado.valor} />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => pedidoPut()}>Salvar</button>{"   "}
          <button className="btn btn-danger" onClick={() => AbrirFecharModalEditar()}>Cancelar</button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalExcluir}>

          <ModalBody>
            Confirmar a exclusão deste serviço: {servicoSelecionado && servicoSelecionado.nomeServico} ?
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-danger' onClick={()=> pedidoDelete()}> Sim </button>
            <button className='btn btn-secondary' onClick={()=> AbrirFecharModalExcluir()}> Não </button>
      </ModalFooter>

      </Modal>

      <Footer />
    </div>
  );
}

export default Servicos;
