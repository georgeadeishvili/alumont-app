//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// create a component
class ViewPhoto extends Component {
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ flex: 1 }}
          source={{
            uri: this.props.navigation.state.params.item.photo
          }}
        ></Image>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});

//make this component available to the app
export default ViewPhoto;
