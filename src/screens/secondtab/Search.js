import React, { Component } from 'react'
import { View, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import {
    Avatar,
    Button,
    Card,
    Title,
    Paragraph,
    Text,
    List,
    Headline,
    Searchbar,
} from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons"



export default class Search extends Component {
    state = {
        query: ''
    }



    render() {
        return (

            <View style={{ marginHorizontal: 10, flex: 1, marginTop: 8 }}>
                
               <View style={{flexDirection:"row"}}>
                <Searchbar
                    placeholder="Search"
                    placeholderTextColor="grey"
                    onChangeText={(text) => this.setState({ query: text })}
                    value={this.state.query}
                    style={{ backgroundColor: "transparent",width:"90%",elevation:0 }}
                    
                />
                 <TouchableOpacity onPress={() => this.props.navigation.navigate('AllTab')} style={{ alignSelf: "center" }}>
                    <Ionicons name="close" size={30} color="red" style={{ marginRight: 10 }} />
                </TouchableOpacity>
                </View>
                <View style={{ flex: 0.4 }} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')} style={{ alignSelf: "center" }}>
                    <Ionicons name="search" size={60} color="red" style={{ marginRight: 10 }} />
                </TouchableOpacity>

                <Text style={{ color: "grey", fontSize: 20, alignSelf: "center", marginTop: 20 }}>
                    Search A Track

                        </Text>
                <Text style={{ color: "grey", fontSize: 15, alignSelf: "center", marginTop: 20 }}>
                    Try by changing search keywords

                        </Text>

            </View>
        )
    }
}
