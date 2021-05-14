import React from 'react';
import {StyleSheet} from 'react-native';
import styled from '@emotion/native';

import Container from '../components/Container';
import logo from '../assets/images/logo.png';
import SearchIcon from '../assets/icons/SearchIcon';

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: '#000',
  },
});
const MenuHeader = styled.View`
  flex: 1;
  justify-content: center;
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

const MainMenu = () => {
  return (
    <Container originCenter style={styles.bgColor}>
      <MenuHeader>
        <LogoImage source={logo} />
        <SearchIcon />
      </MenuHeader>
      <MenuContainer>
        <MenuText>Model</MenuText>
        <MenuText>News</MenuText>
        <MenuText>Museum</MenuText>
        <MenuText>My Car</MenuText>
      </MenuContainer>
    </Container>
  );
};

export default MainMenu;
