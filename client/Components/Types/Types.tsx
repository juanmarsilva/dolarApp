import React from "react";
import { View, Text, Pressable } from 'react-native';
import types from "./TypesStyles";
import { useDispatch } from 'react-redux';
import { getAllData } from "../../Redux/actions";

export const Types = ({ compra, venta, tipo, navigation }: any) => {

  const dispatch = useDispatch<any>();

  const handleClick = (e: any, tipo: string) => {
    e.preventDefault();
    if(tipo === 'blue' || tipo === 'oficial') {
      dispatch(getAllData())
      navigation.navigate("Detail",{ tipo });
    }
  };
  const name = tipo === 'Euro oficial' || tipo === 'Real oficial'? tipo : `Dolar ${tipo[0].toUpperCase() + tipo.substring(1)}`

  return (
    <Pressable onPress={(e) => handleClick(e, tipo)}>
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
