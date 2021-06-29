import React from 'react'
import { View, Text,ScrollView,Image,TouchableOpacity,SafeAreaView,FlatList,TextInput } from 'react-native'
import styles from './style'
import { Ionicons } from '@expo/vector-icons';
import mesajlar from '../../assets/data/mesajlar';
import MesajBox from '../../components/MesajBox';
import BosMesaj from '../../components/BosMesajBox';
const Mesajlar = () => {
    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../assets/images/siyahlogo.png')}/>
                <TouchableOpacity><Ionicons style={styles.bildirimIcon} name="notifications-outline" size={30} color="black" /></TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <TextInput 
                style={styles.search}
                placeholder='Kişi Ara'
                placeholderTextColor='#747474'
                 />
                <TouchableOpacity><Ionicons style={styles.searchIcon} name="search" size={24} color="black" /></TouchableOpacity>
            </View>
            <SafeAreaView  style={styles.mesajContainer}>
                <FlatList 
                data={mesajlar.items}
                renderItem={({item})=><MesajBox mesaj={item}/>}
                showsVerticalScrollIndicator={false}
                />
                {/* <BosMesaj /> */}
            </SafeAreaView>
            
           
        </SafeAreaView>
        
    )
}

export default Mesajlar
