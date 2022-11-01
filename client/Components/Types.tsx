import React from 'react';
import { View, Text } from 'react-native';
import types from './Types.style';

export const Types = ({ compra, venta, tipo }) => {

    return (
        <View style={types.container}>
            <Text style={types.title}>Dolar {tipo}</Text>
                <Text style={types.text}>Compra {compra}</Text>
                <Text style={types.text}>Venta {venta}</Text>
        </View>
    )
}