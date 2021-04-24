import React, { Component } from 'react'
import { View } from 'react-native'
import {
    Avatar,
    Button,
    Card,
    Title,
    Paragraph,
    List,
    Text,
    Headline,
} from 'react-native-paper';
import images from '../../assets/images';
import { Myicons } from '../../common/styles';

export default class About extends Component {
    render() {
        return (
            <View style={{padding:20}}>
                <Text style={{color:"grey"}}>Hello!!! This is Foe Doe. International singer rapper</Text>
            </View>
        )
    }
}
