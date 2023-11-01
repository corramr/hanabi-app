import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import Game from "./src/screens/game";
import WaitingRoom from "./src/screens/waiting _room";

export default function App() {
  return (
    // <NavigationContainer>
    //   <StackNavigator />
    // </NavigationContainer>
    // <Game/>
    <WaitingRoom/>
  );
}