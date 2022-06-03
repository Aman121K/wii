import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Header from '../../component/header';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from '../../utility';
const Home=()=>{

    return(
        <View>
              <Header name="Home"/>
            <Text></Text>
           
            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:hp('10%')}}>
                <TouchableOpacity>
            <View style={styles.borderRadius}>
                <Text style={styles.textNumber}> 10</Text>
                <Text  style={styles.textActive}>Ofertas ativas</Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <View style={styles.borderRadius2}>
                <Text style={styles.textNumber}> 2</Text>
                <Text  style={styles.textActive}>Ofertas inativas</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.borderRadius3}>
                <Text style={styles.textNumber}>5</Text>
                <Text  style={styles.textActive}> Ofertas expiradas</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.borderRadius4}>
                <Text style={styles.textNumber}> 200</Text>
                <Text  style={styles.textActive}> Ofertas visualizadas</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.borderRadius5}>
                <Text style={styles.textNumber}> 40</Text>
                <Text style={styles.textActive}> 
Cupons de emissão</Text>
            </View>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default Home;

const styles=StyleSheet.create({
    borderRadius:{
        borderColor:'pink',
        borderWidth:2,
        borderRadius:50,
        width:wp('15%'),
        padding:7,
        alignItems:'center'
    },
    borderRadius2:{
        borderColor:'red',
        borderWidth:2,
        borderRadius:50,
        width:wp('15%'),
        padding:7,
        alignItems:'center'
    },
    borderRadius3:{
        borderColor:'yellow',
        borderWidth:2,
        borderRadius:50,
        width:wp('15%'),
        padding:7,
        alignItems:'center'
    },
    borderRadius4:{
        borderColor:'green',
        borderWidth:2,
        borderRadius:50,
        width:wp('18%'),
        padding:7,
        alignItems:'center'
    },
    borderRadius5:{
        borderColor:'blue',
        borderWidth:2,
        borderRadius:50,
        width:wp('18%'),
        padding:7,
        alignItems:'center'
    },
    textActive:{
        fontSize:8,
        alignSelf:'center'
    },
    textNumber:{
        fontWeight:'bold',
        fontSize:15
    }
})