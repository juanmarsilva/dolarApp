import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from 'react-native';
import { styles } from "./ConversorScreenStyles";
import { useSelector } from "react-redux";
import { addDot, addTwoDecimals } from '../BalanceScreen/BalanceFunctions';
import { Loading } from "../../Components/Loading/Loading";

interface input {
    dolar: string;
    euro: string;
    real: string;
    pesoChileno: string;
    pesoUruguayo: string;
}

const ConversorScreen = () => {
    const { dolarEuro, dolarReal, dolarPesoChileno, dolarPesoUruguayo }:any = useSelector<any>(state => state.conversor);
    const arrayOfNumbers = [dolarEuro, dolarReal, dolarPesoChileno, dolarPesoUruguayo]
    const [input, setInput] = useState<input>({
        dolar: '1',
        euro: arrayOfNumbers[0],
        real: arrayOfNumbers[1],
        pesoChileno: arrayOfNumbers[2],
        pesoUruguayo: arrayOfNumbers[3],
    });

    if(!arrayOfNumbers[0]) return <Loading/>

    const replaceComaAndTurnNumber = (string:string) => {
        const withoutComa = string.replace(',','.')
        return Number(withoutComa)
    }

    const allInOne = (numberValue:number, money:string) => {
        const change = addTwoDecimals(numberValue * replaceComaAndTurnNumber(money))
        return addDot(change)
    }

    const calculateDolar = (numberValue:number, money:string) => {
        const change = addTwoDecimals(numberValue / replaceComaAndTurnNumber(money))
        return addDot(change)
    }

    const handleChange = (value: string, name: any) => {
        const withoutDot = value.split('.').join('')
        const numberValue = replaceComaAndTurnNumber(withoutDot)
        const newValue = addDot(numberValue)
        if (name === "dolar") {
            const finalNumber = arrayOfNumbers.map((money) => allInOne(numberValue,money))
            setInput({
                dolar: newValue,
                euro: finalNumber[0],
                real: finalNumber[1],
                pesoChileno: finalNumber[2],
                pesoUruguayo: finalNumber[3],
            });
        }
        else {
            const dolar = calculateDolar(numberValue, arrayOfNumbers[name])
            const transformDolar = dolar.split('.').join('')
            const numberDolar = replaceComaAndTurnNumber(transformDolar)
            const finalNumber = arrayOfNumbers.map(money => allInOne(numberDolar,money))
            setInput({
                dolar: dolar,
                euro:name === 0? newValue : finalNumber[0],
                real:name === 1? newValue : finalNumber[1],
                pesoChileno:name === 2? newValue : finalNumber[2],
                pesoUruguayo:name === 3? newValue : finalNumber[3]
            })
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.containerAllInputs}>
                <Text style={styles.title}>Estas conversiones son aproximadas</Text>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>DOLAR</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.input}
                        value={input.dolar}
                        onChangeText={(value) => handleChange(value, "dolar")}
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>EURO</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.input}
                        value={input.euro}
                        onChangeText={(value) => handleChange(value, 0)}
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>REAL</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.input}
                        value={input.real}
                        onChangeText={(value) => handleChange(value, 1)}
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>PESOS CHILENOS</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.input}
                        value={input.pesoChileno}
                        onChangeText={(value) => handleChange(value, 2)}
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>PESOS URUGUAYOS</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.input}
                        value={input.pesoUruguayo}
                        onChangeText={(value) => handleChange(value, 3)}
                    />
                </View>

            </ScrollView>
        </View>
    );
};

export default ConversorScreen;
