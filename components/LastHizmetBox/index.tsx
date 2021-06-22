import React from 'react'
import { View, Text,TouchableOpacity,Image } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import styles from './style';
interface HizmetBoxProps{
    hizmet:{
        id:string,
        title:string,
        name:string,
        category:string,
        photo:string,
        userPhoto:string,
    }
   
}
const HizmetBox = (props:HizmetBoxProps) => {
    const {hizmet}=props;
    const navigation =useNavigation();

    return (
        <>
            
            <TouchableOpacity style={styles.hizmetContainer} >
                <Image style={styles.photo} source={{uri:hizmet.photo}} />
                <Text numberOfLines={2} style={styles.title}>{hizmet.title}</Text>
                <View style={styles.under}>
                <Image style={styles.userPhoto} source={{uri:hizmet.userPhoto}} />
                <Text numberOfLines={1} style={styles.name}>{hizmet.name}</Text>
                </View>
                <Text style={styles.category}>{hizmet.category}</Text>
            </TouchableOpacity>
        </>
    )
}

export default HizmetBox
