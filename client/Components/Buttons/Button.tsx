import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { styles } from './Button.style';

export default function PersonalButton ({ text, active, onPress }) {

    return (
        <TouchableHighlight underlayColor={'#0f3633'} activeOpacity={0.5} onPress={onPress} style={active?styles.selectedButton : styles.containerButton}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableHighlight>
    )
}