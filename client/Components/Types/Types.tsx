import React from 'react';
import { View, Text } from 'react-native';
import types from './Types.style';
import s from './Types.module.css';

export const Types = ({ compra, venta, tipo }: any) => {

    return (
        <View style={[types.container]}>
            <Text style={types.title}>Dolar {tipo}</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={[types.text, types.buy]}>COMPRA</Text>
                <Text style={types.text}> {compra}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[types.text, types.sell]}>VENTA</Text>
                <Text style={types.text}> {venta}</Text>
            </View>
        </View>
    );
};