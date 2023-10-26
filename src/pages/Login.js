import React, { useState } from 'react';
import '../App';
import Menu from "../components/Navbar";
import Footer from "../components/Footer2";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Login() {

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const navigate = useNavigate();


  const fazerLogin = () => {
    const loginEndpoint = "https://localhost:7075/api/Meis/authenticate";

    const credentials = {
      email: loginData.email,
      password: loginData.password,
    };

    axios.post(loginEndpoint, credentials)
      .then(response => {
        const authToken = response.data.jwt;
        if (authToken) {
          setToken(authToken);
          console.log("Login bem-sucedido. Token de autenticação:", authToken);
          navigate('/');
        } else {
          console.error("Token de autenticação ausente na resposta do servidor.");
        }
      })
      .catch(error => {
        console.error("Erro ao fazer login:", error);
      });
  };

  const [, setToken] = useState(null);


  return (
    <div className="Login">
      <Menu />
      <br />
      <div className='login-form'>
        <h3>Login</h3>


        <div>
          <label>E-mail: </label>
          <br />
          <input
            type='text'
            className='form-control'
            name='email'
            value={loginData.email}
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
        <br />
        <button className='btn-login' onClick={() => fazerLogin()}>Entrar</button>

      </div>
      <Footer />
    </div>
  );
}

export default Login;





