import React, { Component } from 'react';
import { StyleSheet, ScrollView, Cabeçalho, Keyboard, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Mercado from '../../assets/mercado.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons'; 

export default class Login extends Component {


  constructor(props) {
    super(props);
    this.state = {
    nome: "",
    senha: "",
    estilo:"",
    search: '',
    };
  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {

    const { goBack } = this.props.navigation;
    const { search } = this.state;
   

      return(


        <ScrollView style={styles.container}>
       
          
      
       <View style={styles.containerCa}>

           <TouchableOpacity 
              style = {styles.seta}
              onPress = {()=> goBack()}>
              <Feather name="chevron-left" size={38} color="black" />
           </TouchableOpacity>
          
      
           <TouchableOpacity 
              style = {styles.menu}>
              <Feather name="menu" size={35} color="#078f47" />
            </TouchableOpacity>

      </View>
      
         <Text style={styles.titulo}>Mercado X</Text>

          <SearchBar
          type="blue"
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
      />


          <View style={styles.containerr}>

          <Text style={styles.ttitulo}>10% de desconto em refrigerantes</Text>

          <Image 
              source={Mercado} 
              style={styles.mercado} />

          <Text style={styles.tttitulo}>Lorem ipsum dolor sit amet lorem ipsum sit amet lorem ipsum sit amet</Text>


          <TouchableOpacity style = {styles.button}>  
          <Text style = {styles.buttonText}>CUPOM</Text>
          </TouchableOpacity>

          </View>
<View style={styles.containerT}>

          <View style={styles.containerC}>

          <Text style={styles.tituloA}>Batatas</Text>

          </View>

          <View style={styles.containerD}>

          <Text style={styles.tituloB}>Pizzas</Text>

</View>

</View>
          
</ScrollView>

        );
  }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#e5e6e7', 
      },
    
      containerr: {
        flex: 1,
        backgroundColor: '#078f47',
        borderRadius: 17,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 50,
        marginBottom: 100,
      },

      containerC: {
        flex: 1,
        backgroundColor: '#078f47',
        borderRadius: 15,
        marginLeft: 165,
        marginRight: 12,
        marginTop: -17,
        //marginBottom: 20,
      },

      containerD: {
        flex: 1,
        backgroundColor: '#078f47',
        borderRadius: 15,
        marginLeft: 12,
        marginRight: 165,
        marginTop: -17,
        //marginBottom: 20,
      },

      containerCa: {
        flex: 1,
        backgroundColor: '#e5e6e7',
        //borderRadius: 15,
        //marginLeft: 15,
        //marginRight: 180,
        marginTop: 30,
        marginBottom: 100,
      },

      containerT: {
        flex: 1,
        backgroundColor: '#e5e6e7',
        //borderRadius: 15,
        //marginLeft: 15,
        //marginRight: 180,
        marginTop: 30,
        marginBottom: 100,
      },


      titulo: {
        textAlign: 'center',
        color: '#2887bd',
        fontWeight: 'bold',
        paddingBottom: '10%',
        fontSize: 35,
        marginTop: -100, 
    },
  
    ttitulo: {
      textAlign: 'left',
      color: 'white',
      fontWeight: 'bold',
      paddingBottom: '3%',
      fontSize: 16,
      marginLeft: 10,
      marginTop: 18,
  },
  
  tttitulo: {
    textAlign: 'left',
    color: 'white',
    //fontWeight: 'bold',
    //paddingBottom: '3%',
    fontSize: 12,
    marginLeft: 180,
    marginRight: 20,
    marginTop: -143,
  },

  tituloA: {
    textAlign: 'left',
    color: 'blue',
    //fontWeight: 'bold',
    //paddingBottom: '3%',
    fontSize: 32,
    marginLeft: 180,
    marginRight: 20,
    marginTop: 53,
  },

  
  tituloB: {
    textAlign: 'left',
    color: 'white',
    //fontWeight: 'bold',
    //paddingBottom: '3%',
    fontSize: 12,
    marginLeft: 180,
    marginRight: 20,
    marginTop: 53,
  },

  seta: {
    marginTop: 10,
  },

  menu: {
    marginTop: -40,
    marginLeft:260,
  },

button: {
  borderRadius: 10,
  paddingVertical: 4,
  paddingHorizontal: 6,
  backgroundColor: "#2887bd",
  textAlign: 'center',
  alignSelf: 'center',
  marginBottom: 10,
  borderColor: 'black',
  borderWidth: 2,
  marginTop: 12,
  marginLeft: 160,
},

buttonText: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 20,
  textAlign: 'center'
},

mercado: {
  width: 160,
  height: 160,
  marginTop: -18,
  resizeMode : "contain",
  marginLeft: 10,
  borderRadius: 20,
},

barra: {
  color: 'white',
},

});