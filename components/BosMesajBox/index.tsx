import React from 'react'
import { View, Text,ScrollView,Image,TouchableOpacity,SafeAreaView,FlatList,TextInput } from 'react-native'
import styles from './style'
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

const BosMesaj = () => {
    return (
     <>
        <View style={styles.Container}>
            <MaterialCommunityIcons style={styles.icon} name="message-text-outline" size={100} color="#5a5a5a" />
            <Text style={styles.text}>Şu anda mesajınız bulunmamaktadır.</Text>
        </View>
    
    </>
    )
}

export default BosMesaj
