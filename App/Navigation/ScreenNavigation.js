import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import LoginScreen from '../Screens/AuthenticationScreen/LoginScreen';
import DetailScreen from '../Screens/DetailScreen';

const Stack = createNativeStackNavigator();

const ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={BottomTabNavigation}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Detail"
          options={{headerShown: false}}
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenNavigation;
