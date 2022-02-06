import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Platform
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { TextField } from "react-native-material-textfield";
import { Ionicons } from "@expo/vector-icons";
import SvgUri from "expo-svg-uri";

import * as firebase from "firebase";
const { width, height } = Dimensions.get("window");

const RegistrationScreen = props => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState('')
  const [customerId, setCustomerId] = useState('')
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  function Reg() {
    if (password == password1) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          () => {
            const user = firebase.auth().currentUser
            user.updateProfile({ displayName: customerId }).then(() => {
              firebase
              .database()
              .ref(customerId)
              .set({
                customerId,
                name,
                email,
                verification: false
              })
              firebase.auth().signOut()
              props.navigation.navigate("Login");
            })
          },
          error => {
            alert(error.message);
          }
        );
    } else {
      alert("Passwords do not match");
    }
  }

  return (

			<KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={styles.mainWrapper}>
				<TouchableOpacity style={styles.goBack} onPress={() => props.navigation.goBack()}>
					<Ionicons name='ios-arrow-back' size={32} color='#1D2029' />
				</TouchableOpacity>
				<View style={styles.headerStyle}>
					<Text style={styles.headerText}>Registrieren</Text>
				</View>
				<View style={styles.inputWrapper}>
					<TextField label='Name' onChangeText={(nm) => setName(nm)} />
					<TextField label='KundenNr' onChangeText={(ci) => setCustomerId(ci)} />
					<TextField onChangeText={(ml) => setEmail(ml)} label='E-mail' keyboardType='email-address' />
					<TextField onChangeText={(Pass) => setPassword(Pass)} label='Passwort' secureTextEntry />
					<TextField
						onChangeText={(Pass) => setPassword1(Pass)}
						label='Passwort bestätigen'
						secureTextEntry
					/>
				</View>
				<TouchableOpacity onPress={() => Reg()} style={styles.RegButton}>
					<Text style={{ color: '#FFF' }}>Registrieren</Text>
				</TouchableOpacity>
			</KeyboardAwareScrollView>
  )
};

const styles = StyleSheet.create({
  mainWrapper: {
    width,
    height,
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "space-around"
  },
  goBack: {
    width: "84%"
  },
  headerStyle: {
    width: "84%",
    marginBottom: 20
  },
  headerText: {
    fontSize: 24,
    color: "#1D2029",
    fontWeight: "bold"
  },
  inputWrapper: {
    height: "50%",
    width: "84%"
  },
  RegButton: {
    width: "84%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#006F3D",
    height: 40,
    borderRadius: 4,
    marginBottom: 50
  }
});

export default RegistrationScreen;
