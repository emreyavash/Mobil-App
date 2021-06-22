import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    Container:{
        width:330,
        height:170,
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        margin:10,
        elevation:5
    },
    heartIcon:{
        justifyContent:'flex-end',
        alignSelf:'flex-end',
        padding:8
    },
    title:{
        fontFamily:'Poppins',
        width:300,
        height:35,
        fontSize:17,
        color:'#5a5a5a',
        paddingLeft:10,
        marginTop:-9,
       
    },
    category:{
        fontFamily:'Poppins',
        fontSize:14,
        color:'#5a5a5a',
        paddingLeft:10,
    },
    userContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    userPhoto:{
        width:50,
        height:50,
        borderRadius:100/2,
        marginLeft:10,
        marginTop:20,
        resizeMode:'cover'
    },
    userInfo:{
        marginLeft:10,
        marginTop:16,
    },
    name:{
        fontSize:14,
        color:'#5a5a5a',
        fontFamily:'Poppins'

    },
    profession:{
        color:'#5a5a5a',
        fontSize:12,
        fontFamily:'Poppins'

    },
    priceContainer:{
      position:'absolute',
      right:20,
      justifyContent:'center',
      alignItems:'center'
    },
    price:{
        fontFamily:'Poppins-SemiBold',
        fontSize:16,
        color:'#003049'
    },
    text:{
        fontFamily:'Poppins',
        fontSize:13
    }

})
export default styles;
