import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { COLORS, ROUTES } from '../../constants'
import Header from '../reusables/Header'
import {useFonts} from 'expo-font';
import CustomInput from '../reusables/CustomInput';
import { useForm } from "react-hook-form"
import Button from '../reusables/Button';
import TextButton from '../reusables/TextButton';

const EMAIL_REGEX = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/
const {width,height} = Dimensions.get('screen')

export const icon1 = ()=>{
    return(
    <View style={styles.imageIcon}>
            <Image source={require('../../assets/Google.png')} resizeMode='contain' style={styles.image}  />
        </View>
    )
}

export const icon2 = () =>{
    return (
        <View style={styles.imageIcon}>
            <Image source={require('../../assets/Facebook.png')} resizeMode='contain' style={styles.image}  />
        </View>
    )
}

export const IconButton = ({icon, handlePressed, containText,textAlign, iconText,paddingHorizontal,paddingVertical, backgroundColor, borderColor, marginLeft,marginLeftText, flexDirection, padding,borderRadius, height, position, top, bottom, left, right, color, fontFamily,width, fontSize, zIndex, justifyContent, alignItems, marginTop, marginRight,marginVertical})=>{
    return (
        <TouchableOpacity onPress={handlePressed} style={{marginRight: marginRight, paddingVertical: paddingVertical, paddingHorizontal:paddingHorizontal, borderColor: borderColor, marginLeft:marginLeft, backgroundColor: backgroundColor, height: height, width: width, flexDirection: flexDirection, padding: padding, borderRadius: borderRadius, position: position, top: top, bottom: bottom, left: left, right: right, zIndex: zIndex, justifyContent: justifyContent, alignItems: alignItems, marginVertical: marginVertical }}>
        {icon()}
        {containText ? <Text style={{color: color, fontFamily: fontFamily, fontSize: fontSize, marginTop: marginTop, textAlign: textAlign, marginLeft: marginLeftText}}>{iconText}</Text> : null}
        </TouchableOpacity>
    )
}

const Signup = ({navigation}) => {
    const {control, handleSubmit, formState:{errors}, watch} = useForm();
    const [loaded] = useFonts({
        axiformaBold: require("../../../assets/fonts/Axiforma-Bold.ttf")
     })

     const handleNavigate = (data)=>{
        navigation.navigate(ROUTES.SIGNUPWITHEMAIL, {
            email: data.email
        })
     }

     const goToLogin =()=>{
        navigation.navigate(ROUTES.LOGIN)
     }
    
     if(!loaded){
         return null
     }
  return (
    <View style={styles.container}>
      <Header header={"Sign up and start learning right away!"} newStyle={{marginTop: 24, alignSelf: "center", textAlign: "center"}} />
      <IconButton icon={icon1} containText={true} fontFamily={"axiformaBold"} paddingHorizontal={16} iconText={"SIGN UP WITH GOOGLE"} marginVertical={24} flexDirection={"row"} backgroundColor={COLORS.white} width={"100%"} height={56} borderRadius={8} color={COLORS.backColor} alignItems={"center"} textAlign={"center"} marginLeftText={24} />
      <IconButton icon={icon2} containText={true} fontFamily={"axiformaBold"} paddingHorizontal={16} iconText={"SIGN UP WITH FACEBOOK"} flexDirection={"row"} backgroundColor={COLORS.white} width={"100%"} height={56} borderRadius={8} color={COLORS.backColor} alignItems={"center"} textAlign={"center"} marginLeftText={24} />
      <View style={styles.alter}>
        <View style={styles.line} />
        <Text style={styles.text}>OR</Text>
        <View style={styles.line} />
      </View>
      <CustomInput 
      name={"email"}
      control={control}
      placeholder={"Enter email address"}
      rules={{
          required: "Please enter your email",
          pattern: {
              value: EMAIL_REGEX,
              message: "Email not valid"
          }
      }}
      inputHeight={56}
      />
      <Button buttonPress={handleSubmit(handleNavigate)} buttonText={"SIGN UP WITH EMAIL"} marginVertical={32} width={"100%"} height={56} alignItems={"center"} borderRadius={8} backgroundColor={COLORS.tintGreen} borderColor={COLORS.faintGreen} borderWidth={1} justifyContent={"center"}   />
      <View style={styles.textInput}>
        <Text style={styles.al}>Already a Muta User?</Text>
        <TextButton textButton={"Log In"} handlePressed={goToLogin} deleteColor={{marginLeft: 5}} />
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backColor,
        paddingHorizontal: 20,
        position: 'relative'
    },
    imageIcon: {
        width: 32,
        height: 32
    },
    image: {
        width: "100%",
        height: "100%"
    },
    alter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginVertical: 24
    },
    line: {
        width: '43%',
        backgroundColor: COLORS.grey,
        height: 2
    },
    text: {
        fontFamily: "axiformaBold",
        color: COLORS.grey
    },
    textInput: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    al: {
        fontFamily: "axiformaBold",
        color:"#C6CFE5"
    }
})