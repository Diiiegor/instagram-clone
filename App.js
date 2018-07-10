import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import Store from "./Store/Store";
import {RutasNoAutenticadas} from "./Componentes/NoAutenticados/RutasNoAutenticadas";
import {RutasAutenticadas} from "./Componentes/Autenticados/RutasAutenticadas";



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Provider store={Store}>
              <RutasNoAutenticadas/>
          </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
