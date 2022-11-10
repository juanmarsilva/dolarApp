import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView } from 'react-native';
// import { NavBar } from "../../Components/Navbar/NavBar";
import { styles } from "./ConversorScreenStyles";
import { useSelector } from "react-redux";
import { addDot, addTwoDecimals } from '../BalanceScreen/BalanceFunctions';

interface input {
    dolar: any;
    euro: any;
    real: any;
    pesoChileno: any;
    pesoUruguayo: any;
}

const ConversorScreen = ({ navigation, route }: any) => {
    const dolarsPrice = useSelector((state: any) => state.dolar);
    const euroPrice = useSelector((state:any) => state.euro);
    const realPrice = useSelector( (state:any) => state.real);

    const { oficial }: any = dolarsPrice;

    const { dolarEuro, dolarReal, dolarPesoChileno, dolarPesoUruguayo, pesoChilenoPrice, pesoUruguayoPrice }:any = useSelector<any>(state => state.conversor);
    
    const arrayOfNumbers = [dolarEuro, dolarReal, dolarPesoChileno, dolarPesoUruguayo]
    const initialNumber = arrayOfNumbers.map(money => money.slice(0,money.length-1))

    const [input, setInput] = useState<input>({
        dolar: '1',
        euro: initialNumber[0],
        real: initialNumber[1],
        pesoChileno: initialNumber[2],
        pesoUruguayo: initialNumber[3],
    });

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
            console.log(numberDolar)
            const finalNumber = arrayOfNumbers.map(money => allInOne(numberDolar,money))
            setInput({
                dolar: dolar,
                euro: name === 0? newValue : finalNumber[0],
                real: name === 1? newValue : finalNumber[1],
                pesoChileno: name === 2? newValue : finalNumber[2],
                pesoUruguayo: name === 3? newValue : finalNumber[3]
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
            {/* <NavBar navigation={navigation} route={route} /> */}
        </View>
    );
};

export default ConversorScreen;
