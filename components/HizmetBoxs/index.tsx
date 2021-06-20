import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import styles from './style'
import {useNavigation} from '@react-navigation/native'
import { Ionicons,AntDesign,Entypo,FontAwesome  } from '@expo/vector-icons';

interface HizmetBoxsProps{
    info:{
        id:string,
        title:string,
        name:string,
        profession:string,
        category:string,
        price:string,
        photo:string,
        userPhoto:string,
    }
}

const HizmetBoxs = (props:HizmetBoxsProps) => {
    const {info}=props;
    const navigation =useNavigation();
    return (
        <>
            <TouchableOpacity style={styles.Container}>
                <Text>{info.title}</Text>
            </TouchableOpacity>
        </>
    )
}

export default HizmetBoxs
