import React, { useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

  const App = () => {

    let [name, SetName] = useState( '' )
    let [submit, SetSubmit] = useState( false ) 
    let onClickHandler = () => {
      if ( name.length > 3 ) {
        SetSubmit( !submit )
      } else {
        Alert.alert('')
      }
    }

    return (
      <View style={ styles.body }>
        <Text style={ styles.text }>Enter your name: </Text>
        <TextInput
          
          style={ styles.input }
          placeholder='e.g. John'
          onChangeText={ ( value ) => SetName( value ) }
        />
        {/* <Button
          onPress={ onClickHandler }
          title={ submit ? 'Clear' : 'Submit' }
          color= '#00f'
        /> */}
        <TouchableHighlight
        activeOpacity={ 0.2 }
          onPress={ onClickHandler }
          style={ styles.button }
          underlayColor= 'green'
        >
          <Text style={ styles.text }>{ submit ? 'clear' : 'submit' }</Text>
        </TouchableHighlight>
        { submit && <Text style={ styles.text }>Your name is { name }</Text> }
        
      </View>
    );
  }
   
  export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    marginTop: 40,
  },
  text: {
    margin: 10,
    color: "#000000",
    fontSize: 20,
    fontStyle: "italic",
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
  }
});
