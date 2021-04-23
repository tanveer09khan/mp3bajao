import { useSelector } from "react-redux";
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import { Image } from 'react-native'

import images from '../assets/images';
import Home from '../screens/firsttab/Home';
import Setting from '../screens/forthtab/Setting';
import Listpage from "../screens/secondtab/Listpage";
import Favourites from "../screens/thirdtab/Favourites";
import { Myicons } from "../common/styles";

import Icon from 'react-native-vector-icons/Octicons';

import Trackplayer from "../screens/Trackplayer";
import Splash from "../screens/Splash";
import Login from "../screens/auth/Login";
import Createaccount from "../screens/auth/Createaccount";
import RadioScreen from '../screens/thirdtab/RadioScreen'
import MyAccount from "../screens/forthtab/MyAccount";
import Otp2 from "../screens/auth/Otp/Otp2";
import Otp1 from "../screens/auth/Otp/Otp1";
import ForgotPass from '../screens/auth/ForgotPass'
import Reset1 from '../screens/auth/Reset/Reset1'
import Reset2 from '../screens/auth/Reset/Reset2'
import Reset3 from '../screens/auth/Reset/Reset3'

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


function AllTab() {
    return (
        <Tab.Navigator
            // initialRouteName={props.route.params.fromWhere}
            tabBarPosition='bottom'
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'tomato' }}
            swipeEnabled={true}
            tabBarOptions={{
                // tabBarLabel: {
                //   color: Colors.violetBlue,
                // },
                indicatorStyle: {
                    borderBottomColor: 'red',
                    borderBottomWidth: 1.5,
                    borderColor: 'red',
                    width: 25,
                    marginLeft: 35,

                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',

                },
                showIcon: true,
                // indicatorStyle: {
                //     backgroundColor: 'red'
                // },
                 activeTintColor: 'red',
                 inactiveTintColor: 'grey',

                showLabel: false,
                // labelStyle: { fontSize: 12 },
                // tabStyle: { width: 100 ,backgroundColor:'pink'},
                style: {
                    // backgroundColor: isDark ? '#000': '#eee',
                    // shadowColor: "#000",
                    // shadowOffset: {
                    //     width: 0,
                    //     height: 2,
                    // },
                    // shadowOpacity: 0.25,
                    // shadowRadius: 3.84,

                    // elevation: 5,
                },
                labelStyle: {
                    textTransform: 'capitalize',
                    // fontSize: fonts.fontSize16,
                    // fontFamily: fonts.NovaSboldios,
                }
            }}
            // options={{
            //     tabBarIcon: ({ color, focused }) => (
            //         <Image
            //             style={{ height: 25, width: 25 }}
            //             resizeMode="contain"
            //             source={focused ? images.music_cl : images.music_cl}
            //         />
            //     ),
            // }}
            // screenOptions={({ route }) => ({
            //     tabBarIcon: ({ focused }) => {
            //         let iconName;
                    
            //         if (route.name === 'Home') {
            //             iconName = focused
                        
            //                  ? 'telescope'
            //                  : 'telescope-outline';
            //         } else if (route.name === 'List') {
            //              iconName = "book"
                        
            //                //  ? 'search'
            //                //  : 'search-outline';
            //         }
            //         else if (route.name === 'Favourites') {
            //             iconName = "heart"
            //                //  ? 'md-heart'
            //                //  : 'md-heart-outline';
            //         }
            //         else if (route.name === 'Setting') {
            //             iconName = "settings"
            //              //    ? 'settings'
            //              //    : 'settings-outline';
            //         }
            //         return <Icon name={iconName} size={20} color= "red"  />;
            //         //  <Icons name={iconNames} size={20} color="red" />;
            //          // <Myicons source={iconName} size={25} onImagePress={() => { }} />
            //     },
            // })}
            // tabBarIcon={{
            //     activeTintColor: 'tomato',
            //     inactiveTintColor: 'gray',
            //   }}
        >
            <Tab.Screen name="Home"
                component={Home}
                 options={{
                    tabBarIcon: ({ color }) => (
                       <Icon  name="telescope" color={color} size={25}/>
                //             style={{ height: 25, width: 25 }}
                //             resizeMode="contain"
        
                //         />
                    ),
                  
                // navigationOptions={
                //     {
                //          tabBarLabel: 'Navigation Title',
                //          tabBarIcon: ({ color, focused }) => {
                //              return (
                //                  <Image
                //                      style={{height:15,width:15}}
                //                      source={require('../assets/icons/music.png')}
                //                      resizeMode="contain"
                //                  />
                //              )
                //          },
                         tabBarOptions: {
                            activeTintColor: 'red',
                            inactiveTintColor: 'grey',
                        }
                     }}
                     
                 

            />


            <Tab.Screen name="List" 
            component={Listpage}
             options={{
                 tabBarIcon: ({ color }) => (
                     <Icon  name="book" color={color} size={25}/>
            //             style={{ height: 25, width: 25 }}
            //             resizeMode="contain"
            //             source={require('../assets/icons/music.png')}
            //         />
                ), tabBarOptions: {
                     activeTintColor: 'red',
                     inactiveTintColor: 'grey',
                }
             }}
            />


            <Tab.Screen name="Favourites" 
            component={Favourites}
            
            options={{
             tabBarIcon: ({ color }) => (
                   <Icon name="heart" color={color} size={25}/>
            //             style={{ height: 25, width: 25 }}
            //             resizeMode="contain"
            //             source={require('../assets/icons/music.png')}
            //         />
                 ),
                   tabBarOptions: {
                       activeTintColor: 'red',
                      inactiveTintColor: 'grey',
                   }}
              }
            />
            <Tab.Screen name="Setting" component={Setting}
               options={{
                tabBarIcon: ({ color }) => (
                      <Icon name="settings" color={color} size={25}/>
               //             style={{ height: 25, width: 25 }}
               //             resizeMode="contain"
               //             source={require('../assets/icons/music.png')}
               //         />
                    ),
                      tabBarOptions: {
                          activeTintColor: 'red',
                         inactiveTintColor: 'grey',
                      }}
                 }
            />
        </Tab.Navigator>
    )

}

export default () => {
    const themeReducer = useSelector(({ themeReducer }) => themeReducer);
    // const Tab = createBottomTabNavigator();


    return (
        <NavigationContainer theme={themeReducer.theme ? DarkTheme : DefaultTheme}>
            <PaperProvider theme={themeReducer.theme ? PaperDarkTheme : PaperDefaultTheme}>

                <Stack.Navigator
                    // initialRouteName="Home"

                    screenOptions={{
                        headerShown: false
                    }}
                >

                    {/* Splash */}
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="createaccount" component={Createaccount} />
                    <Stack.Screen name="AllTab" component={AllTab} />
                    <Stack.Screen name="Trackplayer" component={Trackplayer} />
                    <Stack.Screen name="RadioScreen" component={RadioScreen} />
                    <Stack.Screen name="ForgotPass" component={ForgotPass} />
                    <Stack.Screen name="Reset1" component={Reset1} />
                    <Stack.Screen name="Reset2" component={Reset2} />
                    <Stack.Screen name="Reset3" component={Reset3} />
                    <Stack.Screen name="MyAccount" component={MyAccount} />
                    <Stack.Screen name="Otp2" component={Otp2} />
                    <Stack.Screen name="Otp1" component={Otp1} />
                </Stack.Navigator>
            </PaperProvider>

        </NavigationContainer>
    )
}