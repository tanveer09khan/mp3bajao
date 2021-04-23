import React from 'react';
import { Image, Text, View } from 'react-native';

const Recap = (props) => {
    const { textStyle, viewStyle } = styles;


    return (
        <View style={viewStyle}>

            {/* <Text style={textStyle}> {props.headerText} </Text> */}
            <Image
                source={require('../assets/icons/recap.png')}
                style={{ height: '100%', width: '100%', resizeMode: 'contain',marginBottom:10,marginTop:400 }}
            />

        </View>
    );

};

const styles = {
    viewStyle: {
        backgroundColor: "transparent",
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 0,
        position: 'relative',




    },
    textStyle: {
        fontSize: 20
    }
};

export default Recap;