import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import routes from '../constants/routes';
import {userState} from '../state';
import {useAtom} from 'jotai';

const Account_Tab = () => {
  const navigation = useNavigation();
  const [user] = useAtom(userState);

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          padding: 15,
          color: 'black',
        }}>
        Tài khoản
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#399839',
          marginHorizontal: 15,
          padding: 15,
        }}>
        <Image
          source={require('../assets/img_avatar.png')}
          resizeMode="center"
          style={styles.imageAvt}></Image>
        <View style={styles.account}>
          <Text style={styles.accountName}>{user.userName}</Text>
          <Text style={styles.levelMember}>Silver member</Text>
        </View>
      </View>

      <View
        style={{
          padding: 15,
        }}>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => navigation.navigate(routes.ACCOUNT_SETTINGS)}>
          <Icon name="account" size={25} style={styles.iconItem}></Icon>
          <View style={styles.contentItem}>
            <Text style={styles.titleItem}>Tài khoản của tôi</Text>
            <Text>Thay đổi thông tin tài khoản của bạn</Text>
          </View>
          <ArrowIcon
            name="chevron-right"
            size={25}
            style={styles.iconArrowItem}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => navigation.navigate(routes.DASHBOARD)}>
          <Icon name="logout" size={25} style={styles.iconItem}></Icon>
          <View style={styles.contentItem}>
            <Text style={styles.titleItem}>Đăng xuất</Text>
            <Text>Đăng xuất tài khoản khỏi thiết bị</Text>
          </View>
          <ArrowIcon
            name="chevron-right"
            size={25}
            style={styles.iconArrowItem}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          paddingHorizontal: 15,
        }}>
        <TouchableOpacity style={styles.containerItem}>
          <Icon name="bell-outline" size={25} style={styles.iconItem}></Icon>
          <View style={styles.contentItem}>
            <Text style={styles.titleItem}>Trợ giúp & Hỗ trợ</Text>
          </View>
          <ArrowIcon
            name="chevron-right"
            size={25}
            style={styles.iconArrowItem}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.containerItem}>
          <Icon name="heart-outline" size={25} style={styles.iconItem}></Icon>
          <View style={styles.contentItem}>
            <Text style={styles.titleItem}>Thông tin về ứng dụng</Text>
          </View>
          <ArrowIcon
            name="chevron-right"
            size={25}
            style={styles.iconArrowItem}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Account_Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageAvt: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: 'yellow',
    borderWidth: 2,
    borderColor: 'white',
  },
  account: {
    paddingHorizontal: 20,
  },
  accountName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  levelMember: {
    color: '#c4c4c4',
    fontSize: 13,
  },
  iconItem: {
    backgroundColor: '#39983960',
    padding: 10,
    borderRadius: 60,
    marginHorizontal: 10,
    flex: 1,
    color: '#399839',
  },
  iconArrowItem: {
    // right: 0,
    flex: 1,
  },
  titleItem: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  containerItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  contentItem: {flex: 10},
});
