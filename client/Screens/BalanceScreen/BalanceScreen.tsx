import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import balanceStyle from "./BalanceScreenStyles";
import Table from "./Table";


const BalanceScreen = () => {
    const [number, setNumber] = useState<number>(0);

    const addDot = (number: number) => {
        const string = number.toString();
        const newArray = [];
        for (let i = 0; i < string.length; i++) {
        newArray.push(string[i]);
        if ((string.length - (i + 1)) % 3 === 0 && i < string.length - 1)
            newArray.push(".");
        }
        return newArray.join("");
    };

    const onChangeInput = (text:string) => {
        if(text){
            const withOutComa = text.replace(',','')
            const withoutDot = withOutComa.split('.').join('')
            const number = Number(withoutDot)
            setNumber(number)
        } else{
            setNumber(0)
        }
    }

    return (
        <View style={balanceStyle.container} >
            <View style={balanceStyle.boxUp}>
                <Text style={balanceStyle.title}>Pesos argentinos</Text>
                <TextInput
                    keyboardType='numeric'
                    onChangeText={onChangeInput}
                    value={addDot(number)}
                    placeholder='0'
                    style={balanceStyle.input}
                />
            </View>
            <ScrollView style={balanceStyle.boxDown}>
                <Table number={number.toString()}/>
                <Text style={balanceStyle.textUVA}>*Este valor se obtuvo con la inflación de los últimos 3 meses, por lo que la inversión real puede variar</Text>
            </ScrollView>
        </View>
    );
};

export default BalanceScreen;
