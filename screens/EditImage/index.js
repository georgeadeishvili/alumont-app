import * as React from "react";
import {
  Text,
  ImageBackground,
  Animated,
  PanResponder,
  TouchableHighlight,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  PixelRatio
} from "react-native";
import Gestures from "react-native-easy-gestures";
// import { takeSnapshotAsync } from "expo";
import ViewShot from "react-native-view-shot";

import * as firebase from "firebase";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: [],
      modal: false,
      takingScreenShot: false
    };
  }
  makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  async saveImage() {
    const { userId } = this.props.navigation.state.params;
    this.setState({ takingScreenShot: true }, () => {
      this.refs.viewShot.capture().then(async uri => {
        console.log("do something with ", uri);
        // alert(uri);
        let photoId = this.makeid(9);
        let formData = new FormData();
        formData.append("photo", {
          uri,
          name: photoId,
          type: "image/png"
        });

        formData.append("save", 1);

        firebase
          .database()
          .ref("users/" + userId)
          .push({
            photo: "http://167.71.35.237/uploads/" + photoId
          });

        await fetch("http://167.71.35.237/upload", {
          method: "POST",
          body: formData,
          header: {
            "Content-type": "multipart/form-data"
          }
        })
          .then(res => {
            // alert(JSON.stringify(res));
            this.setState({ takingScreenShot: false }, () => {
              this.props.navigation.navigate("Save");
            });
          })
          .catch(e => {
            // alert(JSON.stringify(e.response));
          });
      });
    });
  }
  async ScreenShot() {
    const { userId } = this.props.navigation.state.params;
    this.setState({ takingScreenShot: true }, () => {
      this.refs.viewShot.capture().then(async uri => {
        console.log("do something with ", uri);
        // alert(uri);
        let photoId = this.makeid(9);
        let formData = new FormData();
        formData.append("photo", {
          uri,
          name: photoId,
          type: "image/png"
        });

        firebase
          .database()
          .ref("users/" + userId)
          .push({
            photo: "http://167.71.35.237/uploads/" + photoId
          });

        await fetch("http://167.71.35.237/upload", {
          method: "POST",
          body: formData,
          header: {
            "Content-type": "multipart/form-data"
          }
        })
          .then(res => {
            // alert(JSON.stringify(res));

            this.setState({ takingScreenShot: false }, () => {
              this.props.navigation.navigate("Sent");
            });
          })
          .catch(e => {
            // alert(JSON.stringify(e.response));
          });
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ViewShot ref="viewShot" style={{ flex: 1 }}>
          <ImageBackground
            ref={ref => (this.ImageContainer = ref)}
            style={{ flex: 1, paddingTop: 50 }}
            source={{
              uri: this.props.navigation.state.params.uri
            }}
          >
            {!this.state.takingScreenShot ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: 15,
                  paddingRight: 15
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#6C86B3",
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 2.5
                  }}
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Ionicons name="md-arrow-round-back" size={30} color="#FFF" />
                </TouchableOpacity>
                <TouchableHighlight
                  onPress={() => {
                    this.state.texts.push({
                      value: "Text einfügen...",
                      selected: false
                    });
                    this.setState({ texts: this.state.texts });
                    console.log(this.state.texts);
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    borderWidth: 4,
                    borderColor: "#FFF",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ fontSize: 40, color: "#FFF" }}>T</Text>
                </TouchableHighlight>
              </View>
            ) : (
              <View />
            )}
            {this.state.texts.map((txt, index) => {
              return (
                <Gestures
                  rotatable={true}
                  scalable={true}
                  style={{
                    position: "absolute",
                    marginTop: Dimensions.get("window").height / 3,
                    marginLeft: Dimensions.get("window").width / 3,
                    zIndex: 99999999
                  }}
                  onChange={(event, styles) => {}}
                  key={index}
                >
                  {txt.selected ? (
                    <TextInput
                      style={{
                        fontSize: 40,
                        backgroundColor: "transparent",
                        color: "#FFF"
                      }}
                      value={this.state.txt}
                      onChangeText={value => {
                        let texts = this.state.texts;
                        texts[index].value = value;
                        this.setState({ texts });
                      }}
                      autoFocus
                      onBlur={() => {
                        let texts = this.state.texts;
                        texts[index].selected = false;
                        this.setState({ texts });
                      }}
                    />
                  ) : (
                    <Text
                      onPress={() => {
                        let texts = this.state.texts;
                        texts[index].selected = true;
                        this.setState({ texts });
                      }}
                      style={{
                        fontSize: 40,
                        color: "#FFF",
                        backgroundColor: "transparent"
                      }}
                    >
                      {txt.value}
                    </Text>
                  )}
                </Gestures>
              );
            })}
            {/* {!this.state.takingScreenShot && (
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  padding: 20
                }}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.pop()}
                  style={{
                    borderRadius: 30,
                    width: 60,
                    height: 60,
                    borderWidth: 3,
                    borderColor: "#FFF",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 90
                  }}
                >
                  <FontAwesome name="repeat" color="#FFF" size={32} />
                </TouchableOpacity>
              </View>
            )} */}
            {this.state.modal && (
              <TouchableOpacity
                style={styles.modalStyle}
                onPress={() => this.setState({ modal: false })}
              />
            )}

            {!this.state.takingScreenShot && (
              <View style={styles.newBtnWrapper}>
                {this.state.modal && (
                  <View style={styles.newBtnModalWrapper}>
                    <TouchableOpacity
                      style={styles.newBtnModal}
                      onPress={() => this.ScreenShot()}
                    >
                      <Text style={styles.newBtnModalText}>E-Mail senden</Text>
                      <MaterialIcons
                        name="navigate-next"
                        size={24}
                        color="#4E5D78"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.newBtnModal}
                      onPress={() => this.saveImage()}
                    >
                      <Text style={styles.newBtnModalText}>Speichern</Text>
                      <MaterialIcons
                        name="navigate-next"
                        size={24}
                        color="#4E5D78"
                      />
                    </TouchableOpacity>
                  </View>
                )}
                <TouchableOpacity
                  style={styles.newBtn}
                  onPress={() => this.setState({ modal: !this.state.modal })}
                >
                  <Text style={styles.newBtnText}>Fortfahren</Text>
                </TouchableOpacity>
              </View>
            )}
          </ImageBackground>
        </ViewShot>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //paddingTop: 50,
    flex: 1
  },
  newBtnWrapper: {
    width: Dimensions.get("window").width,
    alignItems: "flex-end",
    position: "absolute",
    bottom: 50
  },
  newBtn: {
    width: Dimensions.get("window").width * 0.7,
    height: 45,
    backgroundColor: "#006F3D",
    justifyContent: "center",
    borderRadius: 2
  },
  newBtnText: {
    color: "#FFF",
    marginLeft: 10,
    fontWeight: "bold"
  },
  modalStyle: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    top: 0,
    left: 0,
    backgroundColor: "#10101015"
  },
  newBtnModalWrapper: {
    width: Dimensions.get("window").width,
    alignItems: "flex-end"
  },
  newBtnModal: {
    width: Dimensions.get("window").width * 0.7,
    height: 45,
    backgroundColor: "#FFF",
    justifyContent: "center",
    borderLeftColor: "#42CC9D",
    borderLeftWidth: 3,
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  newBtnModalText: {
    color: "#8A94A6",
    fontSize: 14,
    lineHeight: 24,
    marginLeft: 10
  }
});
