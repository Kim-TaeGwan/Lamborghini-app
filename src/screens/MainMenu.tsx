import React from 'react';
import {StyleSheet, View} from 'react-native';
import styled from '@emotion/native';

import Container from '../components/Container';
import logo from '../assets/images/logo.png';
import SearchIcon from '../assets/icons/SearchIcon';
import Layout from '../Layout';

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: '#000',
  },
});
const MenuHeader = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;
const LogoImage = styled.Image`
  width: 33px;
  height: 33px;
`;
const MenuContainer = styled.View`
  flex: 10;
  justify-content: center;
  align-items: center;
`;

const MenuText = styled.Text`
  color: #8f8a85;
  font-size: 24px;
  margin-bottom: 15px;
  text-decoration: #8f8a85 underline;
`;

const Icon = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 15px;
  border-color: #707070;
  border-style: solid;
  border-width: 1.5px;
  align-items: center;
  justify-content: center;
`;

const MainMenu = () => {
  return (
    <Layout backgroundColor="black">
      <Container originCenter style={styles.bgColor}>
        <MenuHeader>
          <View />
          <LogoImage source={logo} />
          <Icon>
            <SearchIcon />
          </Icon>
        </MenuHeader>
        <MenuContainer>
          <MenuText>Model</MenuText>
          <MenuText>News</MenuText>
          <MenuText>Museum</MenuText>
          <MenuText>My Car</MenuText>
        </MenuContainer>
      </Container>
    </Layout>
  );
};

export default MainMenu;
