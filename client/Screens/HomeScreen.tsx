import React, { useEffect } from "react";
import { View, ScrollView } from 'react-native';
import { Types } from "../Components/Types";
import styles from "../App.style";
import { useDispatch, useSelector } from "react-redux";
import { onTypesOfDolars } from "../Redux/actions";
import { Loading } from "../Components/Loading";
import { NavBar } from "../Components/NavBar";

export default function Home({navigation, route}: any) {
  const dolar = useSelector<any>((state) => state.dolar);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    return dispatch(onTypesOfDolars());
  }, []);

  const { blue, oficial, ccl }: any = dolar;

  if (
    !Object.keys(blue).length ||
    !Object.keys(oficial).length ||
    !Object.keys(ccl).length
  )
    return <Loading />;

  return (
    <View style={styles.container} >
      <ScrollView>
        <View style={styles.firstDiv}>
          <Types compra={blue.compra} venta={blue.venta} tipo={"Blue"} />
        </View>
        <View style={styles.otherDivs}>
          <Types compra={oficial.compra} venta={oficial.venta} tipo={"Oficial"} />
        </View>
        <View style={styles.otherDivs}>
          <Types compra={ccl.compra} venta={ccl.venta} tipo={"CCL"} />
        </View>
        <View style={styles.otherDivs}>
          <Types compra={ccl.compra} venta={ccl.venta} tipo={"CCL"} />
        </View>
      </ScrollView>
      <NavBar navigation={navigation} route={route} />
    </View>
  );
}
