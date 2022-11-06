import React, { useState } from "react";
import { View, Text, TextInput } from 'react-native';
import { NavBar } from "../../Components/Navbar/NavBar";
import { styles } from './CalculatorScreenStyles';
// import s from "./ProfileScreen.module.css";
import { useSelector } from 'react-redux';


const CalculatorScreen = ({ navigation, route }: any) => {

    const dolarsPrice = useSelector((state:any) => state.dolar);
    const euroPrice = useSelector((state:any) => state.euro);

    const { blue, turista }:any = dolarsPrice;

    const [ ars, setArs ] = useState<any>(0);
    const [ dolar, setDolar ] = useState<any>(0);
    const [ euro, setEuro ] = useState<any>(0);
    const [ real, setReal ] = useState<any>(0);

    


    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    keyboardType="numeric"
                    placeholder='0'
                    style={styles.input}
                    // value={ars}
                    onChangeText={(value) => setArs(value)} 
                />
                <TextInput
                    keyboardType="numeric"
                    placeholder='0'
                    style={styles.input}
                    // value={dolar}
                    onChangeText={(value) => setDolar(value)}
                />
                <TextInput
                    keyboardType="numeric"
                    placeholder='0'
                    style={styles.input}
                    // value={euro}
                    onChangeText={(value) => setEuro(value)}
                />
                <TextInput
                    keyboardType="numeric"
                    placeholder='0'
                    style={styles.input}
                    // value={real}
                    onChangeText={(value) => setReal(value)}
                />
                
            </View>
            <NavBar navigation={navigation} route={route} />
        </View>
    );
};


export default CalculatorScreen;
