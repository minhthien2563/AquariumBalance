import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';

import routes from '../constants/routes';

import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function Dashboard() {
  const navigation = useNavigation();
  const _handlePressSignUp = () => {
    navigation.navigate(routes.SIGN_UP);
  };
  const _handlePressSignIn = () => {
    navigation.navigate(routes.SIGN_IN);
  };

  return (
    <View style={styles.containerBound}>
      <View style={styles.container}>
        <View style={styles.topText}>
          <Text style={styles.logo}>
            Aquarium <Text style={{color: '#399839'}}>Balance</Text>
          </Text>
          <Text>Giữ cho hồ của bạn luôn sạch sẽ</Text>
          <Text style={styles.desc}>
            Hãy đăng nhập hoặc đăng ký để tiếp tục sử dụng ứng dụng
          </Text>
        </View>

        <Image
          style={styles.image}
          source={require('../assets/dashboard.png')}
        />
      </View>
      <CustomButton
        style={styles.button}
        text="Đăng nhập"
        onPress={_handlePressSignIn}
      />
      <CustomButton
        style={styles.button}
        text="Đăng ký"
        type="SECONDARY"
        onPress={_handlePressSignUp}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerBound: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  topText: {
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 5,
  },
  desc: {
    textAlign: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 250,
    height: 250,
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
});
