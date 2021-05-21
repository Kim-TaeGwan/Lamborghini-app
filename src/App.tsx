import React, {useLayoutEffect, useState} from 'react';
import {theme} from './theme';
import {ThemeProvider} from '@emotion/react';
import Navigation from './navigation';
import Loading from './screens/Loading';

const App = () => {
  const [isReady, setIsReady] = useState(false);
  useLayoutEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {isReady ? <Navigation /> : <Loading />}
    </ThemeProvider>
  );
};

export default App;
