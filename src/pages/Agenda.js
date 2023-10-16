import React, { useState, useEffect } from "react";
import '../App.css';
import Menu from "../components/Navbar";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function App() {

    const baseUrl = "https://localhost:7075/api/Agendamentos";

    const [data, setData] = useState([]);
    const[modalIncluir, setModalIncluir] = useState(false);

    const [agendamentoSelecionado, setAgendamentoSelecionado] = useState({
        id: 0,
        data: '',
        horario: '',
        meiId: 0,
        clienteId: 0,
        servicos: 0
    })

    const abrirFecharModalIncluir = () => {
        setModalIncluir(!modalIncluir)
      }
  

    const handleChange = e => {
        const { name, value } = e.target;
        setAgendamentoSelecionado({
            ...agendamentoSelecionado,[name]: value
        });
        console.log(agendamentoSelecionado);
    }

    const pedidoGet = async () => {
        await axios.get(baseUrl)
            .then(response => {
                setData(response.data);
            }).catch(error => {
                console.log(error);
            })
    }


    const pedidoPost = async()=>{
        delete agendamentoSelecionado.id;
        await axios.post(baseUrl, agendamentoSelecionado)
        .then(response => {
          setData(data.concat(response.data));
          abrirFecharModalIncluir();
        }).catch(error=>{
          console.log(error);
        })
    }

    useEffect(() => {
        pedidoGet();
    })



    return (
        <div className="agendamento-container">
            <Menu />
            <h3>Agenda</h3>
            <header>
                <button className="btn btn-success" onClick={()=>abrirFecharModalIncluir()}>Incluir agendamento</button>
            </header>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Data</th>
                        <th>Horário</th>
                        <th>MeiId</th>
                        <th>ClienteId</th>
                        <th>Serviços</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(agendamento => (
                        <tr key={agendamento.id}>
                            <td>{agendamento.id}</td>
                            <td>{agendamento.data}</td>
                            <td>{agendamento.horario}</td>
                            <td>{agendamento.meiId}</td>
                            <td>{agendamento.clienteId}</td>
                            <td>{agendamento.servicos}</td>
                            <td>
                                <button className="btn btn-primary">Editar</button> {" "}
                                <button className="btn btn-danger">Excluir</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <Modal isOpen={modalIncluir} >
                <ModalHeader>Incluir novo Agendamento </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>Data: </label>
                        <input type="date" className="form-control mb-2" name="data" onChange={handleChange} />
                        <p />
                        <label>Horário: </label>
                        <input type="text" className="form-control mb-2" name="horario" onChange={handleChange} />
                        <p />
                        <label>Profissional: </label>
                        <input type="number" className="form-control mb-2" name="meiId" onChange={handleChange} />
                        <p />
                        <label>Cliente: </label>
                        <input type="number" className="form-control mb-2" name="clienteId" onChange={handleChange} />
                        <p />
                        <label>Serviço: </label>
                        <input type="number" className="form-control mb-2" name="servicos" onChange={handleChange} />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={() => pedidoPost()}>Incluir</button>{"   "}
                    <button className="btn btn-danger" onClick={() => abrirFecharModalIncluir()}>Cancelar</button>
                </ModalFooter>
            </Modal>

            <Footer />
        </div>
    );
}

export default App;