import { Stylesheet } from 'react-native'

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
 
export default MashButton;

let styles = StyleSheet.create({

})