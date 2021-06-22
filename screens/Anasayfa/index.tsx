import React from 'react';
import { View, Text,TouchableOpacity,Image,TextInput,FlatList,ScrollView,SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import HomeBox from '../../components/HomeBox/HomeBox';
import homebox from '../../assets/data/homebox';
import HizmetBox from '../../components/LastHizmetBox';
import hizmetbox from '../../assets/data/lasthizmetbox';
const index = () => {
    const navigation=useNavigation();
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <SafeAreaProvider  >
            <View style={styles.header}>
            <Image style={styles.image} source={require('../../assets/images/siyahlogo.png')}/>
            <TouchableOpacity><Ionicons style={styles.bildirimIcon} name="notifications-outline" size={30} color="black" /></TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <TextInput 
                style={styles.search}
                placeholder='Keşfetmeye Hazır mısın ?'
                placeholderTextColor='#747474'
                 />
                <TouchableOpacity><Ionicons style={styles.searchIcon} name="search" size={24} color="black" /></TouchableOpacity>
            </View>
            <View style={styles.boxContainer}>
                {/* Kutu içleri tasarlanıcak */}
                <FlatList 
                data={homebox.items}
                renderItem={({item})=><HomeBox box={item}/>}
               horizontal={true}
               showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.hizmetBox}>
                <Text style={styles.first}>Son<Text style={styles.lastHizmet}> Hizmetler</Text></Text>
                <FlatList 
                data={hizmetbox.items}
                renderItem={({item})=> <HizmetBox hizmet={item} />}
               horizontal={true}
               showsHorizontalScrollIndicator={false}

                />
              
            </View>
            <View style={{margin:60}}>
                <Text>Emre</Text>
            </View>
            
        </SafeAreaProvider>
        </ScrollView>
    )
}

export default index
