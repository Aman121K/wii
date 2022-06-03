import React from 'react';
import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AllScreen from './res/navigation/stack';
import { NativeBaseProvider, Text, Box } from 'native-base';
const App = () => {
  return (
    <NavigationContainer>
       <NativeBaseProvider>
      <AllScreen>

      </AllScreen>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}
export default App;