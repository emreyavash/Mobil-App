import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AnasayfaScreen from '../screens/Anasayfa/index';
import { Anasayfa } from '../types';
const Stack=createStackNavigator();
const AnasayfaTabNavigator = () => {
    return (
        
            <Stack.Navigator>
                <Stack.Screen
                name="AnasayfaScreen"
                component={AnasayfaScreen}
                options={{headerShown:false}} 
                />
               
            </Stack.Navigator>
        
        
    )
}

export default AnasayfaTabNavigator
