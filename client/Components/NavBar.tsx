import React from 'react';
import { View, StyleSheet, Image, Button, Pressable  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; 

export const NavBar = ({ navigation, route }: any) => {

    return (
        <View style={styles.container} >
            <View style={styles.button} >
                <Pressable onPress={() => navigation.navigate('Balance')}>
                    <Ionicons name="calculator-outline" size={40} color={icon_color} />
                    {
                        route.name === 'Balance' 
                        ? <View style={styles.balance} ></View>
                        : <></>
                    }
                </Pressable>
            </View>
            <View style={styles.centralButton} >
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="home-outline" size={60} color={icon_color} />
                    {
                        route.name === 'Home' 
                        ? <View style={styles.home} ></View>
                        : <></>
                    }
                </Pressable>
            </View>
            <View style={styles.button}>
                <Pressable onPress={() => navigation.navigate('Profile')}>
                    <Ionicons name="person-circle-outline" size={50} color={icon_color} />
                    {
                        route.name === 'Profile' 
                        ? <View style={styles.profile} ></View>
                        : <></>
                    }
                </Pressable>
            </View>
        </View>
    );
};

const background_color = '#252524';
const button_color = '#252524';
const border_color = '#353535';
const icon_color = '#dad7cd';

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: background_color,
        width: '100%',
        height: 60,
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        position: 'relative',
        width: 60,
        borderRadius: 50,
        top: -20,
        backgroundColor: button_color,
        borderColor: border_color,
        borderWidth: .5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centralButton: {
        position: 'relative',
        width: 90,
        height: 90,
        borderRadius: 50,
        top: -40,
        backgroundColor: button_color,
        borderColor: border_color,
        borderWidth: .5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        backgroundColor: 'transparent',
        border: 'none',
    }, 
    balance: {
        position: 'absolute',
        zIndex: -5,
        width: 45,
        height: 45,
        backgroundColor: '#344e41',
        borderRadius: 100,
        top: -1,
        left: -3,
    },
    home: {
        position: 'absolute',
        zIndex: -5,
        width: 70,
        height: 70,
        backgroundColor: '#344e41',
        borderRadius: 100,
        top: -3,
        left: -5,
    },
    profile: {
        position: 'absolute',
        zIndex: -5,
        width: 45,
        height: 45,
        backgroundColor: '#344e41',
        borderRadius: 100,
        top: 4,
        left: 2,
    }
});
