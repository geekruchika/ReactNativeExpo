import React from "react";
import { View, Text } from "react-native";
import HomeScreen from "../home/index";
import LoginScreen from "../login/index";

import { createStackNavigator } from "react-navigation";

const RootStack = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen }
  },
  // { headerMode: "none" },
  { initialRouteName: "Login" }
);

export default class Navigator extends React.Component {
  render() {
    return <RootStack />;
  }
}
