import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs'
import LoginScreen from './containers/Login';


export default function App() {

  return (
    
    <NavigationContainer>
    <Tabs />
  </NavigationContainer>
   
 
  );
}
