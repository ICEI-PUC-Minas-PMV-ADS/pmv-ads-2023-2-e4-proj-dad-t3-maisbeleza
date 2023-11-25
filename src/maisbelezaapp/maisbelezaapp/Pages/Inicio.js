import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

const Inicio = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.text}> {'Seja bem-vindo(a)'}!</Text>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}> {'Entrar'}</Text>
          </Button>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.buttonText}> {'Cadastrar'}</Text>
          </Button>
        </View>
        <Image style={styles.logo} source={require('../assets/login.png')} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cab1cb',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  body: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 80, // Ajuste conforme necessário
  },
  logo: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    backgroundColor: '#cab1cb',
  },
  text: {
    margin: 34,
    fontSize: 20,
    marginTop: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    margin: 8,
    width: 250,
    borderRadius: 5,
    backgroundColor: '#81007F',
  },
});

export default Inicio;
