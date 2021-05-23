
import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'

const MashButton = ( props ) => {
  return (
    <Pressable
          onPress={ props.onClickHandler }
          hitSlop={ { top: 10, bottom: 10, left: 10, right: 10 } }
          android_ripple={ { color: '#00f' } }
          style={ styles.button }
        >
          <Text style={ styles.text }>
            { props.title}
          </Text>
        </Pressable>
  );
}

let styles = StyleSheet.create({
  text: {
    margin: 10,
    color: "#000000",
    fontSize: 20,
    fontStyle: "italic",
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'aqua',
    width: 200,
    alignItems: 'center',
    borderRadius: 5,
  },
})
 
export default MashButton;

