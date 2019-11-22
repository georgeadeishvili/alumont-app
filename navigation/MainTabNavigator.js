import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import GyroScope from "../screens/GyroScope";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import Auth from "../screens/Auth";
//import Login from "../screens/Auth/Login";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import NotesScreen from "../screens/NotesScreen";
import TaskScreen from "../screens/TaskScreen";
import editImage from "../screens/EditImage";

import Sketch from "../screens/Sketch";
import Login from "../screens/Authentication/LoginScreen";
import Registration from "../screens/Authentication/RegistrationScreen";
const config = Platform.select({
  web: { headerMode: "screen" },
  default: { headerMode: "none" }
});

const HomeStack = createStackNavigator(
  {
    TaskScreen,
    Login,
    Registration,
    Sketch,
    Home: HomeScreen,
    editImage,
    GyroScope,
    Notes: NotesScreen
  },
  config
);

HomeStack.path = "";

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: "Links",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

LinksStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

SettingsStack.path = "";

export default HomeStack;
