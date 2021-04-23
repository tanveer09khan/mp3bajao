import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
// import Helper from '../../Lib/Helper';
import SplashScreen from 'react-native-splash-screen'
import images from '../assets/images';
// import { configureGoogleLogin } from '../../Lib/SocialLogin';

export default class Splash extends Component {

    async componentDidMount() {
        SplashScreen.hide();
        // configureGoogleLogin()

        setTimeout(() => {
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        }, 1500);
        // Helper.navigationRef = this.props.navigation;
        // Helper.registerNavigator(this.props.navigation)
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={images.splash} />
        )
    }
}
