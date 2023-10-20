import React, { useState, useEffect } from 'react';
import '../App';
import Menu from "../components/Navbar";
import Footer from "../components/Footer2";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function Cadastro() {

    const baseUrl = "https://localhost:7075/api/Meis";
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const [data, setData] = useState([]);
    const [updateData, setUpdateData] = useState(true);
    const [modalIncluir, setModalIncluir] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalExcluir, setModalExcluir] = useState(false);
    const [modalLogin, setModalLogin] = useState(false);

    const [loginData, setLoginData] = useState({
        id: '',
        password: '',
    });

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
    const abrirFecharModalLogin = () => {
        setModalLogin(!modalLogin);
    };
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
                setRegistrationSuccess(true);
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
        <div className="App">
            <Menu />
            <br />
            <h3> Cadastre-se</h3>
            


        
                
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
                    {registrationSuccess && (
            <div className="alert alert-success">Cadastro realizado com sucesso!</div>
        )}
                
                
                    <button className='btn btn-primary' onClick={() => pedidoPost()}>Cadastre-se</button> {"  "}
                
           
            <Footer />

        </div>
    );
}

export default Cadastro;
