import React from 'react';
import { ScrollView } from "react-native";
import styles from './App.style';
import { Provider } from 'react-redux';
import { createStore,  applyMiddleware, compose } from 'redux';
import rootReducer from "./Redux/reducer";
import OtherApp from './OtherApp';
import thunk from "redux-thunk";
// https://cors-solucion.herokuapp.com/
// const URL = 'https://api-dolar-argentina.herokuapp.com/api/'

export default function App() {

 const store = createStore(rootReducer,compose(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      <ScrollView style={styles.container}>
        <OtherApp />
      </ScrollView>
    </Provider>
  );
}
