import React from 'react';
import { View, Text, SafeAreaView,TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
const index = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}><Text style={{margin:150}}>Geri Dön</Text></TouchableOpacity>
        </SafeAreaView>
    )
}

export default index;
