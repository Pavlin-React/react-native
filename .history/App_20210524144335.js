import React from "react";
import { Pressable, StyleSheet, Text, View} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();

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
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={ ( { route } ) => {
          tabBarIcon: ( { focused, size, color } ) => {
            let iconName
            if ( route.name === 'Screen_A' ) {
              iconName = 'autoprefixer'
              size = 
            } else if ( route.name === 'Screen_B' ) {
              iconName = 'btc'
              size = 25
            }
            <FontAwesome5
              name={ iconName }
              size = { size }
            />
          }
        } }
      >
        <Tab.Screen
          name='Screen_A'
          component={ ScreenA }
        />
        <Tab.Screen
          name='Screen_B'
          component={ ScreenB }
        />
      </Tab.Navigator>
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
