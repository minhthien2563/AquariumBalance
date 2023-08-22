import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';

import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import routes from '../constants/routes';

const FlatListItem = ({item}) => {
  const navigation = useNavigation();
  const limitWords = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return (
        words.slice(0, limit).join(' ') + (words.length > limit ? ' ...' : '')
      );
    } else {
      return text;
    }
  };
  const onPress = () => {
    navigation.navigate(routes.PERSON, {item});
  };
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.containerItem} onPress={onPress}>
        <View style={styles.containerItemInbound}>
          <Image
            source={require('../assets/img_avatar.png')}
            resizeMode="center"
            style={styles.imageAvt}></Image>
          <View style={styles.descriptionText}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>{limitWords(item.desc, 15)}</Text>
          </View>
          <Icon
            name="chevron-right"
            color={'#399839'}
            size={20}
            style={styles.icon}></Icon>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FlatListItem;

const styles = StyleSheet.create({
  containerItem: {
    borderWidth: 0.8,
    borderColor: '#e8e8e8',
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 10,
  },
  containerItemInbound: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
  },
  imageAvt: {
    width: 50,
    height: 50,
    borderRadius: 60,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  descriptionText: {
    flex: 1,
    paddingHorizontal: 10,
  },
  icon: {
    padding: 10,
  },
});
