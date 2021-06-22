import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    Container:{

        width:'100%',
        height:90,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:5,
       
    },
    mesajContainer:{
        width:'95%',
        height:80,
        borderRadius:10,
        flexDirection:'row',
        backgroundColor:'#f5f5f5',
        elevation:9,
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowOffset:{width:0,height:1},
        alignItems:'center'
    },
    userPhoto:{
        width:60,
        height:60,
        borderRadius:100/2,
        resizeMode:'cover',
        marginLeft:15
    },
    mesajInfo:{
        marginLeft:10
    },
    name:{
        fontFamily:'Poppins',
        fontSize:19,
        color:'#5a5a5a'
    },
    mesaj:{
        fontFamily:'Poppins',
        fontSize:15,
        color:'#5a5a5a'
    }
})
export default styles;