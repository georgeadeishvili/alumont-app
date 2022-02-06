//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import { TouchableOpacity } from "react-native";

// create a component
class TaskScreens extends Component {
  state = {
    checked: false
  };

  Item = (title, value) => {
	  if (value) {
		return (
			<View
			  style={{
				marginTop: 20,
				marginLeft: 40
			  }}
			>
			  <Text style={{}}>{title}</Text>
			  <View
				style={{
				  borderWidth: 1,
				  borderColor: "#E1E4E8",
				  height: 40,
				  minWidth: "40%",
				  borderRadius: 5,
				  backgroundColor: "#FFF",
				  justifyContent: "center",
				  alignItems: "flex-start",
				  paddingLeft: 10,
				  marginTop: 4,
				  paddingRight: 30
				}}
			  >
				<Text>{value}</Text>
			  </View>
			</View>
		  );
	  } else {
		  return
	  }
    
  };

  render() {
    const {
	  id,
	  taskId,
	  taskName,
	  taskDes,
	  date1,
	  date2,
	  date3,
	  date4,
	  date5,
	  date6,
	  date7,
	  customerLocation,
	  customerAddress,
    } = this.props.navigation.state.params.task;
    return (
		<View style={styles.container}>
			<ScrollView
				style={{ flex: 1 }}
				contentContainerStyle={{ paddingBottom: 30 }}
			>
				<View
					style={{
						height: 70,
						flexDirection: 'row',
						marginTop: 50,
						paddingHorizontal: 20
					}}
				>
					<View style={{ flex: 1, justifyContent: 'center' }}>
						<Text style={{ color: '#0A1F44', fontSize: 20 }}>
							#{id}
						</Text>
						{/* <Text style={{ color: '#B0B7C3' }}>{address}</Text> */}
					</View>
					<TouchableOpacity
						onPress={() => this.props.navigation.pop()}
						style={{
							flex: 1,
							alignItems: 'flex-end',
							paddingRight: 15,
							justifyContent: 'center'
						}}
					>
						<AntDesign name='arrowleft' size={40} color='#000' />
					</TouchableOpacity>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<CheckBox
						onPress={() =>
							this.setState({ checked: !this.state.checked })
						}
						value={true}
						disabled={false}
						checked={this.state.checked}
					/>
					<Text
						style={{
							color: '#0A1F44',
							fontWeight: '600',
							fontSize: 15
						}}
					>
						Erledigt
					</Text>
				</View>
				<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
					{this.Item('AuftragsNr', taskId)}
					{this.Item('Teil', taskName)}
					{this.Item('Bauvorhaben', taskDes)}
					{/* {this.Item("Prod. Zeit", ProdTime)}
            {this.Item("Prod. #", Prod)} */}
					{this.Item('ABDatum', date1)}
					{this.Item('Eingang AV', date2)}
					{this.Item('Soll Beschichtung', date3)}
					{this.Item('Aus Produktion', date4)}
					{this.Item('Versandfertig', date5)}
					{this.Item('Versandt Am', date6)}
					{this.Item('Liefertermin Kd', date7)}
					{/* {this.Item('Zeichnungen', Status)} */}
					{/* {this.Item('Bezeichnung', FromProdiction)} */}
					{/* {this.Item("Begriff", Term)} */}
					{/* {this.Item("Status", Status)} */}
					{/* {this.Item("Aus der Produktion", FromProdiction)} */}
					{/* {this.Item("Montage in h (Ziel)", AssamblyInH)}
					{this.Item("Baugruppennummer", AssamblyInNum)}
					{this.Item("Montagebeginn", AssamblyStart)}
					{this.Item("Fälligkeitsdatum", DueDate)}
					{this.Item("Montageende", AssamblyEnd)}
					{this.Item("Montage in h (Ergebnis)", AssamblyInHResult)} */}
					{/* {this.Item('Prognose', installerDeplyment)} */}
				</View>
			</ScrollView>
		</View>
	)
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f9fa"
  }
});

//make this component available to the app
export default TaskScreens;
