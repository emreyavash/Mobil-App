import React from 'react'
import { View, Text,Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AnasayfaScreen from '../screens/Anasayfa/index';
import { Anasayfa,KategorilerParamList,BottomTabParamList,MesajlarParamList,ProfilimParamList } from '../types';
import { Ionicons,AntDesign,Entypo,FontAwesome,SimpleLineIcons,Feather   } from '@expo/vector-icons';
import Hizmetler from '../screens/Hizmetler/index'
import KategorilerScreen from '../screens/Kategoriler/index';
import Mesajlar from '../screens/Mesajlar/index'
import Profilim from '../screens/Profilim/index';



const Tab=createBottomTabNavigator<BottomTabParamList>();

const BottomNavigator=()=>{
    return(
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: '#000',
            showLabel:false
          }}
        >
            <Tab.Screen 
            name="Anasayfa"
            component={AnasayfaTabNavigator}
            options={{     
                tabBarIcon: ({ color, size }) => (
                <AntDesign  name="home" color={color} size={size} />),
            }}
            />
            <Tab.Screen 
            name="Kategoriler"
            component={KategorilerTabNavigator}
            options={{    
                 tabBarIcon: ({ color, size }) => (
                <Ionicons  name="grid-outline" color={color} size={size} />), 
            }}
            />
            <Tab.Screen 
                name="Mesajlar"
                component={MesajlarTabNavigator}
                options={{    
                    tabBarIcon: ({ color, size }) => (
                    <Feather  name="message-circle" color={color} size={size} />), 
            }}
            />
            <Tab.Screen 
                name="Profilim"
                component={ProfilimTabNavigator}
                options={{    
                    tabBarIcon: ({ color, size }) => (
                    <FontAwesome  name="user-o" color={color} size={size} />), 
            }}
            />
        </Tab.Navigator>
    );
}

const Stack=createStackNavigator<Anasayfa>();
const AnasayfaTabNavigator = () => {
    return (
        
            <Stack.Navigator>
                <Stack.Screen
                name="AnasayfaScreen"
                component={AnasayfaScreen}
                options={
                    {
                        headerShown:false, 
                    }
                    
            } 
                />
               <Stack.Screen 
               name='Hizmetler'
               component={Hizmetler}
               options={{headerShown:false}}
               />
               
            </Stack.Navigator>

        
    )
}
const StackKategori=createStackNavigator<KategorilerParamList>();

const KategorilerTabNavigator =()=>{
    return(
        <StackKategori.Navigator>
            <StackKategori.Screen 
            name='Kategoriler'
            component={KategorilerScreen}
            options={{headerShown:false}}

            />
    </StackKategori.Navigator>
    )
   
}
const StackMesaj=createStackNavigator<MesajlarParamList>();

const MesajlarTabNavigator=()=>{
    return(
        <StackMesaj.Navigator>
            <StackMesaj.Screen 
            name='Mesajlar'
            component={Mesajlar}
            options={{headerShown:false}}
            />
        </StackMesaj.Navigator>
    )
}
const StackProfil=createStackNavigator<ProfilimParamList>();

const ProfilimTabNavigator=()=>{
    return(
        <StackProfil.Navigator>
            <StackProfil.Screen 
            name='Profilim'
            component={Profilim}
            options={{headerShown:false}}
            />
        </StackProfil.Navigator>
    )
}

export default BottomNavigator
