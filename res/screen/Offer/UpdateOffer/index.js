import React ,{useState,useEffect} from 'react';
import { TouchableOpacity, TextInput,StyleSheet,ScrollView,Image,AsyncStorage,Platform,StatusBar,KeyboardAvoidingView,View,Text,Button} from 'react-native';
import styles from '../../styles';
import { ProgressDialog } from 'react-native-simple-dialogs';
import DatePicker from 'react-native-datepicker'
import { baseURL } from '../../../constant/app.config';
import ImagePicker from 'react-native-image-picker';
import SelectMultiple from 'react-native-select-multiple'

const UpdateOffer=({navigation})=>{
    const [hidePassword,setHidePassword]=useState(true)
    const [progressVisible,setprogressVisible]=useState(false)
   const  [Categories,setCategories]=useState([])
   const [CategoryName,setCategoryName]=useState([])
    const [Cities,setCities]=useState([])
    const [title,setTitle]=useState('')
    const [short_desc,setshort_desc]=useState('')
    const [cat_id,setCat_id]=useState('')
    const [address,setAddress]=useState('')
    const [city_id,setCity_id]=useState('Select')
    const [zip_code,setZip_code]=useState('')
    const [phone,setPhone]=useState('')
    const [description,setDescription]=useState('')
    const [min_price,setMin_price]=useState('')
    const [max_price,setMax_price]=useState('')
    const [amenities,setAmentites]=useState([])
    const [Selectedamenities,setSelectedamenitites]=useState([])
    const [total_allowed_coupon,setTotal_allowed_coupon]=useState('')
    const [users_coupon_per_day,setusers_coupon_per_day]=useState('')
    const [coupon_begin_hour,setCoupon_begin_hour]=useState('')
    const [coupon_end_hour,setCoupon_end_hour]=useState('')
    const [coupon_start_date,setCoupon_start_date]=useState('')
    const [coupon_end_date,setCoupon_end_date]=useState('')
    const [result,setResult]=useState('')
    const [selected,setSelected]=useState(undefined)
    const [CatSelected,setCateSelected]=useState(undefined)
    const [itemId,setItemId]=useState('')
    const [ImgSource,setImgSource]=useState('')
    const fruits = [
        { label: 'Segunda-feira', value: '1' },
        { label: 'Terça-feira', value: '2' },
        { label: 'Quarta-feira', value: '3' },
        { label: 'Quinta-feira', value: '4' },
        { label: 'Sexta-feira', value: '5' },
        { label: 'Sábado', value: '6' },
        { label: 'Domingo', value: '7' }
      ]
    return(
    
        <View>
            <KeyboardAvoidingView keyboardVerticalOffset={100} style={styles.container} enabled>
<ScrollView keyboardShouldPersistTaps={'always'}>
            <ProgressDialog
    visible={progressVisible}
    title=" Fetching Data"
    message="Please wait..."
  />
      <View style={[styles.ValignCenter]}>
        <View style={[styles.flexRow,styles.marginT45]}>
          {/* <Button style={[styles.marginT45,styles.marginLR30]} onPress={()=> this.props.navigation.navigate('offers')} transparent>
           {/* <Image style={{height:18,width:20}} source={require('./../../../assets/left.png')} /> */}
          {/* </Button> */} 

          <Text style={[styles.fontSize25,styles.marginT45,styles.marginLR30,styles.alignLeft,styles.colorGreen]}>Atualizar Oferta</Text>

        </View>
 <View  style={[styles.marginLR30,styles.marginT45]}>

               {/* <Item > */}
                <TextInput style={[styles.fontSize16]} placeholder="Nome do Estabelecimento"
                 autoCapitalize="none"
                 autoCorrect={false}
                 keyboardType='email-address'
                 returnKeyType="next"
                 value={title}
                 onChangeText={(title) => this.setState({ title })}

                />
              {/* </Item> */}
          </View>

          <View  style={[styles.marginLR30]}>
               {/* <Item > */}
               <TextInput style={[styles.fontSize16]} placeholder="Título da oferta"
                 autoCapitalize="none"
                 autoCorrect={false}
                 keyboardType='email-address'
                 returnKeyType="next"
                 value={short_desc}
                 onChangeText={(short_desc) => this.setState({ short_desc })}

                />
              {/* </Item> */}

              {/* <Item > */}
              <TextInput
                    style={[styles.textArea,styles.borderGrey]}
                    underlineColorAndroid="transparent"
                    placeholder="Descrição e regras da oferta"
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                    value={description}
                    onChangeText={(description) => this.setState({ description })}
                  />
        {/* </Item> */}


        {/* <Item > */}
                      {/* <TextInput placeholder="Coupon Start Date"
                      value={this.state.coupon_start_date}
                      onChangeText={(coupon_start_date) => this.setState({ coupon_start_date })}
                      secureTextEntry={true}
                      />   */}

                      <DatePicker

                      style={[styles.width50p]}
                      date={coupon_start_date}
                      mode="date"
                      placeholder="Início de vigência"
                      format="YYYY-MM-DD"
                      minDate={new Date()}
                      maxDate="2025-12-12"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                      dateIcon: {
                      height: 18,
                      width: 18,

                        },

                        dateTextInput: {
                          borderWidth: 0

                        }
                        // ... You can check the source to find the other keys.
                      }}
                    //   iconSource={require('../../../assets/calender.png')}
                      onDateChange={(coupon_start_date) => {
                        this.setState({ coupon_start_date: coupon_start_date })
                      }}
                      />


                    <DatePicker

                    style={[styles.width50p]}
                    date={coupon_end_date}
                    mode="date"
                    placeholder="Término de vigência"
                    format="YYYY-MM-DD"
                    minDate={ (coupon_start_date)?coupon_start_date:new Date()}
                    maxDate="2025-12-12"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                    height: 18,
                    width: 18,

                      },

                      dateTextInput: {
                        borderWidth: 0

                      }
                      // ... You can check the source to find the other keys.
                    }}
                    // iconSource={require('../../../assets/calender.png')}
                    onDateChange={(coupon_end_date) => {
                      this.setState({ coupon_end_date: coupon_end_date })
                    }}
                    />
             {/* </Item> */}




              {/* <Item > */}
                    <DatePicker
                    date={coupon_begin_hour}
                    style={[styles.width50p]}
                    mode="time"
                    placeholder="Horário de início"
                    // format="YYYY-MM-DD"
                    // minDate="2016-05-01"
                    // maxDate={new Date()}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        height: 18,
                        width: 18
                      },

                      dateTextInput: {
                        borderWidth: 0

                      }
                      // ... You can check the source to find the other keys.
                    }}
                    // iconSource={require('../../../assets/clock.png')}

                    onDateChange={(coupon_begin_hour) => {
                      this.setState({ coupon_begin_hour: coupon_begin_hour })
                    }}
                    />

                    <DatePicker
                    date={coupon_end_hour}
                    style={[styles.width50p]}
                    mode="time"
                    placeholder="Horário de término"
                    // format="YYYY-MM-DD"
                    // minDate="2016-05-01"
                    // maxDate={new Date()}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        height: 18,
                        width: 18
                      },

                      dateTextInput: {
                        borderWidth: 0

                      }
                      // ... You can check the source to find the other keys.
                    }}
                    // iconSource={require('../../../assets/clock.png')}
                    onDateChange={(coupon_end_hour) => {
                      this.setState({ coupon_end_hour: coupon_end_hour })
                    }}
                    />
                    {/* </Item> */}

          </View>


           <View  style={[styles.marginLR30,styles.marginTB15,styles.border1]}>

              {/* <Item > */}

                    {/* <SelectMultiple
                    items={fruits}
                    // selectedItems={amenitiesItems}
                    onSelectionsChange={this.onSelectionsChange} /> */}

                {/* </Item> */}
          </View>

          <View  style={[styles.marginLR30,styles.marginTB15,styles.border1]}>

              {/* <Item > */}




{
      //   (CategoryName)?
      //     <Picker
      //       mode="dropdown"
      //       // iosIcon={<Icon style={[styles.colorGreen]} name="arrow-down" />}
      //       placeholder="Categories"
      //       placeholderIconColor={'#fff'}
      //       placeholderStyle={{ color: "#fff" }}
      //       placeholderIconColor="#fff"
      //       style={{height: 30, width:200,color:'#676767'}}
      //       // selectedValue={this.state.city_id}
      //       selectedValue={2}
      //       onValueChange={(value, itemIndex) =>
      //         this.setState({
      //           cat_id:value,
      //           CatSelected: value,
      //             })
      //       }>
      //         {/* { this.CategoriesList() } */}

      //     </Picker>
      // :null
      }


  {/* </Item> */}
                  </View>





          <View  style={[styles.marginLR30,styles.marginTB15,styles.border1]}>

              {/* <Item > */}


              {
                (Cities)?
                <View></View>
                  // <Picker
                  //   mode="dropdown"
                  //   // iosIcon={<Icon style={[styles.colorGreen]} name="arrow-down" />}
                  //   placeholder="City"
                  //   placeholderIconColor={'#fff'}
                  //   placeholderStyle={{ color: "#fff" }}
                  //   placeholderIconColor="#fff"
                  //   style={{height: 30, width:200,color:'#676767'}}
                  //   // selectedValue={this.state.city_id}
                  //   selectedValue={city_id}
                  //     onValueChange={(value, itemIndex) =>
                  //     this.setState({
                  //       city_id:value,
                  //       selected: value,
                  //         })
                  //   }>
                  //     {/* { this.CityList() } */}

                  // </Picker>
              :null
              }



              {/* </Item> */}
          </View>


          <View  style={[styles.marginLR30,styles.marginTB15]}>

              {/* <Item > */}
                  <TextInput
                        style={[styles.textArea,styles.borderGrey]}
                        underlineColorAndroid="transparent"
                        placeholder="Endereço"
                        placeholderTextColor="#676767"
                        numberOfLines={5}
                        multiline={true}
                        value={address}
                     onChangeText={(address) => this.setState({ address })}
                      />
            {/* </Item> */}
              </View>

          <View  style={[styles.marginLR30]}>
               {/* <Item > */}
                <TextInput style={[styles.fontSize16]} placeholder="CEP do Local"
                 autoCapitalize="none"
                 autoCorrect={false}
                 keyboardType='number-pad'
                 returnKeyType="next"
                 value={zip_code}
                 onChangeText={(zip_code) => this.setState({ zip_code })}

                />
              {/* </Item> */}
          </View>

          <View  style={[styles.marginLR30]}>
               {/* <Item > */}
                <TextInput style={[styles.fontSize16]} placeholder="Telefone do Local"
                 autoCapitalize="none"
                 autoCorrect={false}
                 keyboardType='number-pad'
                 returnKeyType="next"
                 value={phone}
                 onChangeText={(phone) => this.setState({ phone })}

                />
              {/* </Item> */}
          </View>

          <View  style={[styles.marginLR30,styles.marginTB15]}>



    {/* <Item > */}

                <TextInput placeholder="Preço original"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType='number-pad'
                  returnKeyType="next"
                  value={min_price}
                  onChangeText={(min_price) => this.setState({ min_price })}
                  />

                  {/* </Item> */}


                  {/* <Item > */}

                  <TextInput placeholder="Preço da oferta"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='number-pad'
                    returnKeyType="next"
                    value={max_price}
                    onChangeText={(max_price) => this.setState({ max_price })}
                    />

                    {/* </Item> */}

                    {/* <Item > */}

                    <TextInput placeholder="Números de cupons permitidos"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='number-pad'
                    returnKeyType="next"
                    value={total_allowed_coupon}
                    onChangeText={(total_allowed_coupon) => this.setState({ total_allowed_coupon })}
                    />

                    {/* </Item> */}


                    {/* <Item > */}
                    <TextInput placeholder="Números de coupons por dia"
                    autoCapitalize="none"
                      autoCorrect={false}
                      keyboardType='number-pad'
                      returnKeyType="next"
                      value={users_coupon_per_day}
                      onChangeText={(users_coupon_per_day) => this.setState({ users_coupon_per_day })}
                    />
                    {/* </Item> */}



                     </View>

              <View style={[styles.marginLR30,styles.marginTB15]}>
                 {
                   (ImgSource)?
                   <Image style={{height:100,width:'100%'}}
                   source={{uri:'data:image/jpeg;base64,'+ImgSource}}
                 />
                   :null

                 }


            </View>

            <View  style={[styles.marginLR30,styles.marginTB15]}>

                    {/* <Button  onPress={()=>this.UploadImg()}  block style={[styles.BackgroundGreen]}>
                        <Text  uppercase={false}> Selecionar imagem</Text>
                </Button> */}

          </View>
          <View  style={[styles.marginLR30,styles.marginTB15]}>

                  {/* <Button  onPress={()=>this.onSubmitOffer()}  block style={[styles.BackgroundGreen,styles.marginT10]}>
              <Text  uppercase={false}>Atualizar oferta</Text>
            </Button> */}


          </View>

          <View  style={[styles.marginLR30,styles.marginTB15]}>



     </View>


    </View>

    </ScrollView>
</KeyboardAvoidingView>
        </View>
    )
}
export default UpdateOffer;