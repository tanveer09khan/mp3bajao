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





export default class Reset2 extends Component {

    render() {
        return (
            <ScrollView>

            <View style={{ backgroundColor: "rgb(102,205,170)", flex: 1 }}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Reset1')} style={{ marginLeft: 15, flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                    <Ionicons name="arrow-back-outline" size={35} color="white" style={{ marginRight: 10 }} />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginLeft: 15, marginTop: 20, alignItems: 'center' }}>
                    <Ionicons name="lock-closed-outline" size={80} color="white" style={{ marginRight: 10 }} />
                </TouchableOpacity>

                <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 25, color: "white", marginTop: 20, alignItems: "center" }}>
                   Reset your password
                </Text>
                <Text style={{ fontSize: 20, color: "white", marginTop: 20, alignItems: "center" }}>
                   We have sent a four digit code on your
                </Text>
                <Text style={{ fontSize: 20, color: "white", marginTop: 5, alignItems: "center" }}>
                   phone/email
                </Text>
                </View>
                <View style={{ flex: 1, marginHorizontal: 50 }}>
                    <View>
                        <TextInput style={{marginTop:30}}
                            mode='flat'
                            placeholder="Four digit code "
                            placeholderTextColor="Black"
                        // value={text}
                        // onChangeText={text => setText(text)}
                        />
                    </View>
                    <View>
                        <TextInput style={{marginTop:30}}
                            mode='flat'
                            placeholder="New Password"
                            placeholderTextColor="Black"
                        // value={text}
                        // onChangeText={text => setText(text)}
                        />
                    </View>
                    <View>
                        <TextInput style={{marginTop:30}}
                            mode='flat'
                            placeholder="Confirm Password"
                            placeholderTextColor="Black"
                        // value={text}
                        // onChangeText={text => setText(text)}
                        />
                    </View>

                    
                   

                    <View style={{ marginTop: 60 }}>
                        <Button style={{borderRadius: 50 , backgroundColor:"white"}}
                            contentStyle={{ paddingVertical: 8, borderRadius: 50}}
                            mode="contained" onPress={() => this.props.navigation.navigate('Reset3')}>
                                <Text>Reset Password</Text>
                            
                        </Button>
                    </View>
                </View>
            </View>
            </ScrollView>
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