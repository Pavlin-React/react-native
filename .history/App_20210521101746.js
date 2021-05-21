
import React, { useState } from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [name, setName] = useState( 'Style Test' )
  let onClickHandler = () => {
    setName( 'set name is done' )
  }

  return (
    <View style={styles.container}>
      <Text style={ styles.text }>{ name }</Text>
      <Button title=' update state ' onPress={ onClickHandler } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderC
  },
  text: {
    color: '#ffffff',
    fontSize: 22,
    fontStyle: 'italic',
    margin: 10
  }
});
