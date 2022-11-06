import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Types } from "../../Components/Types/Types";
import { styles } from "./HomeScreenStyles";
import { useDispatch, useSelector } from "react-redux";
import { euroPrice, onTypesOfDolars } from "../../Redux/actions";
import { Loading } from "../../Components/Loading/Loading";
import { NavBar } from "../../Components/Navbar/NavBar";

export default function Home({ navigation, route }: any) {
  
  const dolar = useSelector<any>((state) => state.dolar);
  const euro = useSelector<any>(state => state.euro);
  const dispatch = useDispatch<any>();


  useEffect(() => {
    dispatch(onTypesOfDolars());
    return dispatch(euroPrice());
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
              tipo={"Dolar Oficial"}
              navigation={navigation}
            />
          </View>

          <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types 
              compra={blue.compra} 
              venta={blue.venta} 
              tipo={"Dolar Blue"}
              navigation={navigation}
            />
          </View>

          <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types 
              compra={ccl.compra} 
              venta={ccl.venta} 
              tipo={"Dolar CCL"}
              navigation={navigation} 
            />
          </View>

          <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types 
              compra={bolsa.compra} 
              venta={bolsa.venta} 
              tipo={"Dolar Bolsa"}
              navigation={navigation} 
            />
          </View>

          <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types
              compra={turista.compra}
              venta={turista.venta}
              tipo={"Dolar Turista"}
              navigation={navigation}
            />
          </View>
          {/* <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types
              compra={euro.compra}
              venta={euro.venta}
              tipo={"Euro oficial"}
              navigation={navigation}
            />
          </View> */}
          {/* <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types
              compra={turista.compra}
              venta={turista.venta}
              tipo={"Dolar Turista"}
              navigation={navigation}
            />
          </View>
          <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types
              compra={turista.compra}
              venta={turista.venta}
              tipo={"Dolar Turista"}
              navigation={navigation}
            />
          </View>
          <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types
              compra={turista.compra}
              venta={turista.venta}
              tipo={"Dolar Turista"}
              navigation={navigation}
            />
          </View> */}
        </View>
      </ScrollView>
      <NavBar navigation={navigation} route={route} />
    </View>
  );
  
}
