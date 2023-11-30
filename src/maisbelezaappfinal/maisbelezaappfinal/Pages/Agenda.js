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

  const handleSalvar = async () => {
    try {
      console.log('Data antes do parse:', data);
      const parsedDate = data ? parse(data, 'dd/MM/yyyy', new Date()) : null;
      console.log('Data após o parse:', parsedDate);

      if (!parsedDate || isNaN(parsedDate)) {
        console.error('Data inválida ao fazer parse:', data);
        throw new Error('Data inválida');
      }

      const formattedData = format(parsedDate, 'yyyy-MM-dd');
      console.log('Data formatada:', formattedData);

      const agendamentoData = {
        data: formattedData,
        horario: horario,
        meiId: meiId,
        clienteId: clienteId,
        servicoId: servicoId,
      };

      if (item) {
        
         agendamentoData.id = item.id;

        const response = await axios.put(
          `https://maisbeleza20231125193603.azurewebsites.net/api/agendamentos/${item.id}`,
          agendamentoData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.status >= 200 && response.status < 300) {
      // Código de status na faixa de sucesso (200-299)
       alert('Agendamento atualizado com sucesso!');
       setReloadDataKey((prev) => prev + 1);
        navigation.navigate('Agendamentos', { shouldRefresh: true });
        } else {
          // Código de status fora da faixa de sucesso
        const errorMessage = response.data ? response.data : 'Erro desconhecido';
        alert(`Erro ao atualizar agendamento: ${errorMessage}. Por favor, tente novamente.`);
      }
      } else {
        const response = await axios.post(
          'https://maisbeleza20231125193603.azurewebsites.net/api/agendamentos',
          agendamentoData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.status === 201) {
          alert('Agendamento bem-sucedido!');
          setReloadDataKey((prev) => prev + 1);
          navigation.navigate('Agendamentos');
        } else {
          alert('Erro ao agendar. Por favor, tente novamente.');
        }
      }
    } catch (error) {
      alert('Erro ao agendar. Por favor, tente novamente.');
      console.error('Erro na requisição:', error);

      if (error.response) {
        console.error('Código de resposta do servidor:', error.response.status);
        console.error('Dados da resposta do servidor:', error.response.data);
      } else if (error.request) {
        console.error('Sem resposta do servidor');
      } else {
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

