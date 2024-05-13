import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useFonts} from 'expo-font';
import { COLORS } from '../../constants';

const Header = ({header, newStyle={}}) => {
    const [loaded] = useFonts({
        axiformaSemiBold: require("../../../assets/fonts/Axiforma-SemiBold.ttf")
     })
    
     if(!loaded){
         return null
     }
  return (
    <>
      <Text style={[styles.text, newStyle]}>{header}</Text>
    </>
  )
}

export default Header

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: COLORS.white,
        fontFamily: 'axiformaSemiBold'
    }
})