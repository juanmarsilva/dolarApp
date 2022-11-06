import React from "react";
import { View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./NavbarStyles";
import { colors } from "./NavbarStyles";

export const NavBar = ({ navigation, route }: any) => {
    return (
        <View style={styles.container}>
        <View style={styles.button}>
            <Pressable onPress={() => navigation.navigate("Balance")}>
                <Ionicons
                    name="calculator-outline"
                    size={40}
                    color={colors.contrarianText}
                />
                {route.name === "Balance" ? (
                    <View style={styles.balance}></View>
                ) : (
                    <></>
                )}
            </Pressable>
        </View>
        <View style={styles.centralButton}>
            <Pressable onPress={() => navigation.navigate("Home")}>
                <Ionicons
                    name="home-outline"
                    size={60}
                    color={colors.contrarianText}
                />
                {route.name === "Home" ? <View style={styles.home}></View> : <></>}
            </Pressable>
        </View>
        <View style={styles.button}>
            <Pressable onPress={() => navigation.navigate("Calculator")}>
                <Ionicons
                    name="person-circle-outline"
                    size={50}
                    color={colors.contrarianText}
                />
                {route.name === "Calculator" ? (
                    <View style={styles.profile}></View>
                ) : (
                    <></>
                )}
            </Pressable>
        </View>
        </View>
    );
};
