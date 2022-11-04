import React from "react";
import { View, Text, Pressable } from 'react-native';
import types from "./TypesStyles";
// import s from "./Types.module.css";
import { useDispatch } from 'react-redux';
import { detailDolar, infoAboutDolarPrice } from "../../Redux/actions";

export const Types = ({ compra, venta, tipo, navigation }: any) => {

  const dispatch = useDispatch<any>();

  const handleClick = (e: any, name: string) => {
    e.preventDefault();
    dispatch(detailDolar(name));
    dispatch(infoAboutDolarPrice('dolarOficial'));
    navigation.navigate("Detail");
  };

  return (
    <Pressable onPress={(e) => handleClick(e, tipo)}>
      <View style={[types.container]}>
        <Text style={types.title}>{tipo}</Text>
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
