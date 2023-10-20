import React, { useState, useEffect } from 'react';
import '../App';
import Menu from "../components/Navbar";
import Footer from "../components/Footer2";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import logoPerfil from "../assets/img/logoPerfil.png"

function App() {

  const baseUrl = "https://localhost:7075/api/Meis";

  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState(true);
  const [modalIncluir, setModalIncluir] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalExcluir, setModalExcluir] = useState(false);


  const [meiSelecionado, setMeiSelecionado] = useState(
    {
      id: '',
      nomeMei: '',
      email: '',
      telefone: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: 0,
      perfil: 0,
      password: '',
      horarioFuncionamento: ''

    }

  )

  const selecionarMei = (mei, opcao) => {
    setMeiSelecionado(mei);
    (opcao === 'editar') ?
      abrirFecharModalEditar() : abrirFecharModalExcluir();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeiSelecionado({
      ...meiSelecionado,
      [name]: value,
    });
  };


  const abrirFecharModalIncluir = () => {
    setModalIncluir(!modalIncluir);
  }

  const abrirFecharModalEditar = () => {
    setModalEditar(!modalEditar);
  }

  const abrirFecharModalExcluir = () => {
    setModalExcluir(!modalExcluir);
  }

  const pedidoGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  const pedidoPost = async () => {
    delete meiSelecionado.id;
    await axios.post(baseUrl, meiSelecionado)
      .then(response => {
        setData(data.concat(response.data));
        setUpdateData(true);
        abrirFecharModalIncluir();
      }).catch(error => {
        console.log(error);
      })
  }

  const pedidoPut = async () => {
    meiSelecionado.idade = parseInt(meiSelecionado.idade);
    await axios.put(baseUrl + '/' + meiSelecionado.id, meiSelecionado)
      .then(response => {
        var resposta = response.data;
        var dadosAuxiliar = data;
        dadosAuxiliar.map(mei => {
          if (mei.id === meiSelecionado.id) {
            mei.nomeMei = resposta.nomeMei;
            mei.email = resposta.email;
            mei.telefone = resposta.telefone;
            mei.rua = resposta.rua;
            mei.numero = resposta.numero;
            mei.bairro = resposta.bairro;
            mei.cidade = resposta.cidade;
            mei.password = resposta.password;
            mei.horarioFuncionamento = resposta.horarioFuncionamento;
          }
          return null;
        });
        setUpdateData(true);
        abrirFecharModalEditar();
      }).catch(error => {
        console.log(error);
      })
  }

  const pedidoDelete = async () => {
    await axios.delete(baseUrl + '/' + meiSelecionado.id)
      .then(response => {
        setData(data.filter(mei => mei.id !== response.data));
        setUpdateData(true);
        abrirFecharModalExcluir();
      }).catch(error => {
        console.log(error);
      })
  }

  // const estadosBrasileiros = [
  //   'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
  //   'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  // ];


  useEffect(() => {
    if (updateData) {
      pedidoGet();
      setUpdateData(false);
    }
  }, [updateData])


  return (
    <div className="App">
        <Menu />
      <br />
      <h3> Perfil</h3>
      <header>
        <img src={logoPerfil} alt='cadastro' />
      </header>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Rua</th>
            <th>Numero</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Horário de Funcionamento</th>
            <th>Operação</th>
          </tr>
        </thead>
        <tbody>
          {data.map(Mei => (
            <tr key={Mei.id}>
              <td>{Mei.id}</td>
              <td>{Mei.nomeMei}</td>
              <td>{Mei.email}</td>
              <td>{Mei.telefone}</td>
              <td>{Mei.rua}</td>
              <td>{Mei.numero}</td>
              <td>{Mei.bairro}</td>
              <td>{Mei.cidade}</td>
              <td>{Mei.horarioFuncionamento}</td>
              <td>
                <button className='btn btn-primary' onClick={() => selecionarMei(Mei, 'editar')}>Editar</button> {"  "}
                <button className='btn btn-danger' onClick={() => selecionarMei(Mei, 'excluir')}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modalIncluir}>
        <ModalHeader>Incluir Mei</ModalHeader>
        <ModalBody>
          <div className='form-group'>

            <label>Nome: </label>
            <br />
            <input type='text' className='form-control' name='nomeMei' onChange={handleChange} />

            <label>Email: </label>
            <br />
            <input type='text' className='form-control' name='email' onChange={handleChange} />

            <label>Telefone: </label>
            <br />
            <input type='text' className='form-control' name='telefone' onChange={handleChange} />

            <label>Rua: </label>
            <br />
            <input type='text' className='form-control' name='rua' onChange={handleChange} />

            <label>Numero: </label>
            <br />
            <input type='text' className='form-control' name='numero' onChange={handleChange} />

            <label>Bairro: </label>
            <br />
            <input type='text' className='form-control' name='bairro' onChange={handleChange} />

            <label>Cidade: </label>
            <br />
            <input type='text' className='form-control' name='cidade' onChange={handleChange} />

            {/* <label>Estado: </label>
            <br />
            <select className="form-control" name="estado" onChange={handleChange}>
              <option value="">Selecione um estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>

            </select>*/}


            {/*<label>Perfil: </label>
            <br />
            <input type='text' className='form-control' name='perfil' onChange={handleChange} />*/}

            <label>Senha: </label>
            <br />
            <input type='text' className='form-control' name='password' onChange={handleChange} />

            <label>Horario de Funcionamento: </label>
            <br />
            <input type='text' className='form-control' name='horarioFuncionamento' onChange={handleChange} />

            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-primary' onClick={() => pedidoPost()}>Incluir</button> {"  "}
          <button className='btn btn-danger' onClick={() => abrirFecharModalIncluir()}>Cancelar</button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalEditar}>
        <ModalHeader>Editar Mei</ModalHeader>
        <ModalBody>
          <div className='form-group'>

            <label>Nome: </label>
            <br />
            <input type='text' className='form-control' name='nomeMei' onChange={handleChange}
              value={meiSelecionado && meiSelecionado.nomeMei} />

            <label>Email: </label>
            <br />
            <input type='text' className='form-control' name='email' onChange={handleChange}
              value={meiSelecionado && meiSelecionado.email} />

            <label>Telefone: </label>
            <br />
            <input type='text' className='form-control' name='telefone' onChange={handleChange}
              value={meiSelecionado && meiSelecionado.telefone} />

            <label>Rua: </label>
            <br />
            <input type='text' className='form-control' name='rua' onChange={handleChange}
              value={meiSelecionado && meiSelecionado.rua} />

            <label>Numero: </label>
            <br />
            <input type='text' className='form-control' name='numero' onChange={handleChange}
              value={meiSelecionado && meiSelecionado.numero} />

            <label>Bairro: </label>
            <br />
            <input type='text' className='form-control' name='bairro' onChange={handleChange}
              value={meiSelecionado && meiSelecionado.bairro} />

            <label>Cidade: </label>
            <br />
            <input type='text' className='form-control' name='cidade' onChange={handleChange}
              value={meiSelecionado && meiSelecionado.cidade} />

            <label>Senha: </label>
            <br />
            <input type='text' className='form-control' name='password' onChange={handleChange}
              value={meiSelecionado && meiSelecionado.password} />

            <label>Horario de Funcionamento: </label>
            <br />
            <input type='text' className='form-control' name='horarioFuncionamento' onChange={handleChange}
              value={meiSelecionado && meiSelecionado.horarioFuncionamento} />

            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-primary' onClick={() => pedidoPut()}>Editar</button> {"  "}
          <button className='btn btn-danger' onClick={() => abrirFecharModalEditar()}>Cancelar</button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalExcluir}>
        <ModalBody>
          Confirma a exclusão{meiSelecionado && meiSelecionado.nome} ?
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-danger' onClick={() => pedidoDelete()}>Sim</button> {"  "}
          <button className='btn btn-secondary' onClick={() => abrirFecharModalExcluir()}>Não</button>
        </ModalFooter>
      </Modal>
      <Footer />

    </div>
  );
}

export default App;
