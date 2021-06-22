import React,{useState} from 'react'
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
    const [change,setchange]=useState(false);
    const changeIcon=()=>{
        change===false? setchange(true) : setchange(false)
    }
    const navigation =useNavigation();
    return (
        <>
            <TouchableOpacity style={styles.Container}>
                <TouchableOpacity onPress={changeIcon}><AntDesign style={styles.heartIcon} name={change ? 'heart' : 'hearto'} size={18} color="#c52833" /></TouchableOpacity>
                <Text style={styles.title}>{info.title}</Text>
                <Text style={styles.category}>{info.category}</Text>
            </TouchableOpacity>
        </>
    )
}

export default HizmetBoxs
