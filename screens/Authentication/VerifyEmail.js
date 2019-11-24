import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { Ionicons } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

const VerifyEmail = (props) => {
    return(
        <View style={styles.mainWrapper}>
            <TouchableOpacity
                style={styles.goBack}
                onPress={() => props.navigation.goBack()}
            >
                <Ionicons name='ios-arrow-back' size={32} color='#1D2029' />
            </TouchableOpacity>
            <View style={styles.headerStyle}>
                <Text style={styles.headerText}>Passwort vergessen?</Text>
            </View>
            <View style={styles.descriptionStyle}>
                <Text style={styles.descriptionText}>Bitte gebe deine E-Mail ein damit wir dir einen Link zum zurucksetzen des Passworts senden konnen</Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextField label='E-mail' keyboardType="email-address" />
            </View>
            <TouchableOpacity
                style={styles.RegButton}
            >
                <Text style={{color: '#FFF'}}>Passwort Zurucksetzen</Text>
            </TouchableOpacity>
            <View style={{height: '40%'}} />
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
    goBack: {
        width: '84%'
    },
    headerStyle: {
        width: '84%',
        marginBottom: 20
    },
    headerText: {
        fontSize:24, 
        color: '#1D2029', 
        fontWeight: 'bold'
    },
    descriptionStyle: {
        width: '84%',
    },
    descriptionText: {
        fontSize: 14, 
        color: '#ABB4BD'
    },
    inputWrapper: {
        height: '10%',
        width: '84%'
    },
    RegButton: {
        width: '84%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#006F3D',
        height: 40,
        borderRadius: 4,
        marginBottom: 50
    }
})

export default VerifyEmail