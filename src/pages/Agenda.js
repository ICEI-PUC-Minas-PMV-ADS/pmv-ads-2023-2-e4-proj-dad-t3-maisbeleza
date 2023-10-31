import React, { useState, useEffect } from "react";
import '../App.css';
import Menu from "../components/Navbar";
import Footer from "../components/Footer2";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { IoMdCreate } from "react-icons/io";
import { IoIosTrash } from 'react-icons/io';


function Agenda() {

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
        meiId: 0,
        clienteId: 0,
        servicoId: 0
    });


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

        if (!agendamentoSelecionado.data || !agendamentoSelecionado.horario ||
            !agendamentoSelecionado.meiId || !agendamentoSelecionado.clienteId ||
            !agendamentoSelecionado.servicoId) {
            console.log("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
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
                        agendamento.servicoId = resposta.servicoId;
                    }
                    return agendamento;
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

    async function fetchServiceName(servicoId) {
        try {
            const response = await axios.get(`https://localhost:7075/api/servicos/${servicoId}`);
            return response.data.nomeServico;
        } catch (error) {
            console.error(error);
            return '';
        }
    }

    async function fetchMeiName(meiId) {
        try {
            const response = await axios.get(`https://localhost:7075/api/meis/${meiId}`);
            return response.data.nomeMei;
        } catch (error) {
            console.error(error);
            return '';
        }
    }

    async function fetchClienteName(clienteId) {
        try {
            const response = await axios.get(`https://localhost:7075/api/clientes/${clienteId}`);
            return response.data.nome;
        } catch (error) {
            console.error(error);
            return '';
        }
    }

    return (
        <div className="cadastro-container">
            <Menu />
            <h3>Agenda</h3>
            <header>
                {' '}
                <button onClick={() => abrirFecharModalIncluir()}>Incluir agendamento</button> {' '}
            </header>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Data</th>
                            <th>Horário</th>
                            <th>Profissional</th>
                            <th>Cliente</th>
                            <th>Serviço</th>
                            <th>Gestão</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(agendamento => (
                            <tr key={agendamento.id}>
                                <td>{agendamento.id}</td>
                                <td>{new Date(agendamento.data).toLocaleDateString()}</td>
                                <td>{agendamento.horario}</td>
                                <td>{agendamento.meiId ? (
                                    <MeiName meiId={agendamento.meiId} />
                                ) : null}</td>
                                <td>{agendamento.clienteId ? (
                                    <ClienteName clienteId={agendamento.clienteId} />
                                ) : null}</td>
                                <td>
                                    {agendamento.servicoId ? (
                                        <ServiceName servicoId={agendamento.servicoId} />
                                    ) : null}
                                </td>
                                <td>
                                    <IoMdCreate onClick={() => selecionarAgendamento(agendamento, "Editar")} size={20} color=" #81007F" title="Editar" />{"   "}
                                    <IoIosTrash onClick={() => selecionarAgendamento(agendamento, "Excluir")} size={20} color="red" title="Excluir" />{"   "}
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>

            <Modal isOpen={modalIncluir} >
                <ModalHeader>Incluir novo Agendamento </ModalHeader>
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
                        <p />
                        <label>Serviço: </label>
                        <input type="number" className="form-control mb-2" name="servicoId" placeholder="Digite o código do serviço" onChange={handleChange} />
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
                            value={agendamentoSelecionado && agendamentoSelecionado.data.split("T")[0]} />
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
                        <label>Serviço: </label>
                        <input type="number" className="form-control mb-2" name="servicoId" onChange={handleChange}
                            value={agendamentoSelecionado && agendamentoSelecionado.servicoId} />
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
    function ServiceName({ servicoId }) {
        const [serviceName, setServiceName] = useState('');

        useEffect(() => {
            if (servicoId) {
                fetchServiceName(servicoId).then(result => {
                    setServiceName(result);
                });
            }
        }, [servicoId]);

        return <span>{serviceName}</span>;
    }

    function MeiName({ meiId }) {
        const [meiName, setMeiName] = useState('');

        useEffect(() => {
            if (meiId) {
                fetchMeiName(meiId).then(result => {
                    setMeiName(result);
                });
            }
        }, [meiId]);

        return <span>{meiName}</span>;
    }

    function ClienteName({ clienteId }) {
        const [clienteName, setClienteName] = useState('');

        useEffect(() => {
            if (clienteId) {
                fetchClienteName(clienteId).then(result => {
                    setClienteName(result);
                });
            }
        }, [clienteId]);

        return <span>{clienteName}</span>;
    }
}


export default Agenda;