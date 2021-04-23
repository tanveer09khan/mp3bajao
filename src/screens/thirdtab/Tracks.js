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


export default class Tracks extends Component {
    render() {
        return (
            <View>
                <Card
                    style={{
                        shadowOffset: { width: 5, height: 5 },
                        // width: '90%',
                        // height:50,
                        // justifyContent:'space-between',
                        // flexDirection:'row',
                        // flex:1,
                        // borderRadius: 12,
                        // alignSelf: 'center',
                        marginTop: 15,
                    }}>
                    <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }}>
                        {/* <Title>Blog post</Title> */}

                        <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Myicons
                                source={images.playcircularbutton}
                                size={30}
                                _style={{ marginRight: 15, tintColor: 'red' }}
                            />
                            <View>
                                <Text>When we meet</Text>
                                <Text style={{ color: '#dddd' }}> Asrar Khan</Text>
                            </View>
                        </Card.Content>

                        <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>4.30</Text>
                            <Myicons
                                source={images.heart_fill}
                                size={15}
                                _style={{ marginHorizontal: 20, tintColor: 'red' }}
                            />
                            <Myicons
                                source={images.more}
                                size={13}
                                _style={{ tintColor: 'red' }}
                            />
                        </Card.Content>
                        {/* <Text>dd</Text> */}

                    </Card.Content>


                </Card>

            </View>
        )
    }
}
