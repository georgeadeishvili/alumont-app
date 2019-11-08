import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar
} from "react-native";
import WaveView from "./UnionIcon.js";
// import Svg from 'react-native-svg';
import SvgUri from "expo-svg-uri";
import { LinearGradient } from "expo-linear-gradient";
import Card from "./Card";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 50, backgroundColor: "#42CC9D" }}></View>
        <SvgUri
          style={{ marginTop: -100 }}
          fill="#42CC9D"
          width={Dimensions.get("window").width}
          height="450"
          source={require("./Union.svg")}
          fillAll
        />
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 30
          }}
        >
          <Card
            title="Notizen"
            des="Erstelle Notizen, Bilder, etc."
            icon="Notizen"
          />
          <View style={{ height: 30 }} />
          <Card
            icon="wink"
            title="Winklemesser"
            des="Klicke hier drauf um den Winklemesser
zu benutzen"
          />
        </View>
        <View style={{ height: 40 }}></View>
        <View style={{ padding: 30 }}>
          <Text style={{ color: "#4E5D78", fontSize: 18, fontWeight: "bold" }}>
            Auftrage
          </Text>

          <View
            style={{
              height: 100,
              flexDirection: "row",
              backgroundColor: "#FFF",
              borderRadius: 10,
              marginTop: 20
            }}
          >
            <View style={{ flex: 2, padding: 20 }}>
              <Text style={{ color: "#0A1F44", fontSize: 16 }}>
                #1234567890
              </Text>
              <Text style={{ color: "#B0B7C3", fontSize: 14, marginTop: 8 }}>
                St. Andrew’s #14, Frankfurt
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#FFBB37",
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10
              }}
            ></View>
          </View>

          <View
            style={{
              height: 100,
              flexDirection: "row",
              backgroundColor: "#FFF",
              borderRadius: 10,
              marginTop: 20
            }}
          >
            <View style={{ flex: 2, padding: 20 }}>
              <Text style={{ color: "#0A1F44", fontSize: 16 }}>
                #1234567890
              </Text>
              <Text style={{ color: "#B0B7C3", fontSize: 14, marginTop: 8 }}>
                St. Andrew’s #14, Frankfurt
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#FFBB37",
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10
              }}
            ></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2"
  }
});
