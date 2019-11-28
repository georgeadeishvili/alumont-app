import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import * as firebase from "firebase";
export default class Loading extends React.Component {
  // Your web app's Firebase configuration
  firebaseConfig = {
    apiKey: "AIzaSyBmphFkBkPlbR6z5FlvapR9jG9SaTLxjIY",
    authDomain: "alomunt-21fa2.firebaseapp.com",
    databaseURL: "https://alomunt-21fa2.firebaseio.com",
    projectId: "alomunt-21fa2",
    storageBucket: "alomunt-21fa2.appspot.com",
    messagingSenderId: "302668348101",
    appId: "1:302668348101:web:c66f77630697ba3a62ceac",
    measurementId: "G-1TN1005SGC"
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
    this.setState({ isAuthenticationReady: true, userId: user.uid });
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
