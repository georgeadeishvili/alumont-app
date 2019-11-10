import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Note = props => {
  return (
    <TouchableOpacity
      onPress={() => props.onNotePress()}
      style={{ height: 108, flexDirection: "row", paddingHorizontal: 12 }}
    >
      <View style={{ width: 80, justifyContent: "center" }}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: "#007FFF"
          }}
        ></View>
      </View>
      <View style={{ flex: 1, paddingBottom: 8 }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>Sketch #1</Text>
            <Text>#21513215135</Text>
          </View>
          <View style={{ width: 30, justifyContent: "center" }}>
            <Ionicons name="md-trash" color="#1B3554" size={30} />
          </View>
        </View>
        <View
          style={{ height: 2, backgroundColor: "#F1F2F4", marginBottom: 8 }}
        ></View>
      </View>
    </TouchableOpacity>
  );
};

export default Note;
