import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from 'react-navigation/native'
import { createStackNavigator } from 'react-navigation/stack'

let Stack = createStackNavigator()

  const App = () => {

    <NavigationContainer>
      

    </NavigationContainer>
    
  }
   
  export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  text: {
    margin: 10,
    color: "#000000",
    fontSize: 20,
    fontStyle: "italic",
    textAlign: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'aqua',
    width: 200,
    alignItems: 'center',
    borderRadius: 5,
  },
  modal_warning: {
    width: 300,
    height: 300,
    backgroundColor: '#999',
    borderRadius: 20,
    borderRadius: 20,
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_title: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 50,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  warning_pressable: {
    height: 50,
    backgroundColor: 'aqua',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  image: {
    width: 90,
    height: 90,
    margin: 10,
  }
});
