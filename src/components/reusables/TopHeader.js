import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native'
import React from 'react'
import Svg, {G,Path,Mask,} from 'react-native-svg';
import {useFonts} from 'expo-font';
import { COLORS } from '../../constants';
import { IconButton } from '../screens/Signup';

const {width, height} = Dimensions.get("screen")

const notifi = ()=>{
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M12.018 3.66797C8.98388 3.66797 6.51805 6.1338 6.51805 9.16797V11.8171C6.51805 12.3763 6.27971 13.2288 5.99555 13.7055L4.94138 15.4563C4.29055 16.538 4.73971 17.7388 5.93138 18.1421C9.88221 19.4621 14.1447 19.4621 18.0955 18.1421C19.2047 17.7755 19.6905 16.4646 19.0855 15.4563L18.0314 13.7055C17.7564 13.2288 17.518 12.3763 17.518 11.8171V9.16797C17.518 6.14297 15.043 3.66797 12.018 3.66797Z" stroke="#C6CFE6" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round"/>
            <Path d="M13.7139 3.93332C13.4298 3.85082 13.1364 3.78665 12.8339 3.74999C11.9539 3.63999 11.1106 3.70415 10.3223 3.93332C10.5881 3.25499 11.2481 2.77832 12.0181 2.77832C12.7881 2.77832 13.4481 3.25499 13.7139 3.93332Z" stroke="#C6CFE6" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M14.7681 18.4717C14.7681 19.9842 13.5306 21.2217 12.0181 21.2217C11.2664 21.2217 10.5697 20.91 10.0747 20.415C9.57973 19.92 9.26807 19.2233 9.26807 18.4717" stroke="#C6CFE6" stroke-width="1.3" stroke-miterlimit="10"/>
        </Svg>
    )
}

const TopHeader = () => {
    const [loaded] = useFonts({
        axiformaBold: require("../../../assets/fonts/Axiforma-Bold.ttf")
     })
     if(!loaded){
        return null
    }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contanier1}>
        <Text style={styles.solid}>Yoruba Lessons</Text>
        <View style={styles.holder}>
        <Svg width="24" height="24" viewBox="0 0 24 24"  fill="none" xmlns="http://www.w3.org/2000/svg">
            <Mask id="mask0_1413_1958" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="7" y="9" width="10" height="7">
            <Path d="M7 9H17V15.6667H7V9Z" fill="white"/>
            </Mask>
            <G mask="url(#mask0_1413_1958)">
            <Path d="M17.0003 9.52988C17.0003 9.62879 16.9664 9.72629 16.9003 9.81248L12.5522 15.4193C12.4323 15.5733 12.2245 15.6673 12.0002 15.6673C11.7758 15.6673 11.568 15.5733 11.4481 15.4193L7.10003 9.81248C6.97396 9.64928 6.96614 9.44298 7.08177 9.27412C7.19654 9.10456 7.41477 9 7.65212 9H16.3482C16.5855 9 16.8038 9.10456 16.9185 9.27412C16.9733 9.35396 17.0003 9.44227 17.0003 9.52988Z" fill="#C6CFE6"/>
            </G>
        </Svg>
        </View>
      </TouchableOpacity>
      <View style={styles.second}>
        <IconButton icon={notifi} containText={false} marginRight={10} />
        <TouchableOpacity style={styles.imageHolder}>
            <Image source={require('../../assets/Logo.png')} resizeMethod="cover" style={styles.image} alt="profile" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TopHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    contanier1: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    solid:{
        color: COLORS.grey,
        fontFamily: 'axiformaBold'
    },
    holder: {
        marginLeft: 5
    },
    second: {
        flexDirection: "row",
        alignItems: "center"
    },
    imageHolder: {
        width: 40,
        height: 40
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 20
    }
})