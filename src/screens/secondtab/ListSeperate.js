import React, { Component } from 'react'
import { View, FlatList, ImageBackground } from 'react-native'
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
import images from '../../assets/images';
import { Myicons } from '../../common/styles';


export default class ListSeperate extends Component {
    state = {
        data: [
            {
                title: "Omega 25Go",
                "icons": images.playcircularbutton,
                "tracks": "5 Tracks",
                image: images.sld
            },

            {
                title: "Roke Tok",
                "icons": images.playcircularbutton,
                "tracks": "7 Tracks",
                image: images.sld
            },
            {
                title: "Some time ago",
                "icons": images.playcircularbutton,
                "tracks": "15 Tracks",
                image: images.sld
            },
            {
                title: "Dil se",
                "icons": images.playcircularbutton,
                "tracks": "25 Tracks",
                image: images.sld
            },
            {
                title: "Go for it",
                "icons": images.playcircularbutton,
                "tracks": "10 Tracks",
                image: images.sld
            },
            {
                title: "Where we blong",
                "icons": images.playcircularbutton,
                "tracks": "8 Tracks",
                image: images.sld
            },

            {
                title: "Dil se",
                "icons": images.playcircularbutton,
                "tracks": "25 Tracks",
                image: images.sld
            },
            {
                title: "Roke Tok",
                "icons": images.playcircularbutton,
                "tracks": "7 Tracks",
                image: images.sld
            },
            {
                title: "Roke Tok",
                "icons": images.playcircularbutton,
                "tracks": "7 Tracks",
                image: images.sld
            },

            {
                title: "Dil se",
                "icons": images.playcircularbutton,
                "tracks": "25 Tracks",
                image: images.sld
            },

            {
                title: "Where we blong",
                "icons": images.playcircularbutton,
                "tracks": "8 Tracks",
                image: images.sld
            },

            {
                title: "Go for it",
                "icons": images.playcircularbutton,
                "tracks": "10 Tracks",
                image: images.sld
            },
        ],

        query: ''
    }

    render() {
        return (

            <View style={{ marginHorizontal: 10, flex: 1,marginTop:30 }}>
                {/* <Headline style={{ marginLeft: 23 }}>Lastest Post</Headline> */}


                <View style={{ height: 5 }} />
                <FlatList
                    // nestedScrollEnabled
                    keyExtractor={(index) => 'A' + index.toString()}
                    showsVerticalScrollIndicator={false}
                    // data={['', '', '', '', '', '', '', '', '', '', '','','','','','','','','', '']}
                    data={this.state.data}
                    numColumns={2}
                    contentContainerStyle={{
                        // marginTop: 8,
                        // backgroundColor:'red'
                        // flex: 1
                    }}
                    renderItem={({ item, index }) => (
                        // navigation.openDrawer();
                        <View style={{ flex: 1 }}>
                            <Card onPress={() => { }}
                                // <Card onPress={() => this.props.navigation.openDrawer()}
                                style={{ backgroundColor: '#fff', marginHorizontal: 20, marginVertical: 5, width:"70%"}}>

                                {/* <Card.Content> */}
                                {/* <Title style={{}}>{item.title}</Title> */}
                                <View style={{ padding: 10, height: 130, justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                                <ImageBackground source={require('../../assets/icons/cardimage.jpg')} style={{width: '109%', height: '109%'}}>
                                    <Myicons
                                        source={item.icons}
                                        size={28}
                                        _style={{ tintColor: 'red', marginTop:95,marginLeft:100}}

                                    />
                                    </ImageBackground>
                                </View>

                                {/* </Card.Content> */}

                            </Card>
                            <Text style={{ textAlign: 'center', marginBottom: 0 }}>{item.title}</Text>
                            <Text style={{ textAlign: 'center', marginBottom: 20 }}>{item.tracks}</Text>

                        </View>
                    )}
                />

            </View>
        )
    }
}
