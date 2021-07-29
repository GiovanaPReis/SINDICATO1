import React, { Component } from 'react';
import { StyleSheet, Scrollview, Keyboard, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Logo from '../../assets/logo.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default class Usuario extends Component {
    
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

            <View style={styles.containerr}>
                        
                <Image
                    source={Logo} 
                    style={styles.Logo} />
                
            </View>
        
        </View>
      );
  }
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'white',
      
    },

    seta: {
        marginTop: 6,
    },
   
    containerr: {
        flex: 1,
        backgroundColor: "#078f47",
        borderRadius: 15,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 220,
        marginBottom: 300
    
      },

    logo: {
        width: 50,
        height: 50,
        borderRadius: 15,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 200,
        resizeMode : "contain",
        borderRadius: 50,
      }
});