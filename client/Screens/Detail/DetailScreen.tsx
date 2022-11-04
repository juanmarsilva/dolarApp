import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './DetailScreenStyles';
import { NavBar } from '../../Components/Navbar/NavBar';
import { useSelector } from 'react-redux';
import { infoAboutDolarPrice } from '../../Redux/actions';


const DetailScreen = ({ navigation, route }: any) => {

    const type = useSelector<any>(state => state.detailDolar);
    // const infoDolar = useSelector<any>(state => state.infoDolar);

    return (
        <View style={styles.container} >
            <Text style={styles.title} >DETAIL SCREEN</Text>
            <Text style={styles.title} > {`Dolar ${type}`} </Text>
            <NavBar navigation={navigation} route={route} />
        </View>
    );
};

export default DetailScreen;
