// import { Alert } from 'native-base';
import React,{useState} from 'react';
import {View,Text, StyleSheet, TextInput, TouchableOpacity,Alert,ScrollView} from 'react-native';
import { widthPercentageToDP  as wp , heightPercentageToDP as hp } from '../../../utility';
// import { useState } from 'react/cjs/react.production.min';
const ForgotPassword=({navigation})=>{
    const [email,setEMail]=useState();
    const ForgotPasswordApiCall=()=>{
        if(email==''){
            Alert.alert('Por favor, digite o e-mail')
        }
    }
    return(
        <View style={styles.mainScreen}>
            <ScrollView keyboardDismissMode='interactive'>
            <View style={styles.whiteBoard}>
                <View style={{alignSelf:'center',margin:'5%'}}>
            <Text>Esqueceu a senha</Text>
            </View>
            <View style={{marginBottom:'4%'}}>

                <TextInput placeholder='Digite seu e-mail de cadastro' onChangeText={(e)=>setEMail(e)} placeholderTextColor='gray' style={{backgroundColor:'#eeeeee',borderRadius:10,marginLeft:5,fontSize:12}}>
                </TextInput>
            </View>
            <TouchableOpacity onPress={()=>ForgotPasswordApiCall()}>
            <View style={styles.saveButtonDesign}>
                <Text style={{color:'white'}}>Enviar código</Text>
            </View>
            </TouchableOpacity>
            <View style={styles.hintText}>
                <Text>Voltar a </Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <Text style={{color:'green'}}>Página de Login</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("BottomTab")}>
            <View style={styles.lastButton}>
                <Text> Voltar a página inicial</Text>
            </View>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}
export default ForgotPassword;
const styles=StyleSheet.create({
    mainScreen:{
        backgroundColor:'green',
        height:'100%',
        width:"100%"
    },
    whiteBoard:{
        backgroundColor:'white',
        alignSelf:'center',
        borderRadius:10,
        height:hp('40%'),
        width:'90%',
        padding:10,
        marginTop:'35%'
    },
    saveButtonDesign:{
        backgroundColor:'green',
        padding:10,
        borderRadius:5,
        alignItems:'center'
    },
    hintText:{
        flexDirection:'row',
        alignSelf:'center',
        margin:'5%'
    },
    lastButton:{
        padding:10,
        borderWidth:1,
        borderColor:'black',
        width:'60%',
        alignSelf:'center'
    }
})