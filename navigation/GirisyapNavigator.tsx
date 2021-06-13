import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'; 
import GirisyapScreen from '../screens/GirisYap/index';
import KayıtOlScreen from '../screens/KayıtOl/index';

const Stack = createStackNavigator();
const GirisyapNavigator = () => {
    return (
        <NavigationContainer>
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
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}

export default GirisyapNavigator
