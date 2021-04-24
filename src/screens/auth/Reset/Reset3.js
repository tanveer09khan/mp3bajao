import React, { Component } from 'react'
import { ImageBackground, View, TouchableOpacity, StyleSheet,ScrollView } from 'react-native'
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
    DarkTheme 
} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

import images from '../../../assets/images';
import { Myicons } from '../../../common/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Ionicons from "react-native-vector-icons/Ionicons"


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


export default class Reset2 extends Component {

    render() {
        return (
            <PaperProvider theme={theme}>
            <ScrollView>

            <View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Reset1')} style={{ marginLeft: 15, flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                    <Ionicons name="arrow-back-outline" size={35} color="red" style={{ marginRight: 10 }} />
                </TouchableOpacity>

               

                <View style={{ alignItems: "center", marginTop:50 }}>
               
                <Text style={{ fontSize: 20, color: "grey", marginTop: 20, alignItems: "center" }}>
                   Your password has been reset successfully!
                </Text>
                <Text style={{ fontSize: 20, color: "grey", marginTop: 5, alignItems: "center" }}>
                   Now login with new password
                </Text>
                </View>
                <View style={{ flex: 1, marginHorizontal: 50 }}>
                     <View style={{ marginTop: 60 }}>
                        <Button style={{ backgroundColor:"red"}}
                            contentStyle={{ paddingVertical: 8, borderRadius: 50}}
                            mode="contained" onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={styles.White}>Reset Password</Text>
                            
                        </Button>
                    </View>
                </View>
            </View>
            </ScrollView>
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