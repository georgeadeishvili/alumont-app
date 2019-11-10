import * as React from "react";
import {
  Text,
  ImageBackground,
  Animated,
  PanResponder,
  TouchableHighlight,
  TextInput,
  View,
  StyleSheet
} from "react-native";
import Gestures from "react-native-easy-gestures";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: [{ value: "test", selected: false }]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{ flex: 1, paddingTop: 20 }}
          source={{
            uri:
              "https://i.dailymail.co.uk/1s/2019/04/18/10/12427172-0-image-a-20_1555581069374.jpg"
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
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
                      backgroundColor: "#000"
                    }}
                  >
                    {txt.value}
                  </Text>
                )}
              </Gestures>
            );
          })}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1
  }
});
