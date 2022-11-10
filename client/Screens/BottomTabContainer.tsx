import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import Home from "./Home/HomeScreen";
import ConversorScreen from "./Conversor/ConversorScreen";
import BalanceScreen from "./BalanceScreen/BalanceScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from "../App.style";
import Pig from '../Icons/pig';
import HomeIcon from '../Icons/home';
import Money from '../Icons/money';



export default function BottomTabContainer () {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({route}) => ({
            title: route.name,
            headerStyle: {
                backgroundColor: colors.background,
                shadowColor:colors.background
            },
            headerTintColor: 'transparent',
            headerTitleAlign:'center',
            headerTitleStyle: {
                fontWeight: "bold",
            },
            tabBarActiveTintColor: colors.contrarianText,
            tabBarActiveBackgroundColor: colors.selected,
            tabBarInactiveTintColor:colors.text,
            tabBarInactiveBackgroundColor: colors.buttonContainer,
            tabBarStyle:{
                height:65,
                width:'100%',
                backgroundColor: colors.buttonContainer,
            },
            tabBarLabelStyle:{
                paddingBottom:5,
            },
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarIcon: ({focused}) => {
                switch (route.name){
                    case 'Home': return <HomeIcon focused={focused}/>
                    case 'Conversor': return <Money focused={focused}/>
                    case 'Balance': return <Pig focused={focused}/>
                }
            }
        })}
        >
            <Tab.Screen
                name="Conversor"
                component={ConversorScreen}
            />
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Balance"
                component={BalanceScreen}
            />
        </Tab.Navigator>
    )
}