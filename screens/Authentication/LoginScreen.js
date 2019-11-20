import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { Input } from '../../components/Input'
import SvgUri from 'expo-svg-uri'
import { AntDesign } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

const LoginScreen = (props) => {

    return (
        <View style={styles.mainWrapper}>
            <SvgUri
                width={width*0.613}
                source={require("../../assets/images/Logo.svg")}
            />
            <TouchableOpacity
                style={styles.visitWebStyle}
            >
                <AntDesign name='earth' size={20} color='#FFF' />
                <Text style={styles.visitWebText}>Zu unserer Homepage</Text>
            </TouchableOpacity>
            <Text style={{color: '#ABB4BD'}}>oder</Text>
            <View style={styles.inputWrapper}>
                <Input
                    label='E-Mail oder Kundennu'
                    placeholder='abhinav180@hotmail.com'
                />
                <Input
                    label='Passwort'
                    placeholder='********'
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
        alignItems: 'flex-end'
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
        justifyContent: 'center'
    }
})

export default LoginScreen