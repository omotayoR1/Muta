import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AnotherIcon } from './ThirdDash'
import { COLORS } from '../../constants'
import {useFonts} from 'expo-font';

const FourthDash = () => {
    const [loaded] = useFonts({
        axiformaBold: require("../../../assets/fonts/Axiforma-Bold.ttf")
     })
     if(!loaded){
        return null
    }
  return (
    <View style={styles.container}>
       <View style={styles.space}>
        <Text style={styles.solid}>Leaderboard</Text>
        <TouchableOpacity>
            <AnotherIcon colorss={COLORS.lightgrey} />
        </TouchableOpacity>
       </View>
    </View>
  )
}

export default FourthDash

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 24
    },
    space: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        width: '100%'
    },
    solid:{
        color: COLORS.grey,
        fontFamily: 'axiformaBold'
    },
})