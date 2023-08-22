import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import React from 'react';

const SignUpAuth = () => {
  const onResend = () => {
    console.warn('Resned');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBound}>
        <Text style={styles.headerTitle}>Đã gửi Email xác thực!</Text>
        <Text style={styles.content}>
          Để chắc chắn rằng email này do bạn sở hữu để đảm bảo việc bảo mật.
          {'\n'}Chúng tôi đã gửi một email đến:
        </Text>
        <Text style={[styles.content, {fontWeight: 'bold'}]}>
          abc@gmail.com
        </Text>
        <Text style={styles.content}>
          Hãy kiểm tra trong thư mục rác hoặc spam.
        </Text>

        <Text>
          Bạn chưa nhận được thư?{' '}
          <Text style={styles.resendText} onPress={onResend}>
            Gửi lại
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerBound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#399839',
    fontWeight: 'bold',
    fontSize: 25,
  },
  content: {
    padding: 10,
    textAlign: 'center',
  },
  resendText: {
    color: '#399839',
    fontWeight: 'bold',
  },
});
