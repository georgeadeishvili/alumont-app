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
          size={50}
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

      <LinearGradient
        colors={["#7EFFD3", "#42CC9D"]}
        start={[1.0, 0.5]}
        end={[0.0, 0.5]}
        style={{
          height: 70,
          width: Dimensions.get("window").width / 1.5,
          position: "absolute",
          right: 0,
          bottom: 30,
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
  );
};

export default NotesScreen;
