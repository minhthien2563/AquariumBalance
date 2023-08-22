import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useAtom, useAtomValue} from 'jotai';
import {appointmentState} from '../state';
import routes from '../constants/routes';

const ConfirmAppointment = () => {
  const navigation = useNavigation();
  const [appointment] = useAtom(appointmentState);
  const onPressFinish = () => {
    navigation.navigate(routes.FINISH_APPOINTMENT);
    console.log(appointment);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInbound}>
        <View>
          <Text style={styles.headerText}>Xác nhận đặt lịch</Text>

          <View style={styles.content}>
            <Text>Tên của bạn:</Text>
            <Text style={styles.mainContent}>{appointment.name}</Text>
          </View>

          <View style={styles.content}>
            <Text>Số điện thoại:</Text>
            <Text style={styles.mainContent}>{appointment.number}</Text>
          </View>

          <View style={styles.content}>
            <Text>Địa chỉ:</Text>
            <Text style={styles.mainContent}>{appointment.address}</Text>
          </View>

          <View style={styles.content}>
            <Text>Thành phố:</Text>
            <Text style={styles.mainContent}>{appointment.city}</Text>
          </View>

          <View style={styles.content}>
            <Text>Thời gian:</Text>
            <Text style={styles.mainContent}>
              {appointment.timePick} - {appointment.datePick}
            </Text>
          </View>

          <View style={styles.content}>
            <Text>Dịch vụ:</Text>
            <TouchableOpacity>
              <Text style={styles.mainContent}>{appointment.service}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <Text>Ghi chú:</Text>
            <Text style={styles.mainContent}>{appointment.note}</Text>
          </View>
        </View>
        <CustomButton
          text="Xác nhận đặt lịch"
          onPress={() => {
            onPressFinish();
          }}
          style={{position: 'absolute', bottom: 1, width: '100%'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default ConfirmAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  containerInbound: {
    flex: 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  content: {
    paddingVertical: 10,
  },
  mainContent: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});
