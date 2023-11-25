import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from '../Pages/Inicio';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';

const Stack = createNativeStackNavigator();

export default function Main() {
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
    </Stack.Navigator>
  );
}
