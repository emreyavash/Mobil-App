import {StyleSheet} from 'react-native';

const styles =StyleSheet.create({
   
    container:{ 
        flex:1,
        fontFamily:'Poppins',
        marginTop:22
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom:0,
        height:'100%'
        
      },
    top:{
        width:"100%",
        height:80,
        justifyContent:'center',
        alignItems:'center',
        
    },
    image:{
        width:'100%',
        height:70,
        resizeMode:'contain'
    },
   
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    },
    input:{
        width:250,
        height:40,
        borderBottomWidth:1,
        borderBottomColor:'#fff',
        fontFamily:'Poppins',
        color:'#fff',
        marginBottom:5,
        fontSize:16,
        paddingLeft:10,
        
    },
    sifre:{
        color:'#fff',
        marginLeft:100,
        fontFamily:'Poppins'

    },
    btnContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30 
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
        width:178,
        height:46,
        borderWidth:0,
        borderRadius:25,
        backgroundColor:'#fff',
        elevation:8,
        shadowColor:'#000',
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.8,
        shadowRadius:2,
    },
    btnText:{
        fontSize:17,
        color:'#5A5A5A',
        fontFamily:'Poppins',
    },
    kayitol:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
        
        
    },
    otherLogin:{
        justifyContent:'center',
        alignSelf:'center',
        borderBottomWidth:1,
        borderBottomColor:'#fff',
        width:250,
        marginTop:80,
        flexDirection:'row',   
    },
    login:{
        
        resizeMode:'contain',
        width:44,
        height:44,
        marginLeft:20,
        marginBottom:10
    },
    alert:{  
        color:'#fdfdfd',
        fontFamily:'Poppins',
        fontSize:12,
        alignSelf:'flex-end',
    },
    formik:{
        width:'100%',
    },
    errorCon:{
        marginBottom:10,
    }, 
    passContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:250,
        borderBottomWidth:1,
        borderBottomColor:'#fff',
        color:'#fff',
        
        fontFamily:'Poppins',
        paddingLeft:10,
        marginBottom:5
    },
    passInput:{
        width:150,
        color:'#fff',
        fontFamily:'Poppins',
        fontSize:16,
    },
    eye:{
        alignItems:'flex-end'

    }
});

export default styles;