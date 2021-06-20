import React from 'react'
import { View, Text,FlatList,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './style';

interface HomeBoxs{
    box:{
        id:string,
        title:string,
        
    }
}
const HomeBox = (props:HomeBoxs) => {
    const {box}=props;
    const navigation =useNavigation();
    return (
        <>
            <TouchableOpacity style={styles.boxbtn} onPress={()=>navigation.navigate(box.id)}><Text style={styles.boxs}>{box.title}</Text></TouchableOpacity>
        </>
    )
}

export default HomeBox
