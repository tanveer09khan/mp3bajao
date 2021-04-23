import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {
    List, Switch, Card, Headline, Searchbar
} from 'react-native-paper';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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
import Tracks from './Tracks';
import Albums from './Albums';
import images from '../../assets/images';
import { Myicons } from '../../common/styles';
import { useSelector } from "react-redux";


// export default class Favourites extends Component {

// static themeReducer = useSelector(({ themeReducer }) => themeReducer);
// state = {
//     query: ''
// }

export default Favourites = () => {
    const themeReducer = useSelector(({ themeReducer }) => themeReducer);

    const [query, setquery] = React.useState('')

    // render() {
    const Tab = createMaterialTopTabNavigator();

    return (
        <View style={{ flex: 1 }}>

            <Headline style={{ marginLeft: 23 }}>Favourites</Headline>


            <Searchbar
                placeholder="Search"
                // onChangeText={(text) => this.setState({ query: text })}
                // value={this.state.query}
                onChangeText={(text) => setquery({ query: text })}
                value={query}
                style={{ marginHorizontal: 10, marginVertical: 15 }}
            />



            <Tab.Navigator
            
                // initialRouteName={props.route.params.fromWhere}
                tabBarOptions={{
                    // tabBarLabel: {
                    //   color: Colors.violetBlue,
                    // },
                    indicatorStyle: {
                        borderBottomColor: 'red',
                        borderBottomWidth: 1.5,
                        borderColor: 'red',
                        width: '30%',
                        marginLeft: 15,

                        alignItems: 'center',
                        alignContent: 'center',
                        justifyContent: 'center',

                    },
                    showIcon: true,
                    // indicatorStyle: {
                    //     backgroundColor: 'red'
                    // },
                    // activeTintColor: 'red',
                    // inactiveTintColor: 'red',

                    // showLabel: false,
                    // labelStyle: { fontSize: 12 },
                    // tabStyle: { width: 100 ,backgroundColor:'pink'},
                    style: {
                        backgroundColor: themeReducer.theme ? DefaultTheme : DarkTheme,
                        shadowColor: "#000",
                        // shadowOffset: {
                        //     width: 0,
                        //     height: 2,
                        // },
                        // shadowOpacity: 0.25,
                        // shadowRadius: 3.84,
                        marginLeft: 10,
                        marginTop: 20,
                        width: 150,
                        elevation: 0,
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
                screenOptions={({ route }) => ({
                    // tabBarIcon: ({ focused, color, size }) => {
                    //     let iconName;
                    //     if (route.name === 'Tracks') {
                    //         iconName = focused
                    //             ? images.music
                    //             : images.music_cl;
                    //     } else if (route.name === 'Albums') {
                    //         iconName = focused ? images.bookmark
                    //             : images.bookmark;
                    //     }

                    //     return <Myicons source={iconName} size={25} onImagePress={() => { }} />
                    // },
                })}
            >
                <Tab.Screen name="Tracks"
                    component={Tracks}
                    // options={{
                    //     tabBarIcon: ({ color, focused }) => (
                    //         <Image
                    //             style={{ height: 25, width: 25 }}
                    //             resizeMode="contain"
                    //             source={focused ? images.music_cl : images.music_cl}
                    //         />
                    //     ),
                    // }}
                    navigationOptions={
                        {
                            // tabBarLabel: 'Navigation Title',
                            // tabBarIcon: ({ focused, color, size }) => {
                            //     return (
                            //         <Image
                            //             style={{height:15,width:15}}
                            //             source={require('../assets/icons/music.png')}
                            //             resizeMode="contain"
                            //         />
                            //     )
                            // }

                        }
                        // tabBarOptions: {
                        //     activeTintColor: '#000',
                        //     inactiveTintColor: '#fff',
                        // }
                    }

                />


                <Tab.Screen name="Albums" component={Albums} />


            </Tab.Navigator>


        </View>
    )
}

