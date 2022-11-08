import React from 'react';
import { Text, TouchableOpacity, Button } from 'react-native';
import { styles } from './Button.style';

export default function PersonalButton ({ text, active, onPress }) {

    return (
        <TouchableOpacity onPress={onPress} style={active?styles.selectedButton : styles.containerButton}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}