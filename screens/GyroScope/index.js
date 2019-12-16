import React from "react";
import { DeviceMotion } from "expo-sensors";
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { Circle, XLevel, YLevel } from './Levels'
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import AppLink from 'react-native-app-link'

export default class DeviceMotionSensor extends React.Component {
  state = {
    DeviceMotionData: {alpha:0, beta:0, gamma:0}
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

  _handlePress = () => {
    AppLink.openInStore({
      appName: 'angle-meter-360',
      appStoreId: '1393860479', 
      appStoreLocale: 'de', 
      playStoreId: 'com.pandaz.protractor'
    })
    .then(() => console.log('opened'))
    .catch(e => console.log(e.message))
  }

  render() {
    let { alpha, beta, gamma } = this.state.DeviceMotionData;

    return (
      <View style={styles.container}>
        <View style={styles.newHeader}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Ionicons name='ios-arrow-round-back' size={50} color='#1B3554' />
          </TouchableOpacity>
          <Text style={styles.newHeaderText}>Winkelmesser</Text>
        </View>
        <View style={styles.sensor}>
          <View style={styles.gyroscopeWrapper}>
            <XLevel x={round(gamma)} />
            <View style={styles.rowWrapper}>
              <View style={styles.circleWrapper}>
                <Circle x={round(gamma)} y={round(beta)} />
                <View style={styles.coordinates}>
                  <Text style={styles.coordinateText}>{round(renderAngle(alpha,beta,gamma))}&ordm;</Text>
                </View>
              </View>
              <YLevel y={round(beta)} />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.visitWebStyle}
          onPress={this._handlePress}
        >
          <MaterialCommunityIcons name="angle-acute" size={20} color="#FFF" />
          <Text style={styles.visitWebText}>Zum Winkelmesser</Text>
        </TouchableOpacity>
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

function renderAngle(x,y,z) {
  if (Math.abs(x) > Math.abs(y)) {
      if (Math.abs(y) > Math.abs(z)) {
        x = z
      } else {
        x = y
      }
    } else {
      if (Math.abs(x) > Math.abs(z)) {
        x = z
      }
    }

    return x
}

const { width, height } = Dimensions.get('window')

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
    justifyContent: 'center',
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
  visitWebStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.6,
    height: 40,
    backgroundColor: "#0F6734",
    borderRadius: 4,
    marginTop: 80
  },
  visitWebText: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 10
  },

});
