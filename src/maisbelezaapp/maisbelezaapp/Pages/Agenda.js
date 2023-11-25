import React, { useState, useEffect } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import { format, parse } from 'date-fns';

import Header from '../components/Header';
import Container from '../components/container';
import Body from '../components/Body';
import Input from '../components/Input';

import { useNavigation } from '@react-navigation/native';

const Agenda = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const [agenda, setAgenda] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [meiId, setMeiId] = useState('');
  const [clienteId, setClienteId] = useState('');
  const [servicoId, setServicoId] = useState('');

  const [res, setRes] = useState('');

  const [reloadDataKey, setReloadDataKey] = useState(0);

  useEffect(() => {
    if (item) {
      const formattedDate = format(new Date(item.data), 'dd/MM/yyyy');
      setData(formattedDate);
      setHorario(item.horario);
      setMeiId(item.meiId);
      setClienteId(item.clienteId);
      setServicoId(item.servicoId);
    }
  }, [item, reloadDataKey]);

  // ...

  const handleSalvar = async () => {
    try {
      // Parse da data inserida pelo usuário no formato 'dd/MM/yyyy'
      console.log('Data antes do parse:', data);
      const parsedDate = data ? parse(data, 'dd/MM/yyyy', new Date()) : null;
      console.log('Data após o parse:', parsedDate);

      if (!parsedDate || isNaN(parsedDate)) {
        // Se a data não pôde ser convertida corretamente, exiba um erro
        console.error('Data inválida ao fazer parse:', data);
        throw new Error('Data inválida');
      }

      // Formatar a data para o formato esperado pelo servidor (YYYY-MM-DD)
      const formattedData = format(parsedDate, 'yyyy-MM-dd');
      console.log('Data formatada:', formattedData);

      const response = await axios.post(
        'https://localhost:7075/api/agendamentos',
        {
          data: formattedData,
          horario: horario,
          meiId: meiId,
          clienteId: clienteId,
          servicoId: servicoId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        // Agendamento bem-sucedido
        alert('Agendamento bem-sucedido!');
        setReloadDataKey((prev) => prev + 1); // Use o mesmo valor usado em Agendamentos
        navigation.navigate('Agendamentos');
      } else {
        // Resposta inesperada
        alert('Erro ao agendar. Por favor, tente novamente.');
      }
    } catch (error) {
      // Erro na requisição
      alert('Erro ao agendar. Por favor, tente novamente.');
      console.error('Erro na requisição:', error);

      if (error.response) {
        // A requisição foi feita e o servidor respondeu com um código de status fora do intervalo 2xx
        console.error('Código de resposta do servidor:', error.response.status);
        console.error('Dados da resposta do servidor:', error.response.data);
      } else if (error.request) {
        // A requisição foi feita, mas não houve resposta do servidor
        console.error('Sem resposta do servidor');
      } else {
        // Algo aconteceu ao configurar a solicitação que acionou um erro
        console.error('Erro ao configurar a requisição:', error.message);
      }
    }
  };

  return (
    <Container>
      <Header title={'Agendamento'} goBack={() => navigation.goBack()} />
      <Body>
        <Input
          label="Data"
          value={data}
          mode="outlined"
          placeholder="00/00/0000"
          keyboardType="numeric"
          maxLength={10}
          right={<TextInput.Icon name="calendar" color="#81007F" />}
          onChangeText={(text) => {
            const formattedText = text.replace(/[^0-9]/g, '');
            let formattedDate = '';

            if (formattedText.length <= 2) {
              formattedDate = formattedText;
            } else if (formattedText.length <= 4) {
              formattedDate = `${formattedText.slice(
                0,
                2
              )}/${formattedText.slice(2, 4)}`;
            } else {
              formattedDate = `${formattedText.slice(
                0,
                2
              )}/${formattedText.slice(2, 4)}/${formattedText.slice(4, 8)}`;
            }

            setData(formattedDate);
          }}
        />

        <Input
          label="Horário"
          value={horario}
          mode="outlined"
          placeholder="00:00"
          keyboardType="numeric"
          maxLength={5}
          right={<TextInput.Icon name="clock-outline" color="#81007F" />}
          onChangeText={(text) => {
            let formattedText = text.replace(/[^0-9]/g, '');
            if (formattedText.length > 2) {
              formattedText =
                formattedText.slice(0, 2) + ':' + formattedText.slice(2);
            }
            setHorario(formattedText);
          }}
        />
        <Input
          label="Profissional"
          value={meiId}
          mode="outlined"
          keyboardType="numeric"
          maxLength={3}
          minLength={1}
          right={<TextInput.Icon name="smart-card-outline" color="#81007F" />}
          onChangeText={(text) => setMeiId(text)}
        />
        <Input
          label="Cliente"
          value={clienteId}
          mode="outlined"
          keyboardType="numeric"
          maxLength={3}
          minLength={1}
          right={<TextInput.Icon name="account-star-outline" color="#81007F" />}
          onChangeText={(text) => setClienteId(text)}
        />
        <Input
          label="Serviço"
          value={servicoId}
          mode="outlined"
          keyboardType="numeric"
          maxLength={3}
          minLength={1}
          right={<TextInput.Icon name="hair-dryer" color="#81007F" />}
          onChangeText={(text) => setServicoId(text)}
        />
        <Button
          style={styles.button}
          icon="check"
          mode="contained"
          onPress={handleSalvar}>
          Salvar
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: '#81007F',
  },
});

export default Agenda;
