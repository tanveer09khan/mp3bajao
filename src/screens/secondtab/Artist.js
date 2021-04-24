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

import images from '../../assets/images';
import { Myicons } from '../../common/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
//import Recap from '../../common/Recap';

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


export default class Artist extends Component {

    state = {
        Artiest: [
            { image: images.sld, title: 'Foe Doe', },
            { image: images.sld, title: 'Zehe Jin' },
            { image: images.sld, title: 'Ase Kan' },
            { image: images.sld, title: 'Jeh Doe', },
            { image: images.sld, title: 'Ase Poe' },
            { image: images.sld, title: 'loee Cal' }
        ]
    }
    
   
    render() {
    
        return (
            <PaperProvider theme={theme}>
             <View style={{ flex: 1 }}>
             <View style={{ flexDirection: 'row',  marginVertical: 10 }}>
<TouchableOpacity onPress={() => this.props.navigation.navigate('AllTab')} style={{ marginLeft: 15, flexDirection: 'row', marginTop: 20, alignItems: 'flex-start' }}>
                        <Ionicons name="arrow-back-outline" size={25} color="red" style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                {/* <Recap headerText='recap' /> */}
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')} style={{ marginLeft:320,flexDirection: 'row', marginTop: 10,alignSelf:"flex-end"}}>
                    <Ionicons name="search" size={25} color="red" style={{ marginRight: 10 }} />
                </TouchableOpacity>
                
               </View>
               <View >
                            {/* <Ionicons name="ios-arrow-forward-circle-outline" size={25} color="#0047AB" style={{ marginLeft: 10 }} /> */}
                            <Text style={{ marginTop: 20, marginLeft: 10, color: 'white', fontSize: 20, padding:20 }}>Artists</Text>
                        </View>
                      <View style={{padding:30}}>
                        <FlatList
                            Vertical
                            showsHorizontalScrollIndicator={false}
                            data={this.state.Artiest}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{flexDirection:'row'}}>
                                        <View style={{ marginHorizontal: 8, backgroundColor: '#fff', height: 70, width: 70, borderRadius: 70 / 2, alignItems: 'center', marginBottom:20 }}>
                                            <Myicons source={require("../../assets/icons/artist.jpg")} size={70} _style={{ borderRadius:900/2}} />
                                        </View>
                                        <TouchableOpacity style={{ marginTop: 5, }}>
                                            <Text  style={{ fontSize: 20,color:'grey',marginLeft: 30,marginVertical:15}}>{item.title}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('ArtistDetail')}>
                                        <Ionicons name="ellipsis-vertical"  size={20} color="grey" style={{ marginVertical: 25,marginLeft:"50%",position:"relative" }} />

                                            </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />
                        </View>
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