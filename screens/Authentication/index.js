import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import * as firebase from "firebase";
export default class Loading extends React.Component {
  // Your web app's Firebase configuration
  firebaseConfig = {
    apiKey: "AIzaSyCTHFz-V_S8nsev6X1aUmY2ywtH87ZDg9I",
    authDomain: "alumont-app.firebaseapp.com",
    databaseURL: "https://alumont-app.firebaseio.com",
    projectId: "alumont-app",
    storageBucket: "alumont-app.appspot.com",
    messagingSenderId: "533485131363",
    appId: "1:533485131363:web:29aa1f81c9800930ff4a56",
  };
  // Initialize Firebase
  constructor(props) {
    super(props);
    this.state = {
      userId: null
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(this.firebaseConfig);
    }

    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = user => {
    this.setState({ isAuthenticationReady: true });
    this.setState({ isAuthenticated: !!user });
    if (user) {
      this.props.navigation.navigate("Home", { userId: user.uid });
    } else {
      this.props.navigation.navigate("Login");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
