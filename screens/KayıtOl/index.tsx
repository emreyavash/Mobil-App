import React from 'react';
import { View, Text, SafeAreaView,TouchableOpacity,Image,TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Ionicons,AntDesign,Entypo,FontAwesome  } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';
const index = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['rgba(152,152,152,0.9)','rgba(199,113,105,0.7) ','rgba(241,79,64,1)']} style={styles.background} />
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}} style={styles.backbtn}><Ionicons name="arrow-back" size={35} color="#5A5A5A" /></TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/images/logobeyaz.png')}/>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder={'İsim'} placeholderTextColor={'#fff'}/>
                <TextInput style={styles.input} placeholder={'Soyisim'} placeholderTextColor={'#fff'}/>
                <TextInput style={styles.input} placeholder={'Kullanıcı Adı'} placeholderTextColor={'#fff'}/>
                <TextInput style={styles.input} placeholder={'E-mail'} placeholderTextColor={'#fff'}/>
                <TextInput style={styles.input} placeholder={'Şifre'} placeholderTextColor={'#fff'}/>
                <TextInput style={styles.input} placeholder={'Şifrenizi Tekrar Giriniz'} placeholderTextColor={'#fff'}/>
            </View>
            <View style={styles.sozlesmeContainer}>
            <Text style={styles.sozlesme}>Kullanıcı ve Gizlilik Sözleşmesini Onaylıyorum.</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Kayıt Ol</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default index;
