import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native'
import React, {useState,useEffect,useRef, createContext, useContext} from 'react'
import { COLORS, ROUTES } from './constants';
import Welcome from './components/screens/Welcome';
import Login from './components/screens/Login';
import Loginwithemail from './components/screens/Loginwithemail';
import Dashboard from './components/screens/Dashboard';
import Proficiency from './components/screens/Proficiency';
import SelectLanguage from './components/screens/SelectLanguage';
import Signup from './components/screens/Signup';
import SelectLearnLanguage from './components/screens/SelectLearnLanguage';
import Signwithemail from './components/screens/Signwithemail';
import Learn from './components/screens/Learn';
import Livesession from './components/screens/Livesession';
import Svg, {Path} from 'react-native-svg';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
export const AuthContext = createContext()


const MyTabs = ()=>{
    return (
        <Tab.Navigator initialRouteName={ROUTES.DASHBOARD} screenOptions={{
            tabBarActiveTintColor: COLORS.faintGreen,
            tabBarInactiveTintColor: COLORS.grey,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                marginBottom: 1,
                // paddingBottom: 5,
                backgroundColor: COLORS.green
            },
            tabBarStyle: {
                backgroundColor: COLORS.backColor,
                position: 'absolute',
                bottom: 0,
                left: 0,
                zIndex: 1000,
                paddingTop: 16,
                paddingBottom: 10,
                height: 60,
                borderTopWidth: 0,
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
                shadowOffset:{
                    width: 1,
                    height: 2
                },
                shadowColor: "rgba(0,0,0,1)",
                elevation: 20,
            }
        }}>
            <Tab.Screen 
            name={ROUTES.DASHBOARD} 
            component={Dashboard}
            options={{
                headerShown: false,
                tabBarLabel: "Home",
                tabBarIcon: ({size, focused, color}) => {
                    return (
                        <View style={styles.imageContainer}>
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M20.8603 8.36985L13.9303 2.82985C12.8603 1.96985 11.1303 1.96985 10.0703 2.81985L3.14027 8.36985C2.36027 8.98985 1.86027 10.2998 2.03027 11.2798L3.36027 19.2398C3.60027 20.6598 4.96027 21.8098 6.40027 21.8098H17.6003C19.0303 21.8098 20.4003 20.6498 20.6403 19.2398L21.9703 11.2798C22.1303 10.2998 21.6303 8.98985 20.8603 8.36985ZM12.0003 15.4998C10.6203 15.4998 9.50027 14.3798 9.50027 12.9998C9.50027 11.6198 10.6203 10.4998 12.0003 10.4998C13.3803 10.4998 14.5003 11.6198 14.5003 12.9998C14.5003 14.3798 13.3803 15.4998 12.0003 15.4998Z" fill={focused?COLORS.faintGreen:COLORS.grey}/>
                            </Svg>
                        </View>
                    )
                }
            }}
            />
            <Tab.Screen 
            name={ROUTES.LEARN} 
            component={Learn}
            options={{
                headerShown: false,
                tabBarLabel: "Learn",
                tabBarIcon: ({size, focused, color}) => {
                    return (
                        <View style={styles.imageContainer}>
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M21.999 16.7397V4.6697C21.999 3.4697 21.019 2.5797 19.829 2.6797H19.769C17.669 2.8597 14.479 3.9297 12.699 5.0497L12.529 5.1597C12.239 5.3397 11.759 5.3397 11.469 5.1597L11.219 5.0097C9.43902 3.8997 6.25902 2.8397 4.15902 2.6697C2.96902 2.5697 1.99902 3.4697 1.99902 4.6597V16.7397C1.99902 17.6997 2.77902 18.5997 3.73902 18.7197L4.02902 18.7597C6.19902 19.0497 9.54902 20.1497 11.469 21.1997L11.509 21.2197C11.779 21.3697 12.209 21.3697 12.469 21.2197C14.389 20.1597 17.749 19.0497 19.929 18.7597L20.259 18.7197C21.219 18.5997 21.999 17.6997 21.999 16.7397Z" stroke={focused?COLORS.faintGreen:COLORS.grey}stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M12 5.49023V20.4902" stroke={focused?COLORS.faintGreen:COLORS.grey} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M7.75098 8.49023H5.50098" stroke={focused?COLORS.faintGreen:COLORS.grey} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M8.50098 11.4902H5.50098" stroke={focused?COLORS.faintGreen:COLORS.grey} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </View>
                    )
                }
            }}
            />
            <Tab.Screen 
            name={ROUTES.LIVESESSION} 
            component={Livesession}
            options={{
                headerShown: false,
                tabBarLabel: "Live session",
                tabBarLabelStyle: {
                    color: COLORS.grey
                },
                tabBarIcon: ({size, focused, color}) => {
                    return (
                        <View style={styles.imageContainer}>
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M12.0315 22C11.8023 22 11.6017 21.919 11.4298 21.757C11.2579 21.5943 11.1719 21.3887 11.1719 21.1404C11.1719 20.8921 11.2579 20.6865 11.4298 20.5238C11.6017 20.3618 11.8023 20.2808 12.0315 20.2808H19.5673C19.6628 20.2808 19.7442 20.2476 19.8115 20.1811C19.8779 20.1138 19.9112 20.0325 19.9112 19.937V11.6562C19.9112 10.5482 19.701 9.50716 19.2808 8.53295C18.8606 7.55874 18.2875 6.70869 17.5616 5.98281C16.8357 5.25692 15.9857 4.68386 15.0115 4.26361C14.0372 3.84336 12.9962 3.63324 11.8883 3.63324C10.7803 3.63324 9.73925 3.84336 8.76504 4.26361C7.79083 4.68386 6.94078 5.25692 6.2149 5.98281C5.48902 6.70869 4.91595 7.55874 4.4957 8.53295C4.07545 9.50716 3.86533 10.5482 3.86533 11.6562V17.7593C3.86533 17.9885 3.78395 18.1891 3.6212 18.361C3.45922 18.5329 3.25406 18.6189 3.00573 18.6189C2.45177 18.6189 1.97918 18.4233 1.58797 18.0321C1.19599 17.6401 1 17.1671 1 16.6132V14.3209C1 13.9389 1.10506 13.5901 1.31519 13.2745C1.52531 12.9597 1.80229 12.6972 2.14613 12.4871L2.20344 10.9971C2.29895 9.67908 2.62865 8.46609 3.19255 7.35817C3.75568 6.25024 4.4766 5.29971 5.3553 4.50659C6.234 3.71423 7.2319 3.09838 8.349 2.65903C9.46686 2.21968 10.6466 2 11.8883 2C13.1299 2 14.3142 2.21968 15.4413 2.65903C16.5683 3.09838 17.5662 3.71423 18.435 4.50659C19.3045 5.29971 20.0212 6.24527 20.5851 7.34327C21.1482 8.44202 21.4776 9.65043 21.5731 10.9685L21.6304 12.4585C21.9742 12.6304 22.2512 12.8642 22.4613 13.1599C22.6714 13.4564 22.7765 13.7861 22.7765 14.149V16.7851C22.7765 17.1289 22.6714 17.4491 22.4613 17.7456C22.2512 18.0413 21.9742 18.2751 21.6304 18.447V19.937C21.6304 20.51 21.4298 20.9971 21.0287 21.3983C20.6275 21.7994 20.1404 22 19.5673 22H12.0315Z" fill={focused ? COLORS.faintGreen : COLORS.grey}/>
                            </Svg>
                        </View>
                    )
                }
            }}
            />
        </Tab.Navigator>
    )
}


const AuthFlow = () =>{
    return (
        <Stack.Navigator 
        screenOptions={{keyboardHandlingEnabled: false, }}
        initialRouteName={ROUTES.WELCOME}>
            <Stack.Screen 
            name={ROUTES.WELCOME}
            component={Welcome}
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen 
            name={ROUTES.LOGIN}
            component={Login}
            options={{
                headerShown: true,
                title: "Login",
                headerTitle: "",
                headerStyle: {
                    backgroundColor: COLORS.backColor,
                    shadowOffset:{
                        width: 0,
                        height: 0
                      },
                      shadowColor: "transaparent",
                      elevation: 0,
                },
                headerBackImage: ()=>(
                    <Image source={require('./assets/Back.png')} resizeMode='contain' style={{width: 32, height: 32}} alt='back' />
                )
            }}
            />
            <Stack.Screen 
            name={ROUTES.LOGINWITHEMAIL}
            component={Loginwithemail}
            options={{
                headerShown: true,
                title: "Login",
                headerTitle: "",
                headerStyle: {
                    backgroundColor: COLORS.backColor,
                    shadowOffset:{
                        width: 0,
                        height: 0
                      },
                      shadowColor: "transaparent",
                      elevation: 0,
                },
                headerBackImage: ()=>(
                    <Image source={require('./assets/Back.png')} resizeMode='contain' style={{width: 32, height: 32}} alt='back' />
                )
            }}/>
            <Stack.Screen 
            name={ROUTES.PROFICIENCY}
            component={Proficiency}
            options={{
                headerShown: true,
                title: "Proficiency",
                headerTitle: "",
                headerStyle: {
                    backgroundColor: COLORS.backColor,
                    shadowOffset:{
                        width: 0,
                        height: 0
                      },
                      shadowColor: "transaparent",
                      elevation: 0,
                },
                headerBackImage: ()=>(
                    <Image source={require('./assets/Back.png')} resizeMode='contain' style={{width: 32, height: 32}} alt='back' />
                )
            }}/>
            <Stack.Screen 
            name={ROUTES.SELECTLANGUAGE}
            component={SelectLanguage}
            options={{
                headerShown: true,
                title: "Select language",
                headerTitle: "",
                headerStyle: {
                    backgroundColor: COLORS.backColor,
                    shadowOffset:{
                        width: 0,
                        height: 0
                      },
                      shadowColor: "transaparent",
                      elevation: 0,
                },
                headerBackImage: ()=>(
                    <Image source={require('./assets/Back.png')} resizeMode='contain' style={{width: 32, height: 32}} alt='back' />
                )
            }}/>
            <Stack.Screen 
            name={ROUTES.SELECTLEARNLANGUAGE}
            component={SelectLearnLanguage}
            options={{
                headerShown: true,
                title: "Select learn language",
                headerTitle: "",
                headerStyle: {
                    backgroundColor: COLORS.backColor,
                    shadowOffset:{
                        width: 0,
                        height: 0
                      },
                      shadowColor: "transaparent",
                      elevation: 0,
                },
                headerBackImage: ()=>(
                    <Image source={require('./assets/Back.png')} resizeMode='contain' style={{width: 32, height: 32}} alt='back' />
                )
            }}/>
            <Stack.Screen 
            name={ROUTES.SIGNUP}
            component={Signup}
            options={{
                headerShown: true,
                title: "Sign up",
                headerTitle: "",
                headerStyle: {
                    backgroundColor: COLORS.backColor,
                    shadowOffset:{
                        width: 0,
                        height: 0
                      },
                      shadowColor: "transaparent",
                      elevation: 0,
                },
                headerBackImage: ()=>(
                    <Image source={require('./assets/Back.png')} resizeMode='contain' style={{width: 32, height: 32}} alt='back' />
                )
            }}/>
            <Stack.Screen 
            name={ROUTES.SIGNUPWITHEMAIL}
            component={Signwithemail}
            options={{
                headerShown: true,
                title: "Sign up",
                headerTitle: "",
                headerStyle: {
                    backgroundColor: COLORS.backColor,
                    shadowOffset:{
                        width: 0,
                        height: 0
                      },
                      shadowColor: "transaparent",
                      elevation: 0,
                },
                headerBackImage: ()=>(
                    <Image source={require('./assets/Back.png')} resizeMode='contain' style={{width: 32, height: 32}} alt='back' />
                )
            }}/>
        </Stack.Navigator>
    )
}

const MainApp = ()=>{
    const { userToken } = useContext(AuthContext);
    return (
        <Stack.Navigator>
            {
                userToken ?
                (
                    <Stack.Screen 
                    name="Mytabs"
                    component={MyTabs}
                    options={{
                        headerShown: false
                    }}/>
                )
                :
                (
                    <Stack.Screen
                    name="Authflow"
                    component={AuthFlow}
                    options={{
                        headerShown: false
                    }} />
                )
            }
        </Stack.Navigator>
    )
}

const Routes = () => {
    const [userToken, setUserToken] = useState(false)
  return (
    <AuthContext.Provider value={{userToken, setUserToken}}>
        <NavigationContainer>
            <MainApp />
        </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default Routes

const styles = StyleSheet.create({
    imageContainer: {
        width: 24,
        height: 24
      },
})