import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView } from 'react-native';
import { NavBar } from "../../Components/Navbar/NavBar";
import { styles } from "./ConversorScreenStyles";
import { useSelector } from "react-redux";
import { addTwoDecimals } from '../BalanceScreen/BalanceFunctions';

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

    const [input, setInput] = useState<input>({
        dolar: '1',
        euro: dolarEuro,
        real: dolarReal,
        pesoChileno: dolarPesoChileno,
        pesoUruguayo: dolarPesoUruguayo,
    });

    const handleChange = (value: any, name: string) => {
        if (name === "ars") {
            const dolarCantity = addTwoDecimals(value / parseInt(oficial.venta));
            const euroCantity = addTwoDecimals(dolarCantity * parseInt(dolarEuro));
            const realCantity = addTwoDecimals(dolarCantity * parseInt(dolarReal));
            const pesoUruguayoCantity = addTwoDecimals(dolarCantity * parseInt(dolarPesoUruguayo));
            const pesoChilenoCantity = addTwoDecimals(dolarCantity * parseInt(dolarPesoChileno));
            setInput({
                ...input,
                dolar: String(dolarCantity),
                euro: String(euroCantity),
                real: String(realCantity),
                pesoChileno: String(pesoChilenoCantity),
                pesoUruguayo: String(pesoUruguayoCantity),
            });
        };

        if (name === "dolar") {
            const euroCantity = addTwoDecimals(value * parseInt(dolarEuro));
            const realCantity = addTwoDecimals(value * parseInt(dolarReal));
            const pesoUruguayoCantity = addTwoDecimals(value * parseInt(dolarPesoUruguayo));
            const pesoChilenoCantity = addTwoDecimals(value * parseInt(dolarPesoChileno));
            setInput({
                ...input,
                dolar: value,
                euro: String(euroCantity),
                real: String(realCantity),
                pesoChileno: String(pesoChilenoCantity),
                pesoUruguayo: String(pesoUruguayoCantity),
            });
        };

        if (name === "euro") {
            const dolarCantity = addTwoDecimals(value / parseInt(dolarEuro));
            const realCantity = addTwoDecimals(dolarCantity * parseInt(dolarReal));
            const pesoUruguayoCantity = addTwoDecimals(dolarCantity * parseInt(dolarPesoUruguayo));
            const pesoChilenoCantity = addTwoDecimals(dolarCantity * parseInt(dolarPesoChileno));
            setInput({
                ...input,
                dolar: String(dolarCantity),
                euro: value,
                real: String(realCantity),
                pesoChileno: String(pesoChilenoCantity),
                pesoUruguayo: String(pesoUruguayoCantity),
            });
        };

        if (name === "real") {
            const dolarCantity = addTwoDecimals(value / parseInt(dolarReal));
            const euroCantity = addTwoDecimals(dolarCantity * parseInt(dolarEuro));
            const pesoUruguayoCantity = addTwoDecimals(dolarCantity * parseInt(dolarPesoUruguayo));
            const pesoChilenoCantity = addTwoDecimals(dolarCantity * parseInt(dolarPesoChileno));
            setInput({
                ...input,
                dolar: String(dolarCantity),
                euro: String(euroCantity),
                real: value,
                pesoChileno: String(pesoChilenoCantity),
                pesoUruguayo: String(pesoUruguayoCantity),
            });
        };

        if(name === 'peso chileno') {
            const dolarCantity = addTwoDecimals(value / parseInt(dolarPesoChileno));
            const euroCantity = addTwoDecimals(dolarCantity * parseInt(dolarEuro));
            const pesoUruguayoCantity = addTwoDecimals(dolarCantity * parseInt(dolarPesoUruguayo));
            const realCantity = addTwoDecimals(dolarCantity * parseInt(dolarReal));
            setInput({
                ...input,
                dolar: String(dolarCantity),
                euro: String(euroCantity),
                real: String(realCantity),
                pesoChileno: value,
                pesoUruguayo: String(pesoUruguayoCantity),
            });
        };

        if(name === 'peso uruguayo') {
            const dolarCantity = addTwoDecimals(value / parseInt(dolarPesoUruguayo));
            const euroCantity = addTwoDecimals(dolarCantity * parseInt(dolarEuro));
            const pesoChilenoCantity = addTwoDecimals(dolarCantity * parseInt(dolarPesoChileno));
            const realCantity = addTwoDecimals(dolarCantity * parseInt(dolarReal));
            setInput({
                ...input,
                dolar: String(dolarCantity),
                euro: String(euroCantity),
                real: String(realCantity),
                pesoChileno: String(pesoChilenoCantity),
                pesoUruguayo: value,
            });
        };

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
                        onChangeText={(value) => handleChange(value, "euro")}
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>REAL</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.input}
                        value={input.real}
                        onChangeText={(value) => handleChange(value, "real")}
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>PESOS CHILENOS</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.input}
                        value={input.pesoChileno}
                        onChangeText={(value) => handleChange(value, "peso chileno")}
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>PESOS URUGUAYOS</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.input}
                        value={input.pesoUruguayo}
                        onChangeText={(value) => handleChange(value, "peso uruguayo")}
                    />
                </View>

            </ScrollView>
            <NavBar navigation={navigation} route={route} />
        </View>
    );
};

export default ConversorScreen;
