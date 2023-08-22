import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton = ({onPress, text, type = 'PRIMARY', style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`], style]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    alignItems: 'center',
    padding: 15,
  },

  container_PRIMARY: {
    backgroundColor: '#399839',
  },

  container_SECONDARY: {
    backgroundColor: 'white',
    borderColor: '#399839',
    borderWidth: 1,
  },

  container_WARNING: {
    backgroundColor: 'white',
    borderColor: '#db3437',
    borderWidth: 1,
  },

  text: {
    fontWeight: 'bold',
  },

  text_PRIMARY: {
    color: 'white',
  },

  text_SECONDARY: {
    color: '#399839',
  },

  text_WARNING: {
    color: '#db3437',
  },
});

export default CustomButton;
