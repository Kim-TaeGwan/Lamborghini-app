import React from 'react';
import {StatusBar} from 'react-native';
import {theme} from './theme';
import {ThemeProvider} from '@emotion/react';
import Navigation from './navigation';
import Loading from './screens/Loading';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Loading />
    </ThemeProvider>
  );
};

export default App;
