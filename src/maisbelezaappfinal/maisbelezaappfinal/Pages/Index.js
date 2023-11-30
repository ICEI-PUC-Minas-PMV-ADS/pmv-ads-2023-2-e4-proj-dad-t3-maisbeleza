import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';

import Home from './Home';
import Meis from './Meis';
import Servicos from './Servicos';
import Perfil from './Perfil';
import Agendamentos from './Agendamentos';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'home', title: 'Início', icon: 'home' },
    { key: 'meis', title: 'Profissionais', icon: 'smart-card-outline' },
    { key: 'servicos', title: 'Serviços', icon: 'hair-dryer' },
    { key: 'agenda', title: 'Agenda', icon: 'calendar' },
    { key: 'perfil', title: 'Perfil', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    meis: Meis,
    servicos: Servicos,
    agenda: Agendamentos,
    perfil: Perfil,
  });

  return (
    <BottomNavigation
      barStyle={{ backgroundColor: '#81007F' }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;
