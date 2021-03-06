
import React, { useState } from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [name, setName] = useState( 'Style Test' )
  let onClickHandler = () => {
    useState( 'set name is done' )
  }

  return (
    <View style={styles.container}>
      <Text style={ styles.text }>Open up App.js to start working on your app</Text>
      <Button title=' visit my portfolio ' onPress={ onClickHandler } />
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
