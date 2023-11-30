import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Avatar, Card, Text, List, Button } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/container';

const ServicosList = () => {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://maisbeleza20231125193603.azurewebsites.net/api/servicos';
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar os dados Serviços');
        }

        const data = await response.json();
        setServicos(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const LeftContent = (props) => (
    <Avatar.Icon {...props} icon="shopping-outline" color="white" />
  );

  return (
    <Container>
      <Header title={'Serviços'} />
      <FlatList
        data={servicos}
        keyExtractor={(item, index) => item.id + index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title
              title={item.nomeServico}
              left={LeftContent}
              style={styles.cardTitle}
            />
            <Card.Content style={styles.texto}>
              <Text>{'Descrição: ' + item.descricao} </Text>
            
              <Text>{'Duração (min): ' + item.duracao}</Text>
              
              <Text>{'Valor (R$): ' + item.valor} </Text>
            
              <Text>{'Profissional: ' + item.meiId} </Text>
            
              <Text>{'Código: ' + item.id} </Text>
            </Card.Content>
          </Card>
        )}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  cardTitle: {
    fontWeight: 'bold',
    backgroundColor: '#cab1cb',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    marginBottom: 15,
  },
});

export default ServicosList;
