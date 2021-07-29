import React, { Component } from 'react';
import { StyleSheet, Scrollview, Keyboard, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import User from '../../assets/user.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
    nome: "",
    senha: "",
    estilo:"",
    };
  }

  guardadados = async () => {
    var resultado = 0;
    try{

    await AsyncStorage.setItem('nome', this.state.nome)
    await AsyncStorage.setItem('senha', this.state.senha)
    Keyboard.dismiss();
    }catch (e){
        Alert.alert("Erro!", "A sua mensagem não foi enviada");
console.log (e);
    }

  
    const valores = await AsyncStorage.multiGet(['nome','senha']);
    await axios.post('http://flick-administrativo.herokuapp.com/api/loginApp', {valores})
    .then(function (response) {
    console.log (response.data.nome)
    AsyncStorage.setItem('nomelogin', JSON.stringify( response.data.nome))
    AsyncStorage.setItem('cpf',  JSON.stringify (response.data.cpf))
    AsyncStorage.setItem('emaillogin',  JSON.stringify (response.data.email))
  
    }) 
   var teste = await AsyncStorage.getItem ('nomelogin')
   console.log (teste)
    Alert.alert("Sucesso!", "A sua mensagem foi enviada com sucesso!");

    this.props.navigation.navigate('Menu', {'nome': this.state.nome})
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
              source={User} 
              style={styles.user} />
         
          <Text style={styles.titulo}>Login</Text>

          <View style={styles.containerr}>

          <View style={styles.forms}>

          <Text style={styles.ttitulo}>E-mail/CPF:</Text>

          <TextInput 
            value={this.state.nome}
            style = {styles.input}
            onChangeText = {texto => this.setState({nome : texto})} 
          />

          </View>
          <View style={styles.forms}>


          <Text style={styles.tttitulo}>Senha:</Text>
          <TextInput 
            value={this.state.senha}
            style = {styles.input}
            onChangeText = {texto => this.setState({senha : texto})}
            secureTextEntry={true}
          />

          </View>
          <View style={styles.forms}>


          </View>
          <TouchableOpacity style = {styles.button}  
          //onPress = {() => this.props.navigation.navigate('dashboard') }
          >
          <Text style={{color: 'white' , fontSize: 20}}>Confirmar</Text>
          </TouchableOpacity>

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
    marginTop: -20,
    marginBottom: 53,

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
    marginBottom: '10%',
    width: 200,
    textAlign: 'center',

  },
  user: {
    width: 180,
    height: 180,
    marginTop: -55,
    resizeMode : "contain",
    marginLeft: 70,
    borderRadius: 100,
  },

  subTitulo: {
      textAlign: 'center',
      color: '#386e70',
      fontWeight: 'bold',
      paddingBottom: '5%',
  },
  titulo: {
      textAlign: 'center',
      color: 'white',
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
    paddingVertical: 14,
    paddingHorizontal: 40,
    backgroundColor: "#2887bd",
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 2,
    marginTop:10,
  },
});
