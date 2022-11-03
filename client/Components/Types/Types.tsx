import React from 'react';
import { View, Text } from 'react-native';
import types from './Types.style';
import s from './Types.module.css';

export const Types = ({ compra, venta, tipo }: any) => {

    return (
        <View style={[types.container, s.animation]}>
            <Text style={types.title}>Dolar {tipo}</Text>
                <Text style={types.text}>Compra {compra}</Text>
                <Text style={types.text}>Venta {venta}</Text>
        </View>
    )
}