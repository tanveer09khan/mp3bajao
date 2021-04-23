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





export default class Reset1 extends Component {

    render() {
        return (

            <View style={{ backgroundColor: "rgb(102,205,170)", flex: 1 }}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{ marginLeft: 15, flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                    <Ionicons name="close-outline" size={45} color="white" style={{ marginRight: 10 }} />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginLeft: 15, marginTop: 20, alignItems: 'center' }}>
                    <Ionicons name="help-circle-outline" size={80} color="white" style={{ marginRight: 10 }} />
                </TouchableOpacity>

                <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 25, color: "white", marginTop: 20, alignItems: "center" }}>
                    It's okay! reset your password
                </Text>
                </View>
                <View style={{ flex: 1, marginHorizontal: 50 }}>
                    <View>
                        <TextInput style={{marginTop:20}}
                            mode='flat'
                            placeholder="Email/Mobile Number "
                            placeholderTextColor="Black"
                        // value={text}
                        // onChangeText={text => setText(text)}
                        />
                    </View>

                    
                   

                    <View style={{ marginTop: 30 }}>
                        <Button style={{borderRadius: 50 , backgroundColor:"white"}}
                            contentStyle={{ paddingVertical: 8, borderRadius: 50}}
                            mode="contained" onPress={() => this.props.navigation.navigate('Reset2')}>
                                <Text>Continue</Text>
                            
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
    }
});