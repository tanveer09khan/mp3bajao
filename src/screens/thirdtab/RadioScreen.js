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
import { Custompopup } from '../../components/CustomModel';
import { Myicons } from '../../common/styles';
import images from '../../assets/images';



const RadioScreen = ({ navigation }) => {
    const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
    // 
    const [isPlaying, setIsPlaying] = useState(false);
    
    const [sliderValue, setSliderValue] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);
    const { position, duration } = useTrackPlayerProgress(250);
   





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

            <View style={{ flex: 1, justifyContent: 'space-between' ,backgroundColor:"black" }}>
                <View style={{ flex: 1, }}>
                    <Entypo name="cross" size={35} color="#93A8B3" style={{ alignSelf: 'flex-end', margin: 11 }}
                        onPress={() => navigation.goBack()}
                    />


                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/icons/RadioBajao.png')} style={{ marginLeft: 60, marginTop: 10 , backgroundColor:"black"}}/>
                    </View>
                </View>
            </View>



            <View style={{ flexDirection: "row", alignItems:"center",flex: 0.35,marginLeft:"40%",backgroundColor:"black"}}>
                    
                     <TouchableOpacity>
                        <Entypo name="controller-play" size={40} color="#e75480" style={{}} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Entypo name="controller-paus" size={40} color="#e75480" style={{}} />
                    </TouchableOpacity>



                </View>



            <View style={styles.controlsContainer}>
                <Slider
                    style={styles.progressBar}
                    minimumValue={0}
                    maximumValue={1}
                    backgroundColor="black"
                    value={sliderValue}
                    minimumTrackTintColor="#111000"
                    maximumTrackTintColor="pink"
                    onSlidingStart={slidingStarted}
                    onSlidingComplete={slidingCompleted}
                    thumbTintColor="red"
                />



               
            </View>
</View>
    );
};

export default RadioScreen;



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
         backgroundColor: 'black',
    },
    imageContainer: {
        flex: 0.8,
        marginHorizontal: 5,
        
    },
    detailsContainer: {
        // flex: 0.05,
        // marginHorizontal:15,
        // backgroundColor: 'red',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    controlsContainer: {
        flex: 1,
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

