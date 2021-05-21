
import React, { useState } from 'react';
import { Button, FlatList, Linking, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [items, setItems] = useState([
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 7' },
    { name: 'Item 8' },
    { name: 'Item 90' },
  ])

  let [refreshing, setRefreshing] = useState( false )

  let onRefresh = () => {
    setRefreshing( true )
    setItems( [...items, { key:69, item: 'Item 63' } ] )
    setRefreshing( false )
  }

  

  return (
    <FlatList
      keyE
      data={ items }
      renderItem={({item}) => (
        <View key={item.key}style={ styles.item }>
            <Text style={ styles.text }>{ item.item }</Text>
        </View>
      )}
    />
      // <ScrollView
      //   style={styles.body}
      //   refreshControl={
      //     <RefreshControl
      //       refreshing={ refreshing }
      //       onRefresh={ onRefresh }
      //       colors={ ['#ff00ff'] }
      //     />}
      // >
      //   {items.map(obj => {
      //     return (
      //       <View key={obj.key}style={ styles.item }>
      //         <Text style={ styles.text }>{ obj.item }</Text>
      //       </View>
      //     )
      //   })}
      // </ScrollView>
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
