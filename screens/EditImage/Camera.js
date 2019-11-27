import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { Feather, Ionicons } from "@expo/vector-icons";

export default class CameraExample extends React.Component {
  state = {
    imageUri: "",
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }
  async takePicture() {
    const { uri } = await this.camera.takePictureAsync();
    this.setState({ imageUri: uri });
    this.props.navigation.push("editImage", { uri });
  }
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            ref={ref => {
              this.camera = ref;
            }}
            zoom={0.0}
            style={{ flex: 1 }}
            type={this.state.type}
          >
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "#568",
                  borderRadius: 30,
                  marginTop: 80,
                  marginLeft: 40,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={() => this.props.navigation.goBack()}
              >
                <Ionicons name="md-arrow-round-back" size={30} color="#FFF" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row",
                alignItems: "flex-end",
                padding: 10,
                justifyContent: "center",

                flex: 0.5,
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{ marginBotto: 10 }}
                onPress={() => {
                  this.takePicture();
                }}
              >
                <View
                  style={{
                    borderRadius: 40,
                    width: 80,
                    height: 80,
                    borderWidth: 3,
                    borderColor: "#FFF",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Feather name="camera" size={30} color="#FFF" />
                </View>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
