import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Appbar, Menu } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, goBack }) => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const _openMenu = () => setMenuVisible(true);
  const _closeMenu = () => setMenuVisible(false);

  const _handleMore = () => {
    _openMenu();
  };

  const _handleOptionSelect = (option) => {
    _closeMenu();
    setSelectedOption(option);

    // Use navigation.navigate to switch screens based on the selected option
    if (option === 'Home') {
      navigation.navigate('Home');
    } else if (option === 'Meis') {
      navigation.navigate('Meis');
    } else if (option === 'Servicos') {
      navigation.navigate('Servicos');
    } else if (option === 'Agendamentos') {
      navigation.navigate('Agendamentos');
    } else if (option === 'Perfil') {
      navigation.navigate('Perfil');
    } else if (option === 'Sair') {
      navigation.navigate('Login');
    }
  };

  const getMenuStyle = (option) => {
    return {
      ...styles.menu,
      backgroundColor: option === selectedOption ? '#61206D' : '#81007F',
    };
  };

  return (
    <TouchableWithoutFeedback onPress={_closeMenu}>
      <View>
        <Appbar.Header style={styles.header}>
          {goBack && <Appbar.BackAction onPress={goBack} />}
          <Appbar.Content title={title} titleStyle={styles.headerTitle} />
          <Appbar.Action
            icon="bell"
            onPress={() => navigation.navigate('Perfil')}
            color="white"
          />
          <Appbar.Action icon="menu" onPress={_handleMore} color="white" />
        </Appbar.Header>

        <Menu
          visible={menuVisible}
          onDismiss={_closeMenu}
          anchor={
            <View style={{ zIndex: 1 }}>
              <Appbar.Action onPress={_handleMore} />
            </View>
          }>
          <Menu.Item
            style={getMenuStyle('Home')}
            onPress={() => _handleOptionSelect('Home')}
            title="Home"
            titleStyle={{ color: 'white' }}
          />
          <Menu.Item
            style={getMenuStyle('Meis')}
            onPress={() => _handleOptionSelect('Meis')}
            title="Profissionais"
            titleStyle={{ color: 'white' }}
          />
          <Menu.Item
            style={getMenuStyle('Servicos')}
            onPress={() => _handleOptionSelect('Servicos')}
            title="Serviços"
            titleStyle={{ color: 'white' }}
          />
          <Menu.Item
            style={getMenuStyle('Agendamentos')}
            onPress={() => _handleOptionSelect('Agendamentos')}
            title="Agenda"
            titleStyle={{ color: 'white' }}
          />
          <Menu.Item
            style={getMenuStyle('Perfil')}
            onPress={() => _handleOptionSelect('Perfil')}
            title="Perfil"
            titleStyle={{ color: 'white' }}
          />
          <Menu.Item
            style={getMenuStyle('Sair')}
            onPress={() => _handleOptionSelect('Sair')}
            title="Sair"
            titleStyle={{ color: 'white' }}
          />
        </Menu>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#81007F',
  },
    headerTitle: {
    color: 'white', // Defina a cor do texto do título aqui
  },
  menu: {
    backgroundColor: '#81007F',
  },
});

export default Header;
