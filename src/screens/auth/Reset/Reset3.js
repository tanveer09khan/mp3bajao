import React, { Component } from 'react'
import { ImageBackground, View, TouchableOpacity, StyleSheet } from 'react-native'
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
import Owl from "../../../common/Owl"





export default class Reset3 extends Component {

    render() {
        return (
            
            <View style={{ backgroundColor: "rgb(102,205,170)", flex: 1 }}>
<Owl headerText='Owl' />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Reset2')} style={{ marginLeft: 15, flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                    <Ionicons name="arrow-back-outline" size={35} color="white" style={{ marginRight: 10 }} />
                </TouchableOpacity>

                <View style={{ flex: 0.5}} />

                <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 20, color: "white", marginTop: 20, alignItems: "center" , marginHorizontal:30}}>
                    Your password has been reset successfully!
                </Text>
                <Text style={{ fontSize: 20, color: "white", marginTop: 20, alignItems: "center" }}>
                    Now login with your new password
                </Text>
                </View>
                <View style={{ flex: 1, marginHorizontal: 50 }}>
                    

                    
                   

                    <View style={{ marginTop: 50 }}>
                        <Button style={{borderRadius: 50 , backgroundColor:"white"}}
                            contentStyle={{ paddingVertical: 8, borderRadius: 50}}
                            mode="contained" onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={styles.Red}>Login</Text>
                            
                        </Button>
                    </View>
                </View>
            </View>
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
    Red: {
    
        // Define your HEX color code here.
        color: '#F44336'
        
      }
});