import React, {useContext, useState} from 'react';
import { Text, View, Button, TextInput, StyleSheet, Alert, Modal, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from "./src/screens/FormScreen";
import PokemonScreen from './src/screens/pokemonScreen';
import DetailScreen from "./src/screens/DetailScreen"
import { Provider } from "react-redux";
import { store } from "./src/store/configure-store"

function Main({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Contact Us"
        onPress={() => {
          navigation.navigate('Form');
        }}
      />
       <Button
        title="View Catalog"
        onPress={() => {
          navigation.navigate('Poke');
        }}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Form" component={FormScreen}/>
        <Stack.Screen name="Pokemon" component={PokemonScreen}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen}/>
        <Stack.Screen name="Main" component={Main}/>

     

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}