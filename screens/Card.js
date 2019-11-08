import React from "react";
import { View, Image, Text } from "react-native";
const Card = props => {
  return (
    <View
      style={{
        height: 140,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        top: 130,
        padding: 20
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 40, height: 30 }}
          resizeMode={"contain"}
          source={
            props.icon == "Notizen"
              ? require("./SVG/Notizen.png")
              : require("./SVG/wink.png")
          }
        />
        <Text style={{ color: "#1B3554", fontSize: 17, fontWeight: "500" }}>
          {props.title}
        </Text>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Image
            style={{ width: 50, height: 60 }}
            resizeMode={"contain"}
            source={require("./SVG/back.png")}
          />
        </View>
      </View>

      <Text style={{ fontSize: 16, marginLeft: 8, marginTop: 8 }}>
        {props.des}
      </Text>
    </View>
  );
};

export default Card;
