import * as React from 'react';
import store from "./Redux/store";
import 'react-native-gesture-handler';
import { Provider} from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "./App.style";
import { StatusBar } from "react-native";
import DetailScreen from "./Screens/Detail/DetailScreen";
import BottomTabContainer from "./Screens/BottomTabContainer";


// https://cors-solucion.herokuapp.com/
// const URL = 'https://api-dolar-argentina.herokuapp.com/api/'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          backgroundColor={colors.background}
          barStyle="light-content"
        />
        <Stack.Navigator
        >
          <Stack.Screen
            name='Home.'
            options={{
              title: 'holis',
              header:()=>null,
              headerShadowVisible: false,
              
            }}
            component={BottomTabContainer}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{
              title: "Evolución",
              headerStyle: {
                backgroundColor: colors.background,
              },
              headerShadowVisible: false,
              headerTintColor: colors.text,
              headerTitleStyle: {
                fontWeight: "bold",
              },
              animation:'fade_from_bottom'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
