import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation/index';
import Anasayfa from './navigation/AnasayfaTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const Stack =createStackNavigator();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
        
          
          
      
    );
  }
}
