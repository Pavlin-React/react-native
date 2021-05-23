
import React from 'react'
import { Stylesheet, Pressable } from 'react-native'

const MashButton = () => {
  return (
    <Pressable
          onPress={ onClickHandler }
          hitSlop={ { top: 10, bottom: 10, left: 10, right: 10 } }
          android_ripple={ { color: '#00f' } }
          style={ styles.button }
        >
          <Text style={ styles.text }>
            { submit ? 'Clear' : 'Submit' }
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
})
 
export default MashButton;

