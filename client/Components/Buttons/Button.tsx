import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { styles } from './Button.style';

interface Props {
    text: string;
    onPress: () => void;
    color?: string
}

export default function PersonalButton ({ text, onPress, color }:Props) {

    return (
        <TouchableHighlight underlayColor={'#0f3633'} activeOpacity={0.5} onPress={onPress} style={{...styles.containerButton, backgroundColor:color}}>
            <Text style={styles.text} >
                {text}
            </Text>
        </TouchableHighlight>
    )
}