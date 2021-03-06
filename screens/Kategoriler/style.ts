
import { StyleSheet } from 'react-native'

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
       categoryBoxs:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
       },
       categoryBtn:{
        elevation:7,
        width:150,
        height:100,
        borderRadius:10,
        marginLeft:20,
        marginBottom:20,
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowOffset:{width:0,height:1}
       },
       category:{
        width:150,
        height:100,
        resizeMode:'cover',
        borderRadius:10

       },
       categoryRow:{
           flexDirection:'row',
     
       }
})
export default styles;
