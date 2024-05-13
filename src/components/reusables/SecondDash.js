import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import { IconButton } from '../screens/Signup'
import {useFonts} from 'expo-font';
import Svg, {Path,Rect} from 'react-native-svg';

const {width, height} = Dimensions.get('screen')


const Icon1 = ()=>{
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M18.1414 6.07461L13.2581 3.89961C12.5414 3.58294 11.4581 3.58294 10.7414 3.89961L5.85807 6.07461C4.62474 6.62461 4.44141 7.37461 4.44141 7.77461C4.44141 8.17461 4.62474 8.92461 5.85807 9.47461L10.7414 11.6496C11.0997 11.8079 11.5497 11.8913 11.9997 11.8913C12.4497 11.8913 12.8997 11.8079 13.2581 11.6496L18.1414 9.47461C19.3747 8.92461 19.5581 8.17461 19.5581 7.77461C19.5581 7.37461 19.3831 6.62461 18.1414 6.07461Z" fill="#FF8700"/>
            <Path d="M12.0003 16.2003C11.6836 16.2003 11.3669 16.1337 11.0753 16.0087L5.45859 13.5087C4.60026 13.1253 3.93359 12.1003 3.93359 11.1587C3.93359 10.817 4.20859 10.542 4.55026 10.542C4.89193 10.542 5.16693 10.817 5.16693 11.1587C5.16693 11.6087 5.54193 12.192 5.95859 12.3753L11.5753 14.8753C11.8419 14.992 12.1503 14.992 12.4169 14.8753L18.0336 12.3753C18.4503 12.192 18.8253 11.617 18.8253 11.1587C18.8253 10.817 19.1003 10.542 19.4419 10.542C19.7836 10.542 20.0586 10.817 20.0586 11.1587C20.0586 12.092 19.3919 13.1253 18.5336 13.5087L12.9169 16.0087C12.6336 16.1337 12.3169 16.2003 12.0003 16.2003Z" fill="#FF8700"/>
            <Path d="M12.0003 20.3331C11.6836 20.3331 11.3669 20.2665 11.0753 20.1415L5.45859 17.6415C4.53359 17.2331 3.93359 16.3081 3.93359 15.2915C3.93359 14.9498 4.20859 14.6748 4.55026 14.6748C4.89193 14.6748 5.16693 14.9498 5.16693 15.2915C5.16693 15.8165 5.47526 16.2915 5.95859 16.5081L11.5753 19.0081C11.8419 19.1248 12.1503 19.1248 12.4169 19.0081L18.0336 16.5081C18.5086 16.2998 18.8253 15.8165 18.8253 15.2915C18.8253 14.9498 19.1003 14.6748 19.4419 14.6748C19.7836 14.6748 20.0586 14.9498 20.0586 15.2915C20.0586 16.3081 19.4586 17.2248 18.5336 17.6415L12.9169 20.1415C12.6336 20.2665 12.3169 20.3331 12.0003 20.3331Z" fill="#FF8700"/>
        </Svg>
    )
}

const Icon2 = ()=>{
    return(
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M19.0832 15.3333V17.4167C19.0832 19.025 17.7748 20.3333 16.1665 20.3333H7.83317C6.22484 20.3333 4.9165 19.025 4.9165 17.4167V16.875C4.9165 15.5667 5.98317 14.5 7.2915 14.5H18.2498C18.7082 14.5 19.0832 14.875 19.0832 15.3333Z" fill="#FF8700"/>
            <Path d="M14.9165 3.66699H9.08317C5.74984 3.66699 4.9165 4.50033 4.9165 7.83366V14.1503C5.54984 13.592 6.38317 13.2503 7.2915 13.2503H18.2498C18.7082 13.2503 19.0832 12.8753 19.0832 12.417V7.83366C19.0832 4.50033 18.2498 3.66699 14.9165 3.66699ZM12.8332 10.9587H8.6665C8.32484 10.9587 8.0415 10.6753 8.0415 10.3337C8.0415 9.99199 8.32484 9.70866 8.6665 9.70866H12.8332C13.1748 9.70866 13.4582 9.99199 13.4582 10.3337C13.4582 10.6753 13.1748 10.9587 12.8332 10.9587ZM15.3332 8.04199H8.6665C8.32484 8.04199 8.0415 7.75866 8.0415 7.41699C8.0415 7.07533 8.32484 6.79199 8.6665 6.79199H15.3332C15.6748 6.79199 15.9582 7.07533 15.9582 7.41699C15.9582 7.75866 15.6748 8.04199 15.3332 8.04199Z" fill="#FF8700"/>
        </Svg>
    )
}

const Icon3 = ()=>{
    return (
        <Svg width="168" height="4" viewBox="0 0 168 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect width="168" height="4" rx="2" fill="#D8DFEB"/>
            <Rect width="96" height="4" rx="2" fill="#FF8700"/>
            <Rect width="96" height="4" rx="2" fill="#FF8700"/>
        </Svg>
    )
}

const Icon4 =()=>{
    return (
        <View style={styles.iconImage}>
            <Image source={require('../../assets/Group.png')} style={styles.iconimages} />
        </View>
    )
}

const SecondDash = () => {
    const [loaded] = useFonts({
        axiformaBold: require("../../../assets/fonts/Axiforma-Regular.ttf"),
        axiformaMedium: require("../../../assets/fonts/Axiforma-Medium.ttf")
     })
     if(!loaded){
        return null
    }
  return (
    <View style={styles.container}>
      <View style={styles.stageContainer}>
        <IconButton icon={Icon1} containText={true} iconText={"Intermediate"} flexDirection={"row"} alignItems={"center"} marginLeftText={10} color={COLORS.white} fontFamily={"axiformaBold"} />
        <IconButton icon={Icon2} containText={true} iconText={"Lesson 2"} flexDirection={"row"} alignItems={"center"} marginLeftText={10} color={COLORS.white} fontFamily={"axiformaBold"} />
      </View>
      <View style={styles.stageContainer2}>
        {Icon3()}
        <Text style={styles.textbos}>52%</Text>
      </View>
      <View>
        <IconButton icon={Icon4} containText={true} fontFamily={"axiformaMedium"} iconText={"Start learning"} flexDirection={"row-reverse"} width={width/1.8} justifyContent={'space-between'} backgroundColor={COLORS.faintGreen} paddingHorizontal={12} alignItems={'center'} paddingVertical={8} borderRadius={32} />
      </View>
      <View style={styles.image}>
        <Image source={require('../../assets/yoruba.png')} style={styles.images} resizeMethod='contain' alt='yoruba' />
      </View>
    </View>
  )
}

export default SecondDash

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: height/4.16,
        backgroundColor: COLORS.tintDark,
        marginVertical: 24,
        borderRadius: 16,
        position: "relative",
        padding: 16
    },
    image: {
        position: 'absolute',
        width: width/4,
        height: height/6,
        top: 20, 
        right: 0, 

    },
    images: {
        width: "100%",
        height: "100%"
    },
    stageContainer: {
        flexDirection: 'column',
        marginTop: 5
    },
    stageContainer2: {
        flexDirection: "row",
        marginVertical: 16,
        alignItems: 'center'
    },
    textbos: {
        color: COLORS.white,
        marginLeft: 10
    },
    iconImage: {
        width: 32,
        height: 32
    },
    iconimages: {
        width: "100%",
        height: "100%"
    }
})