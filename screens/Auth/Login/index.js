//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import SvgUri from "expo-svg-uri";
import { WebView } from "react-native-webview";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  TextField,
  FilledTextField,
  OutlinedTextField
} from "react-native-material-textfield";
import BottomSheet from "reanimated-bottom-sheet";
// create a component
class Login extends Component {
  constructor(props) {
    super(props);
  }
  onSubmit = () => {
    let { current: field } = this.fieldRef;

    console.log(field.value());
  };

  formatText = text => {
    return text.replace(/[^+\d]/g, "");
  };

  bottomSheetRef = React.createRef();
  render() {
    return (
      <View style={styles.container2}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <SvgUri
            style={{ marginTop: 100 }}
            width={Dimensions.get("window").width / 3}
            height="250"
            source={require("./Logo.svg")}
            fillAll
          />

          <TouchableOpacity
            onPress={() => this.bottomSheetRef.current.snapTo(0)}
            style={{
              height: 50,
              backgroundColor: "#549AF4",
              width: 200,
              borderRadius: "5",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <MaterialCommunityIcons name="web" color="#FFF" size={25} />
            <Text style={{ paddingLeft: 10, color: "#FFF", fontWeight: "600" }}>
              Visit Our Website
            </Text>
          </TouchableOpacity>

          <View style={{ marginTop: 40 }}>
            <Text style={{ color: "#ABB4BD", fontSize: 19 }}>or</Text>
          </View>
        </View>

        <View style={{ flex: 1, paddingHorizontal: 30 }}>
          <TextField label="email" keyboardType="email-address" />

          <TextField label="password" secureTextEntry />
          <View
            style={{
              height: 60,
              borderRadius: 4,
              marginTop: 40,
              backgroundColor: "#D9DDE2",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 15 }}>Login</Text>
          </View>
        </View>
        <BottomSheet
          initialSnap={2}
          ref={this.bottomSheetRef}
          snapPoints={[450, 300, 0]}
          renderContent={() => (
            <View style={styles.panel}>
              <WebView
                originWhitelist={["*"]}
                source={{ uri: "https://www.alumont.com/" }}
                style={{ marginTop: 20 }}
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
  }
}
const IMAGE_SIZE = 200;
// define your styles
//make this component available to the app
export default Login;
const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "#F2F2F2"
  },
  container: {
    flex: 1,
    backgroundColor: "#2c2c2f"
  },
  box: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE
  },
  panelContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  panel: {
    height: 600,
    padding: 0,
    backgroundColor: "#F5f5f5",
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.4
  },
  header: {
    backgroundColor: "#f7f5eee8",
    shadowColor: "#000000",
    paddingTop: 20,
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
    backgroundColor: "#00000040",
    marginBottom: 10
  },
  panelTitle: {
    fontSize: 27,
    height: 35
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#292929",
    alignItems: "center",
    marginVertical: 10
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white"
  },
  photo: {
    width: "100%",
    height: 225,
    marginTop: 30
  },
  map: {
    height: "100%",
    width: "100%"
  }
});
