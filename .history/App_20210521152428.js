
import React, { useState } from 'react';
import { Button, Linking, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [items, setItems] = useState([
    { key: 1, item: 'Item 1' },
    { key: 2, item: 'Item 2' },
    { key: 3, item: 'Item 3' },
    { key: 4, item: 'Item 4' },
    { key: 5, item: 'Item 5' },
    { key: 6, item: 'Item 6' },
    { key: 7, item: 'Item 7' },
    { key: 8, item: 'Item 8' },
    { key: 9, item: 'Item 910' },
  ])

  let [refreshing, setRefreshing] = useState( false )

  let onFresh = () => {
    setRefreshing( true )
    setItems( [...Items], { key:69, item: 'Item 69' } )
    setRefreshing( false )
  }

  

  return (
      <ScrollView
        style={styles.body}
        refreshControl={<RefreshControl refreshing={ refreshing }/>}
      >
        {items.map(obj => {
          return (
            <View key={obj.key}style={ styles.item }>
              <Text style={ styles.text }>{ obj.item }</Text>
            </View>
          )
        })}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    marginTop: 40,
  },
  item: {
    margin: 10,
    backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    margin: 10,
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
  },
});
