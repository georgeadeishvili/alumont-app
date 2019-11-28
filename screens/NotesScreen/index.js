import React, { useState, Fragment, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { MaterialIcons, Entypo, Feather } from "@expo/vector-icons";
import Note from "./Note";
import * as firebase from "firebase";
import { LinearGradient } from "expo-linear-gradient";
const NotesScreen = props => {
  const [modal, setModal] = useState(false);
  const [photos, setPhotos] = useState([]);
  const { userId } = props.navigation.state.params;

  useEffect(() => {
    var recentPostsRef = firebase.database().ref("/users/" + userId);
    recentPostsRef.once("value").then(snap => {
      let keys = [];
      let counts = [];
      snap.forEach(function(item) {
        var itemVal = item.val();
        keys.push({ ...itemVal, key: item.key });
      });

      // snapshot.val() is the dictionary with all your keys/values from the '/store' path
      // alert(JSON.stringify(keys));
      setPhotos(keys);
    });
  });

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: "#F6F9FA"
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <MaterialIcons size={40} color="#1B3554" name="arrow-back" />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Notizen</Text>
      </View>
      <ScrollView
        style={{
          backgroundColor: "#FFF",
          minHeight: 100,
          marginTop: 40,
          borderRadius: 10
        }}
      >
        {photos.map((item, index) => {
          return (
            <Note
              index={index}
              key={index}
              item={item}
              onRemove={() => {
                firebase
                  .database()
                  .ref("/users/" + userId + "/" + item.key)
                  .remove();
              }}
              onNotePress={() => props.navigation.push("ViewPhoto", { item })}
            />
          );
        })}
      </ScrollView>
      {modal && (
        <TouchableOpacity
          style={styles.modalStyle}
          onPress={() => setModal(false)}
        />
      )}
      <View style={styles.newBtnWrapper}>
        {modal && (
          <View style={styles.newBtnModalWrapper}>
            <TouchableOpacity
              style={styles.newBtnModal}
              onPress={() => props.navigation.navigate("ShotImage", { userId })}
            >
              <Text style={styles.newBtnModalText}>Bild aufnehmen</Text>
              <MaterialIcons name="navigate-next" size={24} color="#4E5D78" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.newBtnModal}
              onPress={() => props.navigation.navigate("Sketch", { userId })}
            >
              <Text style={styles.newBtnModalText}>Sketch erstellen</Text>
              <MaterialIcons name="navigate-next" size={24} color="#4E5D78" />
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          style={styles.newBtn}
          onPress={() => setModal(!modal)}
        >
          <Text style={styles.newBtnText}>Neue Notizen</Text>
          <Feather name="plus" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      {/* {modal && (
        <Fragment>
          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)"
            }}
          />
          <View
            style={{
              position: "absolute",
              right: 0,
              bottom: 30
            }}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate("editImage")}
              style={{
                height: 70,
                backgroundColor: "#FFFFFF",
                width: Dimensions.get("window").width / 1.5,
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 15,
                paddingRight: 10,
                justifyContent: "space-between"
              }}
            >
              <Text style={{ color: "#8A94A6", fontSize: 21 }}>
                Shoot an image
              </Text>
              <Entypo color="#000" name="chevron-small-right" size={30} />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: "#0D55CF",
                height: 70,
                width: Dimensions.get("window").width / 1.5,
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 15,
                paddingRight: 10,
                justifyContent: "space-between"
              }}
            >
              <Text style={{ color: "#8A94A6", fontSize: 21 }}>
                Make a Sketch
              </Text>
            </View>
            <LinearGradient
              colors={["#7EFFD3", "#42CC9D"]}
              start={[1.0, 0.5]}
              end={[0.0, 0.5]}
              style={{
                height: 70,
                width: Dimensions.get("window").width / 1.5,
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 15
              }}
            >
              <Text style={{ color: "#FFF", fontWeight: "500", fontSize: 17 }}>
                New Note
              </Text>
              <Entypo color="#FFF" name="plus" size={25} />
            </LinearGradient>
          </View>
        </Fragment>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
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
    justifyContent: "space-between",
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10
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

export default NotesScreen;
