import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { Players } from '@screens/Players';
import { ThemeProvider } from 'styled-components';

import { ActivityIndicator, StatusBar } from 'react-native';
import theme from './src/theme';

export default function App(): React.JSX.Element {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Players /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
