import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import LoginScreen from '../Screens/AuthenticationScreen/LoginScreen';
import DetailScreen from '../Screens/DetailScreen';
import SignUpScreen from '../Screens/AuthenticationScreen/SignUpScreen';
import CheckoutScreen from '../Screens/CheckoutScreen';
import AddNewCardScreen from '../Screens/AddNewCardScreen';

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
        <Stack.Screen
          name="Signup"
          options={{headerShown: false}}
          component={SignUpScreen}
        />
        <Stack.Screen
          name="Checkout"
          options={{headerShown: false}}
          component={CheckoutScreen}
        />
        <Stack.Screen
          name="Add_New_Card"
          options={{headerShown: false}}
          component={AddNewCardScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenNavigation;
