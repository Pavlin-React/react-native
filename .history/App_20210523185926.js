import React from "react";
import { StyleSheet, Text, View} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function ScreenA() {
  return (
    <View style={ styles.body }>
      <Text style={ styles.text }>
        Screen A
      </Text>
  </View>
  )
}

function ScreenB() {
  return (
    <View style={ styles.body }>
      <Text style={ styles.text }>
        Screen B
      </Text>
  </View>
  )}


function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Screen_A'
          component={ ScreenA }
        />
        <Stack.Screen
          name='Screen_B'
          component={ ScreenB }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;

let styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,
    }
})
