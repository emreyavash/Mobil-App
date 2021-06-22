import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    Container:{
        marginTop:22,
        backgroundColor:'#fff',
        flex:1,
        paddingLeft:8,
        paddingRight:8,
    },
    header:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
       },
       image:{
           resizeMode:'contain',
           width:150,
           height:100,
           justifyContent:'center',
           alignContent:'center',
           marginLeft:'30%'
       },
       bildirimIcon:{
           marginLeft:60
       },
       searchContainer:{
        borderWidth:1,
        width:250,
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        borderRadius:25,
        padding:0,
        margin:0,
       },
       search:{
        width:180,
        height:40,
        fontFamily:'Poppins',
        fontSize:14,
        opacity:0.6
       },
       searchIcon:{
        zIndex:1,
        opacity:0.7,
        paddingLeft:15,
       
       },
       mesajContainer:{
           marginTop:20
       }
    
})
export default styles;