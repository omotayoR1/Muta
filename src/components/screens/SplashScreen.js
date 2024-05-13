import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { COLORS } from '../../constants'


const {width, height} = Dimensions.get('screen')

const SplashScreen = () => {
    return (
      <View style={styles.container}>
        <View style={styles.imageContanier}>
            <Image source={require('../../assets/Logo.png')} style={styles.image} resizeMode='contain' alt='logo' />
        </View>
      </View>
    )
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backColor,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContanier: {
    width: width/3.34,
    height: height/7.25
  },
  image: {
    width: "100%",
    height: "100%"
  }
})

export default SplashScreen