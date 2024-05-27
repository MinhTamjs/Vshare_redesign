import { View, Text, Dimensions } from "react-native";
import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotificationScreen from "../Screens/NotificationScreen";
import HomeScreen from "../Screens/HomeScreen";
import UserScreen from "../Screens/UserScreen";
import TestScreen from "../Screens/TestScreen";


export default function BottomTabNavigation() {
  const screenWidth = Dimensions.get("window").width;
  const tabBarWidth = 300; // Chiều rộng của thanh tab
  const tabBarMarginHorizontal = (screenWidth - tabBarWidth) / 2;

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: "#F9BC19",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: 62,
          width: tabBarWidth,
          bottom: 17,
          left: tabBarMarginHorizontal,
          right: tabBarMarginHorizontal,
          borderRadius: 50,
          backgroundColor: "#0A8065",
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 17,
          marginBottom: 5, // Giảm khoảng cách giữa icon và text
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Thông báo",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="UserTab"
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Tôi",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="TestTab"
        component={TestScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Test",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
