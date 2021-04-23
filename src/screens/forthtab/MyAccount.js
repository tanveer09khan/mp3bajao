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
    Provider as PaperProvider,
    DefaultTheme,
    DarkTheme
} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from "react-native-vector-icons/Ionicons"

import { countryArr } from '../../Utility/Data'

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

export default class MyAccount extends Component {
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
            <PaperProvider theme={theme}>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        width: 100,
                        flex: 0.4
                    }}>
                        <TouchableOpacity>
                            <Ionicons name="arrow-back-outline" size={25} color="red" style={{ marginLeft: 20, marginTop: 20 }} />

                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width: "50%",
                        flex: 0.1,
                        marginBottom: 50,

                    }}></View>
                    
                        
                        <Text style={{ marginTop: 20, marginLeft: 10, color: 'white', fontSize: 20 }}>My Account</Text>
                    
                </View>

                <View style={{ flex: 0.2 }} />
                <View>
                    <TextInput style={{ backgroundColor: "transparent", marginHorizontal: 20 }}
                        mode='flat'
                        placeholder="Name"
                        placeholderTextColor="white"
                    // value={text}
                    // onChangeText={text => setText(text)}
                    />
                </View>
                <View>
                    <TextInput style={{ backgroundColor: "transparent", marginHorizontal: 20, marginBottom: 20 }}
                        mode='flat'
                        placeholder="Email Address"
                        placeholderTextColor="white"
                    // value={text}
                    // onChangeText={text => setText(text)}
                    />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        width: 100,
                        flex: 0.4
                    }}>
                        <DropDownPicker
                           placeholder="Pick Code"
                           selectedLabelStyle={{color:"white"}}
                           placeholderStyle={{color:"white"}}

                            items={countryArr}
                            // defaultValue={this.state.country}
                            label={this.state.country}
                            // value={this.state.country}
                            containerStyle={{ height: 70, width: "100%" }}
                            style={{ marginLeft: 30, marginTop: 10, marginRight: 10, bordercolor: "transparent", borderWidth:0, backgroundColor: "transparent" }}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: "white", marginLeft: 30 }}
                            onChangeItem={item => this.handleDrop(item)}
                        />
                    </View>
                    <View style={{
                        width: "50%",
                        flex: 0.54,
                        marginBottom: 50,

                    }}>
                        <TextInput style={{ backgroundColor: "transparent" }}
                            mode='flat'
                            placeholder="Mobile Number"
                            placeholderTextColor="white"
                        // value={text}
                        // onChangeText={text => setText(text)}
                        />
                    </View>
                </View>
                <View style={{ flex: 0.1 }} />
                <View style={{ flex: 1, marginHorizontal: 25 }}>
                    <View style={{ marginTop: 30 }}>
                        <Button
                            contentStyle={{ paddingVertical: 8, backgroundColor: "red" }}
                            mode="contained" onPress={() =>
                                this.props.navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'AllTab' }],
                                })
                            }>
                            Update
                        </Button>
                    </View>
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
    }
});