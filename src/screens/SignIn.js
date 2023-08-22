import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import routes from '../constants/routes';
import * as RNFS from 'react-native-fs';
import {AgendaList} from 'react-native-calendars';

const SignIn = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onForgetPassword = () => {
    navigation.navigate(routes.FORGOT_PASSWORD);
  };

  const onSignUp = () => {
    navigation.navigate(routes.SIGN_UP);
  };

  const onSignIn = async () => {
    const filePath = RNFS.DocumentDirectoryPath + '/users.json';

    let data = [];
    try {
      const jsonData = await RNFS.readFile(filePath, 'utf8');
      data = JSON.parse(jsonData);
    } catch (error) {
      console.error('Error reading JSON file:', error);
    }

    // Kiểm tra xem tên người dùng hoặc email đã tồn tại chưa
    userFind = [];
    userFound = false;
    data.find(user => {
      if (user.userName === userName) {
        userFind = user;
        userFound = true;
      }
    });

    if (userFound) {
      if (userFind.password === password) {
        navigation.navigate(routes.HOME);
      } else {
        Alert.alert('Error', 'Mật khẩu không chính xác!');
      }
    } else {
      Alert.alert('Error', 'Không tìm thấy tài khoản này!');
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBound}>
        <View style={styles.headerView}>
          <Text style={styles.headerTitle}>Đăng nhập</Text>
          <Text>Đăng nhập tài khoản để tiếp tục</Text>
        </View>

        <CustomInput
          label="Tên đăng nhập"
          value={userName}
          onChangeText={setUserName}
          placeHolder="Tên đăng nhập"
        />

        <CustomInput
          label="Mật khẩu"
          value={password}
          onChangeText={setPassword}
          placeHolder="Mật khẩu"
          secureTextEntry
          iconName={'eye'}
        />

        <TouchableOpacity onPress={onForgetPassword}>
          <Text>Quên mật khẩu</Text>
        </TouchableOpacity>
        <CustomButton
          style={{marginTop: 10}}
          onPress={onSignIn}
          text="Đăng nhập"
        />
        <TouchableOpacity style={styles.signInText} onPress={onSignUp}>
          <Text>
            Bạn chưa có tài khoản?{' '}
            <Text style={styles.signUpText}>Đăng ký</Text>
          </Text>
        </TouchableOpacity>

        <Text style={styles.errorText} onChangeText={onSignIn}>
          {error}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBound: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  headerView: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  errorText: {
    color: 'red',
  },
  signInText: {
    alignItems: 'center',
    padding: 5,
  },
  signUpText: {
    color: '#399839',
    fontWeight: 'bold',
  },
});

export default SignIn;
