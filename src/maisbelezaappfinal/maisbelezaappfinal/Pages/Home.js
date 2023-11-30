import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import { Text, Button } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/container';

import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const BannerHome = () => {
  const banners = [
    require('../assets/1.jpeg'),
    require('../assets/2.jpeg'),
    require('../assets/3.jpeg'),
    require('../assets/4.jpeg'),
  ];

  const legends = [
    'FAÇA SEUS AGENDAMENTOS',
    'GERENCIE AGENDAMENTOS',
    'ENCONTRE PROFISSIONAIS',
    'BUSQUE SERVIÇOS',
  ];

  const logo = require('../assets/Logo_nobg2.png');

  const navigation = useNavigation();

  return (
    <Container>
      <Header title={'Início'} />
      <View style={styles.bannerContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.textoBanner}>Mais Beleza</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Button
          style={styles.button}
          icon="check"
          mode="contained"
          onPress={() => navigation.navigate('Agenda')}>
          Agendar
        </Button>
      </View>
      {banners.map((banner, index) => (
        <ImageBackground
          key={index}
          style={styles.backgroundImage}
          source={banner}>
          <View style={styles.overlay}>
            <Text style={styles.legendText}>{legends[index]}</Text>
          </View>
        </ImageBackground>
      ))}
    </Container>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: screenWidth, // Largura igual à largura da tela
    height: screenHeight / 6, // Altura igual a 1/6 da altura da tela
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(128, 0, 128, 0.7)', // Cor de fundo roxo translúcido
    padding: 10,
  },
  legendText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textoBanner: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 5,
    textAlign: 'center',
    color: '#81007F',
    fontStyle: 'italic',
  },
  bannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 5,
    backgroundColor: '#81007F',
    padding: 0,
    borderRadius: 50,
  },
  logo: {
    width: 50, // Largura do logotipo
    height: 50, // Altura do logotipo
    resizeMode: 'contain', // Redimensionar o logotipo para caber no contêiner
  },
});

export default BannerHome;
