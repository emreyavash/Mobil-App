import React from 'react'
import { View, Text,SafeAreaView,ScrollView,Image,TouchableOpacity } from 'react-native'
import styles from './style'
import { Ionicons } from '@expo/vector-icons';


const Kategoriler = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.Container}>
          <View style={styles.header}>
            <Image style={styles.image} source={require('../../assets/images/siyahlogo.png')}/>
            <TouchableOpacity><Ionicons style={styles.bildirimIcon} name="notifications-outline" size={30} color="black" /></TouchableOpacity>
          </View>
          <View style={styles.categoryBoxs}>
            <View style={styles.categoryRow}>
            <TouchableOpacity style={styles.categoryBtn}><Image style={styles.category} source={require("../../assets/images/dijital.jpg")}/></TouchableOpacity>
            <TouchableOpacity style={styles.categoryBtn}><Image style={styles.category} source={require("../../assets/images/grafik.jpg")}/></TouchableOpacity>
            </View>
            <View style={styles.categoryRow}>
            <TouchableOpacity style={styles.categoryBtn}><Image style={styles.category} source={require("../../assets/images/is.jpg")}/></TouchableOpacity>
            <TouchableOpacity style={styles.categoryBtn}><Image style={styles.category} source={require("../../assets/images/metin.jpg")}/></TouchableOpacity>
            </View>
            <View style={styles.categoryRow}>
            <TouchableOpacity style={styles.categoryBtn}><Image style={styles.category} source={require("../../assets/images/ozel.jpg")}/></TouchableOpacity>
            <TouchableOpacity style={styles.categoryBtn}><Image style={styles.category} source={require("../../assets/images/ses.jpg")}/></TouchableOpacity>
            </View>
            <View style={styles.categoryRow}>
            <TouchableOpacity style={styles.categoryBtn}><Image style={styles.category} source={require("../../assets/images/video.jpg")}/></TouchableOpacity>
            <TouchableOpacity style={styles.categoryBtn}><Image style={styles.category} source={require("../../assets/images/yazilim.jpg")}/></TouchableOpacity>
            </View>
          </View>
            

        </ScrollView>
    )
}

export default Kategoriler
