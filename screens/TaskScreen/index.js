//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import { TouchableOpacity } from "react-native";

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
    const {
      id,
      address,
      piece,
      ProdTime,
      Prod,
      receiptDate,
      TargetCoating,
      DeliveryDate,
      DispatchedOn,
      Term,
      Status,
      FromProdiction,
      readyForShipment,
      AssamblyInH,
      AssamblyInNum,
      AssamblyStart,
      DueDate,
      AssamblyEnd,
      AssamblyInHResult,
      installerDeplyment
    } = this.props.navigation.state.params.task;
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
              <Text style={{ color: "#0A1F44", fontSize: 20 }}>#{id}</Text>
              <Text style={{ color: "#B0B7C3" }}>{address}</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.pop()}
              style={{
                flex: 1,
                alignItems: "flex-end",
                paddingRight: 15,
                justifyContent: "center"
              }}
            >
              <AntDesign name="arrowleft" size={40} color="#000" />
            </TouchableOpacity>
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
            {this.Item("Piece", piece)}
            {this.Item("Prod. time", ProdTime)}
            {this.Item("Prod. #", Prod)}
            {this.Item("Receipt Dat", receiptDate)}
            {this.Item("Target Coating", TargetCoating)}
            {this.Item("Delivery Date", DeliveryDate)}
            {this.Item("Dispatched On", DispatchedOn)}
            {this.Item("Term", Term)}
            {this.Item("Status", Status)}
            {this.Item("From the Production", FromProdiction)}
            {this.Item("Ready for Shipment", readyForShipment)}
            {this.Item("Assembly in h (Target)", AssamblyInH)}
            {this.Item("Assembly Number", AssamblyInNum)}
            {this.Item("Assembly Start", AssamblyStart)}
            {this.Item("Due Date", DueDate)}
            {this.Item("Assembly End", AssamblyEnd)}
            {this.Item("Assembly in h (Result)", AssamblyInHResult)}
            {this.Item("Installer Deployment", installerDeplyment)}
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
