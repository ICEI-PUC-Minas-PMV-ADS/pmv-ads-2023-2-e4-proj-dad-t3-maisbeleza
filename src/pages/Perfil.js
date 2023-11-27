import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Menu from "../components/Navbar";
import Footer from "../components/Footer2";

function Perfil() {
  const [userData, setUserData] = useState(null);
  const location = useLocation();
  const authToken = localStorage.getItem('authToken');

  // Função para carregar o token do localStorage quando o componente é montado
  useEffect(() => {
    if (!authToken) {

      // Redirecionar o usuário de volta para a página de login se o token não estiver presente
      window.location.href = '/login';
      return;
    }

    if (!userData) {
      // Solicitação para obter as informações do usuário com base no token
      axios.get("https://maisbeleza20231125193603.azurewebsites.net/api/meis/profile", {
        headers: {
          Authorization: `Bearer ${authToken}`, 
        }
      })
        .then(response => {
          const userData = response.data;
          setUserData(userData);
        })
        .catch(error => {
          console.error("Erro ao obter informações do usuário:", error);
        });
    }
  }, [authToken, userData, location]); 

  return (
    <div>
      <Menu />


    <div className='profile-container'>
    <h1 className="headerperfil">Perfil do Usuário</h1>

      {userData && (
        <div class="user-data">
      <p class="data-item">Nome: {userData.nomeMei}</p>
      <p class="data-item">Email: {userData.email}</p>
      <p class="data-item">Telefone: {userData.telefone}</p>
      <p class="data-item">Rua: {userData.rua}</p>
      <p class="data-item">Email: {userData.email}</p>
      <p class="data-item">Número: {userData.numero}</p>
      <p class="data-item">Bairro: {userData.bairro}</p>
      <p class="data-item">Cidade: {userData.cidade}</p>
      <p class="data-item">Estado: {userData.estado}</p>
      <p class="data-item">Horário de funcionamento: {userData.horarioFuncionamento}</p>
    </div>
      )}
      
       
    </div>
    <Footer />
    </div>
  );
}

export default Perfil;