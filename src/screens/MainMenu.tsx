import React from 'react';
import {StyleSheet} from 'react-native';
import styled from '@emotion/native';

import Container from '../components/Container';

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: '#000',
  },
});

const MenuText = styled.Text`
  color: #8f8a85;
  //font: italic normal 300 24px/29px Myriad Pro;
`;

const MainMenu = () => {
  return (
    <Container center style={styles.bgColor}>
      <MenuText>Modal</MenuText>
      <MenuText>News</MenuText>
      <MenuText>Museum</MenuText>
      <MenuText>My Car</MenuText>
    </Container>
  );
};

export default MainMenu;
