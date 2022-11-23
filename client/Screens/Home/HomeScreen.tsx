import React, { useEffect } from "react";
import { View } from "react-native";
import { Types } from "../../Components/Types/Types";
import { styles } from "./HomeScreenStyles";
import { useDispatch, useSelector } from "react-redux";
import { euroPrice, onTypesOfDolars, realPrice, getAllData, getAllCurrencies, getAllExchanges, getAllEvolutions } from '../../Redux/actions';
import { Loading } from "../../Components/Loading/Loading";
import { useState } from 'react';
import PersonalButton from "../../Components/Buttons/Button";
import { colors } from "../../App.style";

export default function Home({ navigation }: any) {
  
  const dolar = useSelector<any>((state) => state.dolar);
  const euro:any = useSelector<any>((state: any) => state.euro);
  const real:any = useSelector<any>(state => state.real);
  const dispatch = useDispatch<any>();

  const [ loading, setLoading ] = useState<boolean>(true);
  
  const { blue, oficial, CCL, bolsa, turista, qatar }: any = dolar;
  
  useEffect(() => {
    dispatch(getAllCurrencies());
    dispatch(getAllExchanges());
    // dispatch(realPrice());
    // dispatch(getAllData());
    // return dispatch(euroPrice());
  }, []);

  useEffect(() => {
    qatar.sellPrice && euro.buyPrice && real.buyPrice && setLoading(false)
  }, [qatar, euro, real])

  if(loading) return <Loading />

  const seeEvolution = (tipo:string) => {
      // dispatch(getAllData())
      dispatch(getAllEvolutions( tipo ))
      navigation.navigate("Detail",{tipo})
  }
  
  return (
    <View style={styles.container}>
        <View style={styles.containerCards} >
          <View style={styles.firstDiv}>
            <Types
              compra={oficial.buyPrice}
              venta={oficial.sellPrice}
              tipo={"oficial"}
              navigation={navigation}
            />
          </View>

          <View style={styles.firstDiv}>
            <Types 
              compra={blue.buyPrice} 
              venta={blue.sellPrice} 
              tipo={"blue"}
              navigation={navigation}
            />
          </View>

          <View style={styles.firstDiv}>
            <Types 
              compra={CCL.buyPrice} 
              venta={CCL.sellPrice} 
              tipo={"CCL"}
              navigation={navigation} 
            />
          </View>

          <View style={styles.firstDiv}>
            <Types 
              compra={bolsa.buyPrice} 
              venta={bolsa.sellPrice} 
              tipo={"bolsa"}
              navigation={navigation} 
            />
          </View>

          <View style={styles.firstDiv}>
            <Types
              compra={turista.buyPrice}
              venta={turista.sellPrice}
              tipo={"turista"}
              navigation={navigation}
            />
          </View>

          <View style={styles.firstDiv}>
            <Types
              compra={qatar.buyPrice}
              venta={qatar.sellPrice}
              tipo={"qatar"}
              navigation={navigation}
            />
          </View>
          
          <View style={styles.firstDiv}>
            <Types
              compra={ euro.buyPrice }
              venta={ euro.sellPrice }
              tipo={"Euro oficial"}
              navigation={navigation}
            />
          </View>
          
          <View style={styles.firstDiv}>
            <Types
              compra={ real.buyPrice }
              venta={ real.sellPrice }
              tipo={"Real oficial"}
              navigation={navigation}
            />
          </View>
          <View style= {styles.buttons}>
            <PersonalButton text={'Evolución dolar blue'} onPress={() => seeEvolution('blue')} color={colors.containersBack}/>
            <PersonalButton text={'Evolución dolar oficial'} onPress={() => seeEvolution('oficial')} color={colors.containersBack}/>
          </View>

        </View>
    </View>
  );
  
}
