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
  Dimensions
} from "react-native";
import Gestures from "react-native-easy-gestures";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: [],
      modal: false
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{ flex: 1, paddingTop: 20 }}
          source={{
            uri:  this.props.navigation.state.params.uri
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: 15, paddingRight: 15  }}>
            <TouchableOpacity style={{
              backgroundColor: '#6C86B3',
              width: 50,
              height: 50,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 2.5
            }}>
              <Ionicons name='md-arrow-round-back' size={30} color='#FFF' />
            </TouchableOpacity>
            <TouchableHighlight
              onPress={() => {
                this.state.texts.push({
                  value: "Type Something...",
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
          {this.state.texts.map((txt, index) => {
            return (
              <Gestures
                rotatable={true}
                scalable={true}
                style={{ position: "absolute" }}
                onChange={(event, styles) => {}}
              >
                {txt.selected ? (
                  <TextInput
                    style={{
                      fontSize: 40,
                      backgroundColor: "black",
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
          {this.state.modal && (<TouchableOpacity style={styles.modalStyle} onPress={() => this.setState({modal: false})} />)}
          <View style={styles.newBtnWrapper}>
            {this.state.modal && (
              <View style={styles.newBtnModalWrapper}>
                <TouchableOpacity style={styles.newBtnModal}>
                  <Text style={styles.newBtnModalText}>E-Mail senden</Text>
                  <MaterialIcons name='navigate-next' size={24} color='#4E5D78' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.newBtnModal}>
                  <Text style={styles.newBtnModalText}>Speichern</Text>
                  <MaterialIcons name='navigate-next' size={24} color='#4E5D78' />
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity style={styles.newBtn} onPress={() => this.setState({ modal: !this.state.modal })}>
              <Text style={styles.newBtnText}>Fortfahren</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1
  },
  newBtnWrapper: {
    width: Dimensions.get('window'). width,
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 50,

  },
  newBtn: {
    width: Dimensions.get('window').width * 0.7,
    height: 45,
    backgroundColor: '#006F3D',
    justifyContent: 'center',
    borderRadius: 2
  },
  newBtnText: {
    color: '#FFF',
    marginLeft: 10,
    fontWeight: 'bold',

  },
  modalStyle: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
    backgroundColor: '#10101015'
  },
  newBtnModalWrapper: {
    width: Dimensions.get('window'). width,
    alignItems: 'flex-end',
  },
  newBtnModal: {
    width: Dimensions.get('window').width * 0.7,
    height: 45,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    borderLeftColor: '#42CC9D',
    borderLeftWidth: 3,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  newBtnModalText: {
    color: '#8A94A6',
    fontSize: 14,
    lineHeight: 24,
    marginLeft: 10
  }
});
