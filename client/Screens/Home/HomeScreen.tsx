import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Types } from "../../Components/Types/Types";
import { styles } from "./HomeScreenStyles";
import { useDispatch, useSelector } from "react-redux";
import { onTypesOfDolars } from "../../Redux/actions";
import { Loading } from "../../Components/Loading/Loading";
import { NavBar } from "../../Components/Navbar/NavBar";

export default function Home({ navigation, route }: any) {
  
  const dolar = useSelector<any>((state) => state.dolar);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    return dispatch(onTypesOfDolars());
  }, []);

  const { blue, oficial, ccl, bolsa, turista }: any = dolar;

  if (
    !Object.keys(blue).length ||
    !Object.keys(oficial).length ||
    !Object.keys(ccl).length
  )
    return <Loading />;

  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.containerCards} >
          <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types
              compra={oficial.compra}
              venta={oficial.venta}
              tipo={"Oficial"}
              navigation={navigation}
            />
          </View>

          <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types 
              compra={blue.compra} 
              venta={blue.venta} 
              tipo={"Blue"}
              navigation={navigation}
            />
          </View>

          <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types 
              compra={ccl.compra} 
              venta={ccl.venta} 
              tipo={"CCL"}
              navigation={navigation} 
            />
          </View>

          <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types 
              compra={bolsa.compra} 
              venta={bolsa.venta} 
              tipo={"Bolsa"}
              navigation={navigation} 
            />
          </View>

          <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types
              compra={turista.compra}
              venta={turista.venta}
              tipo={"Turista"}
              navigation={navigation}
            />
          </View>
        </View>
      </ScrollView>
      <NavBar navigation={navigation} route={route} />
    </View>
  );
}
