
import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider, createTheme } from '@rneui/themed';
import 'expo-system-ui';
import AppNavigator from './src/navigation/AppNavigator';
import { lightTheme, darkTheme } from './src/constants/theme';

const App = () => {
  const colorScheme = useColorScheme();

  const theme = createTheme({
    lightColors: {
      background: lightTheme.background,
      primary: lightTheme.primary,
      text: lightTheme.text,
    },
    darkColors: {
      background: darkTheme.background,
      primary: darkTheme.primary,
      text: darkTheme.text,
    },
    mode: colorScheme,
  });

  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
