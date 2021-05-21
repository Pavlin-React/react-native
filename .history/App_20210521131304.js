
import React, { useState } from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [items, setItems] = useState([
    { key: 1, item: 'Item 1' },
    { key: 2, item: 'Item 2' },
    { key: 3, item: 'Item 3' },
    { key: 4, item: 'Item 4' },
    { key: 5, item: 'Item 5' },
    { key: 6, item: 'Item 6' },
    { key: 7, item: 'Item 7' },
    { key: 8, item: 'Item 8' }
  ])

  return (
    <View style={styles.body}>
      <View style={styles.item}>
        <Text style={ styles.text }>Item 1</Text>
      </View>
    <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: 500,
    flexD
    flex: 1,
    backgroundColor: '#ffffff'
  },
  text: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
  },
  item: {
    backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center,'
  }
});
