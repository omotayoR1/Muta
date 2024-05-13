import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import Svg, {Path} from 'react-native-svg';
import {useFonts} from 'expo-font';

const LanguageList = ({id, svg, description, selected, handleSelect, another}) => {
    const [loaded] = useFonts({
        axiformaMedium: require("../../../assets/fonts/Axiforma-Medium.ttf"),
        axiformaRegular: require("../../../assets/fonts/Axiforma-Regular.ttf")
     })
    
     if(!loaded){
         return null
     }
  return (
    <TouchableOpacity onPress={()=>handleSelect(id)} style={styles.container}>
        <View style={styles.cont}>
            {svg}
            <View style={styles.col}>
               <Text style={styles.texts}>{description}</Text>
               {another && <Text style={styles.another}>{another}</Text>}
            </View>
        </View>
        {
            selected === id ?
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z" fill="#4CA6A8"/>
                <Path d="M16.79 8.73948C16.416 8.36548 15.8 8.36548 15.426 8.73948L10.883 13.2825L8.95798 11.3575C8.58398 10.9835 7.96798 10.9835 7.59398 11.3575C7.21998 11.7315 7.21998 12.3365 7.59398 12.7215L10.212 15.3285C10.399 15.5155 10.641 15.6035 10.883 15.6035C11.136 15.6035 11.378 15.5155 11.565 15.3285L16.79 10.1035C17.164 9.72948 17.164 9.12448 16.79 8.73948Z" fill="white"/>
            </Svg>
            : null
        }
    </TouchableOpacity>
  )
}

export default LanguageList

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 8,
        borderColor: COLORS.faintGreen,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 16
    },
    cont: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    texts: {
        color: COLORS.white,
        fontFamily: "axiformaMedium",
    },
    col: {
        flexDirection: 'column',
        marginLeft: 16,
    },
    another: {
        fontFamily: "axiformaRegular",
        color: COLORS.grey,
        marginTop: 4
    }
})