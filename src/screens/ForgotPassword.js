import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useState} from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import routes from '../constants/routes';

const ForgotPassword = ({route}) => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBound}>
        <Text style={styles.headerTitle}>Bạn đã quên mật khẩu?</Text>
        <Text style={styles.content}>
          Hãy nhập email tài khoản của bạn để tiến hành khôi phục mật khẩu
        </Text>
        <CustomInput
          label="Email"
          placeHolder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <CustomButton
          onPress={() => navigation.navigate(routes.DASHBOARD)}
          text="Yêu cầu mật khẩu"
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBound: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    textAlign: 'center',
  },
});
