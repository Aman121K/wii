import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
const Header=({name})=>{
    return(
        <View style={styles.mainheader}>
            <Text style={styles.nameText}>{name}</Text>
        </View>
    )
}
export default Header;
const styles=StyleSheet.create({
    mainheader:{
        backgroundColor:'#5cb85c',
        padding:10,
        height:'20%'
        // marginTop:'10%'
    },
    nameText:{
        color:'white',
        fontWeight:'800',
        alignSelf:'center',
        top:5,
        fontSize:20
    }
})