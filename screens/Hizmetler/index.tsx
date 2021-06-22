import React from 'react'
import { View, Text,SafeAreaView,TouchableOpacity,FlatList } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import { Ionicons,AntDesign,Entypo,FontAwesome  } from '@expo/vector-icons';
import HizmetBoxs from '../../components/HizmetBoxs';
import styles from './style'
import hizmetboxs from '../../assets/data/hizmetboxs';
const index = () => {
    const navigation =useNavigation();
    return (
        <SafeAreaProvider style={styles.Container}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={()=>{navigation.goBack()}} style={styles.backbtn}>
                 <Ionicons name="arrow-back" size={35} color="#5A5A5A" />
               </TouchableOpacity>
               <Text style={styles.baslik}>Hizmetler</Text>
               <View style={styles.iconContainer}>
               <TouchableOpacity><AntDesign style={styles.filter} name="filter" size={24} color="#5a5a5a" /></TouchableOpacity>
               <TouchableOpacity><Ionicons style={styles.searchIcon} name="search" size={24} color="#5a5a5a" /></TouchableOpacity>
               </View>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Birbirinden eşsiz hizmetleri burada bulabilirsina.</Text>
            </View>
            <View style={styles.hizmetContainer}>
                <FlatList 
                  data={hizmetboxs.items}
                  renderItem={({item})=><HizmetBoxs info={item} />}
                  showsVerticalScrollIndicator={false}

                />

            </View>
        </SafeAreaProvider>
    )
}

export default index
