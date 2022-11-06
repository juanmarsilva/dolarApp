import React from "react";
import { View, Pressable, Text } from "react-native";
import { styles } from "./NavbarStyles";
import { colors } from "./NavbarStyles";
import Pig from "../../Icons/pig";
import Home from "../../Icons/home";
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
                  <Home focused={route.name === 'Home'}/>
                  <Text style={{position:'absolute', color: route.name === 'Home'?colors.selected:colors.buttonContainer}}>.</Text>
                  {route.name === "Home" ? <View style={styles.home}></View> : <></>}
              </Pressable>
          </View>
          <View style={styles.button}>
              <Pressable onPress={() => navigation.navigate("Calculator")}>
                  <Money focused={route.name === 'Profile'}/>
                  <Text style={{position:'absolute',left:4, color: route.name === 'Calculator'?colors.selected:colors.buttonContainer}}>.</Text>
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
