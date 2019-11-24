import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { Ionicons } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

const ResetPassword = (props) => {
    return(
        <View style={styles.mainWrapper}>
            <TouchableOpacity
                style={styles.goBack}
                onPress={() => props.navigation.goBack()}
            >
                <Ionicons name='ios-arrow-back' size={32} color='#1D2029' />
            </TouchableOpacity>
            <View style={styles.headerStyle}>
                <Text style={styles.headerText}>Passwort zurücksetzen</Text>
            </View>
            <View style={styles.descriptionStyle}>
                <Text style={styles.descriptionText}>Bitte geben Sie Ihr neues Passwort ein und bestätigen Sie es. das Passwort.</Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextField label='Neues Passwort' secureTextEntry />
                <TextField label='Neues Passwort bestätigen' secureTextEntry />
            </View>
            <TouchableOpacity
                style={styles.RegButton}
            >
                <Text style={{color: '#FFF'}}>Aktualisieren</Text>
            </TouchableOpacity>
            <View style={{height: '30%'}} />
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
        height: '20%',
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

export default ResetPassword