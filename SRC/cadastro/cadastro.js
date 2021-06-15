import React, { Component } from 'react';
import { StyleSheet, Scrollview, Keyboard, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Cadastro from '../../assets/cadastro.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default class Cadastro extends Component {

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
              source={Cadastro} 
              style={styles.cadastro} />
         
          <Text style={styles.titulo}>Cadastrar</Text>


          <View style={styles.containerr}>

          <View style={styles.forms}>

          <Text style={styles.ttitulo}>Nome:</Text>

          <TextInput 
            value={this.state.nome}
            style = {styles.input}
            onChangeText = {texto => this.setState({nome : texto})} 
          />

          </View>
          <View style={styles.forms}>


          <Text style={styles.ttitulo}>Telefone:</Text>
          <TextInput 
            value={this.state.telefone}
            style = {styles.input}
            onChangeText = {texto => this.setState({telefone : texto})}
          />

          </View>
          <View style={styles.forms}>


          <Text style={styles.ttitulo}>E-mail:</Text>
          <TextInput 
            value={this.state.nome}
            style = {styles.input}
            onChangeText = {texto => this.setState({nome : texto})}
          />

          </View>
          <View style={styles.forms}>

          <Text style={styles.ttitulo}>Senha:</Text>
          <TextInput 
            value={this.state.senha}
            style = {styles.input}
            onChangeText = {texto => this.setState({senha : texto})}
          />

          </View>
          <View style={styles.forms}>

          </View>
          <TouchableOpacity style = {styles.button} ><Text style={{color: 'white' , fontSize: 20}}>Confirmar</Text></TouchableOpacity>
          </View>
  </View>
      );
  }


}


const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#078f47',
    
  },

  containerr: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 45,
    marginLeft: 15,
    marginRight: 15,
    marginTop: -18,
    marginBottom: 48,

  },

  forms: {
    alignItems: 'center',
  },

  input: { //Caixa do Formulário
    marginLeft: 20,
    marginRight: 20,
    padding:10,
    borderStyle: 'solid',
    borderColor: "#2887bd",
    borderWidth: 3,
    borderRadius: 15,
    shadowRadius: 0.5,
    backgroundColor: "white",
    marginBottom: '10%',
    width: 200,
    textAlign: 'center',

  },
  cadastro: {
    width: 180,
    height: 180,
    marginTop: -55,
    resizeMode : "contain",
    marginLeft: 70,
    borderRadius: 100,
  },

  titulo: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      paddingBottom: '13%',
      fontSize: 28,
      marginTop: -30,
  },

  ttitulo: {
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
    paddingBottom: '3%',
    fontSize: 20,
    marginLeft: -80,
    marginTop: 18,
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
    backgroundColor: "#2887bd",
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
});
