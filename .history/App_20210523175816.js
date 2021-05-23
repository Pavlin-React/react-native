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
  ImageBackground,
} from "react-native";
import MashButton from "./CustomButton";

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
      <ImageBackground
      style={ styles.body }
      source={ require( './assets/black.jpg' ) }
      resizeMode='stretch'
      >
        <Modal
          visible={ showWarning }
          onRequestClose={ () => {
            SetShowWarning( false )
          } }
          animationType= 'fade'
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
        <MashButton onClickHandler={ onClickHandler } title={ submit ? 'Clear' : 'Submit' }/>
        {
          submit ?
        
            <View style={ styles.body }>
              <Text style={ styles.text }>
                Your sre sign in as { name }
              </Text>
              <Image
                style={ styles.image }
                source={ require( './assets/check.png' ) }
                resizeMode="stretch"
              />
            </View>
            :
            <Image
              style={ styles.image }
              source={ require('./assets/help.png') }
              resizeMode='stretch'
            />
            
        }
        
      </ImageBackground>
    );
  }
   
  export default App;