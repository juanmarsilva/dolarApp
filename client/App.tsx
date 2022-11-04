import React from "react";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home/HomeScreen";
import ProfileScreen from "./Screens/Profile/ProfileScreen";
import BalanceScreen from "./Screens/BalanceScreen/BalanceScreen";
import { colors } from "./App.style";
import { StatusBar } from "react-native";
import DetailScreen from "./Screens/Detail/DetailScreen";
// https://cors-solucion.herokuapp.com/
// const URL = 'https://api-dolar-argentina.herokuapp.com/api/'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          backgroundColor={colors.otherBackground}
          barStyle="light-content"
        />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
              headerStyle: {
                backgroundColor: colors.otherBackground,
              },
              headerTintColor: colors.text,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: "Profile",
              headerStyle: {
                backgroundColor: colors.otherBackground,
              },
              headerTintColor: colors.text,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Balance"
            component={BalanceScreen}
            options={{
              title: "Balance",
              headerStyle: {
                backgroundColor: colors.otherBackground,
              },
              headerTintColor: colors.text,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{
              title: "Info",
              headerStyle: {
                backgroundColor: colors.otherBackground,
              },
              headerTintColor: colors.text,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
