import React, { Component } from 'react'
import { ImageBackground, View, TouchableOpacity, StyleSheet , ScrollView, Dimensions} from 'react-native'
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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import images from '../../assets/images';
import { Myicons } from '../../common/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Ionicons from "react-native-vector-icons/Ionicons"


import { countryArr } from '../../Utility/Data'
// import { ScrollView } from 'react-native-gesture-handler';

export default class Login extends Component {
    constructor(props) {

        super(props);
        this.state = {
            country: '91'
        }
    }

    handleDrop = (x) => {

        console.log(x.value)
        this.setState({ country: x.value })

    }
    render() {
        return (
            
            <ImageBackground source={require('../../assets/icons/bg.jpg')} style={{ flex: 1 }}>
                
              <View style={{flex:1}}>
                <View style={styles.container}>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('createaccount')}>
                            {/* <Ionicons name="ios-arrow-forward-circle-outline" size={25} color="#0047AB" style={{ marginLeft: 10 }} /> */}
                            <Text style={{ marginTop: 20, marginLeft: 30, color: 'white', fontSize: 20 }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AllTab')}>
                            {/* <Ionicons name="ios-arrow-forward-circle-outline" size={25} color="#0047AB" style={{ marginLeft: 10 }} /> */}
                            <Text style={{ marginTop: 20, marginLeft: 100, color: 'white', fontSize: 20 }}>Skip</Text>
                        </TouchableOpacity>
                    </View>
                </View>

               
                <View style={{ flexDirection: 'row'}}>
    <View style={{
            width: 100,
      flex:0.4,
      
    }}>
      <DropDownPicker 
                        
                        placeholder="Pick Code"
                        selectedLabelStyle={{color:"grey"}}
                        placeholderStyle={{color:"grey"}}
                        
                        items={countryArr}
                        // defaultValue={this.state.country}
                        label={this.state.country}
                        // value={this.state.country}
                        containerStyle={{ height: 70, width: "70%" }}
                        style={{ marginLeft:30,marginTop:10,marginRight:10,borderColor: "transparent",backgroundColor:"transparent"} }
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: "white",marginLeft:30}}
                        onChangeItem={item => this.handleDrop(item)}
                    />
    </View>
    <View style={{
            width: "50%",
      flex:0.54,
      marginBottom:20,
    
          }}>
      <TextInput style={{backgroundColor: "transparent"}}
                            mode='flat'
                            placeholder="Mobile Number"
                            placeholderTextColor="grey" 
                        // value={text}
                        // onChangeText={text => setText(text)}
                        />        
    </View>
  </View>

                <View style={{ alignItems: "center" }}>

                    <Text style={{ fontSize: 20, color:"red" }}>
                        ---OR---
                    </Text>
                </View>
                {/* <View style={{ flex: 0.1 }} /> */}
                <View style={{ flex: 1, marginHorizontal: 25 }}>
                    <View>
                        <TextInput style={{backgroundColor: "transparent"}}
                            mode='flat'
                            borderColor="red"
                            placeholder="Email Address"
                            placeholderTextColor="grey"
                            
                        // value={text}
                        // onChangeText={text => setText(text)}
                        />
                    </View>

                    <View style={{ marginTop: 10}}>
                        <TextInput style={{backgroundColor: "transparent"}}
                            mode='flat'
                            placeholder="Password"
                            placeholderTextColor="grey"
                        // value={text}
                        // onChangeText={text => setText(text)}
                        />
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPass')}>
                            {/* <Ionicons name="ios-arrow-forward-circle-outline" size={25} color="#0047AB" style={{ marginLeft: 10 }} /> */}
                            <Text style={{ marginTop: 20, marginLeft: 15, color: 'grey', fontSize: 15 }}>Forgot Password ?</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Button
                            contentStyle={{ paddingVertical: 8, backgroundColor: "red" }}
                            mode="contained" onPress={() =>
                                this.props.navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'AllTab' }],
                                })
                            }>
                            <Text style={styles.White}>Log in</Text>
                        </Button>
                    </View>


                    <TouchableOpacity onPress={() => this.props.navigation.navigate('createaccount')}
                        style={{ marginLeft: 15, flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                        <Ionicons name="ios-arrow-forward-circle-outline" size={25} color="red" style={{ marginRight: 10 }} />
                        <Text style={{ color: 'red', }}>Create New Account</Text>
                    </TouchableOpacity>



                </View>
                <Text style={{ alignSelf: 'flex-end', marginRight: 10, color: 'red' }}>BV 02.07.01</Text>
</View>
            </ImageBackground >
            
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