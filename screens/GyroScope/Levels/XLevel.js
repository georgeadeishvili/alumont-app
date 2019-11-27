import React from 'react'
import { View, Animated, Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const XLevel = ({ x }) => {
    return(
        <View style={styles.container}>
            <View style={[styles.animatedCircle, {left: width * 0.4 - 17.5 + width * 0.4/180*x}]} />
            <View style={styles.insideViews} />
            <View style={{width: '20%', height: '100%', borderLeftWidth: 2, borderRightWidth: 2}}/>
            <View style={styles.insideViews}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.8,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#006F3D'
    },
    animatedCircle: {
        width: 35,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#42CC9D',
        position: 'absolute',
    },
    insideViews: {
        width: '40%',
        height: '100%'
    }

})