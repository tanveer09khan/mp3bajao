import React, { Component } from 'react'
import { ImageBackground, View, TouchableOpacity, ScrollView , StyleSheet } from 'react-native'
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
import Header from '../../common/Header';
import images from '../../assets/images';
import { Myicons } from '../../common/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import CheckBox from 'react-native-check-box'
import { CheckBox } from 'react-native-elements'
//import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class Createaccount extends Component {
    state={ checked: false };
    render() {
        return (
        
     <ScrollView>
         
         <View style={{ flexDirection: 'row',  marginVertical: 10 }}>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{ marginLeft:20,flexDirection: 'row', marginTop: 10,alignSelf:"flex-start"}}>
                    <Ionicons name="arrow-back-outline" size={25} color="red" style={{ marginRight: 10 }} />
                </TouchableOpacity>

                <Text style={{ marginTop: 10, marginLeft: 10, color: 'grey', fontSize: 20 }}>Create New Account</Text>
                    </View>
                    

                <View style={{ flex: 1,marginTop:20}} />

                <Header headerText='Mp3 bajao' />
                <View style={{ flex:2.5, marginHorizontal: 25, marginTop: 100,padding:15 }}>

                    <View>
                        <TextInput style={{backgroundColor: "transparent", color:'red'}}
                            mode='flat'
                            placeholder="First Name"
                            placeholderTextColor="grey"
                        // value={text}
                        // onChangeText={text => setText(text)}
                        />
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <TextInput style={{backgroundColor: "transparent"}}
                            mode='flat'
                            placeholder="Email Address"
                            placeholderTextColor="grey"
                        // value={text}
                        // onChangeText={text => setText(text)}
                        />
                    </View>


                    <View>
                        <TextInput style={{backgroundColor: "transparent"}}
                            mode='flat'
                            placeholder="Password"
                            placeholderTextColor="grey"
                        // value={text}
                        // onChangeText={text => setText(text)}
                        />
                    </View>

                    <View style={{ marginVertical: 10, marginBottom: 30}}>
                        <TextInput style={{backgroundColor: "transparent"}}
                            mode='flat'
                            placeholder="Confirm Password"
                            placeholderTextColor="grey"
                        // value={text}
                        // onChangeText={text => setText(text)}
                        />
                    </View>
                    
                    <CheckBox
                     containerStyle ={{backgroundColor: 'transparent',borderColor:"transparent", color:"red"}}
                     title='I agree to terms'
                     checked={this.state.checked}
                     onPress={() => this.setState({checked: !this.state.checked})}
                     />

                    <View style={{ marginTop: 30 }}>
                        <Button
                            contentStyle={{ paddingVertical: 6, backgroundColor: 'red' }}
                            mode="contained" onPress={() =>  this.props.navigation.navigate('Otp1')}>
                            <Text style={styles.White}>Create New Account</Text>
                    </Button>
                    
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
    },
     White: {
    
        // Define your HEX color code here.
        color: 'white'
        
      }
});
