import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import {useFonts} from 'expo-font';


const TextButton = ({textButton, handlePressed, deleteColor={}}) => {
    const [loaded] = useFonts({
        axiformaBold: require("../../../assets/fonts/Axiforma-Bold.ttf")
     })
     if(!loaded){
        return null
    }
  return (
    <TouchableOpacity onPress={handlePressed} style={{backgroundColor: "transparent", padding: 0}}>
      <Text style={[{color: COLORS.tintGreen, fontFamily:"axiformaBold" , fontSize: 13 }, deleteColor ]}>{textButton}</Text>
    </TouchableOpacity>
  )
}

export default TextButton

const styles = StyleSheet.create({})