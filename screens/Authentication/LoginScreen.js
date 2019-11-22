import React, { useRef } from 'react'
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { Input } from '../../components/Input'
import SvgUri from 'expo-svg-uri'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  TextField,
  FilledTextField,
  OutlinedTextField
} from "react-native-material-textfield"
import { WebView } from "react-native-webview"
import BottomSheet from "reanimated-bottom-sheet"

const { width, height } = Dimensions.get('window')

const LoginScreen = (props) => {
    const bottomSheetRef = useRef()
    return (
        <View style={styles.mainWrapper}>
            <SvgUri
                style={{ marginTop: 100 }}
                width={width*0.613}
                source={require("../../assets/images/Logo.svg")}
            />
            <TouchableOpacity
                style={styles.visitWebStyle}
                onPress={() => bottomSheetRef.current.snapTo(0)}
            >
                <MaterialCommunityIcons name='web' size={20} color='#FFF' />
                <Text style={styles.visitWebText}>Zu unserer Homepage</Text>
            </TouchableOpacity>
            <Text style={{color: '#ABB4BD'}}>oder</Text>
            <View style={styles.inputWrapper}>
                <TextField
                    label='E-Mail oder Kundennu'
                    keyboardType="email-address"
                />
                <TextField
                    label='Passwort'
                    secureTextEntry
                />
                <TouchableOpacity>
                    <Text style={{color: '#006F3D'}}>Passwort vergessen?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.loginButton}
            >
                <Text style={{color: '#FFF'}}>Anmeldung</Text>
            </TouchableOpacity>
            <View style={styles.registerWrapper}>
                <Text style={{color: '#ABB4BD'}}>Hier geht’s zur </Text>
                <TouchableOpacity>
                    <Text style={{color: '#006F3D'}}>Registrierung</Text>
                </TouchableOpacity>
            </View>
            <BottomSheet
                initialSnap={2}
                ref={bottomSheetRef}
                snapPoints={['90%', 0, 0]}
                renderContent={() => (
                    <View style={styles.panel}>
                    <WebView
                        originWhitelist={["*"]}
                        source={{ uri: "https://www.alumont.com/" }}
                        style={{ marginTop: 20 }}
                    />
                    </View>
                )}
                renderHeader={() => (
                    <View style={styles.header}>
                    <View style={styles.panelHeader}>
                        <View style={styles.panelHandle} />
                    </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        width,
        height,
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    visitWebStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.6,
        height: 40,
        backgroundColor: '#549AF4',
        borderRadius: 4
    },
    visitWebText: {
        color: '#FFF',
        fontSize: 16,
        marginLeft: 10
    },
    inputWrapper: {
        width: width * 0.84,
        height: height * 0.2,
        justifyContent: 'space-around',
    },
    loginButton: {
        width: width * 0.84,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#006F3D',
        height: 40,
        borderRadius: 4
    },
    registerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50
    },
    panel: {
        height: height*0.9,
        padding: 0,
        backgroundColor: "#F5f5f5",
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        shadowOpacity: 0.4
    },
    header: {
        backgroundColor: "#f7f5eee8",
        shadowColor: "#000000",
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    panelHeader: {
        alignItems: "center"
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#00000080",
        marginBottom: 10
    },
})

export default LoginScreen