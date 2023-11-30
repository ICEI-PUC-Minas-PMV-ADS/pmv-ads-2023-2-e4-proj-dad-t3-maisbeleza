import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from '../Pages/Inicio';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import Home from '../Pages/Home';
import Index from '../Pages/Index';
import Agendamentos from '../Pages/Agendamentos';
import Agenda from '../Pages/Agenda';
import Meis from '../Pages/Meis';
import Perfil from '../Pages/Perfil';
import Servicos from '../Pages/Servicos';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Index"
        component={Index}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Meis"
        component={Meis}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Servicos"
        component={Servicos}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Agendamentos"
        component={Agendamentos}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Agenda"
        component={Agenda}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
