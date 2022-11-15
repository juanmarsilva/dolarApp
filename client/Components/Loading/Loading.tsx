import React from "react";
import { View, ActivityIndicator } from "react-native";
import { colors } from "../../App.style";
import LoadingStyle from "./LoadingStyles";

export const Loading = () => {
  return (
    <View style={LoadingStyle.container}>
      <ActivityIndicator size={80} color={colors.selected}/>
    </View>
  );
};

