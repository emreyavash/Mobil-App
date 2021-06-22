import React,{useState} from 'react'
import { View, Text,TouchableOpacity,Image } from 'react-native'
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
                <Text numberOfLines={1} style={styles.title}>{info.title}</Text>
                <Text style={styles.category}>{info.category}</Text>
                <View style={styles.userContainer}>
                   <Image style={styles.userPhoto} source={{uri:info.userPhoto}} />
                    <View style={styles.userInfo}>
                        <Text style={styles.name}>{info.name}</Text>
                        <Text style={styles.profession}>{info.profession}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>{info.price}</Text>
                        <Text style={styles.text}>Başlangıç</Text>
                    </View>
                </View>
               

            </TouchableOpacity>
        </>
    )
}

export default HizmetBoxs
