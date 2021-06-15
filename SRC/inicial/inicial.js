import React, { Component } from 'react';
import { StyleSheet, Scrollview, Keyboard, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Logo from '../../assets/logo.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
export default function tela () {
  const navigation = useNavigation ();
return (
  <View style={styles.container}>
    <Image 
     source={Logo}
     style={styles.logo}
    />
    <TouchableOpacity 
        style = {styles.button}
        onPress = {() => navigation.navigate('Login') }>
      <Text style = {styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity 
        style = {styles.buttonn}
        onPress = {() => navigation.navigate('Cadastro') }>
      <Text style = {styles.buttonTextt}>Cadastro</Text>
    </TouchableOpacity>
  </View>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 17,
    paddingHorizontal: 90,
    backgroundColor: "#2887bd",
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 2,
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 65,
  },
  buttonn: {
    borderRadius: 10,
    paddingVertical: 19,
    paddingHorizontal: 78,
    backgroundColor: "white",
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 2,
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 15,
  },
  buttonTextt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 55,
    resizeMode : "contain",
    marginLeft: 60,
    borderRadius: 150,
  },
  container: {
    flex: 1,
    backgroundColor: '#078f47',
  },
  subTitulo: {
    textAlign: 'center',
    color: '#386e70',
    fontWeight: 'bold',
    padding: 10,
    paddingBottom: '10%',
    marginBottom: 50,
    fontSize: 33,
  },
});