import React, { Component } from 'react';
import { StyleSheet, Scrollview, Keyboard, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Icone from '../../assets/icone.png';
import Logo from '../../assets/logo.png';
import Home from '../../assets/home.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
    nome: "",
    senha: "",
    estilo:"",
    };
  }

  render() {

    const { goBack } = this.props.navigation;
    

      return(
        

        <View style={styles.container}>
         
        
         <TouchableOpacity 
            style = {styles.seta}
            onPress = {()=> goBack()}>
              <Feather name="chevron-left" size={38} color="black" />
          </TouchableOpacity> 
        
          <Image 
              source={Home} 
              style={styles.home} />
         
         <TouchableOpacity 
            style = {styles.button}>
            <Text style = {styles.buttonText}>Home</Text>
         </TouchableOpacity>

         <Image 
              source={Icone} 
              style={styles.icone} />

        <TouchableOpacity 
            style = {styles.button}>
            <Text style = {styles.buttonText}>Perfil</Text>
        </TouchableOpacity>
         
        <Image 
     source={Logo}
     style={styles.logo}
    />
    

          </View>
      );
  }


}

const styles = StyleSheet.create({


    container: {
      flex: 1,
      backgroundColor: '#078f47',
      
    },

    seta: {
        marginTop: 30,
    },

    home: {
        width: 150,
        height: 150,
        marginTop: -20,
        resizeMode : "contain",
        marginLeft: 85,
        //borderRadius: 100,
      },

    logo: {
        width: 140,
        height: 140,
        marginTop: 20,
        resizeMode : "contain",
        marginLeft: 90,
        borderRadius: 150,
      },

    icone: {
        width: 150,
        height: 150,
        //marginTop: 55,
        resizeMode : "contain",
        marginLeft: 85,
        //borderRadius: 100,
      },

    button: {
        borderRadius: 10,
        paddingVertical: 1,
        paddingHorizontal: 1,
        backgroundColor: "#078f47",
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 2,
        borderColor: '#078f47',
        borderWidth: 2,
        marginTop:-25,
      },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center'
    },

});