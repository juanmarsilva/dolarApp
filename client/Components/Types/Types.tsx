import React from "react";
import { View, Text, Pressable } from 'react-native';
import types from "./TypesStyles";

export const Types = ({ compra, venta, tipo }: any) => {

  const name = tipo === 'Euro oficial' || tipo === 'Real oficial'? tipo : `Dolar ${tipo[0].toUpperCase() + tipo.substring(1)}`

  return (
    <Pressable>
      <View style={types.container}>
        <Text style={types.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={[types.text, types.buy]}>COMPRA</Text>
          <Text style={types.text}> {compra} </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={[types.text, types.sell]}>VENTA</Text>
          <Text style={types.text}> {venta}</Text>
        </View>
      </View>
    </Pressable>
  );
};
