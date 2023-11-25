import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Container from '../components/container';

const Perfil = () => {
  const [userData, setUserData] = useState(null);
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
      axios
        .get('https://localhost:7075/api/clientes/profile', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          const userData = response.data;
          setUserData(userData);
        })
        .catch((error) => {
          console.error('Erro ao obter informações do usuário:', error);
        });
    }
  }, [authToken, userData]);

  return (
    <Container>
      <Header title={'Perfil'} />
      <div style={styles.container}>
        <div style={styles.profileContainer}>
          <h1 style={styles.h1}>Perfil do usuário</h1>

          {userData && (
            <div style={styles.userData}>
              <p style={styles.userDataItem}>
                <strong>Nome:</strong> {userData.nome}
              </p>
              <p style={styles.userDataItem}>
                <strong>Email:</strong> {userData.email}
              </p>
              <p style={styles.userDataItem}>
                <strong>Telefone:</strong> {userData.telefone}
              </p>
              <p style={styles.userDataItem}>
                <strong>Código do cliente:</strong> {userData.perfil}
              </p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  },
  profileContainer: {
    width: '90%',
    maxWidth: '600px',
    padding: '3px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  userData: {
    marginTop: '30px',
    lineHeight: '1.6',
  },
  userDataItem: {
    marginBottom: '10px',
    fontWeight: 'bold',
  },
};

export default Perfil;
