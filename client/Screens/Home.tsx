import React, { useEffect } from "react";
import { View } from "react-native";
import { Types } from "../Components/Types";
import styles from "../App.style";
import { useDispatch, useSelector } from "react-redux";
import { onTypesOfDolars } from "../Redux/actions";
import { Loading } from "../Components/Loading";

export default function Home() {
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
    <>
      <View style={styles.firstDiv}>
        <Types compra={blue.compra} venta={blue.venta} tipo={"Blue"} />
      </View>
      <View style={styles.otherDivs}>
        <Types compra={oficial.compra} venta={oficial.venta} tipo={"Oficial"} />
      </View>
      <View style={styles.otherDivs}>
        <Types compra={ccl.compra} venta={ccl.venta} tipo={"CCL"} />
      </View>
    </>
  );
}
