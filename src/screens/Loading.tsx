import React from 'react';
import styled from '@emotion/native';
import logo from '../assets/images/logo.png';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const LogoImage = styled.Image`
  width: 159px;
  height: 159px;
`;
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
const Loading = () => {
  return (
    <LinearGradient
      colors={['#1c1a18', '#3d3c37']}
      style={styles.linearGradient}>
      <Container>
        <LogoImage source={logo} />
      </Container>
    </LinearGradient>
  );
};

export default Loading;
