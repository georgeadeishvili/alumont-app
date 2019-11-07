import React from "react";
import { View, Text, Dimensions } from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import Note from "./Note";
import { LinearGradient } from "expo-linear-gradient";
const NotesScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: "#F6F9FA"
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <MaterialIcons
          size={40}
          color="#1B3554"
          name="arrow-back"
        ></MaterialIcons>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Notes</Text>
      </View>
      <View
        style={{
          backgroundColor: "#FFF",
          minHeight: 100,
          marginTop: 40,
          borderRadius: 10
        }}
      >
        {[1, 2, 3].map(item => {
          return <Note />;
        })}
      </View>

      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
      />

      <View
        style={{
          position: "absolute",
          right: 0,
          bottom: 30
        }}
      >
        <View
          style={{
            height: 70,
            backgroundColor: "#FFFFFF",
            width: Dimensions.get("window").width / 1.5,
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 15,
            paddingRight: 10,
            justifyContent: "space-between"
          }}
        >
          <Text style={{ color: "#8A94A6", fontSize: 21 }}>Shoot an image</Text>
          <Entypo color="#000" name="chevron-small-right" size={30} />
        </View>
        <View
          style={{
            backgroundColor: "#0D55CF",
            height: 70,
            width: Dimensions.get("window").width / 1.5,
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 15,
            paddingRight: 10,
            justifyContent: "space-between"
          }}
        >
          <Text style={{ color: "#8A94A6", fontSize: 21 }}>Shoot an image</Text>
        </View>
        <LinearGradient
          colors={["#7EFFD3", "#42CC9D"]}
          start={[1.0, 0.5]}
          end={[0.0, 0.5]}
          style={{
            height: 70,
            width: Dimensions.get("window").width / 1.5,
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15
          }}
        >
          <Text style={{ color: "#FFF", fontWeight: "500", fontSize: 17 }}>
            New Note
          </Text>
          <Entypo color="#FFF" name="plus" size={25} />
        </LinearGradient>
      </View>
    </View>
  );
};

export default NotesScreen;
