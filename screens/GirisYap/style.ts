import {StyleSheet} from 'react-native';

const styles =StyleSheet.create({
   
    container:{ 
        paddingTop:20,
        flex:1,
        fontFamily:'Poppins'
    },
    background: {
        position: 'absolute',
        marginTop:20,
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
        marginTop:120
    },
    input:{
        width:250,
        height:40,
        borderBottomWidth:1,
        borderBottomColor:'#fff',
        fontFamily:'Poppins',
        
        marginBottom:10,
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
        
        
    }
});

export default styles;