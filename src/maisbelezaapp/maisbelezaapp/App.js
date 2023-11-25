import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import Main from './navigations/Main';


const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#81007F',
    background: '#DCDCE6',
  },
  };

export default function App() {
  return (
    <PaperProvider theme={customTheme}>
      <NavigationContainer>
        <Main/>
      </NavigationContainer>
    </PaperProvider>
  );
}
