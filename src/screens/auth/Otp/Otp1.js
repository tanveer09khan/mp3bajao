import React, { Component } from 'react';
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
    Provider as PaperProvider,
    DefaultTheme,
    DarkTheme
} from 'react-native-paper';
import Ionicons from "react-native-vector-icons/AntDesign"
import { countryArr } from '../../../Utility/Data'
import DropDownPicker from 'react-native-dropdown-picker';
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


export default class Otp1 extends Component {

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
    // constructor(props){
    //     super(props);
    //     this.state={
    //         pin1 : "",
    //         pin2 : "",
    //         pin3 : "",
    //         pin4 : ""
    //     }

    // }

    // componentDidMount=()=>{

    //     this.refs.nameref.focus()
    // }


    render() {
        //const { pin1 , pin2 , pin3, pin4 } = this.state

        return (
<PaperProvider theme={theme}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('createaccount')} style={{ marginLeft: 15, flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                    <Ionicons name="arrowleft" size={25} color="red" style={{ marginRight: 10 }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('createaccount')} style={{ marginLeft: 15, marginTop: 60, alignItems: 'center' }}>
                    <Ionicons name="mobile1" size={80} color="grey" style={{ marginRight: 10 }} />
                </TouchableOpacity>
                <View style={{alignItems:'center'}}>
                <Text style={{fontSize: 25, marginTop: 10,color:"grey"}}> Login with Mobile number</Text>
                <Text style={{color:"grey"}}> Enter your mobile number we will sent</Text>
                <Text style={{color:"grey"}}> you OTP verify</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
    <View style={{
            width: 100,
      flex:0.4
    }}>
      <DropDownPicker 
                        placeholder="Pick Code"
                        selectedLabelStyle={{color:"grey"}}
                        placeholderStyle={{color:"grey"}}
                        
                        
                        items={countryArr}
                        // defaultValue={this.state.country}
                        label={this.state.country}
                        // value={this.state.country}
                        containerStyle={{ height: 70, width: "100%"  }}
                        style={{ marginLeft:30,marginTop:10,marginRight:10,bordercolor: "transparent", borderWidth:0, backgroundColor: "transparent"} }
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
      marginBottom:50,
      marginTop:10
    
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
                {/* <View style={{ flex: 0.6, justifyContent: "space-evenly", flexDirection: "row" }}>
                    <TextInput
                        //    ref={"pin1ref"}
                        //    onChangeText={(pin1)=> {
                        //        this.setState({pin1 : pin1})
                        //        if(pin1 != ""){
                        //            this.refs.pin2ref.focus()
                        //        }}}
                        //    value={pin1}
                        maxLength={1}
                        style={{ backgroundColor: "#f5f4f2", fontWeight: "600", alignSelf: "center", padding: 2, fontSize: 20, height: 40, width: "10%", borderRadius: 10, borderWidth: 0.5, borderColor: "grey", textAlign: "center" }}
                    />
                    <TextInput
                        //    ref={"pin2ref"}
                        //    onChangeText={(pin2)=> {
                        //        this.setState({pin2 : pin2})
                        //        if(pin2 != ""){
                        //            this.refs.pin3ref.focus()
                        //        }}}
                        //    value={pin2}
                        maxLength={1}
                        style={{ backgroundColor: "#f5f4f2", fontWeight: "600", alignSelf: "center", padding: 2, fontSize: 20, height: 40, width: "10%", borderRadius: 10, borderWidth: 0.5, borderColor: "grey", textAlign: "center" }}
                    />
                    <TextInput
                        //    ref={"pin3ref"}
                        //    onChangeText={(pin3)=> {
                        //     this.setState({pin3 : pin3})
                        //     if(pin3 != ""){
                        //         this.refs.pin4ref.focus()
                        //     }}}
                        //    value={pin3}
                        maxLength={1}
                        style={{ backgroundColor: "#f5f4f2", fontWeight: "600", alignSelf: "center", padding: 2, fontSize: 20, height: 40, width: "10%", borderRadius: 10, borderWidth: 0.5, borderColor: "grey", textAlign: "center" }}
                    />
                    <TextInput
                        //    ref={"pin4ref"}
                        //    onChangeText={(pin4)=> {
                        //     this.setState({pin4 : pin4})
                        //     if(pin4 != ""){
                        //        // this.refs.pin2ref.focus()
                        //        alert("thanks")
                        //     }}}
                        //    value={pin4}
                        maxLength={1}
                        style={{ backgroundColor: "#f5f4f2", fontWeight: "600", alignSelf: "center", padding: 2, fontSize: 20, height: 40, width: "10%", borderRadius: 10, borderWidth: 0.5, borderColor: "grey", textAlign: "center" }}
                    />
                    
                </View> */}
                <View style={{ marginTop: 90 }}>
                        <Button style={{ backgroundColor:"red", marginHorizontal: 40}}
                            contentStyle={{ paddingVertical: 8}}
                            mode="contained" onPress={() => this.props.navigation.navigate('Otp2')}>
                                <Text style={styles.White}>Continue</Text>
                            
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