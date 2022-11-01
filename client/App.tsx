import React, { useState, useEffect } from 'react';
import { View, ScrollView } from "react-native";
import styles from './App.style';
import { Types } from './Components/Types';
import { Loading } from './Components/Loading';
import axios from 'axios';
// https://cors-solucion.herokuapp.com/
const URL = 'https://api-dolar-argentina.herokuapp.com/api/'

export default function App() {
  const [dolar, setDolar] = useState<any>({
    dolaroficial: {},
    contadoliqui:{},
    dolarblue: {}
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const types = ['dolaroficial', 'contadoliqui', 'dolarblue']
    types.forEach(type => {
      axios(`${URL}${type}`)
      .then(res => setDolar({...dolar, [type]:res.data}))
      .catch(err => console.log(err))
    })
  }, [])

  if(!dolar.dolaroficial.compra) return <Loading/>

  // probando
  
  const dolarBlueCompra = dolar.dolarblue.compra
  const dolarBlueVenta = dolar.dolarblue.venta

  const dolarOficialCompra = dolar.dolaroficial.compra
  const dolarOficialVenta = dolar.dolaroficial.venta

  const dolarCCLCompra = dolar.contadoliqui.compra
  const dolarCCLVenta = dolar.contadoliqui.venta
  return (
    <ScrollView style={styles.container}>
      <View style={styles.firstDiv}>
        <Types compra={dolarBlueCompra} venta={dolarBlueVenta} tipo={'Blue'}/>
      </View>
      <View style={styles.otherDivs}>
        <Types compra={dolarOficialCompra} venta={dolarOficialVenta} tipo={'Oficial'}/>
      </View>
      <View style={styles.otherDivs}>
        <Types compra={dolarCCLCompra} venta={dolarCCLVenta} tipo={'CCL'}/>
      </View>
    </ScrollView>
  );
}
