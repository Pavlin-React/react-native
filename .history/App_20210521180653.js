import React, { useState } from "react";
import {
  Button,
  FlatList,
  Linking,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  let [items, setItems] = useState([
    { name: "Item 1" },
    { name: "Item 2" },
    { name: "Item 3" },
    { name: "Item 4" },
    { name: "Item 5" },
    { name: "Item 6" },
    { name: "Item 7" },
    { name: "Item 8" },
    { name: "Item 90" },
  ]);

  let DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1', 'Item 3-2'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2', 'Item 4-3'],
    },
  ]

  let [refreshing, setRefreshing] = useState(false);

  let onRefresh = () => {
    setRefreshing(true);
    setItems([...items, { name: "Item 63" }]);
    setRefreshing(false);
  };

  return (
    <SectionList
      keyExtractor={ ( item, index ) => index.toString() }
      sections={ DATA }
      renderItem={ ( { item } ) => (
        <View key={item.key} style={styles.item}>
          
        </View>
      ) }
      renderSectionHeader={ ( { section } ) => (
        <View key={section.key} style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      ) }
    />
    // <FlatList
    //   numColumns={2}
    //   keyExtractor={(item, index) => index.toString()}
    //   data={items}
    //   renderItem={({ item }) => (
    //     <View key={item.key} style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors={["#ff00ff"]}
    //     />
    //   }
    // />
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
    flexDirection: "column",
    backgroundColor: "#ffffff",
    marginTop: 40,
  },
  item: {
    margin: 10,
    backgroundColor: "aqua",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    margin: 10,
    color: "#000000",
    fontSize: 45,
    fontStyle: "italic",
  },
});
