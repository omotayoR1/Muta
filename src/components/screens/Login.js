import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { IconButton, icon1, icon2 } from './Signup'
import CustomInput from '../reusables/CustomInput'
import Button from '../reusables/Button'
import TextButton from '../reusables/TextButton'
import Header from '../reusables/Header'
import { COLORS, ROUTES } from '../../constants'
import { useForm } from "react-hook-form"
import {useFonts} from 'expo-font';

const EMAIL_REGEX = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/

const Login = ({navigation}) => {
    const {control, handleSubmit, formState:{errors}, watch} = useForm();
    const [loaded] = useFonts({
        axiformaBold: require("../../../assets/fonts/Axiforma-Bold.ttf")
     })
     const goToSignup = ()=>{
        navigation.navigate(ROUTES.SIGNUP)
     }
     const handleNavigate =(data)=>{
        navigation.navigate(ROUTES.LOGINWITHEMAIL, {
            email: data.email
        })
     }
     if(!loaded){
        return null
    }
  return (
    <View style={styles.container}>
      <Header header={"Log in to Muta"} newStyle={{marginTop: 24, alignSelf: "center", textAlign: "center"}} />
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
      <Button buttonPress={handleSubmit(handleNavigate)} buttonText={"LOG IN WITH EMAIL"} marginVertical={32} width={"100%"} height={56} alignItems={"center"} borderRadius={8} backgroundColor={COLORS.tintGreen} borderColor={COLORS.faintGreen} borderWidth={1} justifyContent={"center"}   />
      <View style={styles.textInput}>
        <Text style={styles.al}>{"Don\'t have an account?"}</Text>
        <TextButton textButton={"Sign up"} handlePressed={goToSignup} deleteColor={{marginLeft: 5}} />
      </View>
    </View>
  )
}

export default Login

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