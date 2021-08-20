import React, { Component } from 'react';
import { StyleSheet, ScrollView, Keyboard, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Pizza from '../../assets/pizza.png';
import Pizza2 from '../../assets/pizza2.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function categoria () {

const navigation = useNavigation ();

return (

  <ScrollView style={styles.container}>

    <TouchableOpacity 
            style = {styles.seta}
            onPress = {()=> goBack()}>
              <Feather name="chevron-left" size={38} color="blue" />
    </TouchableOpacity>

    <Text style={styles.ttitulo}>PIZZAS</Text>

    <Image 
     source={Pizza}
     style={styles.pizza}
    />

    <Text style={styles.titulo}>Cupons Disponíveis</Text>
  
    <TouchableOpacity 
        style = {styles.button}>
      <Text style = {styles.buttonText}>Pizzaria Moscou</Text>
    </TouchableOpacity>

<View style={styles.containerr}>

<Text style={styles.tttitulo}>Receba 10% na compra de algum dos seguintes sabores: Tradicional, 4 queijos, Calabresa e Frango c/ Catupiry.</Text>


</View>

<TouchableOpacity 
        style = {styles.button2}>
      <Text style = {styles.buttonText2}>Pizzaria</Text>
    </TouchableOpacity>

<View style={styles.container4}>


<Image 
     source={Pizza2}
     style={styles.pizza2}
    />

<Text style={styles.titulo4}>8% OFF!</Text>

<TouchableOpacity 
        style = {styles.button3}>
      <Text style = {styles.buttonText3}>Saiba Mais</Text>
    </TouchableOpacity>

</View>

<TouchableOpacity 
        style = {styles.button4}>
      <Text style = {styles.buttonText4}>Pizzaria</Text>
    </TouchableOpacity>

<View style={styles.container4}>


<Image 
     source={Pizza2}
     style={styles.pizza2}
    />

<Text style={styles.titulo4}>8% OFF!</Text>

<TouchableOpacity 
        style = {styles.button3}>
      <Text style = {styles.buttonText3}>Saiba Mais</Text>
    </TouchableOpacity>




</View>
</ScrollView>

    );
}


const styles = StyleSheet.create({


    container: {
      flex: 1,
      backgroundColor: '#e5e6e7', 
    },

    seta: {
        //marginTop: 50,
    },
    containerr: {
      flex: 1,
      backgroundColor: 'green',
      //borderRadius: 20,
      marginLeft: 15,
      marginRight: 15,
      marginTop: -20,
      marginBottom: 53,
    },

    containerrr: {
        flex: 1,
        backgroundColor: 'green',
        //borderRadius: 20,
        marginLeft: 15,
        marginRight: 15,
        //marginTop: 90,
        //marginBottom: 53,
      },
      
    container4: {
        flex: 1,
        backgroundColor: 'green',
        //borderRadius: 20,
        marginLeft: 18,
        marginRight: 18,
        marginTop: -21,
        //marginBottom: 3,
      },

    pizza: {
        width: 380,
        height: 380,
        marginTop: -275,
        resizeMode : "contain",
        //marginBottom: -210,
        //marginLeft: 70
      },

      pizza2: {
        width: 160,
        height: 160,
        //marginTop: -25,
        resizeMode : "contain",
        //marginBottom: -210,
        marginLeft: -15
      },

    titulo: {
      textAlign: 'center',
      color: '#2887bd',
      fontWeight: 'bold',
      paddingBottom: '13%',
      fontSize: 28,
      marginTop: -30,
  },

  ttitulo: {
    textAlign: 'center',
    color: '#2887bd',
    fontWeight: 'bold',
    paddingBottom: '8%',
    fontSize: 20,
    //marginLeft: -80,
    marginTop: 8,
},

tttitulo: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: '5%',
    fontSize: 15,
    //marginLeft: -80,
    marginTop: 18,
},

titulo4: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: '25%',
    fontSize: 25,
    marginLeft: 130,
    marginTop: -128,
},

button: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 68,
    backgroundColor: "white",
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 14,
    shadowRadius: 7,
    shadowColor: '#808089',
    shadowOpacity: 90,
    //borderColor: 'black',
    //borderWidth: 2,
    //marginTop:10,
  },
  
  buttonText: {
    color: '#2887bd',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },

  button2: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 105,
    backgroundColor: "white",
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 14,
    shadowRadius: 7,
    shadowColor: '#808089',
    shadowOpacity: 90,
    //borderColor: 'black',
    //borderWidth: 2,
    //marginTop:10,
  },
  
  buttonText2: {
    color: '#2887bd',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },

  button4: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 105,
    backgroundColor: "white",
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 14,
    shadowRadius: 7,
    shadowColor: '#808089',
    shadowOpacity: 90,
    //borderColor: 'black',
    //borderWidth: 2,
    marginTop: 55,
  },
  
  buttonText4: {
    color: '#2887bd',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },

  button3: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 13,
    backgroundColor: "#2887bd",
    //textAlign: 'center',
    //alignSelf: 'right',
    marginBottom: 14,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: -30,
    marginLeft: 150,
    marginRight: 20,
  },
  
  buttonText3: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
});

  