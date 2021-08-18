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

                <TouchableOpacity
                  style = {styles.seta}
                  onPress = {()=> goBack()}>
                      <Feather name="chevron-left" size={38} color="black" />
                </TouchableOpacity>

            <View style={styles.containerr}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Perfil')} >          
              <Image
                    source={Logo} 
                    style={styles.logo} />
            </TouchableOpacity> 
                
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
      marginTop: 30,
  },
   
    containerr: {
        flex: 1,
        backgroundColor: "#078f47",
        borderRadius: 15,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 150,
        marginBottom: 250,
        justifyContent: "center",
        alignItems: "center"
      },

      logo: {
        width: 150,
        height: 150,
        marginTop: -10,
        marginBottom: 0,
        borderRadius: 150,
      },
});