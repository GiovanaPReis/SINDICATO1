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
          
          <TouchableOpacity
              style = {styles.seta}
              onPress = {()=> goBack()}>
                <Feather name="chevron-left" size={38} color="black" />
            </TouchableOpacity>

            <View style={styles.containerr}>
                        
                <Image
                    source={Sindicato} 
                    style={styles.sindicato} />
                
                
                <View style={styles.coluna}>
                    <Text style={styles.subTitulo}>SÓCIO 13274175175</Text>
                    <Text style={styles.texto}>José da Silva</Text>
                    <Text style={styles.ttexto}>+55(DD) 9999-9999</Text>
                    <Text style={styles.tttexto}>email@email.com</Text>
                    <Text style={styles.ttttexto}>405.606.522-52</Text>
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
        marginTop: 30,
    },
   
    containerr: {
        flex: 1,
        backgroundColor: 'black',
        borderRadius: 45,
        marginLeft: 15,
        marginRight: 15,
        marginTop: -20,
        marginBottom: 53,
    
      },

    sindicato: {
        width: 180,
        height: 180,
        marginTop: -55,
        resizeMode : "contain",
        marginLeft: 70,
        borderRadius: 100,
      },

    subTitulo: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        paddingBottom: '5%',
    },

    titulo: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        paddingBottom: '13%',
        fontSize: 23,
        marginTop: -30,
    },
  
    ttitulo: {
        textAlign: 'left',
        color: 'black',
        fontWeight: 'bold',
        paddingBottom: '3%',
        fontSize: 18,
        marginLeft: -80,
        marginTop: 18,
    },
  
    tttitulo: {
        textAlign: 'left',
        color: 'black',
        fontWeight: 'bold',
        paddingBottom: '3%',
        fontSize: 18,
        marginLeft: -120
    },
});