import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Cadastro = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCadastro = async () => {
    try {
      if (password !== confirmPassword) {
        Alert.alert('Erro', 'As senhas não coincidem.');
        return;
      }

      const response = await axios.post('https://localhost:7075/api/clientes', {
        nome: nome,
        email: email,
        telefone: telefone,
        password: password,
      });

      alert('Cadastro bem-sucedido!');
      navigation.navigate('Login');
    } catch (error) {
      // Cadastro falhou
      alert('Erro ao cadastrar. Por favor, tente novamente.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.text}>Cadastro</Text>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="E-mail"
          value={email}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Telefone"
          value={telefone}
          keyboardType="phone-pad"
          onChangeText={(text) => setTelefone(text)}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Confirme a Senha"
          value={confirmPassword}
          secureTextEntry
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <Button style={styles.button} mode="contained" onPress={handleCadastro}>
          Cadastrar
        </Button>
        <Button
          style={styles.btnRegister}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}>Já tem uma conta? Faça login</Text>
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#DCDCE6',
    justifyContent: 'center',
  },
  button: {
    width: 250,
    height: 40,
    marginTop: 10,
    backgroundColor: '#81007F',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 8,
    height: 50,
    width: 250,
  },
  btnRegister: {
    marginTop: 10,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
  },
  body: {
    marginTop: -30,
    width: 330,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 550,
    padding: 15,
  },
});

export default Cadastro;
