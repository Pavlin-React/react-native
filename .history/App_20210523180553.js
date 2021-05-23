import React from "react";
import { StyleSheet, Text, View} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();


  const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen>
            name='Screen_A'
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
   
  export default App;