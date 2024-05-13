import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import react, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import SplashScreen from './src/components/screens/SplashScreen';
import Routes from './src/Routes';

const {width, height} = Dimensions.get('screen')

export default function App() {
  const [splashScreenVisible, setSplashScreenVisible] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setSplashScreenVisible(false)
    }, 4000);
  },[])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {splashScreenVisible ? <SplashScreen /> : <Routes /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
