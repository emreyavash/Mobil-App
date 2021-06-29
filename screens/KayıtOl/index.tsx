import React,{useState} from 'react';
import { View, Text, SafeAreaView,TouchableOpacity,Image,TextInput,ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Ionicons,AntDesign,Entypo,FontAwesome,Feather  } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';
import Firebase from '../../config/key';
import { Formik } from 'formik';
import * as Yup from 'yup';



const index = () => {
    const navigation = useNavigation();
    const validationSchema=Yup.object().shape({
        firstName:Yup.string().required('*Zorunlu Alan'),
        lastName:Yup.string().required('*Zorunlu Alan'),
        email:Yup.string().email('Geçersiz e-mail adresi').required('*Zorunlu Alan'),
        password:Yup.string().min(8,'8 karakterden az şifre girmeyiniz.').max(14,'14 Karakterden uzun olmamalı').required('*Zorunlu Alan'),
        passwordA:Yup.string().oneOf([Yup.ref('password')],'Parola eşleşmiyor').required('*Zorunlu Alan'),
    
    })
    const [passOpen,setPassOpenState]=useState(false);
    const [passConOpen,setPassConOpenState]=useState(false);

    const setPassOpen=()=>{
        if(passOpen==false){
            setPassOpenState(true);
        }
        else{
            setPassOpenState(false)
        }
        
    }
    const setPassConOpen=()=>{
        if(passConOpen==false){
            setPassConOpenState(true);
        }
        else{
            setPassConOpenState(false)
        }
    }
    const createUser=(values)=>{
        Firebase.auth().createUserWithEmailAndPassword(values.email,values.password)
        .then(()=>alert('Kayıt İşlemi Başarılı'))
        .catch((e)=>alert('hata'))
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['rgba(152,152,152,0.9)','rgba(199,113,105,0.7) ','rgba(241,79,64,1)']} style={styles.background} />
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}} style={styles.backbtn}><Ionicons name="arrow-back" size={35} color="#5A5A5A" /></TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/images/logobeyaz.png')}/>
            </View>
            <Formik initialValues={{
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                passwordA:''
            }}
            validationSchema={validationSchema}
            onSubmit={createUser}
            >
                {
                    ({handleSubmit,handleChange,values,errors})=>(
                        
                        <ScrollView style={styles.formik}>
                            <View style={styles.form}>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} onChangeText={handleChange('firstName')} value={values.firstName}  placeholder={'İsim'} placeholderTextColor={'#fff'} />
                                {errors.firstName && <Text style={styles.alert}>{errors.firstName}</Text> }
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} onChangeText={handleChange('lastName')} value={values.lastName}  placeholder={'Soyisim'} placeholderTextColor={'#fff'}/>
                                {errors.lastName &&<Text style={styles.alert}>{errors.lastName}</Text> }
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} onChangeText={handleChange('email')} value={values.email}  keyboardType="email-address"   placeholder={'E-mail'} placeholderTextColor={'#fff'}/>
                                {errors.email &&<Text style={styles.alert}>{errors.email}</Text> }
                            </View>
                            <View style={styles.inputContainer}>
                                <View style={styles.passContainer}>
                                <TextInput style={styles.passInput}  onChangeText={handleChange('password')} value={values.password}   placeholder={'Şifre'} placeholderTextColor={'#fff'} secureTextEntry={!passOpen} />
                                <TouchableOpacity onPress={()=>setPassOpen()} ><Feather style={styles.eye} name={passOpen ? 'eye' :'eye-off'} size={24} color="#5a5a5a" /></TouchableOpacity>
                                </View>
                                {errors.password &&<Text style={styles.alert}>{errors.password}</Text> }
                            </View>                            
                            <View style={styles.inputContainer}>
                                <View style={styles.passContainer}>
                                <TextInput style={styles.passInput} onChangeText={handleChange('passwordA')} value={values.passwordA}  placeholder={'Şifrenizi Tekrar Giriniz'} placeholderTextColor={'#fff'} secureTextEntry={!passConOpen}/>
                                <TouchableOpacity onPress={()=>setPassConOpen()} ><Feather style={styles.eye} name={passConOpen ? 'eye' :'eye-off'} size={24} color="#5a5a5a" /></TouchableOpacity>
                                </View>
                                {errors.passwordA &&<Text style={styles.alert}>{errors.passwordA}</Text> }
                            </View>
                        </View>
                        <View style={styles.sozlesmeContainer}>
                        <Text style={styles.sozlesme}>Kullanıcı ve Gizlilik Sözleşmesini Onaylıyorum.</Text>
                        </View>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.btn} onPress={()=>handleSubmit()} ><Text style={styles.btnText}>Kayıt Ol</Text></TouchableOpacity>
                        </View>
                    </ScrollView>
                        
                    
                    )
                }

            </Formik>
           
        </SafeAreaView>
    )
}

export default index;
