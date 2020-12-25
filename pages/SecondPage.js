//This is an example code for Navigator// 
import React, { Component, useState } from 'react';
//import react in our code. 
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView from "react-native-maps";


function ResellerListScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}></MapView>
        </View>
    );
}

function AddResellerScreen() {
    const [value, setValue] = useState(0);
    return (
        <View>
            <Text> Demo Form </Text>
            <View>
                <TextInput placeholder="Email" />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                />
                <Text>
                    Rate your teams performance this quarter
        </Text>

                <Text>
                    Slide value: {value}%
        </Text>
            </View>
        </View>
    );
}
function AddProductScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
function AddAgentScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
function ProductListScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

export default function SecondPage(props){
    const { navigate } = props.navigation;
    const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Resellers" component={ResellerListScreen} />
                <Tab.Screen name="Add Reseller" component={AddResellerScreen} />
                <Tab.Screen name="Products" component={ProductListScreen} />
                <Tab.Screen name="Add Products" component={AddProductScreen} />
                <Tab.Screen name="Add Agents" component={AddAgentScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});