import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RutasNoAutenticadas} from "./Componentes/NoAutenticados/RutasNoAutenticadas";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RutasNoAutenticadas/>
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
