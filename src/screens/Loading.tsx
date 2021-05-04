import React from 'react';
import styled from '@emotion/native';
import logo from '../assets/images/logo.png';

const Container = styled.View`
  background-color: ${({theme}: any) => theme.loadingBackground};
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const LogoImage = styled.Image`
  width: 159px;
  height: 159px;
`;
const Loading = () => {
  return (
    <Container>
      <LogoImage source={logo} />
    </Container>
  );
};

export default Loading;
