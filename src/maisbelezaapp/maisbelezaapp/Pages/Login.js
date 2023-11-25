import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://localhost:7075/api/clientes/authenticate',
        {
          email: email,
          password: password,
        }
      );

      const authToken = response.data.jwt;

      await AsyncStorage.setItem('authToken', authToken);
      console.log('Token:', authToken);
      
      // Requisição para obter informações do usuário após login bem-sucedido
      await axios.get("https://localhost:7075/api/clientes/profile", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        }
      }).then(userResponse => {
        const userData = userResponse.data;
        console.log("Informações do usuário logado:", userData);
        navigation.navigate('Profile', { userData });
      }).catch(error => {
        console.error("Erro ao obter informações do usuário:", error);
        // Caso ocorra um erro na obtenção das informações do usuário, você pode tratar aqui
      });
      
      alert('Login bem-sucedido!');
      navigation.navigate('Home');
    } catch (error) {
      alert('Email ou senha incorretos.');
      console.error(error);
    }
  };


  return (
    <>
    
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.text}>Login</Text>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="E-mail"
            value={email}
            keyboardType={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Senha"
            value={password}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            view
            style={styles.button}
            mode="contained"
            onPress={handleLogin}>
            Entrar
          </Button>
          <Button
            view
            style={styles.btnRegister}
            onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.btnText}>{'Ainda não tem uma conta?'}</Text>
          </Button>
        </View>
      </View>
    </>
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
    backgroundColor: '#DCDCE6',
  },
  btnRegister: {
    marginTop: 10,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
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
    height: 350,
    padding: 15,
  },
});

export default Login;
