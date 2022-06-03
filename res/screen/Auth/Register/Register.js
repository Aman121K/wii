import React, { Component } from 'react';
import {View,Text} from 'react-native';
import { ProgressDialog } from 'react-native-simple-dialogs';
import {
  TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage, KeyboardAvoidingView
} from 'react-native';

import { baseURL } from '../api/apis';
import styles from '../styles/style';

class Register extends Component {
    
  state = {
    hidePassword: true,
    fname: '',
    lname: '',
    phone: '',
    username: '',
    password: '',
    cpassword: '',
    progressVisible:false,
    result:''
  }

  async componentDidMount() {
    const email = await AsyncStorage.getItem("email");
    const first_name = await AsyncStorage.getItem("first_name");
    const phone = await AsyncStorage.getItem("phone");
  }

    signup=()=> {
    const { username, password, fname, lname, phone, cpassword } = this.state;
    if (username == '' || password == '' || fname == '' || lname == '' || phone == '' || cpassword == '') {
      alert('Please enter all the fields');
    }
    else {
      this.setState({ progressVisible: true });

      fetch(`${baseURL}/new-profile`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.username,
          first_name: this.state.fname,
          last_name:this.state.lname,
          phone: this.state.phone,
          password:this.state.password,
          password_confirmation:this.state.cpassword,
        }),
      })
      .then(response => response.json())
      .then((responseJson)=> {
        console.log(responseJson);
        this.setState({
          result: responseJson,
          progressVisible: false,
        });

        if (this.state.result.status) {
          alert('Registration succeed');
          // AsyncStorage.setItem('username',this.state.username);
          // AsyncStorage.setItem('password',this.state.password);

          // AsyncStorage.setItem('email',this.state.result.user.email);
          // AsyncStorage.setItem('first_name',this.state.result.user.first_name);
          // AsyncStorage.setItem('phone',this.state.result.user.phone);

          // console.log(this.state.result.user.email);
          // console.log(this.state.result.user.first_name);
          // console.log(this.state.result.user.phone);

          this.props.navigation.navigate('Login');
          this.setState({ progressVisible: false });
        }
        else {
          console.log(this.state.result.message.email);
          alert("Algo deu errado no lado do servidor");
          this.setState({ progressVisible: false });
        }
      })
      .catch(error=>console.log(error)) //to catch the errors if any
    }
  }

  managePasswordVisibility = _ => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    return (
      <KeyboardAvoidingView keyboardVerticalOffset={100} style={styles.container} enabled>
        <ProgressDialog
          visible={this.state.progressVisible}
          title=" Fetching Data"
          message="Please wait..."
        />

        <View style={[]}>
          <Text style={[styles.fontSize25,styles.alignCenter,styles.marginT45,styles.colorGreen]}>Novo Cadastro</Text>
          <View  style={[styles.marginLR30,styles.marginT45]}>
          
              <TextInput style={[styles.fontSize16]} placeholder="Primeiro Nome"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType='email-address'
                returnKeyType="next"
                value={this.state.fname}
                onChangeText={(fname) => this.setState({ fname })}
              />
           
          </View>

          <View style={[styles.marginLR30]}>
           
              <TextInput
                style={[styles.fontSize16]}
                placeholder="Segundo Nome"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType='email-address'
                returnKeyType="next"
                value={this.state.lname}
                onChangeText={(lname) => this.setState({ lname })}
              />
           
          </View>

          <View  style={[styles.marginLR30]}>
         
              <TextInput
                style={[styles.fontSize16]}
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType='email-address'
                returnKeyType="next"
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
              />
        
          </View>

          <View style={[styles.marginLR30]}>
          
              <TextInput
                style={[styles.fontSize16]} placeholder="Telefone"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType='number-pad'
                returnKeyType="next"
                value={this.state.phone}
                onChangeText={(phone) => this.setState({ phone })}
              />
          
          </View>

          <View style={[styles.marginLR30]}>
           
              <TextInput placeholder="Senha"
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                secureTextEntry={true}
              />
           

              <TextInput
                placeholder="Confirmar Senha"
                value={this.state.cpassword}
                onChangeText={(cpassword) => this.setState({ cpassword })}
                secureTextEntry={true}
              />
          </View>
    
         
          <TouchableOpacity onPress={()=>this.signup()}>
          <View   style={{backgroundColor:'#5cb85c',width:'90%',padding:10,alignSelf:'center',alignItems:'center',borderRadius:10}}>
          
              <Text uppercase={false} style={{color:'white'}}>Cadastro</Text>
          
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>this.props.navigation.navigate('Login') }>
            <View  style={{backgroundColor:'white',width:'90%',padding:10,alignSelf:'center',borderWidth:1,borderColor:'#5cb85c',marginTop:'5%',alignItems:'center',borderRadius:10}}>
              <Text style={[styles.colorGreen]}  uppercase={false}>Já possui conta?</Text>
            </View>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Register;
