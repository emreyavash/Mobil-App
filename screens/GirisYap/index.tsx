import React,{useState} from 'react';
import { View, Text, SafeAreaView, Image, TextInput, Pressable,  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation} from '@react-navigation/native'
import { Ionicons,AntDesign,Entypo,FontAwesome,Feather  } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Firebase from '../../config/key';
 

const index = () => { 
   const navigation = useNavigation();
   const validationSchema=Yup.object().shape({
    email:Yup.string().email('Geçersiz e-mail adresi').required('*Zorunlu Alan'),
    password:Yup.string().min(8,'8 karakterden az şifre girmeyiniz.').max(14,'14 Karakterden uzun olmamalı').required('*Zorunlu Alan'),
   })
   const signIn=(values)=>{
    Firebase.auth().signInWithEmailAndPassword(values.email,values.password)
    .then(()=>navigation.navigate('AnasayfaScreen'))
    .catch((error=>{alert('Giriş Başarısız')}))
   }
   const [passOpen,setPassOpenState]=useState(false);
   const setPassOpen=()=>{
    if(passOpen==false){
        setPassOpenState(true);
    }
    else{
        setPassOpenState(false)
    }
    
}
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
            <Formik 
            initialValues={
                {
                    email:'',
                    password:'',
                }
            }
            validationSchema={validationSchema}
            onSubmit={signIn}
            >
                {({handleSubmit,handleChange,values,errors})=>(
                    <View style={styles.formik}>
                        
                        <View style={styles.inputContainer}>
                            <View style={styles.errorCon}>
                                <TextInput 
                                style={styles.input} 
                                placeholder='Kullanıcı Adı'
                                placeholderTextColor='#fff'
                                keyboardType='email-address'
                                value={values.email}
                                onChangeText={handleChange('email')}
                                />
                                {errors.email&&<Text style={styles.alert}>{errors.email}</Text>}
                            </View>
                        <View style={styles.errorCon}>
                            <View style={styles.passContainer}>
                                <TextInput 
                                style={styles.passInput} 
                                placeholder='Parola'
                                placeholderTextColor='#fff'
                                secureTextEntry={!passOpen}
                                value={values.password}
                                onChangeText={handleChange('password')}
                                />
                                <TouchableOpacity onPress={()=>setPassOpen()} ><Feather style={styles.eye} name={passOpen ? 'eye' :'eye-off'} size={24} color="#5a5a5a" /></TouchableOpacity>
                            </View>
                            {errors.password&&<Text style={styles.alert}>{errors.password}</Text>}
                        </View>
                            <Text style={styles.sifre}>Şifreni mi unuttun?</Text>
                        </View>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.btn}
                            onPress={()=>handleSubmit()}
                            >
                                <Text style={styles.btnText}>
                                    Giriş Yap
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>

            {/* <View style={styles.inputContainer}>
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
            </View> */}
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
