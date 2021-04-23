import React, { Component } from 'react'
import { useSelector } from "react-redux";
import { ImageBackground, View, TouchableOpacity, StyleSheet, ImageBackgroundComponent } from 'react-native'
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


export default class Login extends Component {
    
   
    render() {
    
        return (
            <PaperProvider theme={theme}>
             

<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{ marginLeft: 15, flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                        <Ionicons name="arrow-back-outline" size={25} color="red" style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                {/* <Recap headerText='recap' /> */}
                

                <View style={{ flex: 0.5, marginTop: 100}} />
               
               

                <View style={{ alignItems: "center" }}>

                    <Text style={{ fontSize: 25, color:"grey", marginBottom:10 }}>
                        Reset Password
                    </Text>
                    <Text style={{ fontSize: 20, color:"grey" }}>
                        Enter your email address below 
                    </Text>
                    <Text style={{ fontSize: 20, color:"grey" }}>
                          to reset Password
                    </Text>
                </View>
                <View style={{ flex: 0.1 }} />
                <View style={{ flex: 1, marginHorizontal: 80 }}>
                    <View>
                        <TextInput style={{backgroundColor: "transparent"}}
                            mode='flat'
                            placeholder="Email "
                            placeholderTextColor="grey"
                        // value={text}
                        // onChangeText={text => setText(text)}
                        />
                    </View>

                    
                   

                    <View style={{ marginTop: 30 }}>
                        <Button style={{ backgroundColor:"#D80015"}}
                            contentStyle={{ paddingVertical: 8, borderRadius: 50 }}
                            mode="contained" onPress={() => this.props.navigation.navigate('Reset1')}>
                            <Text style={styles.White}>Reset Password</Text>
                        </Button>
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