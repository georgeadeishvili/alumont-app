import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'

export const Input = ({label, secureTextEntry, placeholder, value, onChangeText}) => (
    <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>{label}</Text>
        <TextInput
            style={styles.inputStyle}
            secureTextEntry={secureTextEntry}
            underlineColorAndroid='transparent'
            placeholder={placeholder}
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
        />
    </View>
)

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: '35%',
        borderBottomWidth: 1,
        borderColor: '#ABB4BD',
        justifyContent: 'center'
    },
    labelStyle: {
        fontSize: 10,
        color: '#ABB4BD'
    },
    inputStyle: {
        height: '80%'
    }
})