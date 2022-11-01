import React from 'react';
import { View, Text } from 'react-native';
import LoadingStyle from './Loading.style';


export const Loading = () => {

    return (
        <View style={LoadingStyle.container} >
            <Text style={LoadingStyle.text}>Loading...</Text>
        </View>
    )
}