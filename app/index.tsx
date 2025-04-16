import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login Info', `Username: ${username}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Username"
        placeholderTextColor="#66BFFF"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#66BFFF"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#66BFFF',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#66BFFF',
      marginBottom: 40,
      backgroundColor: 'white',
      paddingHorizontal: 60,
      paddingVertical: 20,
      borderRadius: 30,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 10,
      textAlign: 'center',
    },
    input: {
      width: '90%',
      backgroundColor: 'white',
      borderWidth: 2,
      borderColor: '#66BFFF',
      borderRadius: 30,
      padding: 15,
      marginVertical: 10,
      fontSize: 18,
      color: '#66BFFF',
      fontStyle: 'italic',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      backgroundColor: '#66BFFF',
      paddingVertical: 15,
      paddingHorizontal: 50,
      borderRadius: 30,
      marginTop: 30,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontStyle: 'italic',
      fontWeight: 'bold',
    },
  });
  
