import React from "react";
import { ScrollView } from "react-native";
import styles from "./App.style";
import Home from "./Screens/Home";
import { Provider } from "react-redux";
import store from "./Redux/store";
// https://cors-solucion.herokuapp.com/
// const URL = 'https://api-dolar-argentina.herokuapp.com/api/'

export default function App() {
  return (
    <Provider store={store}>
      <ScrollView style={styles.container}>
        <Home />
      </ScrollView>
    </Provider>
  );
}
