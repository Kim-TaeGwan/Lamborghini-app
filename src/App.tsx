import React from 'react';
import {StatusBar} from 'react-native';
import {theme} from './theme';
import {ThemeProvider} from '@emotion/react';
import Navigation from './navigation';
import styled from '@emotion/native';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
