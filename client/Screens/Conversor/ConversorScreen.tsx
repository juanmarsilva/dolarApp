import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { NavBar } from "../../Components/Navbar/NavBar";
import { styles } from "./ConversorScreenStyles";
import { useSelector } from "react-redux";

interface input {
    ars: any;
    dolar: any;
    euro: any;
    real: any;
}

const ConversorScreen = ({ navigation, route }: any) => {
    const dolarsPrice = useSelector((state: any) => state.dolar);
    // const euroPrice = useSelector((state:any) => state.euro);
    // const realPrice = useSelector( (state:any) => state.real);

    const { blue }: any = dolarsPrice;

    const [input, setInput] = useState<input>({
        ars: 0,
        dolar: 0,
        euro: 0,
        real: 0,
    });

    const handleChange = (value: any, name: string) => {
        if (name === "ars") {
        const dolarCantity = value / parseInt(blue.venta);
        const euroCantity = dolarCantity / 0.99;
        const realCantity = dolarCantity * 5;
        setInput({
            ...input,
            ars: value,
            dolar: dolarCantity.toFixed(2),
            euro: euroCantity.toFixed(2),
            real: realCantity.toFixed(2),
        });
        }
        if (name === "dolar") {
        const pesosCantity = value * parseInt(blue.venta);
        const euroCantity = value * 0.99;
        const realCantity = value * 5;
        setInput({
            ...input,
            ars: pesosCantity.toFixed(2),
            dolar: value,
            euro: euroCantity.toFixed(2),
            real: realCantity.toFixed(2),
        });
        }
        if (name === "euro") {
        const dolarCantity = value * 0.99;
        const pesosCantity = dolarCantity * parseInt(blue.venta);
        const realCantity = dolarCantity * 5;
        setInput({
            ...input,
            ars: pesosCantity.toFixed(2),
            dolar: dolarCantity.toFixed(2),
            euro: value,
            real: realCantity.toFixed(2),
        });
        }
        if (name === "real") {
        const dolarCantity = value * 5;
        const euroCantity = dolarCantity / 0.99;
        const pesosCantity = dolarCantity * parseInt(blue.venta);
        setInput({
            ...input,
            ars: pesosCantity.toFixed(2),
            dolar: dolarCantity.toFixed(2),
            euro: euroCantity.toFixed(2),
            real: value,
        });
        }
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Estas conversiones son aproximadas</Text>
        <View style={styles.containerAllInputs}>
            <View style={styles.containerInput}>
            <Text style={styles.label}>PESOS</Text>
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                value={input.ars}
                onChangeText={(value) => handleChange(value, "ars")}
            />
            </View>
            <View style={styles.containerInput}>
            <Text style={styles.label}>DOLARES</Text>
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                value={input.dolar}
                onChangeText={(value) => handleChange(value, "dolar")}
            />
            </View>
            <View style={styles.containerInput}>
            <Text style={styles.label}>EUROS</Text>
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                value={input.euro}
                onChangeText={(value) => handleChange(value, "euro")}
            />
            </View>
            <View style={styles.containerInput}>
            <Text style={styles.label}>REALES</Text>
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                value={input.real}
                onChangeText={(value) => handleChange(value, "real")}
            />
            </View>
        </View>
        <NavBar navigation={navigation} route={route} />
        </View>
    );
};

export default ConversorScreen;
