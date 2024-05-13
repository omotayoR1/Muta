import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { COLORS, ROUTES } from '../../constants'
import {useFonts} from 'expo-font';
import Button from '../reusables/Button';

const {width, height} = Dimensions.get('screen')

const Welcome = ({navigation}) => {

    const [loaded] = useFonts({
        axiformaLight: require('../../../assets/fonts/Axiforma-Light.ttf'),
        axiformRegular: require('../../../assets/fonts/Axiforma-Regular.ttf'),
        magica: require('../../../assets/fonts/Magica.otf')
     })

     const handleLanguageSelection = () =>{
        navigation.navigate(ROUTES.SELECTLANGUAGE)
     }
     const handleLogin = ()=>{
        navigation.navigate(ROUTES.LOGIN)
     }
    
     if(!loaded){
         return null
     }
  return (
    <View style={styles.container}>
      <View style={styles.itemBackground}>
        <Image source={require('../../assets/Doodles.png')} resizeMode='cover' alt='doodles' style={styles.doodles} />
      </View>
      <View style={styles.holder}>
        <Text style={styles.textpreheader}>Learn languages from</Text>
        <Text style={styles.africa}>Africa</Text>
        <Text style={styles.mut}>Muta helps you learn African languages in the easiest way</Text>
        <Button buttonText={"GET STARTED"} buttonPress={handleLanguageSelection} textColor={COLORS.backColor} fontSize={14} backgroundColor={COLORS.tintGreen} width={"100%"} height={56} marginTop={height/11.6} justifyContent={'center'} alignItems={"center"} borderRadius={8} borderWidth={1} borderColor={COLORS.faintGreen} />
        <Button buttonText={"LOG IN"} buttonPress={handleLogin} textColor={COLORS.faintGreen}  fontSize={14} width={"100%"} height={56} marginTop={height/26} justifyContent={'center'} alignItems={"center"} borderRadius={8} borderWidth={1} borderColor={COLORS.faintGreen} />
       </View>
       <View style={styles.privacy}>
        <Text style={styles.privacytext}>
            By continuing to this app, you agree to muta's Terms of service and Privacy policy
        </Text>
       </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:COLORS.backColor,
        position: 'relative'
    },
    itemBackground: {
        width,
        height: height/3.6
    },
    holder: {
        paddingHorizontal: 20
    },
    doodles: {
        width: "100%",
        height: "100%"
    },
    textpreheader: {
        color: COLORS.white,
        fontFamily: "axiformaLight"
    },
    africa: {
        marginVertical: 16,
        color: COLORS.white,
        fontFamily: "magica",
        fontSize: 64
    },
    mut: {
        color: COLORS.grey,
        fontFamily: 'axiformRegular',
        fontSize: 15
    },
    privacy: {
        position: 'absolute',
        bottom: 15,
        left: 0,
        width,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    privacytext: {
        textAlign: 'center',
        color: COLORS.grey
    }
})