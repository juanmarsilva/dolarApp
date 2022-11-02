import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { NavBar } from "../../Components/Navbar/NavBar";
import balanceStyle from "./BalanceScreen.style";

const BalanceScreen = ({ navigation, route }: any) => {
  const [number, setNumber] = useState<number>(1);

  return (
    <View style={balanceStyle.container}>
      <View>
        <Text style={balanceStyle.title}>Pesos</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => setNumber(Number(text))}
          value={number.toString()}
          placeholder="1"
          style={balanceStyle.input}
        />
      </View>
      <NavBar navigation={navigation} route={route} />
    </View>
  );
};

export default BalanceScreen;
