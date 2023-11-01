import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import SignUp from "./src/screens/signup";
import SignIn from "./src/screens/signin";
import Home from "./src/screens/home";
import WaitingRoom from "./src/screens/waiting _room";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Group>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WaitingRoom" component={WaitingRoom} />
      </Stack.Group>
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={MyModal} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});