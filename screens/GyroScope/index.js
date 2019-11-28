import React from "react";
import { DeviceMotion } from "expo-sensors";
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { Circle, XLevel, YLevel } from './Levels'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

export default class DeviceMotionSensor extends React.Component {
  state = {
    DeviceMotionData: {}
  };

  componentDidMount() {
    this._toggle();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _toggle = async () => {
    if (this._subscription) {
      await this._unsubscribe();
    } else {
      await this._subscribe();
    }
  };

  _slow = () => {
    DeviceMotion.setUpdateInterval(1000);
  };

  _fast = () => {
    DeviceMotion.setUpdateInterval(16);
  };

  _subscribe = () => {
    this._subscription = DeviceMotion.addListener(({rotation}) => {
      this.setState({ DeviceMotionData: rotation });
    });
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    let { alpha, beta, gamma } = this.state.DeviceMotionData;

    return (
      <View style={styles.container}>
        <View style={styles.newHeader}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Ionicons name='ios-arrow-round-back' size={50} color='#1B3554' />
          </TouchableOpacity>
          <Text style={styles.newHeaderText}>Gyroscope</Text>
        </View>
        <View style={styles.sensor}>
          <View style={styles.gyroscopeWrapper}>
            <XLevel x={round(gamma)} />
            <View style={styles.rowWrapper}>
              <View style={styles.circleWrapper}>
                <Circle x={round(gamma)} y={round(beta)} />
                <View style={styles.coordinates}>
                  <Text style={styles.coordinateText}>x = {round(gamma)}</Text>
                  <Text style={styles.coordinateText}>y = {round(beta)}</Text>
                </View>
              </View>
              <YLevel y={round(beta)} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 0.7 * 180 / 3.14);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 15
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ccc"
  },
  sensor: {
    marginTop: 55,
    paddingHorizontal: 10
  },
  gyroscopeWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  circleWrapper: {
    width: Dimensions.get('window').width * 0.6
  },
  coordinates: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20
  },
  coordinateText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  newHeader: {
    width: Dimensions.get('window').width * 0.8,
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  newHeaderText: {
    fontSize: 23,
    color: '#1B3554',
    lineHeight: 32,
    fontWeight: 'bold'
  },

});
