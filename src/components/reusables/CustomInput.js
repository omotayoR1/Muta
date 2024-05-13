import React from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form'
import { COLORS } from '../../constants';
import {useFonts} from 'expo-font';

const CustomInput =({name, control, rules={}, placeholder, secureTextEntry, label, keyboardType,newStyle={}, inputHeight, multiLine, numberOfLines, textColor, fieldHeight, fieldWidth, alignItems })=> {


    const [loaded] = useFonts({
        axiformaBold: require('../../../assets/fonts/Axiforma-Bold.ttf'),
        axiformaRegular: require('../../../assets/fonts/Axiforma-Regular.ttf'),
     })
 
     if(!loaded){
         return null
     }
    return (
      <Controller 
      name={name}
      control={control}
      rules={rules}
      render={({field: {onChange, value, onBlur}, fieldState:{error}})=>(
        <View style={[styles.mainContainer,newStyle]}>
            {label&&<Text style={{fontFamily: 'axiformaRegular',fontSize: 13, color: textColor}}>{label}</Text>}
            <View style={{backgroundColor: "transparent",borderBottomColor: COLORS.grey,borderBottomWidth: 1,width: "100%",height: inputHeight,padding: 8, alignItems: alignItems, justifyContent: 'center'}}>
            <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            multiline={multiLine}
            numberOfLines={numberOfLines}
            placeholder={placeholder}
            placeholderTextColor={COLORS.grey}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={{width: fieldWidth, height: fieldHeight, color: COLORS.white}}
            />
            </View>
            {error && <Text style={styles.error}>{error.message}</Text>}
        </View>
      )}
      />
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        flexDirection: 'column',
        marginTop: 16
    },
    inputContainer: {
        
    },
    label: {
        
    },
    error: {
        color: 'red'
    },
    input: {

    }
})
export default CustomInput