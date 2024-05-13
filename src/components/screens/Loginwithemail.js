import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, {useContext, useState} from 'react'
import CustomInput from '../reusables/CustomInput'
import Header from '../reusables/Header'
import Button from '../reusables/Button'
import TextButton from '../reusables/TextButton'
import {BASE_URL} from '@env'
import { AuthContext } from '../../Routes'
import { useForm } from "react-hook-form"
import { COLORS, ROUTES } from '../../constants'

const EMAIL_REGEX = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/
const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;

const Loginwithemail = ({navigation, route}) => {
    const {email} = route.params
    const [errorMessage, setErrorMessage] = useState('')
    const [errorVisible, setErrorVisible] = useState(false)
    const {userToken, setUserToken} = useContext(AuthContext)
    const {control, handleSubmit, formState:{errors}, watch} = useForm({
        defaultValues: {
            email: email
        }
    });
    const headers = new Headers()
    const goToSignup = ()=>{
        navigation.navigate(ROUTES.SIGNUP)
     }
     const handleNavigate =(data)=>{
        console.log(data)
        let body ={}
        body.email = data.email
        body.password= data.password
        headers.append("Content-type", "application/json" )
        fetch(`${BASE_URL}login`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        })
        .then ((res)=> {
            if (res.status !== 200 ){
                throw new Error('There was an error');
            }
            return res.json()
        })
        .then((data)=>{
            setUserToken(true)
        })
        .catch((err)=>{
            console.log(err.message)
            setErrorVisible(true)
            setTimeout(() => {
                setErrorVisible(false)
              }, 5000);
            setErrorMessage(err.message)
        })
     }
  return (
    <View style={styles.container}>
        <Header header={"Enter your password"} newStyle={{marginTop: 24, alignSelf: "center", textAlign: "center"}} />
        <CustomInput 
      name={"email"}
      control={control}
      placeholder={"Enter email address"}
      label={"Email"}
      textColor={COLORS.grey}
      rules={{
          required: "Please enter your email",
          pattern: {
              value: EMAIL_REGEX,
              message: "Email not valid"
          }
      }}
      inputHeight={56}
      newStyle={{
        marginTop: 32
      }}
      />
      <CustomInput 
      name={"password"}
      control={control}
      placeholder={"*****"}
      label={"Password"}
      textColor={COLORS.grey}
      rules={{
          required: "Password is required",
          pattern: {
              value: passwordPattern,
              message: "Password must be between 8 and 15 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
          }
      }}
      secureTextEntry={true}
      inputHeight={56}
      newStyle={{
        marginTop: 32
      }}
      />
      <TextButton textButton={"Forgot password"} deleteColor={{marginTop: 10, color: COLORS.grey}} />
      <Button buttonPress={handleSubmit(handleNavigate)} buttonText={"SIGN UP WITH EMAIL"} marginVertical={32} width={"100%"} height={56} alignItems={"center"} borderRadius={8} backgroundColor={COLORS.tintGreen} borderColor={COLORS.faintGreen} borderWidth={1} justifyContent={"center"}   />
      <View style={styles.textInput}>
      <Text style={styles.al}>{"Don\'t have an account?"}</Text>
        <TextButton textButton={"Sign up"} handlePressed={goToSignup} deleteColor={{marginLeft: 5}} />
      </View>
      {errorVisible && <View style={{backgroundColor: COLORS.backColor, padding: 8, position: 'absolute', top: StatusBar.currentHeight + 20, right: 0, borderTopLeftRadius: 8, borderBottomLeftRadius: 8}}>
          <Text style={styles.text}>{`Oops! ${errorMessage}`}</Text>
        </View>}
    </View>
  )
}

export default Loginwithemail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backColor,
        paddingHorizontal: 20,
        position: 'relative'
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
    },
    text: {
        color: 'red',
        fontSize: 16
    },
})