import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Platform
} from "react-native";
import { Feather } from "@expo/vector-icons";
import EmailSent from "./email-opened";

const { width, height } = Dimensions.get("window");

const SentScreen = (props) => (
    <View style={styles.mainWrapper}>
        <TouchableOpacity
            style={styles.goBack}
            onPress={() => props.navigation.goBack()}
        >
            <Feather name="x" size={32} color="#1D2029" />
        </TouchableOpacity>
        <EmailSent />
        <View style={styles.container}>
            <Text style={{fontSize:20, fontWeight:'bold', lineHeight:50 }}>E-Mail wurde gesendet</Text>
            <Text style={{color: '#ABB4BD', textAlign: 'center'}}>Die Datei wurde an folgende E-Mail gesendet app@alumont.com</Text>
        </View>
        <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('Notes')}
        >
            <Text style={{color: '#FFF'}}>Zurück zur Startseite</Text>
        </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  mainWrapper: {
    width,
    height,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  goBack: {
    width: "84%",
    alignItems: "flex-end"
  },
  headerStyle: {
    width: "84%",
    marginBottom: 20
  },
  container: {
    width: "84%",
    alignItems: "center"
  },
  button: {
    width: width * 0.84,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#006F3D",
    height: 40,
    borderRadius: 4
  }
});

export default SentScreen;
