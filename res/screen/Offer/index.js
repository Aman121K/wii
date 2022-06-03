import AsyncStorage from '@react-native-community/async-storage';
import React, { useState, useEffect } from 'react';
import {
  Container,
  Header,
  Button,
  View,
  Item,
  Text,
  Icon,
  Body,
  Form,
  List,
  ListItem,
  Card,
  CardItem,
  cardBody,
  Switch,
  Input,
  Label,
  Left, Right,
  Title,
  Thumbnail,
  Content,
  Footer,
  ScrollView,
  TouchableOpacity,
  Image,
  FooterTab,
  Alert
} from 'react-native';
import Loader from '../../component/loader';
import { baseURL } from '../../constant/app.config';
import styles from '../styles';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from '../../utility';
// import { useState } from 'react/cjs/react.production.min';
const Offer = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [result, setResult] = useState([]);
  const [loading,setLoading]=useState(false);
  const [token,setToken]=useState();
  // const []
  useEffect(() => {
    getInitData()
  }, [])
  const getInitData = async () => {
    var token = await AsyncStorage.getItem("token");
    setToken(token)
    setLoading(true)
    fetch(`${baseURL}/user/offers?user_id=me`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }
    )
      .then(response => response.json())
      .then((responseJson) => {
        console.log("Vikas", responseJson.data)
        setResult(responseJson.data)
        setLoading(false)
        // this.setState({
        //  Result: responseJson.data,
        // });
      })
  }
  const ConfirmDelete=(id)=>{
    Alert.alert(
      'Excluir Aferta',
      'Confirma à exclusão da oferta?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Excluir', onPress: () => onDelete(id)},
      ],
      {cancelable: false},
    );
  }
  
 const  onDelete=(id)=>{
    console.log("ondelete")
  const deleteurl=`${baseURL}/user/delete-ad/${id}`;
      fetch(deleteurl,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }}
      )
      .then(response => response.json())
      .then((responseJson)=> {
     
      console.log("delete: ",responseJson);
      getInitData()
  
      })
      .catch(error=>console.log(error)) //to catch the errors if any
  }
  return (
    <View>
       <Loader loading={loading} />
      <View  style={{backgroundColor:'#5cb85c',flexDirection:'row',alignItems:'center',padding:10}}>
        <View >
          <Text style={[styles.colorWhite, styles.fontSize20, styles.fontWeight500, styles.alignCenter]}>Lista de
            Ofertas</Text>
        </View>
        <View style={{alignSelf:'flex-end',marginLeft:wp('15%')}}>
        <TouchableOpacity style={[styles.ValignCenter]}  onPress={()=>navigation.navigate('AddOffer')}>
          <Text style={[styles.colorWhite, styles.fontSize16]}> Criar Oferta </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {
          (result != null) ?
            result.map((x,index) =>
            (
              <View key={index} style={[styles.marginLR5, { borderWidth: .5, borderColor: 'black', padding: 10, borderRadius: 8, }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View>
                    <Image source={{ uri: x.images }} style={{ height: 40, width: 40, borderRadius: 10 }}></Image>
                  </View>
                  <View>
                    <Text style={[styles.ValignCenter, styles.marginL20, styles.fontWeight500, styles.fontSize17, styles.colorDarkGrey, styles.marginB5]}>{x.title}</Text>
                  </View>

                </View>
                <Text style={[styles.fontSize13, styles.marginT15, styles.colorDarkGrey]} >{x.short_desc}</Text>

                <View style={[styles.flexRow, styles.marginTB10, styles.width100p]}>
                  <Text style={[styles.fontWeight400, styles.fontSize16, styles.colorDarkGrey]}>Status:</Text>
                  {x.status=="1"?
                  <Text style={[styles.fontWeight400, styles.fontSize16, styles.stausColorActive]}> Ativa</Text>:
                  <Text style={[styles.fontWeight400, styles.fontSize16, styles.stausColorpending]}> pendente</Text>
            }
                  <View style={[styles.flexRow, styles.marginT5, styles.alignRight]}>
                    <TouchableOpacity onPress={() => navigation.navigate('UpdateOffer', { itemId: x.id })} style={[styles.colorDarkGrey, styles.ValignCenter, styles.marginLR10, styles.alignLeft]}>
                      <Text style={[styles.colorGreen, styles.marginLR10, styles.Underline]}>editar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>ConfirmDelete(x.id)} style={[styles.ValignCenter, styles.marginLR10, styles.alignRight]}>
                      <Text style={[styles.colorRed, styles.marginLR10, styles.Underline]}>excluir</Text>
                    </TouchableOpacity>
                  </View>

                </View>

                {/* <Card style={[styles.marginLR5]}>
                  <CardItem cardBody>
                    <View style={[styles.marginTB10,styles.marginLR15]}>
                          <View style={[styles.flexRow,]}>
                              <Thumbnail square small source={{uri:typeof(x.images) == 'string' ? x.images : ''}} />
                                <Text style={[styles.ValignCenter,styles.marginL20,styles.fontWeight500,styles.fontSize17,styles.colorDarkGrey,styles.marginB5]}>{x.title}</Text>
                          </View>
                          <Text style={[styles.fontSize13,styles.marginT15,styles.colorDarkGrey]} >{x.short_desc}</Text>


                          <View style={[styles.flexRow,styles.marginTB10,styles.width100p]}>
                              <Text style={[styles.fontWeight400,styles.fontSize16,styles.colorDarkGrey]}>Status:</Text>
                              <Text style={[styles.fontWeight500,styles.fontSize16,styles.colorDarkGrey]}> {x.status_text}</Text>
                              <View style={[styles.flexRow,styles.marginT5,styles.alignRight]}>
                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('UpdateOffer',{itemId: x.id})}  style={[styles.colorDarkGrey,styles.ValignCenter,styles.marginLR10,styles.alignLeft]}>
                                  <Text style={[styles.colorGreen,styles.marginLR10,styles.Underline]}>editar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={()=>this.ConfirmDelete(x.id)} style={[styles.ValignCenter,styles.marginLR10,styles.alignRight]}>
                                  <Text style={[styles.colorRed,styles.marginLR10,styles.Underline]}>excluir</Text>
                                </TouchableOpacity>
                              </View>

                          </View>
                    </View>
                  </CardItem>
            </Card> */}
              </View>
            ))
            : null

        }



      </ScrollView>
    </View>
  )
}
export default Offer;