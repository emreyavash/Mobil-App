import React from 'react'
import { View, Text,ScrollView,Image,TouchableOpacity,SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import styles from './style';
interface mesajlarProps{
    mesaj:{
        id:string,
        name:string,
        userPhoto:string,
        mesajIcerik:string
    }
}

const MesajBox = (props:mesajlarProps) => {
    const {mesaj}=props;
    const navigation = useNavigation();
    return (
        <>
           <TouchableOpacity style={styles.Container}>
               <View style={styles.mesajContainer}>
                   <Image style={styles.userPhoto} source={{uri:mesaj.userPhoto}} />
                   <View style={styles.mesajInfo}>
                       <Text style={styles.name}>{mesaj.name}</Text>
                       <Text numberOfLines={1} style={styles.mesaj}>{mesaj.mesajIcerik}</Text>
                   </View>
               </View>
           </TouchableOpacity>
           
        </>
        
    )
}

export default MesajBox
