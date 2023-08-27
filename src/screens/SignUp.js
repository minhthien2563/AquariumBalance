import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import routes from '../constants/routes';
import * as RNFS from 'react-native-fs';

const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');

  const onSignIn = () => {
    navigation.navigate(routes.SIGN_IN);
  };

  const onSignUp = async () => {
    if (!email.includes('@')) return setError('Email không hợp lệ.');

    const regex_username =
      /^(?=[a-zA-Z0-9._]{6,32}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    if (!regex_username.test(userName))
      return setError('Tên đăng nhập không hợp lệ');

    const regex_password =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
    if (!regex_password.test(password))
      return setError(
        'Mật khẩu phải có ít nhất 6 kí tự, 1 chữ hoa, 1 kí tự đặc biệt và 1 chữ số.',
      );

    if (!repeatPassword.match(password))
      return setError('Mật khẩu nhập lại không trùng khớp với mật khẩu.');

    setError('');

    const filePath = RNFS.DocumentDirectoryPath + '/users.json';

    let data = [];
    try {
      const jsonData = await RNFS.readFile(filePath, 'utf8');
      data = JSON.parse(jsonData);
    } catch (error) {
      console.error('Error reading JSON file:', error);
    }

    // Kiểm tra xem tên người dùng hoặc email đã tồn tại chưa
    const existingUser = data.find(
      user => user.userName === userName || user.email === email,
    );

    if (existingUser) {
      Alert.alert('Error', 'Tên tài khoản hoặc email này đã tồn tại!');
      return;
    }

    data.push({userName, password, email});
    console.log(data);

    // Ghi dữ liệu mới vào tệp JSON
    try {
      await RNFS.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
      Alert.alert('Success', 'Đăng ký tài khoản thành công!');
      navigation.navigate(routes.SIGN_IN);
    } catch (error) {
      console.error('Error writing JSON file:', error);
    }
  };

  const [showPassword, setShowPassword] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState('eye');
  const handleIconPress = iconName => {
    if (passwordIcon === 'eye') {
      setPasswordIcon('eye-slash');
      setShowPassword(false);
    } else {
      setPasswordIcon('eye');
      setShowPassword(true);
    }
  };

  const [showRepeatPassword, setShowRepeatPassword] = useState(true);
  const [repeatPasswordIcon, setRepeatPasswordIcon] = useState('eye');
  const handleRepeatIconPress = iconName => {
    if (repeatPasswordIcon === 'eye') {
      setRepeatPasswordIcon('eye-slash');
      setShowRepeatPassword(false);
    } else {
      setRepeatPasswordIcon('eye');
      setShowRepeatPassword(true);
    }
  };

  //Email check có phải gmail hay ko, nếu ko thì show error đỏ ra màn hình
  // tên đăng nhập ít nhất 6 ký tự và ko có ký tự đặc biệt
  //Mật khẩu phải có ít nhất 6 ký tự và 1 ký tự in hoa và 1 ký tự đặc biệt
  // Nhập lại mật khẩu phải giống mật khẩu
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBound}>
        <View style={styles.headerView}>
          <Text style={styles.headerTitle}>Đăng ký</Text>
          <Text>Đăng ký tài khoản để tiếp tục</Text>
        </View>

        <CustomInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeHolder="Email"
        />

        <CustomInput
          label="Tên đăng nhập"
          value={userName}
          onChangeText={setUserName}
          placeHolder="Tên tài khoản"
        />

        <CustomInput
          label="Mật khẩu"
          value={password}
          onChangeText={setPassword}
          placeHolder="Mật khẩu"
          secureTextEntry={showPassword}
          iconName={passwordIcon}
          onPressIcon={handleIconPress}
        />

        <CustomInput
          label="Nhập lại mật khẩu"
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          placeHolder="Nhập lại mật khẩu"
          secureTextEntry={showRepeatPassword}
          iconName={repeatPasswordIcon}
          onPressIcon={handleRepeatIconPress}
        />
        <Text style={styles.errorText} onChangeText={onSignUp}>
          {error}
        </Text>
        <CustomButton
          style={{marginTop: 10}}
          onPress={onSignUp}
          text="Đăng ký"
        />
        <TouchableOpacity style={styles.signUpText} onPress={onSignIn}>
          <Text>
            Bạn đã có tài khoản?{' '}
            <Text style={styles.signInText}>Đăng nhập</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

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
  signUpText: {
    alignItems: 'center',
    padding: 5,
  },
  signInText: {
    color: '#399839',
    fontWeight: 'bold',
  },
});
