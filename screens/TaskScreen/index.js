//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";

// create a component
class TaskScreens extends Component {
  state = {
    checked: false
  };

  Item = (title, value) => {
    return (
      <View
        style={{
          marginTop: 20,
          marginLeft: 40
        }}
      >
        <Text style={{}}>{title}</Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E1E4E8",
            height: 40,
            minWidth: 60,
            borderRadius: 5,
            backgroundColor: "#FFF",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: 10,
            marginTop: 4,
            paddingRight: 30
          }}
        >
          <Text>{value}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          <View
            style={{
              height: 70,
              flexDirection: "row",
              marginTop: 50,
              paddingHorizontal: 20
            }}
          >
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={{ color: "#0A1F44", fontSize: 20 }}>#123456789</Text>
              <Text style={{ color: "#B0B7C3" }}>
                St. Andrew’s #14, Frankfurt
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                paddingRight: 15,
                justifyContent: "center"
              }}
            >
              <AntDesign name="arrowleft" size={50} color="#000" />
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBox
              onPress={() => this.setState({ checked: !this.state.checked })}
              value={true}
              disabled={false}
              checked={this.state.checked}
            />
            <Text
              style={{
                color: "#0A1F44",
                fontWeight: "600",
                fontSize: 15
              }}
            >
              Reclamation
            </Text>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {this.Item("Piece", 1)}
            {this.Item("Prod. time", 3.82)}
            {this.Item("Prod. #", 13266)}
            {this.Item("Receipt Dat", "28.08.2019")}
            {this.Item("Target Coating", "13.09.2019")}
            {this.Item("Delivery Date", "18.09.2019")}
            {this.Item("Dispatched On", "Text here")}
            {this.Item("Term", "Text here")}
            {this.Item("Status", "Text here")}
            {this.Item("From the Production", "Text here")}
            {this.Item("Ready for Shipment", "Text here")}
            {this.Item("Assembly in h (Target)", "0.00")}
            {this.Item("Assembly Number", "0.00")}
            {this.Item("Assembly Start", "01.0202.2019")}
            {this.Item("Due Date", "01.0202.2019")}
            {this.Item("Assembly End", "05.03.2019")}
            {this.Item("Assembly in h (Result)", "0.00")}
            {this.Item("Installer Deployment", "Text here")}
          </View>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f9fa"
  }
});

//make this component available to the app
export default TaskScreens;
