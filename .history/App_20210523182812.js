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


  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Screen_A'
            component={ ScreenA }
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  let styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {}
  })
   
  export default App;