import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'




export const Myicons = (props) => (
    <TouchableOpacity onPress={props.onImagePress}>
        <Image
            source={props.source}
            style={[{ height: props.size, width: props.size }, props._style]}
            resizeMode={'contain'}
        />
    </TouchableOpacity>
)


