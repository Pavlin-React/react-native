
import React, { useState } from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [items, setItems] = useState({
    { key: 1, item: 'Item 1' },
    { key: 2, item: 'Item 1' },
    { key: 3, item: 'Item 1' },
    { key: 4, item: 'Item 1' },
    { key: 5, item: 'Item 1' },
    { key: 1, item: 'Item 1' },
    { key: 1, item: 'Item 1' },
    { key: 1, item: 'Item 1' }
  })

  return (
    <View style={styles.container}>
      <Text style={ styles.text }>{ name }</Text>
      <View style={styles.button} >
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    maxHeight: 800,
    flex: 1,
    backgroundColor: 'darkkhaki',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'aqua',
    borderRadius: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 22,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'lowercase'
  },
  button: {
    width: 200,
  }
});
