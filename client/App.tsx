import React from "react";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home/HomeScreen";
import ProfileScreen from "./Screens/Profile/ProfileScreen";
import BalanceScreen from "./Screens/Balance/BalanceScreen";
// https://cors-solucion.herokuapp.com/
// const URL = 'https://api-dolar-argentina.herokuapp.com/api/'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
              headerStyle: {
                backgroundColor: "#252524",
              },
              headerTintColor: "#dad7cd",
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
                backgroundColor: "#252524",
              },
              headerTintColor: "#dad7cd",
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
                backgroundColor: "#252524",
              },
              headerTintColor: "#dad7cd",
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
