import React, { Component } from 'react';
import { StyleSheet, Scrollview, Keyboard, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Foto from '../../assets/foto.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default class Cadastro extends Component {

  constructor(props) {
    super(props);
    this.state = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    };
  }
  
  fazCadastro = async ()  => {
    var erro = null;
    if(this.state.senha == this.state.confirmarSenha){
      try{
        await AsyncStorage.setItem('@nome', this.state.nome)
        await AsyncStorage.setItem('@telefone', this.state.telefone)
        await AsyncStorage.setItem('@email', this.state.email)
        await AsyncStorage.setItem('@senha', this.state.senha)
        Keyboard.dismiss();
      } catch(e) {
        console.log(e)
      }

      let keys;
      keys = await AsyncStorage.getAllKeys();
      const valores = await AsyncStorage.multiGet(keys);

      try{
        await axios.post('https://sindicato-software.herokuapp.com/api/registrarApp', {valores})
      } catch (e) {
      console.log(e)
      erro = e;
      }
      if(erro == null) {
        this.props.navigation.navigate('Produtos')
      } else {
        console.log(erro)
        Alert.alert("Erro!", "FFFFFF");
      }
  }else{
    Alert.alert("Senha incorreta", "A sua senha não está igual à sua confirmação. Tente novamente!");
  }
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
              source={Foto} 
              style={styles.foto} />
         
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
    marginTop: -70,
    marginBottom: 15,

  },

  forms: {
    alignItems: 'center',
  },

  input: { //Caixa do Formulário
    marginLeft: 20,
    marginRight: 20,
    padding:7,
    borderStyle: 'solid',
    borderColor: "#2887bd",
    borderWidth: 3,
    borderRadius: 15,
    shadowRadius: 0.5,
    backgroundColor: "white",
    marginBottom: '1%',
    width: 200,
    textAlign: 'center',

  },
  foto: {
    width: 180,
    height: 180,
    marginTop: -75,
    resizeMode : "contain",
    marginLeft: 70,
    borderRadius: 100,
  },

  titulo: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      paddingBottom: '25%',
      fontSize: 23,
      marginTop: -38,
  },

  ttitulo: {
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
    paddingBottom: '3%',
    fontSize: 16,
    marginLeft: -80,
    marginTop: 8,
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
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: "#2887bd",
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 12,
    borderColor: 'black',
    borderWidth: 2,
  },
});
