import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import SvgUri from 'expo-svg-uri'

const { width, height } = Dimensions.get('window')

const PendingScreen = () => (
    <View style={styles.mainWrapper}>
        <TouchableOpacity
            style={styles.goBack}
            onPress={() => props.navigation.goBack()}
        >
            <Feather name='x' size={32} color='#1D2029' />
        </TouchableOpacity>
        <SvgUri
                width={width*0.613}
                source={require("../../assets/images/Pending.svg")}
            />
    </View>
)

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
        width: '84%',
        alignItems: 'flex-end'
    },
    headerStyle: {
        width: '84%',
        marginBottom: 20
    },

})

export default PendingScreen