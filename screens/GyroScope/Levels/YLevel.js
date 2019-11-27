import React from 'react'
import { View, Animated, Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const YLevel = ({ y }) => {
    return(
        <View style={styles.container}>
            <View style={[styles.animatedCircle, { top: width * 0.4 - 17.5 + width * 0.4/70*y }]} />
            <View style={styles.insideViews} />
            <View style={{width: '100%', height: '20%', borderTopWidth: 2, borderBottomWidth: 2}}/>
            <View style={styles.insideViews}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: width * 0.8,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006F3D'
    },
    animatedCircle: {
        width: 30,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#42CC9D',
        position: 'absolute',
    },
    insideViews: {
        width: '100%',
        height: '40%'
    }

})