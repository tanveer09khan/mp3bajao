import * as React from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import {
    Avatar,
    Button,
    Card,
    Title,
    Paragraph,
    List,
    Text,
    Headline,
    Searchbar
} from 'react-native-paper';
import fonts from '../../assets/fonts';
import images from '../../assets/images';
import Header from '../../common/Header';
import { Myicons } from "../../common/styles";
import Banner from "../../../Shared/Banner"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default class Home extends React.Component {
    

    state = {
        data: [
            { image: images.sld, title: 'Omega 25Go', },
            { image: images.sld, title: 'Roke Tok' },
            { image: images.sld, title: 'Some time ago' },
            { image: images.sld, title: 'Dil se', },
            { image: images.sld, title: 'Go for it' },
            { image: images.sld, title: 'Where we blong' }
        ],
        Artiest: [
            { image: images.sld, title: 'Foe Doe', },
            { image: images.sld, title: 'Zehar Doe' },
            { image: images.sld, title: 'Aser Kan' },
            { image: images.sld, title: 'Jehr Doe', },
            { image: images.sld, title: 'Asma Doe' },
            { image: images.sld, title: 'Foe Doe' }
        ]
    }
    
    render() {

        
        return (
            
            <View style={{ flex: 1 }}>
                

                {/* <Header headerText='Mp3 bajao' /> */}

                {/* <View style={styles.container}> */}
                <View style={{ flexDirection: 'row',  marginVertical: 10 }}>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AllTab')} >
                            {/* <Ionicons name="ios-arrow-forward-circle-outline" size={25} color="#0047AB" style={{ marginLeft: 10 }} /> */}
                            <Text style={{ marginTop: 20, marginLeft: 10, color: 'red', fontSize: 20 }}>About</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('RadioScreen')}>
                           
                            <Text style={{ marginTop: 20, marginLeft: 20, color: 'red', fontSize: 20 }}>Radio</Text>
                        </TouchableOpacity>
                    </View>
                    <Searchbar
                placeholder="Search"
                // onChangeText={(text) => this.setState({ query: text })}
                // value={this.state.query}
                // onChangeText={(text) => setquery({ query: text })}
                // value={query}
                style={{ marginVertical: 5, marginLeft: 20 , width:"64%" }}
            />
                    </View>
                {/* </View> */}
                {/* <Tab.Navigator
            
               
                tabBarOptions={{
                   
                    indicatorStyle: {
                        borderBottomColor: 'red',
                        borderBottomWidth: 1.5,
                        borderColor: 'red',
                        width: '30%',
                        marginLeft: 15,

                        alignItems: 'center',
                        alignContent: 'center',
                        justifyContent: 'center',

                    },
                    showIcon: true,
                   
                    style: {
                        backgroundColor: themeReducer.theme ? DefaultTheme : DarkTheme,
                        shadowColor: "#000",
                      
                        marginLeft: 10,
                        marginTop: 20,
                        width: 150,
                        elevation: 0,
                    },
                    labelStyle: {
                        textTransform: 'capitalize',
                      
                    }
                }}
              
                screenOptions={({ route }) => ({
                  
                })}
            >
                <Tab.Screen name="Tracks"
                    component={Tracks}
                  
                    navigationOptions={
                        {
                           

                        }
                      
                    }

                />


                <Tab.Screen name="Albums" component={Albums} />


            </Tab.Navigator> */}
                <ScrollView style={{ marginHorizontal: 10, }} showsVerticalScrollIndicator={false}>
                       
                    <View>
                         <View>
                             <Banner />
                         </View>
                        

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, marginVertical: 15 }}>
                            <Text>Latest Albums</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('List')}>
                                <Text>Show more</Text>
                            </TouchableOpacity>
                        </View>


                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={this.state.data}
                            renderItem={({ item, index }) => {
                                return (
                                    <View>
                                        <Card style={{ marginHorizontal: 8, }}>
                                            {/* <Myicons source={item.image} size={100} _style={{ borderRadius: 8, }} /> */}
                                            {/* <Card.Content style={{}}> */}
                                            <View style={{ width: 100, borderTopRightRadius: 10 }}>
                                                <Myicons source={item.image} size={100} _style={{}}
                                                    onImagePress={() => this.props.navigation.navigate('Trackplayer')}
                                                // onImagePress={() => alert('hi')}
                                                />
                                            </View>
                                        </Card>
                                        <View style={{ marginTop: 5, marginLeft: 8 }}>
                                            <Text style={{ paddingLeft: 5, fontSize: 13, fontFamily: fonts.HeeboRegular }}>{item.title}</Text>
                                        </View>
                                    </View>

                                )
                            }}
                        />
                    </View>

                  
                    <View style={{ height: 35 }} />

                    <View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, marginVertical: 15 }}>
                            <Text>Top Albums</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('List')}>
                                <Text>Show more</Text>
                            </TouchableOpacity>
                        </View>


                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={this.state.data}
                            renderItem={({ item, index }) => {
                                return (
                                    <View>
                                        <Card style={{ marginHorizontal: 8, }}>
                                            {/* <Myicons source={item.image} size={100} _style={{ borderRadius: 8, }} /> */}
                                            {/* <Card.Content style={{}}> */}
                                            <View style={{ width: 100, borderTopRightRadius: 10 }}>
                                                <Myicons source={item.image} size={100} _style={{}}
                                                    onImagePress={() => this.props.navigation.navigate('Trackplayer')}
                                                />
                                            </View>
                                        </Card>
                                        <View style={{ marginTop: 5, marginLeft: 8 }}>
                                            <Text style={{ paddingLeft: 5, fontSize: 13 }}>{item.title}</Text>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>



                    <View style={{ height: 35 }} />

                    <View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, marginVertical: 15 }}>
                            <Text>Artiest</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('List')}>
                                <Text>Show more</Text>
                            </TouchableOpacity>
                        </View>


                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={this.state.Artiest}
                            renderItem={({ item, index }) => {
                                return (
                                    <View>
                                        <View style={{ marginHorizontal: 8, backgroundColor: '#fff', height: 70, width: 70, borderRadius: 70 / 2, alignItems: 'center' }}>
                                            {/* <Myicons source={item.image} size={100} _style={{}} /> */}
                                        </View>
                                        <View style={{ marginTop: 5, }}>
                                            <Text style={{ fontSize: 13, textAlign: 'center' }}>{item.title}</Text>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>






                    <View style={{ height: 35 }} />

                    <View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, marginVertical: 15 }}>
                            <Text>Top Albums</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('List')}>
                                <Text>Show more</Text>
                            </TouchableOpacity>
                        </View>


                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={this.state.data}
                            renderItem={({ item, index }) => {
                                return (
                                    <View>
                                        <Card style={{ marginHorizontal: 8, }}>
                                            {/* <Myicons source={item.image} size={100} _style={{ borderRadius: 8, }} /> */}
                                            {/* <Card.Content style={{}}> */}
                                            <View style={{ width: 100, borderTopRightRadius: 10 }}>
                                                <Myicons source={item.image} size={100} _style={{}}
                                                    onImagePress={() => this.props.navigation.navigate('Trackplayer')}
                                                />
                                            </View>
                                        </Card>
                                        <View style={{ marginTop: 5, marginLeft: 8 }}>
                                            <Text style={{ paddingLeft: 5, fontSize: 13 }}>{item.title}</Text>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>
                    <View style={{ height: 25 }} />
                </ScrollView>

                {/* <Headline style={{ marginLeft: 23 }}>Lastest Post</Headline>
                <Card
                    style={{
                        shadowOffset: { width: 5, height: 5 },
                        width: '90%',
                        borderRadius: 12,
                        alignSelf: 'center',
                        marginBottom: 10,
                    }}>
                    <Card.Content>
                        <Title>Blog post</Title>
                        <Card.Cover
                            style={{
                                width: '100%',
                                height: 190,
                                alignSelf: 'center',
                            }}
                            source={{
                                uri:
                                    'https://images.unsplash.com/photo-1573921470445-8d99c48c879f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                            }}
                        />
                        <Paragraph>What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
i</Paragraph>
                    </Card.Content>
                </Card> */}

            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});