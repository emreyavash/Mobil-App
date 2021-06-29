import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'; 
import GirisyapScreen from '../screens/GirisYap/index';
import KayıtOlScreen from '../screens/KayıtOl/index';
import AnasayfaScreen from '../screens/Anasayfa/index';
import { Anasayfa, GirisSayfa } from '../types';
import AnasayfaTabNavigator from '../navigation/AnasayfaTabNavigator'

const Stack = createStackNavigator();

const GirisyapNavigator = () => {
    return (
        
            <Stack.Navigator>
                <Stack.Screen  
                name='GirisYapScreen' 
                component={GirisyapScreen}
                options={{headerShown:false}}
                 />
                 <Stack.Screen 
                 name='KayıtOlScreen' 
                 component={KayıtOlScreen}
                 options={{headerShown:false}} 
                 />
                 <Stack.Screen 
                  name='AnasayfaScreen' 
                  component={AnasayfaTabNavigator}
                  options={{headerShown:false}} 
                 />
            </Stack.Navigator>
       
           
            
        
    )
}

export default GirisyapNavigator
