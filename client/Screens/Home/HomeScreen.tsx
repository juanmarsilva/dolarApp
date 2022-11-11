import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Types } from "../../Components/Types/Types";
import { styles } from "./HomeScreenStyles";
import { useDispatch, useSelector } from "react-redux";
import { euroPrice, onTypesOfDolars, realPrice, getAllData } from '../../Redux/actions';
import { Loading } from "../../Components/Loading/Loading";
// import { NavBar } from "../../Components/Navbar/NavBar";
import { useState } from 'react';

export default function Home({ navigation }: any) {
  
  const dolar = useSelector<any>((state) => state.dolar);
  const euro = useSelector<any>((state: any) => state.euro);
  const real = useSelector<any>(state => state.real);
  const dispatch = useDispatch<any>();

  const [ loading, setLoading ] = useState<boolean>(true);
  
  const { blue, oficial, ccl, bolsa, turista }: any = dolar;
  const { compra: compraEuro, venta: ventaEuro }: any = euro;
  const { compra: compraReal, venta: ventaReal }: any = real;
  let qatar 
  oficial.venta && (qatar = Number(oficial?.venta?.replace(',','.'))  + Number(oficial?.venta?.replace(',','.')) * 1)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    dispatch(onTypesOfDolars());
    dispatch(realPrice());
    dispatch(getAllData());
    return dispatch(euroPrice());
  }, []);
  
  if(loading) return <Loading />
  
  return (
    <View style={styles.container}>
        <View style={styles.containerCards} >
          <View style={styles.firstDiv}>
            <Types
              compra={oficial.compra}
              venta={oficial.venta}
              tipo={"oficial"}
              navigation={navigation}
            />
          </View>

          <View style={styles.firstDiv}>
            <Types 
              compra={blue.compra} 
              venta={blue.venta} 
              tipo={"blue"}
              navigation={navigation}
            />
          </View>

          <View style={styles.firstDiv}>
            <Types 
              compra={ccl.compra} 
              venta={ccl.venta} 
              tipo={"CCL"}
              navigation={navigation} 
            />
          </View>

          <View style={styles.firstDiv}>
            <Types 
              compra={bolsa.compra} 
              venta={bolsa.venta} 
              tipo={"bolsa"}
              navigation={navigation} 
            />
          </View>

          <View style={styles.firstDiv}>
            <Types
              compra={turista.compra}
              venta={turista.venta}
              tipo={"turista"}
              navigation={navigation}
            />
          </View>

          <View style={styles.firstDiv}>
            <Types
              compra={'No Cotiza'}
              venta={qatar}
              tipo={"qatar"}
              navigation={navigation}
            />
          </View>
          
          <View style={styles.firstDiv}>
            <Types
              compra={ compraEuro }
              venta={ ventaEuro }
              tipo={"Euro oficial"}
              navigation={navigation}
            />
          </View>
          
          <View style={styles.firstDiv}>
            <Types
              compra={ compraReal }
              venta={ ventaReal }
              tipo={"Real oficial"}
              navigation={navigation}
            />
          </View>

        </View>
      {/* <NavBar navigation={navigation} route={route} /> */}
    </View>
  );
  
}
