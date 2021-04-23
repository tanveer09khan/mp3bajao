import React from 'react';
import { Image, Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;


    return (
        <View style={viewStyle}>

            {/* <Text style={textStyle}> {props.headerText} </Text> */}
            <Image
                source={require('../assets/icons/logo.png')}
                style={{ height: '100%', width: '100%', resizeMode: 'contain',marginBottom:10 }}
            />

        </View>
    );

};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',




    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;