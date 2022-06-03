import React ,{useState,useEffect} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import CheckBox from 'react-native-check-box'
import DatePicker from 'react-native-datepicker';
import { Dropdown } from 'react-native-element-dropdown';
const AddOffer=()=>{
    const [startdate,setstartdate]=useState();
    const [endDate,setEndDate]=useState();
    const [startTime,setStartTime]=useState();
    const [endTime,setEndTime]=useState();
    const [isChecked,setisChecked]=useState();
    const [dropFirstValue,setDropFirstValue]=useState();
    const [dropSecondValue,setdropSecondValue]=useState();
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [reportingAdrList,setreportingAdrList]=useState([
    {
        label: "Restaurantes",
        value: "Restaurantes",
      },
      {
        label: "Servicos",
        value: "Servicos",
      },
      {
        label: "Beleza e Fitness",
        value: "Beleza e Fitness",
      },
      {
        label: "Comercio",
        value: "Comercio",
      },
      {
        label: "Diversao e lazer",
        value: "Diversao e lazer",
      },
      
    ])
    const [secondDroDownmenu,setsecondDroDownmenu]=useState([
    {
        label: "Sao Jose-SC",
        value: "Sao Jose-SC",
      },
      {
        label: "Florianopolis",
        value: "Florianopolis",
      },
      {
        label: "Balneario Camboriu",
        value: "Balneario Camboriu",
      },
      {
        label: "Palhoca",
        value: "Palhoca",
      },  
    ])
    const createOffer=()=>{
    }
    return(
        <View>
            <ScrollView style={styles.marginstyle} showsVerticalScrollIndicator={false}>
           
            <View style={styles.textInputDesign}>
                <TextInput style={{marginLeft:'5%'}} placeholder='Nome do Estabelecimento'>

                </TextInput>
            </View>
            <View style={styles.textInputDesign}>
                <TextInput style={{marginLeft:'5%'}} placeholder='Título da oferta'>

                </TextInput>
            </View>
            <View style={styles.textInputDesign}>
                <TextInput style={{marginLeft:'5%'}} placeholder='Descrição e regras da oferta'>

                </TextInput>
            </View>

            <View style={styles.textInputDesign}>
                <TouchableOpacity  onPress={()=>setOpen(true)}>
            <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      </TouchableOpacity >
            </View>
            
            <View>
            <CheckBox
    style={{ padding: 10}}
    onClick={()=>{
      setisChecked(true)
    }}
    isChecked={isChecked}
    leftText={"CheckBox"}
/>
            </View>
            
            <View>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={reportingAdrList}
                maxHeight={250}
                labelField="label"
                valueField="value"
                placeholder="Reporting Address*"
                searchPlaceholder="Search..."
                value={dropFirstValue}
                onChange={item => {
                  console.log("login")                 
                }}
              />
            </View>
            <View style={{marginTop:'4%'}}>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={secondDroDownmenu}
                maxHeight={250}
                labelField="label"
                valueField="value"
                placeholder="Reporting Address*"
                searchPlaceholder="Search..."
                value={dropSecondValue}
                onChange={item => {
                  console.log("login")
                }}
              />
            </View>
            <View style={styles.textInputDesign}>
                <TextInput style={{marginLeft:'5%'}} placeholder='Endereco'>

                </TextInput>
            </View>
            <View style={styles.textInputDesign}>
                <TextInput style={{marginLeft:'5%'}} placeholder='CEP do Local'>

                </TextInput>
            </View>
            <View style={styles.textInputDesign}>
                <TextInput style={{marginLeft:'5%'}} placeholder='Telefone do Local'>

                </TextInput>
            </View>
            <View style={styles.textInputDesign}>
                <TextInput style={{marginLeft:'5%'}} placeholder='Preco original'>

                </TextInput>
            </View>
            <View style={styles.textInputDesign}>
                <TextInput style={{marginLeft:'5%'}} placeholder='Preco da oferta'>

                </TextInput>
            </View>
            <View style={styles.textInputDesign}>
                <TextInput style={{marginLeft:'5%'}} placeholder='Numeros de cupons permitido'>

                </TextInput>
            </View>
            <View style={styles.textInputDesign}>
                <TextInput style={{marginLeft:'5%'}} placeholder='Numeros de coupons por dia'>
                </TextInput>
            </View>
            <TouchableOpacity  style={{width:'80%',backgroundColor:'green',padding:10,margin:'4%',alignSelf:'center',borderRadius:10}} onPress={()=>createOffer()}>
            <View style={{alignSelf:'center'}}>
                <Text style={{color:'white'}}>Selecinor imagem</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'80%',backgroundColor:'green',padding:10,margin:'4%',alignSelf:'center',borderRadius:10}} onPress={()=>createOffer()}>
            <View style={{alignSelf:'center'}}>
                <Text style={{color:'white'}}>Cria Oferta</Text>
            </View>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default AddOffer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202a3d',
  },
  containerStyle: {
    flex: 1,
  },
  spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    flex: 1,
    margin: 20,
 
  },
  radioButton: {
    flexDirection: 'row', margin: 10, justifyContent: 'space-between', alignContent: 'center'
  },
  DateTimeContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  SectionStyleBottom: {
    width: '50%',
  },
  buttonStyle: {
    backgroundColor: 'rgba(219, 35, 36, 1.0)',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 47,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  marginstyle:{
      margin:'4%'
  },
  textInputDesign:{
      borderWidth:1,
      borderColor:'black',
      borderRadius:5,
      marginTop:'3%'
    }
});