import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from "react-native";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
import PendingSvg from "../../assets/images/PendingSvg";

const PendingScreen = () => (
  <View style={styles.mainWrapper}>
    <TouchableOpacity
      style={styles.goBack}
      onPress={() => props.navigation.goBack()}
    >
      <Feather name="x" size={32} color="#1D2029" />
    </TouchableOpacity>
    <PendingSvg />
    <View style={styles.container}>
      <Text style={{fontSize:20, fontWeight:'bold', lineHeight:50 }}>Ausstehend</Text>
      <Text style={{color: '#ABB4BD', textAlign: 'center'}}>Bitte warten Sie, bis die Administration Ihr Konto uberpruft hat. Der Antrag auf Verifizierung ist steht noch aus.</Text>
    </View>
    <View />
  </View>
);

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
  }
});

export default PendingScreen;
