import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import routes from '../constants/routes';

const FinishAppointment = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.containerInbound}>
        <View style={styles.iconBackground}>
          <Icon name="check" size={70} style={styles.checkIcon}></Icon>
        </View>
        <Text style={styles.headerText}>Cảm ơn!</Text>
        <Text style={styles.contentText}>
          Lịch hẹn trước của bạn đã đặt thành công hãy nhớ chú ý điện thoại từ
          nhân viên
        </Text>
        <CustomButton
          text="Hoàn tất"
          type="SECONDARY"
          onPress={() => navigation.navigate(routes.HOME_TAB)}
        />
      </View>
    </SafeAreaView>
  );
};

export default FinishAppointment;

const styles = StyleSheet.create({
  containerInbound: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#399839',
  },
  iconBackground: {
    backgroundColor: '#328532',
    padding: 30,
    borderRadius: 150,
  },
  checkIcon: {
    backgroundColor: '#2b702b',
    color: 'white',
    borderRadius: 200,
    padding: 50,
  },
  headerText: {
    paddingTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  contentText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
  },
});
