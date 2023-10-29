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
      axios.get("https://localhost:7075/api/meis/profile", {
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
      <h1>Perfil do Usuário</h1>
      {userData && (
        <div>
          <p>Nome: {userData.nomeMei}</p>
          <p>Email: {userData.email}</p>
          <p>Telefone: {userData.telefone}</p>
          <p>Rua: {userData.rua}</p>
          <p>Email: {userData.email}</p>
          <p>Número: {userData.numero}</p>
          <p>Bairro: {userData.bairro}</p>
          <p>cidade: {userData.cidade}</p>
          <p>Estado: {userData.estado}</p>
          <p>Horário funcionamento: {userData.horarioFuncionamento}</p>
          
        </div>
      )}
       <Footer />
    </div>
  );
}

export default Perfil;