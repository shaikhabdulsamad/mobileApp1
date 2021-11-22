import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CartScreen({navigation}) {
  return (
    <View style={styles.container}>
     <Text>Cart Screen!</Text>
<TouchableOpacity onPress={() => navigation.navigate('Account')} style={{marginTop:10}}><Text>Go to Account</Text></TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Products')} style={{marginTop:10}}><Text>Go to Products</Text></TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Home')} style={{marginTop:10}}><Text>Go to Home</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
