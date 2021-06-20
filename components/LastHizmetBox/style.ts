import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    hizmetContainer:{
        backgroundColor:'#f5f5f5',
        marginRight:20,
        marginTop:8,
        width:240,
        height:330,
        borderRadius:20,
        elevation:5,


    },
    
    photo:{
        width:240,
        height:160,
        resizeMode:'cover',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    userPhoto:{
        width:56,
        height:56,
        borderRadius:100/2,
        resizeMode:'contain',
        marginLeft:15,
     
    },
    title:{
        fontFamily:'Poppins',
        height:100,
        fontSize:19,
        padding:15,
        paddingBottom:28,
        color:'#5a5a5a',
        overflow:'hidden',
        flexShrink:1,
        flexWrap:'wrap',

    },
    name:{
        justifyContent:'center',
        alignSelf:'center',
        marginLeft:10,
        fontFamily:'Poppins',
        color:'#5a5a5a',
        fontSize:15,


    },
    category:{
        marginLeft:80,
        marginTop:-18,
        fontFamily:'Poppins',
        color:'#5a5a5a',
        fontSize:12,
    },
    under:{
        flexDirection:'row',

    }

});

export default styles;
