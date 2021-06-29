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
})
export default styles;
