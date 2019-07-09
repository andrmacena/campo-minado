import React, { Component } from 'react';
import Params from './src/params'

import { View, Text, StyleSheet } from 'react-native';
import params from './src/params';

export default class App extends Component {
   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.welcome}>Iniciando o Mines!</Text>
            <Text style={styles.instructions}>Tamanho da grade:
             {params.getRowsAmount()}x{params.getColumnsAmount()} </Text>
         </View>
      )
   }
}

const styles = StyleSheet.create({

   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
   },
   welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
   },
   highlight: {
      fontWeight: '700',
   }
})