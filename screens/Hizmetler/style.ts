import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#fff',
        marginTop:22
        
    },
    headerContainer:{
        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:5,
    },
    backbtn:{
        zIndex:1
    },
    iconContainer:{
        flexDirection:'row',
        
    },
    filter:{
        marginRight:10
    },
    searchIcon:{
        marginRight:10
    },
    baslik:{
        fontFamily:'Poppins-SemiBold',
        fontSize:30,
        color:'#5a5a5a',
    },
    infoContainer:{
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    },
    infoText:{
        fontFamily:'Poppins',
        fontSize:15,
        opacity:0.7,
        color:'#5a5a5a'
    },
    hizmetContainer:{
        height:'83%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        marginBottom:20
    },
})
export default styles;