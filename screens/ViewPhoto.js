//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons'

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
        <TouchableOpacity style={styles.newHeader} onPress={() => this.props.navigation.goBack()}>
          <Ionicons name="ios-arrow-round-back" size={32} color="#FFF" />
        </TouchableOpacity>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  newHeader: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    left: 20,
    top: 50,
    backgroundColor: '#1B3554',
    justifyContent: "center",
    alignItems: "center"
  },
});

//make this component available to the app
export default ViewPhoto;
