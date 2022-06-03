import React from 'react';
// import Splash from '../screens/Auth/Splash';
import Splash from '../screen/Auth/Splash';
import Login from '../screen/Auth/Login';
import Register from '../screen/Auth/Register/Register';
import ForgotPassword from '../screen/Auth/ForgotPassword';
import UpdateOffer from '../screen/Offer/UpdateOffer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './bottomTab';
import AddOffer from '../screen/Offer/AddOffer';
const Stack = createNativeStackNavigator();
const StackNavigtaion = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="UpdateOffer"
        component={UpdateOffer}
        options={{headerShown: true}}
      />
        <Stack.Screen
        name="AddOffer"
        component={AddOffer}
        options={{headerShown: true,title:"Criar oferta"}}
      />

    </Stack.Navigator>
  );
};
export default StackNavigtaion;