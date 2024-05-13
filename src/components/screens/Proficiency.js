import { StyleSheet, View, Dimensions } from 'react-native'
import React, {useState} from 'react'
import { COLORS, ROUTES } from '../../constants'
import Header from '../reusables/Header'
import Svg, {Circle} from 'react-native-svg';
import { FlatList } from 'react-native-gesture-handler';
import LanguageList from '../reusables/LanguageList';
import Button from '../reusables/Button';

const {width, height} = Dimensions.get('screen')

const DATA = [
    {
        id: "1",
        header: "Novice",
        subHeader: "I’m new to Yoruba",
        svg: ()=>{
            return (
                <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Circle cx="6" cy="26" r="3.75" stroke="#ABB3C7" stroke-width="0.5"/>
                    <Circle cx="16" cy="16" r="3.75" stroke="#ABB3C7" stroke-width="0.5"/>
                    <Circle cx="26" cy="6" r="3.75" stroke="#ABB3C7" stroke-width="0.5"/>
                </Svg>
            )
        }
    },
    {
        id: "2",
        header: "Beginner",
        subHeader: "I know some words in Yoruba",
        svg: ()=>{
            return (
                <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Circle cx="6" cy="26" r="4" fill="#4CA6A8"/>
                    <Circle cx="16" cy="16" r="3.75" stroke="#ABB3C7" stroke-width="0.5"/>
                    <Circle cx="26" cy="6" r="3.75" stroke="#ABB3C7" stroke-width="0.5"/>
                </Svg>
            )
        }
    },
    {
        id: "3",
        header: "Intermediate",
        subHeader: "I can have simple conversations in Yoruba ",
        svg: ()=>{
            return (
                <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Circle cx="6" cy="26" r="4" fill="#4CA6A8"/>
                    <Circle cx="16" cy="16" r="4" fill="#4CA6A8"/>
                    <Circle cx="26" cy="6" r="3.75" stroke="#ABB3C7" stroke-width="0.5"/>
                </Svg>
            )
        }
    },
]

const Proficiency = ({navigation}) => {
    const [selected, setSelected] = useState(null)

    const handleSelect = (id)=>{
        setSelected(id)
    }
    const handleNavigate = ()=>{
        navigation.navigate(ROUTES.SIGNUP)
    }
  return (
    <View style={styles.container}>
      <Header header={"How would you describe your proficiency in Yoruba?"} newStyle={{marginTop: 24}} />
      <FlatList 
      data={DATA}
      keyExtractor={item=>item.id}
      renderItem={({item})=> <LanguageList id={item.id} svg={item.svg()} description={item.header} selected={selected} handleSelect={handleSelect} another={item.subHeader}  />}
      />
      <View style={styles.buttonContainer}>
        <Button buttonPress={handleNavigate} buttonText={"Continue"} width={"100%"} height={56} alignItems={"center"} borderRadius={8} backgroundColor={COLORS.tintGreen} borderColor={COLORS.faintGreen} borderWidth={1} justifyContent={"center"}   />
      </View>
    </View>
  )
}

export default Proficiency

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backColor,
        paddingHorizontal: 20,
        position: 'relative'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 15,
        left: 0,
        width,
        paddingHorizontal: 20
    }
})