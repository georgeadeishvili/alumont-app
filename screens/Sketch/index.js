//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import RNDraw from "./rn-draw-additional";
import uuidv1 from "uuid/v1";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// import { Svg } from "./rn-draw-additional/src/config";
// const { G, Surface, Path } = Svg;

import ViewShot from "react-native-view-shot";

import * as firebase from "firebase";
import Svg, { G, Surface, Path } from "react-native-svg";
import DrawingListView from "./DrawingListView";
// create a component
class Sketch extends Component {
  state = {
    svgId: null,
    currentSVGInfo: null,
    svgObjects: [],
    savedDrawingView: false,
    modal: false
  };
  componentDidMount() {
    this.setState({
      svgId: uuidv1()
    });
  }

  rewind = () => {
    this._undo();
  };

  clear = () => {
    this._clear();
  };
  save = () => {
    const newSVGObjToSave = {
      id: this.state.svgId,
      ...this.state.currentSVGInfo
    };
    this.setState(
      {
        svgObjects: [...this.state.svgObjects, newSVGObjToSave]
      },
      () => {
        this.clear();
        this.setState({
          svgId: uuidv1()
        });
      }
    );
  };

  swapView = () => {
    this.setState({
      savedDrawingView: !this.state.savedDrawingView
    });
  };

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
    const { svgObjects, savedDrawingView } = this.state;
    return savedDrawingView ? (
      <DrawingListView svgObjects={svgObjects} swapView={this.swapView} />
    ) : (
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.newHeader}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Ionicons name="ios-arrow-round-back" size={50} color="#1B3554" />
            </TouchableOpacity>
            <Text style={styles.newHeaderText}>Notizen</Text>
          </View>
          {/* <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={this.clear}
              style={[styles.btn, styles.btnRed]}
            >
              <Text style={styles.btnText}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.rewind}
              style={[styles.btn, styles.btnOrange]}
            >
              <Text style={styles.btnText}>Rewind</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.save}
              style={[styles.btn, styles.btnGreen]}
            >
              <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>
          </View> */}
          <ViewShot ref="viewShot" style={{ flex: 1 }}>
            <View style={styles.imageFrame}>
              {/* <Image
              style={styles.backgroundImg}
              source={require("./whiteboard.jpg")}
            /> */}

              <RNDraw
                containerStyle={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  width: Dimensions.get("window").width * 0.9,
                  height: Dimensions.get("window").height * 0.733,
                  borderRadius: 8
                }}
                rewind={undo => {
                  this._undo = undo;
                }}
                clear={clear => {
                  this._clear = clear;
                }}
                updateSVGInfo={svgObj => {
                  this.updateSVGInfo(svgObj);
                }}
                color={"#000000"}
                strokeWidth={4}
                svgId={this.state.svgId}
              />
            </View>
          </ViewShot>
          {this.state.modal && (
            <TouchableOpacity
              style={styles.modalStyle}
              onPress={() => this.setState({ modal: false })}
            />
          )}
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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F9FA",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    alignItems: "center"
  },
  imageFrame: {
    height: Dimensions.get("window").height * 0.733,
    shadowColor: "#0A1646",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 2
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    margin: 20,
    padding: 10
  },
  btnGreen: {
    backgroundColor: "green"
  },
  btnOrange: {
    backgroundColor: "orange"
  },
  btnRed: {
    backgroundColor: "red"
  },
  btnText: {
    textAlign: "center"
  },
  drawContainer: {
    flex: 1,
    display: "flex"
  },
  svgContainer: {
    flex: 1
  },
  drawSurface: {
    flex: 1
  },
  backgroundImg: {
    width: "100%",
    height: "90%",
    position: "absolute"
  },
  newHeader: {
    width: Dimensions.get("window").width * 0.8,
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-between",
    alignItems: "center"
  },
  newHeaderText: {
    fontSize: 23,
    color: "#1B3554",
    lineHeight: 32,
    fontWeight: "bold"
  },
  newBtnWrapper: {
    width: Dimensions.get("window").width,
    alignItems: "flex-end",
    position: "absolute",
    bottom: 40
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

//make this component available to the app
export default Sketch;
