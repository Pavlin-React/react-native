import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [name, setName] = use

  return (
    <View style={styles.container}>
      <Text style={ styles.text }>Open up App.js to start working on your app</Text>
      <Button title=' visit my portfolio ' onPress={ () => {Linking.openURL('https://www.pavliniv.eu/')} } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 22,
    fontStyle: 'italic',
    margin: 10
  }
});
