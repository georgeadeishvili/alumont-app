import React from 'react'
import { View, Animated, Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const Circle = ({ x, y }) => {
    return(
        <View style={styles.container}>
            <View style={[styles.animatedCircle, { top: width * 0.2 + width * 0.2/70*y, left: width * 0.2 + width * 0.2/180*x }]} />
            <View style={[styles.littleCubes, {borderRightWidth: 1, borderBottomWidth: 1 }]} />
            <View style={[styles.littleCubes, {borderBottomWidth: 1, borderLeftWidth: 1}]} />
            <View style={[styles.littleCubes, {borderTopWidth: 1, borderRightWidth: 1}]} />
            <View style={[styles.littleCubes, {borderLeftWidth: 1, borderTopWidth: 1}]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.5,
        height: width * 0.5,
        borderRadius: width * 0.25,
        backgroundColor: '#006F3D',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    animatedCircle: {
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: width * 0.05,
        backgroundColor: '#42CC9D',
        position: 'absolute',
    },
    littleCubes: {
        width: width * 0.25,
        height: width * 0.25,
        backgroundColor: 'transparent'
    }
})
