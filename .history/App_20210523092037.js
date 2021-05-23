import React, { useState } from "react";
import {
  Alert,
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

  const App = () => {

    let [name, SetName] = useState( '' )
    let [submit, SetSubmit] = useState( false )
    let [showWarning, SetShowWarning] = useState( false )
    let onClickHandler = () => {
      if ( name.length > 3 ) {
        SetSubmit( !submit )
      } else {
        SetShowWarning( true )
      }
    }

    return (
      <View style={ styles.body }>
        <Modal
          visible={ showWarning }
          onRequestClose={ () => {
            SetShowWarning( false )
          } }
          animationType= 'slide'
        >
          <View style={ styles.centered_view }>
            <View style={ styles.modal_warning }>
              <View style={ styles.warning_title }>
                <Text style={ styles.text }>Warning</Text>
              </View>
              <View style={ styles.warning_body }>
                <Text style={ styles.text }>The name must be longer than 3 chars</Text>
              </View>
              <Pressable
                style={ styles.warning_pressable }
                onPress={ () => SetShowWarning( false ) }
                
              >
                <Text style={ styles.text }>Ok</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
        <Pressable
          onPress={ onClickHandler }
          hitSlop={ {  } }
          style={ styles.button }
        >
          <Text style={ styles.text }>{ submit ? 'clear' : 'submit' }</Text>
        </Pressable>
        {submit 
        ?
        <View>
        <Text style={ styles.text }>Your name is { name }</Text>
        <Image
          style={ styles.image }
          source={ require( './assets/check.png' ) }
          resizeMode="stretch"
        />
        </View>
        :
        <Image
          style={ styles.image }
          source={ require( './assets/help.png' ) }
          resizeMode="stretch"
        />}
        
      </View>
    );
  }
   
  export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "coral",
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
    width: 100,
    height: 100,
    marginTop: 20,
  }
});
