import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Dimensions, Image, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import { COLORS, ROUTES } from '../../constants'
import Header from '../reusables/Header'
import Button from '../reusables/Button'
import {BASE_URL} from '@env'
import {useFonts} from 'expo-font';

const {width, height} = Dimensions.get('screen')


export const LearnLanguage = ({id, icon,languageName }) => {

    const [selectedd, setSelectedd] = useState(false)

    const [loaded] = useFonts({
        axiformaBold: require('../../../assets/fonts/Axiforma-Bold.ttf'),
     })

     const changeVorder = (id)=>{
        setSelectedd(id)
     }

     if(!loaded){
        return null
    }
    return (
        <TouchableOpacity onPress={()=>changeVorder(id)} style={[styles.learn, selectedd===id ? {borderColor: COLORS.faintGreen} : null ]}>
            <View style={styles.iconContanier}>
                <Image source={{uri: icon}} style={styles.icon} resizeMode='contain' alt={id} />
            </View>
            <Text style={{fontFamily: 'axiformaBold', color: COLORS.white, marginTop: 24}}>{languageName}</Text>
        </TouchableOpacity>
    )
}


const SelectLearnLanguage = ({navigation}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const handleNavigate = ()=>{
        navigation.navigate(ROUTES.PROFICIENCY)
    }
    const headers = new Headers()

    useEffect(()=>{
        headers.append("Content-type", "application/json" )
        fetch(`${BASE_URL}get-all-languages`, {
            method: 'GET',
            headers: headers
        })
        .then((res)=>{
            if (!res.ok){
                throw new Error('Network response was not ok');
            }
            return res.json()
        })
        .then((data)=>{
            setLoading(false)
            setData(data.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])


  return (
    <ScrollView style={styles.container}>
      <Header header={"I want to learn..."} newStyle={{marginTop: 24}} />
      {
        loading ?
        <>
        <ActivityIndicator size={'large'} color={COLORS.faintGreen} />
        </>
        :
        <>
        <FlatList
        data={data}
        keyExtractor={item=> item.language_id}
        numColumns={2}
        renderItem={({item})=> <LearnLanguage id={item.language_id} languageName={item.languageName} icon={item.languageIcon} />}
        />
        <Button buttonPress={handleNavigate} marginVertical={20} buttonText={"Continue"} width={"100%"} height={56} alignItems={"center"} borderRadius={8} backgroundColor={COLORS.tintGreen} borderColor={COLORS.faintGreen} borderWidth={1} justifyContent={"center"}   />
        </>
      }
    </ScrollView>
  )
}

export default SelectLearnLanguage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backColor,
        paddingHorizontal: 20,
    },
    learn: {
        borderColor: COLORS.tintDark,
        borderRadius: 8,
        borderWidth: 1,
        height: height/5.2,
        margin: 10,
        width: '44%',
        justifyContent: 'center',
        alignItems:"center",
        flexDirection: 'column'
    },
    iconContanier : {
        width: width/5.85,
        height: height/13
    },
    icon: {
        width: '100%',
        height: '100%'
    }
})