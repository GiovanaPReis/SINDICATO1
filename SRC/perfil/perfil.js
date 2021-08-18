import React, { Component } from 'react';
import { StyleSheet, Scrollview, Keyboard, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Sindicato from '../../assets/sindicato.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default class Perfil extends Component {
    
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

                <TouchableOpacity
                  style = {styles.seta}
                  onPress = {()=> goBack()}>
                      <Feather name="chevron-left" size={38} color="black" />
                </TouchableOpacity>
                        
                <Image
                    source={Sindicato} 
                    style={styles.sindicato} />

                
                <View style={styles.coluna}>
                    <Text style={styles.subTitulo}>SÓCIO 13274175175</Text>
                    <Text style={styles.titulo}>José da Silva</Text>
                    <Text style={styles.titulo}>+55(DD) 9999-9999</Text>
                    <Text style={styles.titulo}>email@email.com</Text>
                    <Text style={styles.titulo}>405.606.522-52</Text>
                </View>
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
        marginBottom: 250,
    },

    sindicato: {
        width: 180,
        height: 180,
        marginTop: -40,
        resizeMode : "contain",
        borderRadius: 100,
        display: "flex",
    },

    subTitulo: {
        width: 350,
        height: 120,
        textAlign: 'right',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: -125,
        marginBottom: '-22%',
    },

    titulo: {
        textAlign: 'left',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 15,
        marginRight: "0%",
        marginLeft: "47%",
        paddingBottom: '-1%',
    },
});