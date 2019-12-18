import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Platform,
  Image
} from "react-native";
import { Input } from "../../components/Input";
import SvgUri from "expo-svg-uri";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  TextField,
  FilledTextField,
  OutlinedTextField
} from "react-native-material-textfield";
import { WebView } from "react-native-webview";
import BottomSheet from "reanimated-bottom-sheet";
import * as firebase from "firebase";

const { width, height } = Dimensions.get("window");

const LoginScreen = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Login() {
    // alert(email);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        () => {
          props.navigation.navigate("home");
        },
        error => {
          alert(error.message);
        }
      );
  }
  const bottomSheetRef = useRef();
  return (
    <View style={styles.mainWrapper}>
      {
        (Platform.OS == 'android') ? (
          <Image
            source={require('./Logo.png')}
            resizeMode={'contain'}
            style={{width: width * 0.613, marginTop: 100}}
          />
        ) : (
          <SvgUri
            style={{ marginTop: 100 }}
            width={width * 0.613}
            source={require("../../assets/images/Logo.svg")}
          />
        )
      }
      <TouchableOpacity
        style={styles.visitWebStyle}
        onPress={() => bottomSheetRef.current.snapTo(0)}
      >
        <MaterialCommunityIcons name="web" size={20} color="#FFF" />
        <Text style={styles.visitWebText}>Zu unserer Homepage</Text>
      </TouchableOpacity>
      <Text style={{ color: "#ABB4BD" }}>oder</Text>
      <View style={styles.inputWrapper}>
        <TextField
          onChangeText={text => setEmail(text)}
          value={email}
          label="E-Mail oder Kundennu"
          keyboardType="email-address"
        />
        <TextField
          onChangeText={pass => setPassword(pass)}
          value={password}
          label="Passwort"
          secureTextEntry
        />
        <TouchableOpacity
          onPress={() => props.navigation.navigate("VerifyEmail")}
        >
          <Text style={{ color: "#006F3D" }}>Passwort vergessen?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          Login();
        }}
        style={styles.loginButton}
      >
        <Text style={{ color: "#FFF" }}>Anmeldung</Text>
      </TouchableOpacity>
      <View style={styles.registerWrapper}>
        <Text style={{ color: "#ABB4BD" }}>Hier geht’s zur </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Registration")}
        >
          <Text style={{ color: "#006F3D" }}>Registrierung</Text>
        </TouchableOpacity>
      </View>
      <BottomSheet
        initialSnap={2}
        ref={bottomSheetRef}
        snapPoints={["80%", 0, 0]}
        renderContent={() => (
          <View style={styles.panel}>
            <WebView
              originWhitelist={["*"]}
              source={{ uri: "https://www.alumont.com/" }}
              style={{
                marginTop: 0,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
              }}
            />
          </View>
        )}
        renderHeader={() => (
          <View style={styles.header}>
            <View style={styles.panelHeader}>
              <View style={styles.panelHandle} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    width,
    height,
    flex: 1,
    // paddingTop: 30,
    alignItems: "center",
    justifyContent: "space-around"
  },
  visitWebStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.6,
    height: 40,
    backgroundColor: "#0F6734",
    borderRadius: 4
  },
  visitWebText: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 10
  },
  inputWrapper: {
    width: width * 0.84,
    height: height * 0.2,
    justifyContent: "space-around"
  },
  loginButton: {
    width: width * 0.84,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#006F3D",
    height: 40,
    borderRadius: 4
  },
  registerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50
  },
  panel: {
    height: height * 0.8,
    padding: 0,
    backgroundColor: "#F5f5f5",
    // paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
    // shadowColor: "#000000",
    // shadowOffset: { width: 0, height: 0 },
    // shadowRadius: 5,
    // shadowOpacity: 0.4
  },
  header: {
    backgroundColor: "#ffffff02",
    shadowColor: "#000000",
    // paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  panelHeader: {
    alignItems: "center"
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#000000",
    marginBottom: 10
  }
});

export default LoginScreen;
