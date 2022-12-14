import React from "react";
import { View, Pressable, Text } from "react-native";
import { styles } from "./NavbarStyles";
import { colors } from "./NavbarStyles";
import Pig from "../../Icons/pig";
import HomeIcon from "../../Icons/home";
import Money from "../../Icons/money";

export const NavBar = ({ navigation, route }: any) => {

    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Pressable onPress={() => navigation.navigate("Balance")}>
                    <Pig focused={route.name === 'Balance'}/>
                    <Text style={{position:'absolute',left:4, color: route.name === 'Balance'?colors.selected:colors.buttonContainer}}>.</Text>
                    {route.name === "Balance" ? (
                        <View style={styles.balance}></View>
                    ) : (
                        <></>
                    )}
                </Pressable>
            </View>
            <View style={styles.centralButton}>
                <Pressable onPress={() => navigation.navigate("Home")}>
                    <HomeIcon focused={route.name === 'Home'}/>
                    <Text style={{position:'absolute', color: route.name === 'Home'?colors.selected:colors.buttonContainer}}>.</Text>
                    {route.name === "Home" ? <View style={styles.home}></View> : <></>}
                </Pressable>
            </View>
            <View style={styles.button}>
                <Pressable onPress={() => navigation.navigate("Conversor")}>
                    <Money focused={route.name === 'Conversor'}/>
                    <Text style={{position:'absolute',left:4, color: route.name === 'Conversor'?colors.selected:colors.buttonContainer}}>.</Text>
                    {route.name === "Conversor" ? (
                        <View style={styles.profile}></View>
                    ) : (
                        <></>
                    )}
                </Pressable>
            </View>
        </View>
    );
};
