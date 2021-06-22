import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{ 
        paddingTop:20,
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

        
    },
    header:{
        width:"100%",
        height:80,
        justifyContent:'space-around',
        alignItems:'flex-start',
       
    },
    backbtn:{
        margin:5,
        zIndex:1
    },
    logo:{
        width:'100%',
        resizeMode:'contain',
        height:70, 
        marginTop:-60,
    },
    form:{
       width:'100%',
       justifyContent:'center',
       alignItems:'center',
       marginTop:20
    },
    input:{
        width:225,
        borderBottomWidth:1,
        borderBottomColor:'#fff',
        color:'#fff',
        fontSize:16,
        fontFamily:'Poppins',
        paddingLeft:10,
        marginBottom:33
    },
    sozlesmeContainer:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    sozlesme:{
        color:'#fff',
        fontFamily:'Poppins',
        fontSize:13
    },
    btnContainer:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    },
    btn:{
        width:178,
        height:46,
        borderWidth:0,
        borderRadius:25,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.8,
        shadowRadius:2,
        elevation:8,
    },
    btnText:{
        fontSize:16,
        color:'#5A5A5A',
        fontFamily:'Poppins',
    },
})
export default styles;
