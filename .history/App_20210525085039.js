import React from "react";
import { Pressable, StyleSheet, Text, View} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

// const Tab = createMaterialTopTabNavigator();


// const Tab = createBottomTabNavigator();

// const Tab = createMaterialBottomTabNavigator();

// const Stack = createStackNavigator();

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
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Screen_B'
        drawerPosition='left'
        edgeWidth={ 500 }
        overlayColor='darkgrey'
        drawerStyle
      >
        <Drawer.Screen
          name='Screen_A'
          component={ ScreenA }
          options={ { tabBarBadge: 3 } }
        />
        <Drawer.Screen
          name='Screen_B'
          component={ ScreenB }
          options={ { tabBarBadge: 1 } }
        />
      </Drawer.Navigator>
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
