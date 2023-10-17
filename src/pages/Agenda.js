import React, { useState, useEffect } from "react";
import '../App.css';
import Menu from "../components/Navbar";
import Footer from "../components/Footer2";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function App() {

    const baseUrl = "https://localhost:7075/api/agendamentos";

    const [data, setData] = useState([]);
    const [updateData, setUpdateData] = useState(true);

    const [modalIncluir, setModalIncluir] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalExcluir, setModalExcluir] = useState(false);

    const [agendamentoSelecionado, setAgendamentoSelecionado] = useState({
        id: '',
        data: '',
        horario: '',
        meiId: 1,
        clienteId: 1,
    })

    const selecionarAgendamento = (agendamento, opcao) => {
        setAgendamentoSelecionado(agendamento);
        (opcao === "Editar") ?
            abrirFecharModalEditar() : abrirFecharModalExcluir();
    }

    const abrirFecharModalIncluir = () => {
        setModalIncluir(!modalIncluir)
    }

    const abrirFecharModalEditar = () => {
        setModalEditar(!modalEditar)
    }

    const abrirFecharModalExcluir = () => {
        setModalExcluir(!modalExcluir);
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setAgendamentoSelecionado({
            ...agendamentoSelecionado, [name]: value
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

    const pedidoPost = async () => {
        delete agendamentoSelecionado.id;
        await axios.post(baseUrl, agendamentoSelecionado)
            .then(response => {
                setData(data.concat(response.data));
                setUpdateData(true);
                abrirFecharModalIncluir();
            }).catch(error => {
                console.log(error);
            })
    }

    const pedidoPut = async () => {
        await axios.put(baseUrl + "/" + agendamentoSelecionado.id, agendamentoSelecionado)
            .then(response => {
                var resposta = response.data;
                var dadosAuxiliar = data;
                dadosAuxiliar.map(agendamento => {
                    if (agendamento.id === agendamentoSelecionado.id) {
                        agendamento.data = resposta.data;
                        agendamento.horario = resposta.horario;
                        agendamento.meiId = resposta.meiId;
                        agendamento.clienteId = resposta.clienteId;
                    }
                });
                setUpdateData(true);
                abrirFecharModalEditar();
            }).catch(error => {
                console.log(error);
            })
    }

    const pedidoDelete = async () => {
        await axios.delete(baseUrl + "/" + agendamentoSelecionado.id)
            .then(response => {
                setData(data.filter(agendamento => agendamento.id !== response.data));
                setUpdateData(true);
                abrirFecharModalExcluir();
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

    return (
        <div className="agendamento-container">
            <Menu />
            <h3>Agenda</h3>
            <header>
                {' '}
                <button onClick={() => abrirFecharModalIncluir()}>Incluir agendamento</button> {' '}
            </header>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Data</th>
                        <th>Horário</th>
                        <th>Profissional</th>
                        <th>Cliente</th>
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
                            <td>
                                <button className="btn btn-primary" onClick={() => selecionarAgendamento(agendamento, "Editar")}>Editar</button> {" "}
                                <button className="btn btn-danger" onClick={() => selecionarAgendamento(agendamento, "Excluir")}>Excluir</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <Modal isOpen={modalIncluir} >
                <ModalHeader>Incluir novo agendamento </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>Data: </label>
                        <input type="date" className="form-control mb-2" name="data" onChange={handleChange} />
                        <p />
                        <label>Horário: </label>
                        <input className="form-control mb-2" name="horario" placeholder="00:00" onChange={handleChange} />
                        <p />
                        <label>Profissional: </label>
                        <input type="number" className="form-control mb-2" name="meiId" placeholder="Digite o código do profissional" onChange={handleChange} />
                        <p />
                        <label>Cliente: </label>
                        <input type="number" className="form-control mb-2" name="clienteId" placeholder="Digite o código do cliente" onChange={handleChange} />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={() => pedidoPost()}>Incluir</button>{"   "}
                    <button className="btn btn-danger" onClick={() => abrirFecharModalIncluir()}>Cancelar</button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalEditar} >
                <ModalHeader>Editar agendamento: </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>Código: </label><br />
                        <input className="form-control mb-2" readOnly value={agendamentoSelecionado && agendamentoSelecionado.id} /><br />
                        <label>Data: </label>
                        <input className="form-control mb-2" name="data" onChange={handleChange}
                            value={agendamentoSelecionado && agendamentoSelecionado.data} />
                        <br />
                        <label>Horário: </label>
                        <input type="text" className="form-control mb-2" name="horario" onChange={handleChange}
                            value={agendamentoSelecionado && agendamentoSelecionado.horario} />
                        <br />
                        <label>Profissional: </label>
                        <input className="form-control mb-2" name="meiId" onChange={handleChange}
                            value={agendamentoSelecionado && agendamentoSelecionado.meiId} />
                        <br />
                        <label>Cliente: </label>
                        <input type="number" className="form-control mb-2" name="clienteId" onChange={handleChange}
                            value={agendamentoSelecionado && agendamentoSelecionado.clienteId} />
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={() => pedidoPut()}>Salvar</button>{"   "}
                    <button className="btn btn-danger" onClick={() => abrirFecharModalEditar()}>Cancelar</button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalExcluir}>
                <ModalBody>
                    Você confirma a exclusão do agendamento de código {agendamentoSelecionado && agendamentoSelecionado.id} ?
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-danger' onClick={() => pedidoDelete()}> Sim </button>
                    <button className='btn btn-secondary' onClick={() => abrirFecharModalExcluir()}> Não </button>
                </ModalFooter>
            </Modal>

            <Footer />
        </div>
    );
}

export default App;