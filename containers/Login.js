import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
     <Text>Log In</Text>
     <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="numeric"
      />
        <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="numeric"
      />
<TouchableOpacity onPress={() => navigation.navigate('Home')} style={{marginTop:10}}><Text>Login</Text></TouchableOpacity>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
