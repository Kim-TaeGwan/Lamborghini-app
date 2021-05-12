import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from '@emotion/native';
import Logo from '../assets/images/logo.png';
import Input from '../components/Input';

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

const TitleBox = styled.View`
  margin-bottom: 50px;
`;

const Title = styled.Text`
  text-align: center;
  margin-bottom: 10px;
  font: normal normal bold 35px/47px Open Sans;
  color: #bfbfbf;
`;
const Comment = styled.Text`
  font: normal normal normal 13px/18px Open Sans;
  text-align: center;
  color: #686868;
`;

const LoginButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background: #7b7b7b;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;
const LoginButtonText = styled.Text`
  font: normal normal 600 20px/27px Open Sans;
  color: #d9d9d9;
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
  const handleLogin = useCallback(() => {}, []);
  return (
    <LinearGradient
      colors={['#1C1A18', '#3D3C37']}
      style={styles.linearGradient}>
      <Container>
        <LogoImage source={Logo} />
        <TitleBox>
          <Title>Welcome</Title>
          <Comment>Sign in or create a free account to continue...</Comment>
        </TitleBox>
        <Input />
        <LoginButton onPress={handleLogin}>
          <LoginButtonText>Login</LoginButtonText>
        </LoginButton>
      </Container>
    </LinearGradient>
  );
};

export default Login;
