import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './style'
const index = () => {
    const navigation=useNavigation();
    return (
        <View>
            <Text style={{margin:150}}>Emre</Text>
            
        </View>
    )
}

export default index
