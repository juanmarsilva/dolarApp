import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Types } from "../../Components/Types/Types";
import { styles } from "./HomeScreenStyles";
import { useDispatch, useSelector } from "react-redux";
import { allInfo, euroPrice, onTypesOfDolars, realPrice } from "../../Redux/actions";
import { Loading } from "../../Components/Loading/Loading";
import { NavBar } from "../../Components/Navbar/NavBar";

export default function Home({ navigation, route }: any) {
  
  const dolar = useSelector<any>((state) => state.dolar);
  const euro = useSelector<any>((state: any) => state.euro);
  const real = useSelector<any>(state => state.real);
  const dispatch = useDispatch<any>();

  const { blue, oficial, ccl, bolsa, turista }: any = dolar;
  const { compra: compraEuro, venta: ventaEuro }: any = euro;
  const { compra: compraReal, venta: ventaReal }: any = real;

  if (
    !Object.keys(blue).length ||
    !Object.keys(oficial).length ||
    !Object.keys(ccl).length
  ) return <Loading />

  useEffect(() => {
    dispatch(onTypesOfDolars());
    dispatch(realPrice());
    dispatch(allInfo());
    return dispatch(euroPrice());
  }, []);
  
  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.containerCards} >
          <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types
              compra={oficial.compra}
              venta={oficial.venta}
              tipo={"oficial"}
              navigation={navigation}
            />
          </View>

          <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types 
              compra={blue.compra} 
              venta={blue.venta} 
              tipo={"blue"}
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
              tipo={"bolsa"}
              navigation={navigation} 
            />
          </View>

          <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types
              compra={turista.compra}
              venta={turista.venta}
              tipo={"turista"}
              navigation={navigation}
            />
          </View>
          
          <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types
              compra={ compraEuro }
              venta={ ventaEuro }
              tipo={"Euro oficial"}
              navigation={navigation}
            />
          </View>
          
          <View style={[styles.firstDiv, styles.shadowProp]}>
            <Types
              compra={ compraReal }
              venta={ ventaReal }
              tipo={"Real oficial"}
              navigation={navigation}
            />
          </View>

        </View>
      </ScrollView>
      <NavBar navigation={navigation} route={route} />
    </View>
  );
  
}
