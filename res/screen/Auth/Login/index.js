

import React ,{useState}from 'react';
import {TouchableOpacity,View,Text,TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { GoogleSignin, GoogleSigninButton, statusCodes} from 'react-native-google-signin'
import { baseURL } from '../api/apis';
import styles from '../styles/style';
import { ProgressDialog } from 'react-native-simple-dialogs';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utility';
import Header from '../../../component/header';
GoogleSignin.configure({
  scopes: ['email', 'profile'],
  offlineAccess:true,
  iosClientId:'952081920236-bo28tuhcnf4qr9s00tv0qmithclc5dop.apps.googleusercontent.com',
  webClientId:'952081920236-3v6tnd6jjk8v44bm9g08vd3odfdss42t.apps.googleusercontent.com'
});
const Login = ({ navigation }) => {
        const [hidePassword,setHidePassword]=useState();
    const [username,setUserName]=useState();
    const [password,setPassword]=useState();
    const [result,setResult]=useState();
    const [progressVisible,setprogressVisible]=useState(false);

    const signIn=async()=>{
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // alert(JSON.stringify(userInfo))
      // alert(JSON.stringify(userInfo.user.email));
      // alert(userInfo.user.email+''+userInfo.user.id+''+userInfo.user.name);
      // alert(userInfo.user.id);
      // alert(userInfo.user.name);

    //   this.setState({ userInfo });

      fetch(`${baseURL}/login/google`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          google_id:userInfo.user.id,
          email:userInfo.user.email,
          first_name:userInfo.user.name,
          last_name:userInfo.user.name
        })
      })
      .then(response => response.json())
      .then((responseJson)=> {
        // alert(responseJson.status);
        // alert(JSON.stringify(responseJson));
      //  alert(responseJson.access_token);

    //   AsyncStorage.clear();
    //  AsyncStorage.setItem('token',responseJson.access_token);
     // alert("Login Successfully");
     navigation.navigate('BottomTab');
        // alert("Offer Created Successfully.")
        // this.props.navigation.navigate('offers');
      })
      .catch(error=>{
        debugger;
        console.log(JSON.stringify(error))
      }) //to catch the errors if any

      // this.props.navigation.navigate('Dashboard');
    } catch (error) {
      console.log(error);
      debugger;
      // alert(JSON.stringify(error))
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
    
 const login = () => {
    // const { username, password } = this.state;
    // navigation.navigate('BottomTab');
    if (username == '' || password == '') {
      alert('Por favor, digite a senha do nome de usuário');
    }
    else {
     setprogressVisible(true);
      //  fetch(`http://168.187.116.75/kbiecapp/api/values/login?id=${encodedValue1}&pwd=${encodedValue2}`)

      axios.defaults.headers.post['Accept'] = 'application/json';

      axios.post(`${baseURL}/login`, {
        email: username,
        password: password,
      })
      .then((responseJson)=> {
          setResult(responseJson)
        // this.setState({
        //   result: responseJson,
        //   // loading: false,
        // });

        if (responseJson.status) {
          AsyncStorage.clear();
// debugger;
          AsyncStorage.setItem('token', responseJson.data.access_token);

        setprogressVisible(false);

          navigation.navigate('BottomTab');
        }
        else {
            setprogressVisible(false);
          alert('Email de usuário ou senha incorreta');
        }
      })
      .catch(error => {

        setprogressVisible(false);
        alert('Email de usuário ou senha incorreta');
      })
    }
  }


    return (
        <View>
          {/* <Header name="Login"/> */}
            <View style={{marginTop:hp('15%')}}>
         
                <ProgressDialog
                    visible={progressVisible}
                    title="Buscando dados"
                    message="por favor, espere..."
                />

                <View style={[styles.ValignCenter]}>
                    <Text style={[styles.fontSize25, styles.alignCenter, styles.colorGreen]}>Assinar em</Text>
                    <View style={[styles.marginLR15, styles.marginT45]}>
                        {/* <Item > */}
                            <TextInput style={[styles.fontSize16]} placeholder="Nome do usuario"
                                autoCapitalize="none"
                                onSubmitEditing={() => this.passwordInput.focus()}
                                autoCorrect={false}
                                keyboardType='email-address'
                                returnKeyType="next"
                                value={username}
                                onChangeText={(username) => setUserName( username )}
                            />
                        {/* </Item> */}
                    </View>

                    <View style={[styles.marginLR15]}>
                        {/* <Item > */}
                            <TextInput placeholder="Senha"
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(password) => setPassword(password)}
                            />
                        {/* </Item> */}
                    </View>

                    <View style={[styles.marginLR15, styles.marginTB10],{alignSelf:'flex-end',marginRight:wp('5%')}}>
                        <TouchableOpacity onPress={() =>navigation.navigate('ForgotPassword')}>

                            {/* style={[styles.fontSize12,styles.colorDarkGrey],{alignSelf:'flex-end',marginRight:'3%',fontSize:13}} */}


                            <Text uppercase={false}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity  onPress={()=>login()}>
                        <View style={{ backgroundColor: '#58b368', width: '90%', alignSelf: 'center', padding: 12, alignItems: 'center', borderRadius: 10, marginTop: '2%' }}>
                            {/* <Button block style={styles.BackgroundGreen}> */}
                            <Text uppercase={false} style={{ color: 'white' }}>Assinar em</Text>
                            {/* </Button> */}
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', alignItems: 'center', marginTop: '5%', justifyContent: 'space-between' }}>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: .5,
                                width: '42%'
                            }}>
                        </View>
                        <View >
                            <Text>OU</Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: .5,
                                width: '43%'
                            }}>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', marginTop: '5%' }}>
                        <TouchableOpacity style={{ backgroundColor: '#e14a4a', padding: 10, width: '44%', borderRadius: 10, alignItems: 'center' }} onPress={() => signIn()}>
                            <View>
                                <Text style={{ color: 'white' }}>Google</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#23447d', padding: 10, width: '44%', borderRadius: 10, alignItems: 'center' }}>
                            <View>
                                <Text style={{ color: 'white' }}>Facebook</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* <LoginButton
            readPermissions = {['public_profile'], ['email']}
            style = {{ height: 30, marginLeft:15, marginRight:15 }}
            onLoginFinished = {(error, result) => {
              if (error) {
                //alert(error)
              } else if (result.isCancelled) {
                // console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    //alert(data.accessToken.toString())
                    this.initUser(data.accessToken.toString())
                  }
                )
              }
            }}
            onLogoutFinished={(err) => {
              debugger;
              console.log("logout.")
            }}
          /> */}

                    {/* // <GoogleSigninButton
        //     style={{ marginLeft:10, marginRight:10, height: 40 }}
        //     size={GoogleSigninButton.Size.Wide}
        //     color={GoogleSigninButton.Color.Dark}
        //     onPress={this._signIn}
        //     disabled={this.state.isSigninInProgress}
        //   /> */}

                    <View style={{ flexDirection: 'row', width: '90%', marginLeft: '15%', top: 10 }} >
                        
                        <Text style={[styles.colorGreen]}>Nao tem conta?</Text>
                        <Text style={[styles.colorGreen]} onPress={() =>navigation.navigate('Register')} uppercase={false}>Inscreva-se agora</Text>

                    </View>
                    <View style={{ alignSelf: 'center', marginTop: '25%' }}>
                        <Text style={{ fontSize: 12, fontWeight: '400', }}>Version 0.1.0</Text>
                    </View>
                </View>
                </View>
           
        </View>
    )
}
export default Login;