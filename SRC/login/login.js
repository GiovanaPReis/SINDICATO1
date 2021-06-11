import React, { Component } from 'react';
import { StyleSheet, Scrollview, Keyboard, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Logo from '../../../assets/logo.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default class Cadastro extends Component {

  render() {

    const { goBack } = this.props.navigation;

      return(

        <View style={styles.container}>
         
         <TouchableOpacity 
            style = {styles.seta}
            onPress = {()=> goBack()}>
              <Feather name="chevron-left" size={38} color="#0B0D88" />
          </TouchableOpacity>
          <Image 
            source={Logo} 
            style={styles.logo} />
          <Text style={styles.titulo}>Bem vinde</Text>
          <View style={styles.forms}>


          <TextInput 
            value={this.state.nome}
            style = {styles.input}
            placeholder = 'Nome Artístico'
            onChangeText = {texto => this.setState({nome : texto})} 
          />

          </View>
          <View style={styles.forms}>

          <TextInput 
            value={this.state.senha}
            style = {styles.input}
            placeholder = 'Segredo'
            onChangeText = {texto => this.setState({senha : texto})}
            secureTextEntry={true}
          />

          </View>
          <View style={styles.forms}>


          <TextInput 
            value={this.state.estilo}
            style = {styles.input}
            placeholder = 'Estilo preferido'
            onChangeText = {texto => this.setState({estilo : texto})} 
          />

          </View>
          <TouchableOpacity style = {styles.button} onPress = { this.fazCadastro }><Text style={{color: 'white'}}>Entrar</Text></TouchableOpacity>
      </View>

      );
  }


}


const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#95d4de',
    
  },

  forms: {
    alignItems: 'center',
  },

  input: { //Caixa do Formulário
    marginLeft: 20,
    marginRight: 20,
    padding:10,
    borderStyle: 'solid',
    borderColor: "#4682b4",
    borderWidth: 2,
    borderRadius: 15,
    shadowRadius: 0.5,
    backgroundColor: "#E5E6E8",
    marginBottom: '10%',
    width: 200,
    textAlign: 'center',

  },
  logo: {
    width: 450,
    height: 250,
    marginTop: -110,
    resizeMode : "contain",
    marginLeft: -81,
  },

  subTitulo: {
      textAlign: 'center',
      color: '#386e70',
      fontWeight: 'bold',
      paddingBottom: '5%',
  },
  titulo: {
      textAlign: 'center',
      color: '#fe7f51',
      fontWeight: 'bold',
      paddingBottom: '3%',
      fontSize: 30,
  },
  seta: {
      marginTop: 30,
  },
  
  cardTitulo: {
    textAlign: 'left',
    color: '#766f79',
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  cardContent: {
    flexDirection: "row",
  },
  cardPrice: {
    textAlign: 'left',
    color: '#0B0D88',
    fontWeight: 'bold',
    marginTop: 35,
    fontSize: 22,
  },

  button: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: "#fe7f51",
    textAlign: 'center',
    borderColor: '#4682b4',
    borderWidth: 2,
    shadowColor: 'white',
    shadowOpacity: 0.4,
    shadowRadius: 3,
    shadowOffset: {
    height: 1,
    width: 1 },
    alignSelf: 'center',
    marginBottom: 20,
  },
});
