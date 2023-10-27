import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Terço from './Pages/Terco';
import HomePage from './Pages/Inicio';
import Liturgia from './Pages/Liturgia';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Início"
                component={HomePage}
                options={{ 
                    headerShown: false
                 }}
            />
            <Stack.Screen
                name="Terço"
                component={Terço}
                options={{ 
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#A6A6A6'
                    },
                 }}
            />
            <Stack.Screen
                name="Liturgia"
                component={Liturgia}
                options={{ 
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#A6A6A6'
                    },
                 }}
            />
        </Stack.Navigator>

    </NavigationContainer>
  )
}