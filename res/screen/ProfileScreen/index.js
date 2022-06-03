import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, ScrollView, TouchableOpacity, Platform, StatusBar, Image, Button ,ActivityIndicator,TextInput} from 'react-native';
import Header from '../../component/header';
import { heightPercentageToDP, widthPercentageToDP } from '../../utility';
import Modal from "react-native-modal"
import styles from '../Auth/styles/style';
import { baseURL } from '../Auth/api/apis';
import Loader from '../../component/loader';
import { useIsFocused } from "@react-navigation/native";
// import { useState } from 'react/cjs/react.production.min';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
const IS_ANDROID = Platform.OS === 'android';
const IS_IOS = Platform.OS === 'ios';
const Profile = ({navigation}) => {
  const isFocused = useIsFocused();
  // if (IS_ANDROID) {
  //   StatusBar.setBackgroundColor("rgba(0,0,0,0.2)")
  //   StatusBar.setBarStyle("light-content")
  //   StatusBar.setTranslucent(true)
  // }
  // console.log(getStatusBarHeight());
  const starStyle = {
    width: 100,
    height: 20,
    marginBottom: 20,
  };
  const [EmailModal, setEmailModal] = useState(false);
  const [NameModal, setNameModal] = useState(false);
  const [Email,setEMail] = useState();
  const [Name, setName] = useState();
  const [telehpne, setTelephone] = useState();
  const [token, setToken] = useState();
  const [loader,setLoader]=useState(false);

  useEffect(() => {
    getUserrecords();
  }, [isFocused])
  const getUserrecords = async () => {
    setLoader(true)
    var token = await AsyncStorage.getItem("token");
    setToken(
      token
      // await AsyncStorage.getItem("token")
    );
    fetch(`${baseURL}/user/me`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        }
      })
      .then(response => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setName(responseJson.user.first_name)
        setEMail(responseJson.user.email)
        setTelephone(responseJson.user.phone)
        setLoader(false)
      })
      .catch(error => console.log(error))
      setLoader(false)
       //to catch the errors if any
  }
  const logout=() =>{
    AsyncStorage.removeItem('token');
    navigation.navigate("Login");
  };

const openNameModale=(e)=>{
  setEmailModal(true)
  // if(e=="email"){

  // }else{

  // }

}
const updateEMail=()=>{
  if(Name=="" ||Email=="")
  {
    alert("Please fill the the field");
  }
  else{
  setLoader(true)
  fetch(`${baseURL}/user/update-me`, {
                            method: 'POST',
                            headers: {
                              Accept: 'application/json',
                              'Content-Type': 'application/json',
                              'Authorization': 'Bearer ' + token,
                            },
                            body: JSON.stringify({
                              first_name:Name,
                              last_name:Name,
                              phone:telehpne,
                              email:Email
                            }),
                          })
  .then(response => response.json())
  .then((responseJson)=> {
   console.log("update message...",responseJson);
   setEmailModal(false);
   setNameModal(false);
   setLoader(false)
  })
  .catch(error=>alert(error)) //to catch the errors if any
    }
}
const updateName=async()=>{
  // var token=await localStorage.getItem("token")
  if(Name=="" ||Email=="")
  {
    alert("Please fill the the field");
  }
  else{
  setLoader(true)
  fetch(`${baseURL}/user/update-me`, {
                            method: 'POST',
                            headers: {
                              Accept: 'application/json',
                              'Content-Type': 'application/json',
                              'Authorization': 'Bearer ' + token,
                            },
                            body: JSON.stringify({
                              first_name:Name,
                              last_name:Name,
                              phone:telehpne,
                              email:Email
                            }),
                          })
  .then(response => response.json())
  .then((responseJson)=> {
   console.log("update message...",responseJson);
   setEmailModal(false);
   setNameModal(false);
   setLoader(false)
  })
  .catch(error=>alert(error)) //to catch the errors if any
    }

}

  return (

    <View>
    <Loader loading={loader} />
      <View style={{ backgroundColor: '#5cb85c', flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <View >
          <Text style={[styles.colorWhite, styles.fontSize20, styles.fontWeight500, styles.alignCenter]}>Meu Perfil</Text>
        </View>
      </View>
      <ScrollView>
        {loader?
        <ActivityIndicator  style={{margin:'10%'}}></ActivityIndicator>:
        <View style={{ marginLeft: widthPercentageToDP('7%'), marginTop: heightPercentageToDP('5%') }}>
          <View style={{ flexDirection: 'row', marginTop: '3%' }}>
            <View style={{ width: widthPercentageToDP('30%') }}>
              <Text style={[styles.colorDarkGrey, styles.fontSize14, styles.fontWeight500]}>Email:</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text>{Email}</Text>
              <TouchableOpacity onPress={()=>setEmailModal(true)}>
                <Image source={require('../../../assets/edit.png')} style={{ height: 20, width: 20, marginLeft: 10 }} resizeMode="center"></Image>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: heightPercentageToDP('3%') }}>
            <View style={{ width: widthPercentageToDP('30%') }}>
              <Text style={[styles.colorDarkGrey, styles.fontSize14, styles.fontWeight500]}>Nome:</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text>{Name}</Text>
              <TouchableOpacity onPress={()=>setNameModal(true)}>
                <Image source={require('../../../assets/edit.png')} style={{ height: 20, width: 20, marginLeft: 10 }} resizeMode="center"></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: heightPercentageToDP('3%') }}>
            <View style={{ width: widthPercentageToDP('30%') }}>
              <Text style={[styles.colorDarkGrey, styles.fontSize14, styles.fontWeight500]}>Telefone:</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text>{telehpne}</Text>
            </View>
          </View>
          <TouchableOpacity style={{ marginTop: heightPercentageToDP('3%') }}>
            <View>
              <Text style={[styles.colorDarkGrey, styles.fontSize14, styles.fontWeight500, styles.Underline]}>Alter a Senha</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>logout()} style={{ marginTop: heightPercentageToDP('3%')}}>
            <View>
              <Text style={[styles.colorDarkGrey, styles.fontSize14, styles.fontWeight500, styles.Underline]}>Sair</Text>
            </View>
          </TouchableOpacity>
        </View>}
        <Modal isVisible={EmailModal}>
          <View style={[styles.bgColorWhite]}>
            <View style={[styles.flexRow]}>

              <Text style={[styles.fontWeight500, styles.ValignCenter, styles.colorBlack, styles.fontSize16, styles.alignLeft, styles.marginL10, styles.marginT25]}> Alteração do email </Text>
              <TouchableOpacity onPress={()=>setEmailModal(false)} style={{backgroundColor:'green',padding:5,borderRadius:5}}>
              {/* <Button transparent style={[styles.alignRight, styles.marginR10, styles.marginT15]} > */}
                <Text style={[styles.colorDarkGrey],{color:'white'}}> Fechar </Text>
                </TouchableOpacity>
              {/* </Button> */}
            </View>
            <View style={[styles.marginLR15, styles.marginTB20]}>
              <TextInput placeholder='vikas' value={Email} onChangeText={(e)=>setEMail(e)}>

              </TextInput>
              {/* <Item >
                      <Input style={[styles.fontSize16]} placeholder="Email"
                       autoCapitalize="none"
                      //  onSubmitEditing={() => this.passwordInput.focus()}
                       autoCorrect={false}
                       returnKeyType="next"
                       value={this.state.email}
                       onChangeText={(email) => this.setState({ email })}
                      />
                    </Item> */}
                    <TouchableOpacity onPress={()=>updateEMail()} style={{backgroundColor:'green',padding:10,borderRadius:5,alignItems:'center'}}>
                    <Text uppercase={false} style={{color:'white'}}>Alterar Email </Text>
                    </TouchableOpacity>
              {/* <Button onPress={() => this.UpdateProfile()} block style={[styles.BackgroundGreen, styles.marginT30]}>
                <Text uppercase={false}>Alterar Email </Text>
              </Button> */}
            </View>
          </View>
        </Modal>
        <Modal isVisible={NameModal}>
          <View style={[styles.bgColorWhite]}>
            <View style={[styles.flexRow]}>

              <Text style={[styles.fontWeight500, styles.ValignCenter, styles.colorBlack, styles.fontSize16, styles.alignLeft, styles.marginL10, styles.marginT25]}> Alteração do Name </Text>
              <TouchableOpacity onPress={()=>setNameModal(false)} style={{backgroundColor:'green',padding:5,borderRadius:5}}>
              {/* <Button transparent style={[styles.alignRight, styles.marginR10, styles.marginT15]} > */}
                <Text style={[styles.colorDarkGrey],{color:'white'}}> Fechar </Text>
                </TouchableOpacity>
              {/* </Button> */}
            </View>
            <View style={[styles.marginLR15, styles.marginTB20]}>
              <TextInput placeholder='vikas' value={Name} onChangeText={(e)=>setName(e)}>

              </TextInput>
              {/* <Item >
                      <Input style={[styles.fontSize16]} placeholder="Email"
                       autoCapitalize="none"
                      //  onSubmitEditing={() => this.passwordInput.focus()}
                       autoCorrect={false}
                       returnKeyType="next"
                       value={this.state.email}
                       onChangeText={(email) => this.setState({ email })}
                      />
                    </Item> */}
                    <TouchableOpacity onPress={()=>updateName()} style={{backgroundColor:'green',padding:10,borderRadius:5,alignItems:'center'}}>
                    <Text uppercase={false} style={{color:'white'}}>Alterar Name </Text>
                    </TouchableOpacity>
              {/* <Button onPress={() => this.UpdateProfile()} block style={[styles.BackgroundGreen, styles.marginT30]}>
                <Text uppercase={false}>Alterar Email </Text>
              </Button> */}
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>

  )
}
export default Profile;