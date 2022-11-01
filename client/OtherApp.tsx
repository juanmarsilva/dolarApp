import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Types } from './Components/Types';
import styles from './App.style';
import { useDispatch, useSelector } from 'react-redux';
import { onTypesOfDolars } from './Redux/actions';
import { Loading } from './Components/Loading';


export default function OtherApp () {
    const dolar = useSelector <any>(state => state.dolar)
    const dispatch = useDispatch <any>()

    useEffect( () => {
        return dispatch(onTypesOfDolars())
    }, [])
    console.log(dolar)
    // if(!Object.keys(dolar.blue).length) return <Loading/>
    // const blue = dolar.blue
    // const oficial = dolar.oficial
    // const ccl = dolar.ccl
    return(
        <>
            <View style={styles.firstDiv}>
                {/* <Types compra={blue.compra} venta={blue.venta} tipo={'Blue'}/> */}
            </View>
            <View style={styles.otherDivs}>
                {/* <Types compra={oficial.compra} venta={oficial.venta} tipo={'Oficial'}/> */}
            </View>
            <View style={styles.otherDivs}>
                <Types compra={100} venta={200} tipo={'CCL'}/>
            </View>
        </>
    )
}