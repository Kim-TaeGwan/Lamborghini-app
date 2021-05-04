import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {theme} from './theme';
import {ThemeProvider} from '@emotion/react';
import Loading from './screens/Loading';

const App = () => {
  // const [isLoading, setIsLoading] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Loading />
    </ThemeProvider>
  );
};

export default App;
