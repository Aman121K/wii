import AsyncStorage from '@react-native-community/async-storage';
import React,{useEffect} from 'react';
import  {View,Text,Image} from 'react-native';
import ImagePath from '../../../constant/imagePath';

import { widthPercentageToDP as wp,heightPercentageToDP  as hp} from '../../../utility';
const Splash =({navigation})=>{
    useEffect(()=>{
        checkToken()
        // setTimeout(()=>{
        //     navigation.navigate("Login")
        // },2000)
    },[])
    const checkToken=async()=>{
        var token=await AsyncStorage.getItem("token");
        if(token){
            navigation.navigate("BottomTab")
        }else{
            navigation.navigate("Login")
        }
    }
    return(
        <View>
            <View style={{alignSelf:'center',alignItems:'center',marginTop:hp('40%')}}>
            <View>
                <Image source={ImagePath.Logo}></Image>
            </View>
            <View>
            <Text>WII Commerance</Text>
            </View>
            </View>
        </View>
    )
}
export default Splash;