import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomShare = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="share-alt" size={20} style={styles.icon}></Icon>
      <Text style={styles.text}>Chia sẻ</Text>
    </TouchableOpacity>
  );
};

export default CustomShare;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  icon: {
    color: 'black',
    paddingHorizontal: 5,
  },
  text: {
    color: 'black',
  },
});
