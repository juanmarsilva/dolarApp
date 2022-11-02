import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavBar } from '../Components/NavBar';

const BalanceScreen = ({navigation, route}: any) => {
    return (
        <View style={styles.container} >
            <View>
                <Text style={styles.title}>BALANCE</Text>
                <Text style={styles.title}>PROXIMAMENTE</Text>
            </View>
            <NavBar navigation={navigation} route={route} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333236',
        width: '100%',
        height:'100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 40,
        color: '#fff',
        alignSelf: 'center',
    }
});

export default BalanceScreen;

