import React from 'react';
import {Text, TouchableOpacity } from 'react-native';
import {useFonts} from 'expo-font';

const Button = ({buttonText, backgroundColor, borderRadius,borderColor, padding,borderWidth, alignItems, textColor,buttonPress,marginVertical, fontSize, fontWeight, width, height, justifyContent, marginTop, activeOpacity, newStyle={}}) => {
  
  const [loaded] = useFonts({
    axiformaBold: require("../../../assets/fonts/Axiforma-Bold.ttf")
 })

 if(!loaded){
     return null
 }

  return (
    <TouchableOpacity
    onPress={buttonPress}
    activeOpacity={activeOpacity}
     style={[{backgroundColor: backgroundColor, borderColor: borderColor, borderWidth: borderWidth, marginVertical: marginVertical, borderRadius: borderRadius, padding: padding, alignItems: alignItems, width: width, height: height, justifyContent: justifyContent, marginTop: marginTop}, newStyle]}>
      <Text style={{color:textColor, fontSize:fontSize, fontWeight: fontWeight, fontFamily: 'axiformaBold'}}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default Button
