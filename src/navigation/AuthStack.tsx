import React from 'react';
import Login from '../screens/Login';
import {createStackNavigator} from '@react-navigation/stack';
import MainMenu from '../screens/MainMenu';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}} // 로그인 화면에서는 헤더가 렌더링 되지않도록함
      />
      <Stack.Screen
        name="MainMenu"
        component={MainMenu}
        options={{headerShown: false}} // 로그인 화면에서는 헤더가 렌더링 되지않도록함
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
