import React from 'react';
import styled from '@emotion/native';
import logo from '../assets/images/logo.png';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import {theme} from '../theme';
import Swiper from 'react-native-swiper';

const Container = styled.View`
  //flex: 1;
  //align-items: center;
  //justify-content: center;
  position: absolute;
  align-self: center;
  top: 40%;
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
    <>
      <Swiper
        horizontal={false}
        autoplay
        autoplayTimeout={0.3}
        autoplayDirection
        dotColor="rgba(0,0,0,.0)"
        activeDotColor="rgba(0,0,0,.0)">
        <LinearGradient
          colors={[theme.loadingBackground_1, theme.loadingBackground_1]}
          style={styles.linearGradient}
        />
        <LinearGradient
          colors={[theme.loadingBackground_2, theme.loadingBackground_2]}
          style={styles.linearGradient}
        />
        <LinearGradient
          colors={[theme.loadingBackground_3, theme.loadingBackground_3]}
          style={styles.linearGradient}
        />
      </Swiper>
      <Container>
        <LogoImage source={logo} />
      </Container>
    </>
  );
};

export default Loading;
