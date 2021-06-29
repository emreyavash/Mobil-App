import React from 'react'
import { View, Text,ScrollView,Image,TouchableOpacity,SafeAreaView,FlatList,TextInput } from 'react-native'
import styles from './style'


const Profilim = () => {
    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../assets/images/siyahlogo.png')}/>
            </View>
            
            
           
        </SafeAreaView>
    )
}

export default Profilim
