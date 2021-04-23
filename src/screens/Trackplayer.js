import React, { useEffect, useState } from 'react';
import {  View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import TrackPlayer, {
    TrackPlayerEvents,
    STATE_PLAYING,
} from 'react-native-track-player';
import {
    useTrackPlayerProgress,
    useTrackPlayerEvents,
} from 'react-native-track-player/lib/hooks';
import {
    Button,Card,Text,
} from 'react-native-paper';
import Slider from '@react-native-community/slider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

import Feather from "react-native-vector-icons/Feather"
import { Custompopup } from '../components/CustomModel';
import { Myicons } from '../common/styles';
import images from '../assets/images';


const songDetails = {
    id: '1',
    url:
        'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
    title: 'The Greatest Song',
    album: 'Great Album',
    artist: 'A Great Dude',
    artwork: 'https://picsum.photos/300',
};

const trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer();
    TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_PAUSE,
            TrackPlayer.CAPABILITY_JUMP_FORWARD,
            TrackPlayer.CAPABILITY_JUMP_BACKWARD,
        ],
    });
    await TrackPlayer.add({
        id: songDetails.id,
        url: songDetails.url,
        type: 'default',
        title: songDetails.title,
        album: songDetails.album,
        artist: songDetails.artist,
        artwork: songDetails.artwork,
    });
    return true;
};

const Trackplayer = ({ navigation }) => {
    const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
    const [trackoptionModal, setTrackoptionModal] = useState(false);
    const [playListModal, setPlayListModal] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLike, setIsLike] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);
    const { position, duration } = useTrackPlayerProgress(250);
    const [isfavourite, setisfavourite] = useState(false);





    useEffect(() => {
        const startPlayer = async () => {
            let isInit = await trackPlayerInit();
            setIsTrackPlayerInit(isInit);
        }
        startPlayer();
    }, []);

    //this hook updates the value of the slider whenever the current position of the song changes
    useEffect(() => {
        if (!isSeeking && position && duration) {
            setSliderValue(position / duration);
        }
    }, [position, duration]);

    useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], event => {
        if (event.state === STATE_PLAYING) {
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    });

    const onButtonPressed = () => {
        if (!isPlaying) {
            TrackPlayer.play();
            //setIsPlaying(true);
        } else {
            TrackPlayer.pause();
            //setIsPlaying(false);
        }
    };

    const slidingStarted = () => {
        setIsSeeking(true);
    };

    const slidingCompleted = async value => {
        await TrackPlayer.seekTo(value * duration);
        setSliderValue(value);
        setIsSeeking(false);
    };

    return (
        <View style={styles.mainContainer}>

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 1, }}>
                    <Entypo name="cross" size={35} color="#93A8B3" style={{ alignSelf: 'flex-end', margin: 11 }}
                        onPress={() => navigation.goBack()}
                    />


                    <View style={styles.imageContainer}>
                        <Image
                            source={{
                                uri: songDetails.artwork,
                            }}
                            resizeMode="contain"
                            style={styles.albumImage}
                        />
                    </View>
                </View>
            </View>



            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.songTitle}>{songDetails.title}</Text>
                    <Text style={styles.artist}>{songDetails.artist}</Text>
                </View>

                <TouchableOpacity>
                    <SimpleLineIcons name="options-vertical" size={17} color="#e75480"
                        onPress={() => setTrackoptionModal(true)}
                    />
                </TouchableOpacity>



            </View>



            <View style={styles.controlsContainer}>
                <Slider
                    style={styles.progressBar}
                    minimumValue={0}
                    maximumValue={1}
                    value={sliderValue}
                    minimumTrackTintColor="#111000"
                    maximumTrackTintColor="pink"
                    onSlidingStart={slidingStarted}
                    onSlidingComplete={slidingCompleted}
                    thumbTintColor="red"
                />



                <View style={{ flexDirection: "row", justifyContent: 'space-evenly', alignItems: "center" }}>
                    <TouchableOpacity
                        onPress={() => setIsLike(!isLike)}
                    >
                        <AntDesign name={isLike ? "heart" : "hearto"} size={18} color="red"
                        />
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <Entypo name="controller-jump-to-start" size={25} color="#e75480" style={{}} />
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={{
                        backgroundColor: "#FFF",
                        borderColor: "rgba(93, 63, 106, 0.2)",
                        borderWidth: 8,
                        width: 70,
                        height: 70,
                        borderRadius: 40,
                        alignItems: "center",
                        justifyContent: "center",
                        marginHorizontal: 32,
                        shadowColor: "#5D3F6A",
                        shadowRadius: 30,
                        shadowOpacity: 0.5
                    }}
                    // onPress={onButtonPressed}
                    > */}
                    <MaterialIcons
                        name={isPlaying ? 'pause-circle-filled' : 'play-circle-filled'}
                        size={50}
                        color='#e75480' //"#3D425C"
                        // onPress={onButtonPressed}
                    // style={[styles.playButton, { marginLeft: 8 }]}

                    />
                    {/* </TouchableOpacity> */}
                    <TouchableOpacity>
                        <Entypo name="controller-next" size={25} color="#e75480" style={{}} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setPlayListModal(true)}
                    // onPress={() => this.setState({ trackoptionModal: true })}
                    >
                        <MaterialIcons name="playlist-play" size={28} color="red"
                        // onPress={ }
                        />
                    </TouchableOpacity>



                    {/* <Entypo name="shuffle" size={24} color="#e75480" style={{ marginLeft: "9%" }} />
                    <Entypo name="controller-fast-backward" size={24} color="#e75480" style={{ marginLeft: "12%" }} />
                    <AntDesign name="pausecircle" size={50} color="#e75480" style={{ marginLeft: "12%" }} />
                    <Entypo name="controller-fast-forward" size={24} color="#e75480" style={{ marginLeft: "12%" }} />
                    <Feather name="repeat" size={20} color="#e75480" style={{ marginLeft: "10%" }} /> */}


                </View>
            </View>




            <Custompopup
                hideModel={() => this.hideMoreOptions()}
                modalVisible={playListModal}>
                <TouchableOpacity
                    activeOpacity={1}
                    // onPress={() => this.setState({ trackoptionModal: false })}
                    onPress={() => setPlayListModal(false)}
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.5)'
                    }}
                />

                <View
                    style={{
                        padding: 10,
                        backgroundColor: '#fff',
                        // backgroundColor: 'rgba(0,0,0,0.5)',
                        // borderTopLeftRadius: 15,
                        // borderTopRightRadius: 15,
                        flex: 2
                    }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
                        <View><Text style={{ fontWeight: 'bold',color:'red' }}>Total tracks(25)</Text></View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                            // onPress={() => this.setState({ trackoptionModal: true })}
                            >
                                <Ionicons name="add-circle-outline" size={25} color="red"
                                // onPress={ }
                                />
                            </TouchableOpacity>

                            {/* <TouchableOpacity
                            // onPress={() => this.setState({ trackoptionModal: true })}
                            >
                                <MaterialIcons name="playlist-play" size={28} color="red"
                                // onPress={ }
                                />
                            </TouchableOpacity> */}
                        </View>
                    </View>




                    <FlatList
                        data={['', '', '', '', '']}
                        contentContainerStyle={{marginTop:10}}
                        renderItem={() => {
                            return (
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
                        marginTop:5,
                    }}>
                    
                    <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }}>
                        {/* <Title>Blog post</Title> */}

                        <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Myicons
                                source={images.logo}
                                size={35}
                                _style={{ marginRight: 15 }}
                            />
                            <View>
                                <Text>When we meet</Text>
                                <Text style={{ color: '#dddd' }}> Asrar Khan</Text>
                            </View>
                        </Card.Content>

                        <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{marginHorizontal:10}}>4.30</Text>
                            <Myicons
                                source={images.more}
                                size={13}
                                _style={{ tintColor: 'red' }}
                            />
                        </Card.Content>
                        {/* <Text>dd</Text> */}

                    </Card.Content>


                </Card>
                            )
                        }}

                    />

                    <View style={{ marginHorizontal: 15, marginTop: 20 }}>




                        <Button mode='outlined' style={{ marginTop: 40 }} onPress={() => setPlayListModal(false)} >
                            Close
                       </Button>
                    </View>
                </View>
            </Custompopup>


            <Custompopup
                hideModel={() => this.hideMoreOptions()}
                modalVisible={trackoptionModal}>
                <TouchableOpacity
                    activeOpacity={1}
                    // onPress={() => this.setState({ trackoptionModal: false })}
                    onPress={() => setTrackoptionModal(false)}
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.5)'
                    }}
                />

                <View
                    style={{
                        padding: 10,
                        backgroundColor: '#fff',
                        // backgroundColor: 'rgba(0,0,0,0.5)',
                        // borderTopLeftRadius: 15,
                        // borderTopRightRadius: 15,
                        flex: 2
                    }}>
                    <View style={{ alignItems: 'center' }}>
                        <View
                            style={{ height: 90, width: '100%' }}
                        >
                            <Image
                                source={{
                                    uri: songDetails.artwork,
                                }}
                                resizeMode="contain"
                                style={styles.albumImage}
                            />
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 8 }}>
                            <Text style={styles.songTitle}>{songDetails.title}</Text>
                            <Text style={styles.artist}>{songDetails.artist}</Text>
                        </View>
                    </View>

                    <View style={{ marginHorizontal: 15, marginTop: 20 }}>

                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => setIsLike(!isLike)}>
                            <View style={{ marginRight: 10,width:25 }}>
                                <AntDesign name={isLike ? "heart" : "hearto"} size={18} color="red"
                                />
                            </View>
                            <View><Text style={{color:'red'}}>Save in favourite</Text></View>
                        </TouchableOpacity>


                        <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 20, }} onPress={() => setisfavourite(!isfavourite)}>
                            <View style={{ marginRight: 10,width:25 }}>
                                <MaterialIcons name={isfavourite ? "playlist-add-check" : "playlist-add"} size={25} color="red"
                                />
                            </View>
                            <View><Text style={{color:'red'}}>App to playlist</Text></View>
                        </TouchableOpacity>



                        <TouchableOpacity style={{ flexDirection: 'row', }}>
                            <View style={{ marginRight: 10,width:25 }}>
                                <MaterialIcons name={'file-download'} size={20} color="red"
                                />
                            </View>
                            <View><Text style={{color:'red'}}>Download</Text></View>
                        </TouchableOpacity>



                        <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 20 }}>
                            <View style={{ marginRight: 10,width:25 }}>
                                <MaterialIcons name={'share'} size={16} color="red"
                                />
                            </View>
                            <View><Text style={{color:'red'}}>Share</Text></View>
                        </TouchableOpacity>



                        <TouchableOpacity style={{ flexDirection: 'row', }}>
                            <View style={{ marginRight: 10,width:25 }}>
                                <MaterialIcons name={'album'} size={18} color="red"
                                />
                            </View>
                            <View><Text style={{color:'red'}}>Album details</Text></View>
                        </TouchableOpacity>



                        <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 20 }}>
                            <View style={{ marginRight: 10,width:25  }}>
                                <FontAwesome5 name={'user-circle'} size={18} color="red"
                                />
                            </View>
                            <View><Text style={{color:'red'}}>Artiest details</Text></View>
                        </TouchableOpacity>


                        <Button mode='outlined' style={{ marginTop: 40 }} onPress={() => setTrackoptionModal(false)} >
                            Close
                       </Button>
                    </View>
                </View>
            </Custompopup>







        </View>
    );
};

export default Trackplayer;



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // backgroundColor: '#EDEDED',
    },
    imageContainer: {
        flex: 0.8,
        marginHorizontal: 15,
        justifyContent: 'center',
    },
    detailsContainer: {
        // flex: 0.05,
        // marginHorizontal:15,
        // backgroundColor: 'red',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    controlsContainer: {
        flex: 0.45,
        justifyContent: 'flex-start',
    },
    albumImage: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        borderRadius: 3,
    },
    progressBar: {
        height: 20,
        paddingBottom: 90,
    },
    songTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    artist: {
        fontSize: 14,
    },
});

