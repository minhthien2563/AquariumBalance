import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

const CustomBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={25} style={styles.text}></Icon>
    </TouchableOpacity>
  );
};

export default CustomBack;

const styles = StyleSheet.create({
  text: {
    color: '#399839',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
