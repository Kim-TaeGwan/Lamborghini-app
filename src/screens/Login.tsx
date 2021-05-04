import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from '@emotion/native';
import {StyleSheet, View} from 'react-native';
import Logo from '../assets/images/logo.png';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.Image`
  width: 111px;
  height: 111px;
  margin-bottom: 23px;
`;

const Title = styled.Text`
  text-align: center;
  margin-bottom: 10px;
  color: #bfbfbf;
  font-size: 35px;
  font-weight: bold;
  font-family: OpenSans-Bold;
`;
const Comment = styled.Text`
  color: #686868;
  font-size: 13px;
  text-align: center;
  font-family: OpenSans-Regular;
`;
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
const Login = () => {
  return (
    <LinearGradient
      colors={['#1C1A18', '#3D3C37']}
      style={styles.linearGradient}>
      <Container>
        <LogoImage source={Logo} />
        <View>
          <Title>Welcome</Title>
          <Comment>Sign in or create a free account to continue...</Comment>
        </View>
      </Container>
    </LinearGradient>
  );
};

export default Login;
