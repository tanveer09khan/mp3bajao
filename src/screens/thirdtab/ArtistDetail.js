import React, { Component } from 'react'
import { useSelector } from "react-redux";
import { ImageBackground, View, TouchableOpacity, StyleSheet, ImageBackgroundComponent,FlatList } from 'react-native'
import {
    Avatar,
    Button,
    Card,
    Title,
    Paragraph,
    List,
    Text,
    Headline,
    TextInput,
    IconButton,
    Provider as PaperProvider,
    DefaultTheme,
    DarkTheme as PaperDarkTheme,
    Searchbar
} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import images from '../../assets/images';
import { Myicons } from '../../common/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
//import Recap from '../../common/Recap';
import Tracks from './Tracks';
import Albums from './Albums';
import About from './About';


const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: '#152238',
      background: '#152238'
    },
  };
  const Tab = createMaterialTopTabNavigator();
  

export default class ArtistDetail extends Component {

    state = {
        Artiest: [
            { image: images.sld, title: 'Foe Doe', },
           
        ]
    }
    
    
   
    render() {
       
        return (
            <PaperProvider theme={theme}>
             <View style={{ flex: 1 }}>
             <View style={{ flexDirection: 'row',  marginVertical: 10 }}>
<TouchableOpacity onPress={() => this.props.navigation.navigate('AllTab')} style={{ marginLeft: 15, flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                        <Ionicons name="arrow-back-outline" size={25} color="red" style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                {/* <Recap headerText='recap' /> */}
                
                
                
               </View>
               
                      <View>
                        <FlatList
                            Vertical
                            showsHorizontalScrollIndicator={false}
                            data={this.state.Artiest}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{}}>
                                        <View style={{ marginHorizontal: 8, backgroundColor: '#fff', height: 70, width: 70, borderRadius: 70 / 2, marginLeft:"40%" }}>
                                            <Myicons source={require("../../assets/icons/artist.jpg")}  size={70} _style={{borderRadius:900/2}} />
                                        </View>
                                        <View style={{ marginTop: 5, }}>
                                            <Text style={{ fontSize: 20,color:'grey',marginLeft: 30,marginVertical:15,marginLeft:"40%"}}>{item.title}</Text>
                                        </View>
                                       
                                    </View>
                                )
                            }}
                        />
                        </View>
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
                        // backgroundColor: themeReducer.theme ? DefaultTheme : DarkTheme,
                        shadowColor: "#000",
                        // shadowOffset: {
                        //     width: 0,
                        //     height: 2,
                        // },
                        // shadowOpacity: 0.25,
                        // shadowRadius: 3.84,
                        marginLeft: 10,
                        marginTop: 20,
                        width: "100%",
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
                    component={Tracks} style={{color:"red"}}
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
                <Tab.Screen name="About" component={About} />


            </Tab.Navigator>
               </View>
               

               
                
                

            
            </PaperProvider>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%',
        height: 40
    },
    White: {
    
        // Define your HEX color code here.
        color: 'white'
        
      }
});