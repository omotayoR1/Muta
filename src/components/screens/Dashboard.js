import { StyleSheet, Text, View,Dimensions,StatusBar, ScrollView, FlatList,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import {useFonts} from 'expo-font';
import TopHeader from '../reusables/TopHeader'
import SecondDash from '../reusables/SecondDash'
import ThirdDash from '../reusables/ThirdDash'
import FourthDash from '../reusables/FourthDash'
import { IconButton } from './Signup'
import Svg, {Path} from 'react-native-svg';

const {width, height} = Dimensions.get('screen')

export const Cards = ({amount, image, name,country, countryImage, id })=>{
    const [loaded] = useFonts({
        axiformaBold: require("../../../assets/fonts/Axiforma-Bold.ttf"),
        axiformaMedium: require("../../../assets/fonts/Axiforma-Medium.ttf"),
        axiformaRegular: require("../../../assets/fonts/Axiforma-Regular.ttf"),
     })
     if(!loaded){
        return null
    }
    return (
        <TouchableOpacity style={styles.cards}>
            <View style={styles.stack}>
                <View style={styles.imageCard}>
                    <Image source={image} style={styles.cardImage} />
                </View>
                <View style={styles.infoHolder}>
                    <Text style={styles.header}>{name}</Text>
                    <View style={styles.almost}>
                        <Text style={styles.ano}>{country}</Text>
                        <View style={styles.countryHolder}>
                            <Image source={countryImage} resizeMethod='contain' style={styles.imaggs} alt='asdd' />
                        </View>
                    </View>
                </View>
            </View>
            <Text style={styles.amount}>{amount}</Text>
            <View style={styles.number}>
                <Text style={styles.id}>{id}</Text>
            </View>
        </TouchableOpacity>
    )
}

const Icon = ()=>{
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M2.9624 22.5328C2.9624 22.5328 5.0749 28.8928 6.2774 30.2503C7.1274 31.2078 8.4474 32.2903 11.8924 31.5653C11.8924 31.5653 14.5824 31.2653 17.9224 28.7003C17.9224 28.7003 19.9449 27.3928 20.1574 24.8553C20.3174 22.9453 20.3699 15.7428 20.3699 15.7428C20.3699 15.7428 20.0524 13.9453 17.1499 13.9453C14.2499 13.9453 10.2274 15.8453 7.1824 17.6278C4.1399 19.4178 2.9624 22.5328 2.9624 22.5328Z" fill="#FFBF13"/>
            <Path d="M5.93017 18.4078C8.67017 16.6253 11.1527 15.5903 12.8127 14.8878C12.8127 14.8878 16.7877 13.1078 18.9677 14.4478C18.9677 14.4478 21.5652 16.3603 16.9627 19.2903C12.4002 22.1928 9.36517 23.2903 9.36517 23.2903C9.36517 23.2903 5.43767 24.8678 3.83767 22.6578C2.83517 21.2728 4.06267 19.6203 5.93017 18.4078Z" fill="white"/>
            <Path d="M6.56271 24.5146C5.11271 24.5146 3.98021 24.0096 3.28771 23.0546C2.87021 22.4771 2.71521 21.8096 2.84271 21.1246C3.05021 20.0071 4.01521 18.8371 5.56021 17.8346C8.28771 16.0596 10.7827 15.0046 12.4352 14.3071L12.5502 14.2571C12.6277 14.2221 14.7927 13.2646 16.8977 13.2646C17.8627 13.2646 18.6802 13.4671 19.3277 13.8671C19.3427 13.8771 19.3602 13.8871 19.3752 13.8996C19.7652 14.1871 20.4152 14.9546 20.3802 16.0121C20.3377 17.3071 19.3127 18.6021 17.3327 19.8621C12.7552 22.7746 9.72521 23.8846 9.59771 23.9296C9.56021 23.9446 8.12021 24.5146 6.56271 24.5146ZM16.8952 14.6271C15.0877 14.6271 13.1102 15.4996 13.0927 15.5071L12.9627 15.5621C11.3552 16.2421 8.92771 17.2696 6.30021 18.9771C5.10771 19.7521 4.31521 20.6496 4.18021 21.3746C4.12021 21.6996 4.18521 21.9796 4.38771 22.2596C4.82021 22.8546 5.54771 23.1571 6.56021 23.1571C7.85771 23.1571 9.09771 22.6646 9.11021 22.6621C9.16271 22.6421 12.1627 21.5396 16.5977 18.7196C18.1302 17.7446 18.9902 16.7671 19.0177 15.9696C19.0352 15.4346 18.6577 15.0796 18.5802 15.0121C18.1527 14.7546 17.5877 14.6271 16.8952 14.6271Z" fill="#FCC21B"/>
            <Path d="M15.59 23.8626C15.2975 23.3051 14.38 23.2901 13.5425 23.8301C12.705 24.3701 12.26 25.2601 12.555 25.8176C12.755 26.2001 13.25 26.3201 13.8075 26.1901L13.575 27.9301L15.445 26.9526L14.7875 25.7126C15.5025 25.1726 15.86 24.3801 15.59 23.8626Z" fill="#1B1E26"/>
            <Path d="M16.555 17.4728C15.2 17.8403 14.545 17.2128 14.1575 16.5878C13.77 15.9603 12.6425 12.8653 12.5325 10.5178C12.3475 6.51533 13.8325 1.56283 20.05 0.44533C29.2875 -1.21467 29.29 5.98283 29.18 8.27033C29.045 11.1253 28.085 13.7453 27.82 14.2653C27.635 14.6303 27.475 15.0978 26.425 15.2728C25.9 15.3603 25.0125 14.9903 24.8125 14.4578C24.3525 13.2328 28.225 3.07033 20.6775 4.80033C13.76 6.38533 17.59 15.8128 17.59 15.8128C17.59 15.8128 17.9125 17.1028 16.555 17.4728Z" fill="#4CA6A8"/>
            <Path d="M6.51741 20.4024C6.85241 20.0524 7.35491 19.8149 7.82991 19.7374C8.14991 19.6849 8.57241 19.6749 8.83491 19.8974C9.30491 20.2974 8.88491 21.0299 8.52241 21.3099C8.06741 21.6649 7.41491 21.8349 6.84491 21.7749C6.18491 21.7049 6.00991 21.1449 6.34241 20.6274C6.39241 20.5474 6.45241 20.4724 6.51741 20.4024Z" fill="#1B1E26"/>
        </Svg>
    )
}

const DATA = [
    {
        id: "1",
        name: "Tino Vinus",
        image: require('../../assets/Profile Pic.png'),
        amount: "🏆15,832",
        country: "United states",
        countryImage: require('../../assets/emojione-v1_flag-for-united-states.png')
    },
    {
        id: "2",
        name: "Tino Vinus",
        image: require('../../assets/Profile Pic.png'),
        amount: "🏆15,832",
        country: "United states",
        countryImage: require('../../assets/emojione-v1_flag-for-united-states.png')
    },
    {
        id: "3",
        name: "Tino Vinus",
        image: require('../../assets/Profile Pic.png'),
        amount: "🏆15,832",
        country: "United states",
        countryImage: require('../../assets/emojione-v1_flag-for-united-states.png')
    },
    {
        id: "4",
        name: "Tino Vinus",
        image: require('../../assets/Profile Pic.png'),
        amount: "🏆15,832",
        country: "United states",
        countryImage: require('../../assets/emojione-v1_flag-for-united-states.png')
    }
]

const Dashboard = () => {
  return (
    <ScrollView style={styles.container}>
      <TopHeader />
      <SecondDash />
      <ThirdDash />
      <FourthDash />
      <FlatList 
      data={DATA}
      keyExtractor={item=>item.id}
      renderItem={({item})=> <Cards id={item.id} name={item.name} image={item.image}  country={item.country} countryImage={item.countryImage} amount={item.amount}  />}/>
      <IconButton icon={Icon} containText={true} iconText={"Upgrade now to unlock all lessons"} fontFamily={'axiformaMedium'} flexDirection={"row"} borderRadius={32} backgroundColor={COLORS.faintGreen} marginVertical={24} paddingVertical={12} paddingHorizontal={24} alignItems={"center"} textAlign={"center"} />
      <View style={{paddingBottom: 100}}/>
    </ScrollView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container:{
        width,
        height,
        backgroundColor:COLORS.backColor,
        paddingTop: StatusBar.currentHeight + 10,
        paddingHorizontal: 20,
        paddingBottom: 100
    },
    cards: {
        width: '100%',
        height: height/8.67,
        backgroundColor: COLORS.tintDark,
        borderRadius: 8,
        paddingHorizontal: 16,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12
    },
    amount: {
        color: COLORS.darkYellow,
        fontFamily: 'axiformaMedium'
    },
    stack: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardImage : {
        width: "100%",
        height: "100%"
    },
    imageCard: {
        width: 48,
        height: 48
    },
    infoHolder: {
        flexDirection: 'column',
        marginLeft: 5
    },
    header: {
        fontFamily: 'axiformaBold',
        color: COLORS.white,
        fontSize: 15
    },
    almost : {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 5
    },
    ano: {
        color: COLORS.white,
        fontFamily: 'axiformaRegular',
        fontSize: 13
    },
    imaggs: {
        width: "100%",
        height: "100%"
    },
    countryHolder:{
        width: 20,
        height: 20,
        marginLeft: 5
    },
    number: {
        padding: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: COLORS.white,
        position: 'absolute',
        top: 0,
        left: 0
    },
    id: {
        fontFamily: 'axiformaBold',
        fontSize: 13
    }
})