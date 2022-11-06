import React, { useState } from "react";
import { View, Text, TextInput } from 'react-native';
import { NavBar } from "../../Components/Navbar/NavBar";
import { styles } from './CalculatorScreenStyles';
// import s from "./ProfileScreen.module.css";
import { useSelector } from 'react-redux';

interface input {
    ars: any,
    dolar: any,
    euro: any,
    real: any,
}

const CalculatorScreen = ({ navigation, route }: any) => {

    const dolarsPrice = useSelector((state:any) => state.dolar);
    const euroPrice = useSelector((state:any) => state.euro);

    const { blue, turista }:any = dolarsPrice;

    const [ input, setInput ] = useState<input>({
        ars: 0,
        dolar: 0,
        euro: 0,
        real: 0,
    });

    const handleChange = (value: any, name: string, ) => {
        
    };

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    keyboardType="numeric"
                    placeholder='0'
                    style={styles.input}
                    value={input.ars}
                    onChangeText={(value) => handleChange(value, 'ars')}
                />
                <TextInput
                    keyboardType="numeric"
                    placeholder='0'
                    style={styles.input}
                    value={input.dolar}
                    onChangeText={(value) => handleChange(value, 'dolar')}
                />
                <TextInput
                    keyboardType="numeric"
                    placeholder='0'
                    style={styles.input}
                    value={input.euro}
                    onChangeText={(value) => handleChange(value, 'euro')}
                />
                <TextInput
                    keyboardType="numeric"
                    placeholder='0'
                    style={styles.input}
                    value={input.real}
                    onChangeText={(value) => handleChange(value, 'real')}
                />
                
            </View>
            <NavBar navigation={navigation} route={route} />
        </View>
    );
};


export default CalculatorScreen;
