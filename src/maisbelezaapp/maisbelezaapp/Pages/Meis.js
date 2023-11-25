import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Avatar, Card, Text, List, Button } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/container';

const MeisList = () => {
  const [meis, setMeis] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://localhost:7075/api/Meis';
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar os dados Meis');
        }

        const data = await response.json();
        setMeis(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const LeftContent = (props) => (
    <Avatar.Icon {...props} icon="smart-card-outline" color="white" />
  );

  return (
    <Container>
      <Header title={'Profissionais'} />
      <FlatList
        data={meis}
        keyExtractor={(item, index) => item.id + index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title
              title={item.nomeMei}
              left={LeftContent}
              style={styles.cardTitle}
            />
            <Card.Content style={styles.texto}>
              <Text>
                {'Endereço: ' +
                  item.rua +
                  ', ' +
                  item.numero +
                  ', ' +
                  item.bairro +
                  ', ' + 
                  item.cidade +
                  ', ' + 
                  item.estado 
                   }
              </Text>
              <br />
              <Text>
                {'Horário de funcionamento: ' + item.horarioFuncionamento}{' '}
              </Text>
              <br />
               <Text>
                {'Telefone: ' + item.telefone}{' '}
              </Text>
              <br />
               <Text>
                {'Código: ' + item.id}{' '}
              </Text>
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

export default MeisList;
