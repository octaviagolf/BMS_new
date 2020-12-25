//This is an example code for Navigator// 
import React, { Component, useState , useEffect ,useRef } from 'react';
//import react in our code. 
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView, { Marker } from "react-native-maps";


function ResellerListScreen() {
    
        const [resellers, setResellers] = useState([]);
        const myMap= useRef();
        const centerMap = (map2) => {

            map2.animateToRegion({
                              latitude: 37.78825,
                              longitude: -122.4324,
                              latitudeDelta: 0.0922,
                              longitudeDelta: 0.042})
          }

        useEffect(() => {
            fetch("http://bms.digitalteam-dz.com/bms_resellers")
                .then(res => res.json())
                .then(data => { setResellers(data.data) });
        }, [])
        return (
            <View style={{ flex: 1,}}>
            <MapView 
                ref={myMap}
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 36.74006256716587, 
                    longitude: 3.09795433878562,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003
                }}>
                {resellers.map((reseller) => <MapView.Marker key = {reseller.id}
                    coordinate={{
                        latitude: parseFloat(reseller.reseller_location.split(',')[0]),
                        longitude: parseFloat(reseller.reseller_location.split(',')[1])
                    }}
                    title={reseller.first_name + " " + reseller.last_name}
                    description={reseller.reseller_phone}
                />)}
                </MapView>
                <Button title="center" onPress={()=>centerMap(myMap)}></Button>
        </View>
        )
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

    export default function SecondPage(props) {
        const { navigate } = props.navigation;
        const Tab = createBottomTabNavigator();
        return (
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
