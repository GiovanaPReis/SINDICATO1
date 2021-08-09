import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator(); //Cria um StackNavigator

import Inicial from './inicial/inicial'; //Importa o componente Tela1
import Cadastro from './cadastro/cadastro';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import Menu from './menu/menu';
import Perfil from './perfil/perfil';
import Usuario from './usuario/usuario';
import Categoria from './categoria/categoria';


export default function Rotas() { //Exporta para que possa ser "visto" no resto do aplicativo
    return (
        <NavigationContainer>
            
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                
                <AppStack.Screen name="Categoria" component={Categoria} />
                
                <AppStack.Screen name="Usuario" component={Usuario} />
                
                <AppStack.Screen name="Perfil" component={Perfil} />  
                
                <AppStack.Screen name="Menu" component={Menu} />  
                
                <AppStack.Screen name="Dashboard" component={Dashboard} />

                <AppStack.Screen name="Inicio" component={Inicial} />  
                
                <AppStack.Screen name="Cadastro" component={Cadastro} />      

                <AppStack.Screen name="Login" component={Login} />

            </AppStack.Navigator>
            
        </NavigationContainer>
    );
}