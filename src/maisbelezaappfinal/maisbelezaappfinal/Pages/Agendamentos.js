import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Avatar, Card, Text, Button } from 'react-native-paper';
import { format } from 'date-fns';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

import Header from '../components/Header';
import Container from '../components/container';

import { useNavigation } from '@react-navigation/native';

const Agendamentos = () => {
  const navigation = useNavigation();

  const [agendamentos, setAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensagemExclusao, setMensagemExclusao] = useState('');
  const [reloadDataKey, setReloadDataKey] = useState(0);

  const fetchServicoDetails = async (servicoId) => {
    try {
      const response = await axios.get(
        'https://maisbeleza20231125193603.azurewebsites.net/api/servicos/' +
          servicoId
      );

      console.log('Serviço Details Response:', response);

      if (!response.data.nomeServico) {
        console.error('Campo "nome" não encontrado na resposta do serviço.');
        return 'Nome do serviço não encontrado';
      }

      return response.data.nomeServico;
    } catch (error) {
      console.error('Erro ao buscar detalhes do serviço:', error);
      return 'Nome do serviço não encontrado';
    }
  };

  const fetchClienteDetails = async (clienteId) => {
    try {
      const response = await axios.get(
        'https://maisbeleza20231125193603.azurewebsites.net/api/clientes/' +
          clienteId
      );
      return response.data.nome;
    } catch (error) {
      console.error(error);
      return '';
    }
  };

  const fetchMeiDetails = async (meiId) => {
    try {
      const response = await fetch(
        'https://maisbeleza20231125193603.azurewebsites.net/api/meis/' + meiId
      );

      console.log('MEI Details Response:', response);

      if (!response.ok) {
        throw new Error(
          `Erro ao buscar detalhes do MEI. Status: ${response.status}`
        );
      }

      const data = await response.json();
      return data.nomeMei;
    } catch (error) {
      console.error(error.message);
      return '';
    }
  };

  const fetchData = useCallback(async () => {
    try {
      const apiUrl =
        'https://maisbeleza20231125193603.azurewebsites.net/api/agendamentos';
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

      const updatedAgendamentos = await Promise.all(
        data.map(async (item) => {
          try {
            const nomeMei = await fetchMeiDetails(item.meiId);
            const nome = await fetchClienteDetails(item.clienteId);
            const nomeServico = await fetchServicoDetails(item.servicoId);
            console.log('Nome do serviço:', nomeServico);
            return {
              ...item,
              nomeMei: nomeMei || 'Nome do MEI não encontrado',
              nome: nome || 'Nome do Cliente não encontrado',
              nomeServico: nomeServico || 'Nome do serviço não encontrado',
            };
          } catch (error) {
            console.error('Erro ao buscar detalhes:', error);
            return item;
          }
        })
      );

      setAgendamentos(updatedAgendamentos);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData])
  );

  const handleEditar = async (id) => {
    console.log(`Editar agendamento com ID ${id}`);
    try {
      const apiUrl = `https://maisbeleza20231125193603.azurewebsites.net/api/agendamentos/${id}`;

      const dadosAtualizados = {
        // Substitua `dataToUpdate` pelos dados que você deseja atualizar
        data: novaData,
        horario: novoHorario,
        meiId: novoMeiId,
        clienteId: novoClienteId,
        servicoId: novoServicoId,
      };

      const response = await axios.put(apiUrl, dadosAtualizados);

      if (response.status !== 200) {
        throw new Error('Erro ao editar o agendamento');
      }

      setAgendamentos((prevAgendamentos) =>
        prevAgendamentos.map((agendamento) =>
          agendamento.id === id
            ? { ...agendamento, ...dadosAtualizados }
            : agendamento
        )
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleExcluir = async (id) => {
    try {
      const apiUrl = `https://maisbeleza20231125193603.azurewebsites.net/api/agendamentos/${id}`;

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

      setAgendamentos(agendamentos.filter((item) => item.id !== id));
      setReloadDataKey((prev) => prev + 1);

      setMensagemExclusao('Agendamento excluído com sucesso!');

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

        <Text>{'Serviço: ' + item.nomeServico}</Text>

        <Text>{'Profissional: ' + item.nomeMei} </Text>

        <Text>{'Cliente: ' + item.nome} </Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            icon="pencil-outline"
            mode="contained"
            onPress={() => {
              handleEditar(item.id);
              navigation.navigate('Agenda', { item });
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
