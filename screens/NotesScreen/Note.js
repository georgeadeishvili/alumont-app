import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Note = props => {
  return (
    <View style={{ height: 108, flexDirection: "row", paddingHorizontal: 12 }}>
      <TouchableOpacity
        onPress={() => props.onNotePress()}
        style={{ width: 80, justifyContent: "center" }}
      >
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: "#007FFF"
          }}
        ></View>
      </TouchableOpacity>
      <View style={{ flex: 1, paddingBottom: 8 }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <TouchableOpacity
            onPress={() => props.onNotePress()}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Sketch #{props.index + 1}
            </Text>
            {/* <Text>#21513215135</Text> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onRemove()}
            style={{ width: 30, justifyContent: "center" }}
          >
            <Ionicons name="md-trash" color="#1B3554" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{ height: 2, backgroundColor: "#F1F2F4", marginBottom: 8 }}
        ></View>
      </View>
    </View>
  );
};

export default Note;
