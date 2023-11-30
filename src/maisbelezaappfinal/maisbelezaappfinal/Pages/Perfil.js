// Certifique-se de que os imports e exports estão no topo do arquivo
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Container from '../components/container';
import { View, Text, StyleSheet } from 'react-native'; // Certifique-se de importar o View, Text e StyleSheet do 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Perfil = () => {
  const [userData, setUserData] = useState(null);

  // Função para carregar o token do AsyncStorage quando o componente é montado
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const authToken = await AsyncStorage.getItem('authToken');

        if (!authToken) {
          window.location.href = '/login';
          return;
        }

        if (!userData) {
          // Solicitação para obter as informações do usuário com base no token
          axios
            .get(
              'https://maisbeleza20231125193603.azurewebsites.net/api/clientes/profile',
              {
                headers: {
                  Authorization: `Bearer ${authToken}`,
                },
              }
            )
            .then((response) => {
              const userData = response.data;
              setUserData(userData);
            })
            .catch((error) => {
              console.error('Erro ao obter informações do usuário:', error);
            });
        }
      } catch (error) {
        console.error('Erro ao carregar token do AsyncStorage:', error);
      }
    };

    loadUserData();
  }, [userData]);

  return (
    <Container>
      <Header title={'Perfil'} />
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Text style={styles.h1}>Perfil do usuário</Text>

          {userData && (
            <View style={styles.userData}>
              <Text style={styles.userDataItem}>
                <Text style={styles.boldText}>Nome:</Text> {userData.nome}
              </Text>
              <Text style={styles.userDataItem}>
                <Text style={styles.boldText}>Email:</Text> {userData.email}
              </Text>
              <Text style={styles.userDataItem}>
                <Text style={styles.boldText}>Telefone:</Text> {userData.telefone}
              </Text>
              <Text style={styles.userDataItem}>
                <Text style={styles.boldText}>Código do cliente:</Text> {userData.perfil}
              </Text>
            </View>
          )}
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Mudança para alinhar no início
    alignItems: 'center',
    paddingTop: 20, // Adiciona espaço superior
  },
  profileContainer: {
    width: '80%',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Centraliza o texto
  },
  userData: {
    backgroundColor: '#cab1cb',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  userDataItem: {
    marginBottom: 5, // Redução do espaço entre os itens
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default Perfil;


