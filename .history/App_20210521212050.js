import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

  const App = () => {
    return (
      <View style={ styles.body }>
        <Text style={ styles.text }>Enter your name: </Text>
      </View>
    );
  }
   
  export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  text: {
    margin: 10,
    color: "#000000",
    fontSize: 25,
    fontStyle: "italic",
  },
});
