import React from "react";
import { Pressable, StyleSheet, Text, View} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function ScreenA( { navigation } ) {

  let onPressHandler = () => {
    navigation.navigate( 'Screen_B' )
  }

  return (
    <View style={ styles.body }>
      <Text style={ styles.text }>
        Screen A
      </Text>
      <Pressable
        onPress={ onPressHandler }
        style={ ( { pressed } ) => ( { backgroundColor: pressed ? '#ddd' : '#0f0' } ) }
      >
        <Text style={ styles.text }>
          Go to screen B
        </Text>
      </Pressable>
  </View>
  )
}

function ScreenB( { navigation } ) {

  let onPressHandler = () => {
    navigation.navigate( 'Screen_A' )
  }

  return (
    <View style={ styles.body }>
      <Text style={ styles.text }>
        Screen B
      </Text>
      <Pressable
        onPress={ onPressHandler }
        style={ ( { pressed } ) => ( { backgroundColor: pressed ? '#ddd' : '#0f0' } ) }
      >
        <Text style={ styles.text }>
          Go to screen A
        </Text>
      </Pressable>
  </View>
  )}


function App() {

  return (
    <NavigationContaine
    >
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
    </NavigationContaine>
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
