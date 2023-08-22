import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomInput from '../components/CustomInput';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import CustomButton from '../components/CustomButton';

const AccountSetting = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Thay đổi thông tin</Text>
      <CustomInput label="Họ và Tên" placeHolder="Minh Thiện" />
      <CustomInput label="Email" placeHolder="test@gmail.com" />

      <View style={{paddingVertical: 40}}>
        <Text style={styles.headerText}>Thay đổi mật khẩu</Text>
        <CustomInput label="Mật khẩu" placeHolder="Nhập mật khẩu mới" />
        <CustomInput
          label="Nhập lại mật khẩu"
          placeHolder="Nhập lại mật khẩu mới"
        />
        <Text>
          * Việc thay đổi mật khẩu sẽ đăng xuất tài khoản khỏi tất cả các thiết
          bị đã từng đăng nhập
        </Text>
      </View>

      <CustomButton text="CẬP NHẬT" />
    </SafeAreaView>
  );
};

export default AccountSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
