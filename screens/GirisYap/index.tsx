import * as React from 'react';
import { View, Text, SafeAreaView, Image, TextInput, Pressable,  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation} from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';

const index = () => { 
   const navigation = useNavigation();
    return (
       
        <SafeAreaProvider style={styles.container}>
             <LinearGradient colors={['rgba(152,152,152,0.9)','rgba(199,113,105,0.7) ','rgba(241,79,64,1)']} style={styles.background} />
            <View style={styles.top}>
                <Image style={styles.image} source={require('../../assets/images/logobeyaz.png')} />
                
            </View>
            <View style={styles.otherLogin}>
                <TouchableOpacity><Image style={styles.login} source={require('../../assets/images/facebook.png')}/></TouchableOpacity>
                <TouchableOpacity><Image style={styles.login} source={require('../../assets/images/google.png')}/></TouchableOpacity>
               
            </View>
            <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input} 
            placeholder='Kullanıcı Adı'
            placeholderTextColor='#fff'
            />
            <TextInput 
            style={styles.input} 
            placeholder='Parola'
            placeholderTextColor='#fff'
            secureTextEntry={true}
            />
            <Text style={styles.sifre}>Şifreni mi unuttun?</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}
                onPress={()=>navigation.navigate('AnasayfaScreen')}
                >
                    <Text style={styles.btnText}>
                        Giriş Yap
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.kayitol}>
                <Text style={{color:'#fff',fontSize:14,fontFamily:'Poppins'}}>Yoksa sen hala kaydolmadın mı ? </Text>

                <TouchableOpacity
               onPress={()=>navigation.navigate('KayıtOlScreen')}
                > 
                        <Text style={{color:'#fff',fontSize:16,fontFamily:'Poppins'}}>Buradan Kayıt olabilirsin.</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaProvider>
    
    )
}

export default index;
