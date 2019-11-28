import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from "react-native";
import { Feather } from "@expo/vector-icons";
import EmailSent from './email-sent'

const { width, height } = Dimensions.get("window");

const CheckScreen = (props) => (
    <View style={styles.mainWrapper}>
        <TouchableOpacity
            style={styles.goBack}
            onPress={() => props.navigation.goBack()}
        >
            <Feather name="x" size={32} color="#1D2029" />
        </TouchableOpacity>
        <EmailSent />
        <View style={styles.container}>
            <Text style={{fontSize:20, fontWeight:'bold', lineHeight:50 }}>Überprüfen Sie Ihre E-Mail</Text>
            <Text style={{color: '#ABB4BD', textAlign: 'center'}}>Wir haben einen Link an deine E-Mail adresse gesendet mit der Sie Ihr Passwort zurucksetzen konnen</Text>
        </View>
        <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('Home')}
        >
            <Text style={{color: '#FFF'}}>Zur Mail gehen</Text>
        </TouchableOpacity>
    </View>
)

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
    alignItems: 'center'
  },
  button: {
    width: width * 0.84,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#006F3D",
    height: 40,
    borderRadius: 4
  },
});

export default CheckScreen;