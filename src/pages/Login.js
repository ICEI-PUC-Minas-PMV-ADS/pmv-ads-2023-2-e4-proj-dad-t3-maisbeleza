import React, { useState } from 'react';
import '../App';
import Menu from "../components/Navbar";
import Footer from "../components/Footer2";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function Login() {
    
    const [modalLogin, setModalLogin] = useState(false);
  
    const [loginData, setLoginData] = useState({
      id: '',
      password: '',
    });
  
    const handleLoginChange = (e) => {
      const { name, value } = e.target;
      setLoginData({
        ...loginData,
        [name]: value,
      });
    };
  
    const fazerLogin = () => {
      const loginEndpoint = "https://localhost:7075/api/Meis/authenticate";
  
      const credentials = {
        id: loginData.id,
        password: loginData.password,
      };
  
      axios.post(loginEndpoint, credentials)
        .then(response => {
          const authToken = response.data.jwt;
          if (authToken) {
            setToken(authToken);
            console.log("Login bem-sucedido. Token de autenticação:", authToken);
          } else {
            console.error("Token de autenticação ausente na resposta do servidor.");
          }
        })
        .catch(error => {
          console.error("Erro ao fazer login:", error);
        });
    };
  
    const [, setToken] = useState(null);
  
    const abrirFecharModalLogin = () => {
      setModalLogin(!modalLogin);
    };
  
    return (
      <div className="Login">
        <Menu />
        <br />
        <h3>Login</h3>
  
     
            <div className='form-group'>
              <label>Id: </label>
              <br />
              <input
                type='text'
                className='form-control'
                name='id'
                value={loginData.id}
                onChange={handleLoginChange}
              />
  
              <label>Senha: </label>
              <br />
              <input
                type='password'
                className='form-control'
                name='password'
                value={loginData.password}
                onChange={handleLoginChange}
              />
            </div>
    
            <button className='btn btn-primary' onClick={() => fazerLogin()}>Login</button>
            <button className='btn btn-danger' onClick={() => abrirFecharModalLogin()}>Cancelar</button>
        
            <Footer />
      </div>
    );
  }
  
  export default Login;
  
  
  
  
  
  