import React, { useState, useEffect, useRef } from 'react'
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import moment from "moment";
import Constants from "expo-constants";


//screens
import Home from "./src/components/Home/container/Home";
import FullPokedex from './src/components/FullPokedex/container/FullPokedex';
import Pokemon from './src/components/Pokemon/container/Pokemon';


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Navigation = (props) => {
    const navigationRef = useRef();

    return (
        <NavigationContainer
            ref={navigationRef}
            onStateChange={() => {
 
            }}
            onReady={() => {

            }}
        >
           <StackNavigation />
        </NavigationContainer>
    )
}

const StackNavigation = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="BottomNavigationEmployee"
        >

            <Stack.Screen name="BottomNavigationEmployee" component={BottomNavigation} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="FullPokedex" component={FullPokedex} />
            <Stack.Screen name="Pokemon" component={Pokemon} />
        </Stack.Navigator>
    );
};

const BottomNavigation = (props) => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarPosition="bottom"
            screenOptions={{
                    "tabBarShowIcon": true,
                    "tabBarIconStyle": {
                    "width": 40,
                    "height": 40
                    },
                    "tabBarLabelStyle": {
                      "textTransform": "capitalize",
                      "color": "#000",
                      "display": "none",
                    },
                    "tabBarIndicatorStyle": {
                      "opacity": 0
                    },
                  }
            }
        >
            <Tab.Screen
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ focused, color }) =>
                        (focused 
                            ? <Image source={require("./assets/Navigation/home-selected.png")} style={{ width: "100%", height: "100%" }} />
                            : <Image source={require("./assets/Navigation/home.png")} style={{ width: "100%", height: "100%" }} />),
                    }}
                name="Home"
                component={Home}
            />
            <Tab.Screen
            options={{
                tabBarLabel: "Full Pokedex",
                tabBarIcon: ({ focused, color }) =>
                    (focused 
                        ? <Image source={require("./assets/Navigation/pokedex-selected.png")}  style={{ width: "100%", height: "100%" }} />
                        : <Image source={require("./assets/Navigation/pokedex.png")}  style={{ width: "100%", height: "100%" }} />),
                }}
            name="FullPokedex"
            component={FullPokedex}
        />
        </Tab.Navigator>
    );
};

export default Navigation;
