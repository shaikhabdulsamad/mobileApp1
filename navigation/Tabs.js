import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../containers/Home';
import CartScreen from '../containers/Cart';
import ProductScreen from '../containers/Products';
import AccountScreen from '../containers/Account';
import LoginScreen from '../containers/Login';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (

    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProductScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
   
  );
}