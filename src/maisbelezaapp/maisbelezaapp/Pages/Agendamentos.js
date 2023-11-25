import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Avatar, Card, Text, Button } from 'react-native-paper';
import { format } from 'date-fns';
import axios from 'axios';

import Header from '../components/Header';
import Container from '../components/container';

import { useNavigation } from '@react-navigation/native';

const Agendamentos = () => {
  const navigation = useNavigation();

  const [agendamentos, setAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensagemExclusao, setMensagemExclusao] = useState('');
  const [reloadDataKey, setReloadDataKey] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://localhost:7075/api/agendamentos';
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar os dados de Agendamentos');
        }

        const data = await response.json();
        setAgendamentos(data);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [reloadDataKey]);

  // Exemplo de handleEditar em Agendamentos.js
  const handleEditar = async (id) => {
    console.log(`Editar agendamento com ID ${id}`);
    try {
      const apiUrl = `https://localhost:7075/api/agendamentos/${id}`;

      // Substitua `dataToUpdate` pelos dados que você deseja atualizar
      const dadosAtualizados = {
        data: novaData,
        horario: novoHorario,
        meiId: novoMeiId,
        clienteId: novoClienteId,
        servicoId: novoServicoId,
      };

      // Use o método Axios para enviar a requisição PUT
      const response = await axios.put(apiUrl, dadosAtualizados);

      if (response.status !== 200) {
        throw new Error('Erro ao editar o agendamento');
      }

      // Atualiza a lista após a edição
      setReloadDataKey((prev) => prev + 1);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Exemplo de handleExcluir em Agendamentos.js
  const handleExcluir = async (id) => {
    try {
      const apiUrl = `https://localhost:7075/api/agendamentos/${id}`;
      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir o agendamento');
      }

      // Atualiza a lista após a exclusão
      setAgendamentos(agendamentos.filter((item) => item.id !== id));
      setReloadDataKey((prev) => prev + 1);

      // Define a mensagem de exclusão
      setMensagemExclusao('Agendamento excluído com sucesso!');

      // Limpa a mensagem após alguns segundos
      setTimeout(() => setMensagemExclusao(''), 3000);
    } catch (error) {
      console.error(error.message);
    }
  };

  const LeftContent = (props) => (
    <Avatar.Icon {...props} icon="calendar" color="white" />
  );

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title
        style={styles.title}
        title={format(new Date(item.data), 'dd/MM/yyyy')}
        left={LeftContent}
      />
      <Card.Content style={styles.texto}>
        <Text>{'Horário: ' + item.horario} </Text>
        <br />
        <Text>{'Serviço: ' + item.servicoId}</Text>
        <br />
        <Text>{'Profissional: ' + item.meiId} </Text>
        <br />
        <Text>{'Cliente: ' + item.clienteId} </Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            icon="pencil-outline"
            mode="contained"
            onPress={() => {
              handleEditar(item.id); // Chama a função handleEditar
              navigation.navigate('Agenda', { item }); // Navega para a tela 'Agenda' com os dados do item
            }}
            contentStyle={styles.buttonContent}>
            Editar
          </Button>
          <Button
            style={styles.buttonExcluir}
            icon="trash-can-outline"
            mode="contained"
            onPress={() => handleExcluir(item.id)}
            contentStyle={styles.buttonContent}>
            {' '}
            Excluir
          </Button>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <Container>
      <Header title={'Agenda'} />
      {mensagemExclusao ? (
        <View style={styles.mensagemContainer}>
          <Text style={styles.mensagemExclusao}>{mensagemExclusao}</Text>
        </View>
      ) : null}
      <FlatList
        data={agendamentos}
        keyExtractor={(item, index) => item.id + index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text>Nenhum agendamento encontrado.</Text>
          </View>
        )}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  button: {
    marginTop: 15,
    backgroundColor: '#81007F',
    padding: 0,
    borderRadius: 50,
  },
  buttonExcluir: {
    marginTop: 15,
    backgroundColor: '#820032',
    padding: 0,
    borderRadius: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    backgroundColor: '#cab1cb',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    marginBottom: 15,
  },
  mensagemContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  mensagemExclusao: {
    color: '#81007F',
    fontWeight: 'bold',
  },
});

export default Agendamentos;
