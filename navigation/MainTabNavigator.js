import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import GyroScope from "../screens/GyroScope";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
// import Auth from "../screens/Auth";
//import Login from "../screens/Auth/Login";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import NotesScreen from "../screens/NotesScreen";
import TaskScreen from "../screens/TaskScreen";
import editImage from "../screens/EditImage";
import ShotImage from "../screens/EditImage/Camera";
import ViewPhoto from "../screens/ViewPhoto";

import Sketch from "../screens/Sketch";
import Login from "../screens/Authentication/LoginScreen";
import Auth from "../screens/Authentication";
import Registration from "../screens/Authentication/RegistrationScreen";
import Reset from "../screens/Authentication/ResetPassword";
import VerifyEmail from "../screens/Authentication/VerifyEmail";
import Pending from "../screens/Captions/PendingScreen";
import Sent from "../screens/Captions/SentScreen";
import Check from "../screens/Captions/CheckScreen";
import Save from "../screens/Captions/SaveScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: { headerMode: "none" }
});

const HomeStack = createStackNavigator(
  {
    Auth,
    Save,
    Sent,
    ViewPhoto,
    Notes: NotesScreen,
    Sketch,
    Home: HomeScreen,
    TaskScreen,
    ShotImage,
    editImage,
    Check,
    Pending,
    Reset,
    VerifyEmail,
    Login,
    Registration,
    GyroScope
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
