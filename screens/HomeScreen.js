import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
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
import { Octicons } from "@expo/vector-icons";
// import Svg from 'react-native-svg';
import SvgUri from "expo-svg-uri";
import { LinearGradient } from "expo-linear-gradient";
import Card from "./Card";
import * as firebase from "firebase";
export default function HomeScreen(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://138.68.100.225/taskdata")
      .then(res => res.json())
      .then(res => {
        setTasks(res);
      });
  }, []);

  function generateColor() {
    let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
    return color;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#42CC9D", "#006F3D"]}
        start={[0.45, 0.6]}
        end={[0.65, 0.98]}
        style={{
          height: Dimensions.get("window").height * 1.055,
          width: Dimensions.get("window").width * 2.344,
          position: "absolute",
          bottom: Dimensions.get("window").height * 0.65,
          right: Dimensions.get("window").width * -0.162 * 2.344,
          borderRadius: Dimensions.get("window").height * 0.527
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 400 }}></View>

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
            onPress={() => {
              props.navigation.navigate("Notes", {
                userId: props.navigation.state.params.userId
              });
            }}
            title="Notizen"
            des="Erstelle Notizen, Bilder, etc."
            icon="Notizen"
          />
          <View style={{ height: 30 }} />
          <Card
            onPress={() => {
              props.navigation.navigate("GyroScope");
            }}
            icon="wink"
            title="Winkelmesser"
            des="Klicke hier drauf um den Winkelmesser
zu benutzen"
          />

          <View style={{ height: 30 }} />
        </View>
        <View style={{ height: 40 }} />

        <View style={{ padding: 30 }}>
          <TouchableOpacity
            onPress={() => {
              firebase.auth().signOut();
              props.navigation.navigate("Login");
            }}
            style={{
              height: 40,
              backgroundColor: "#FFFFFF",
              borderRadius: 8,
              paddingLeft: 20,
              paddingRight: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                marginLeft: 8,
                fontWeight: "bold"
              }}
            >
              Ausloggen
            </Text>
            <Octicons name="sign-out" size={20} color="grey" />
          </TouchableOpacity>
          {/* <Text style={{ color: "#4E5D78", fontSize: 18, fontWeight: "bold" }}>
            Auftrage
          </Text> */}

          {tasks.map((task, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.push("TaskScreen", { task: task })
                }
                style={{
                  height: 100,
                  flexDirection: "row",
                  backgroundColor: "#FFF",
                  borderRadius: 10,
                  marginTop: 20
                }}
                key={index}
              >
                <View style={{ flex: 2, padding: 20 }}>
                  <Text style={{ color: "#0A1F44", fontSize: 16 }}>
                    #{task.id}
                  </Text>
                  <Text
                    style={{ color: "#B0B7C3", fontSize: 14, marginTop: 8 }}
                  >
                    St. Andrew’s #14, Frankfurt
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: `${generateColor()}`,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10
                  }}
                ></View>
              </TouchableOpacity>
            );
          })}
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
