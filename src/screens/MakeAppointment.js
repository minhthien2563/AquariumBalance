import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Alert,
} from 'react-native';
import React, {useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import CalendarModal from '../components/CalendarModal';
import {useNavigation} from '@react-navigation/native';
import routes from '../constants/routes';
import {useAtom, useUpdateAtom} from 'jotai';
import {appointmentState} from '../state';
import BottomModal from '../components/BottomModal';

function getDayOfWeek(month, day) {
  const daysOfWeek = [
    'Chủ nhật',
    'Thứ hai',
    'Thứ ba',
    'Thứ tư',
    'Thứ năm',
    'Thứ sáu',
    'Thứ bảy',
  ];

  const date = new Date(new Date().getFullYear(), month - 1, day);
  const dayOfWeekIndex = date.getDay();

  return daysOfWeek[dayOfWeekIndex];
}

const MakeAppointment = () => {
  const DATA = [
    {
      title: 'Buổi sáng',
      data: ['9:00', '10:00', '11:00'],
    },
    {
      title: 'Buổi chiều',
      data: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    },
    {
      title: 'Buổi tối',
      data: ['18:00', '19:00', '20:00'],
    },
  ];

  const navigation = useNavigation();
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
  const year = today.getFullYear();
  const [showModalCalendar, setShowModalCalendar] = useState(false);
  const [showModalTime, setShowModalTime] = useState(false);
  const [datePick, setDatePick] = useState(
    `${getDayOfWeek(month, day)}, ngày ${day} tháng ${month} năm ${year}`,
  );
  const [timePick, setTimePick] = useState('Chưa chọn');

  const [width, setWidth] = useState(0);
  const [depth, setDepth] = useState(0);
  const [height, setHeight] = useState(0);
  const [note, setNote] = useState('');

  const [appointment, setAppointment] = useAtom(appointmentState);

  const onCloseModal = () => {
    setShowModalCalendar(false);
    setShowModalTime(false);
  };

  const onDayPressed = date => {
    setDatePick(
      `${getDayOfWeek(date.month, date.day)}, ngày ${date.day} tháng ${
        date.month
      } năm ${date.year}`,
    );
    onCloseModal();
  };

  const onTimePressed = time => {
    console.log(time);
    setTimePick(time);
    onCloseModal();
  };

  const onPressNext = () => {
    if (width === 0 || depth === 0 || height === 0)
      return Alert.alert('Error', 'Bạn chưa nhập đầy đủ kích thước hồ!');

    if (datePick.length < 1) return Alert.alert('Error', 'Bạn chưa chọn ngày!');

    if (timePick.length < 1)
      return Alert.alert('Error', 'Bạn chưa chọn thời gian!');

    setAppointment({
      width,
      depth,
      height,
      datePick,
      timePick,
      note,
    });
    navigation.navigate(routes.INFO_APPOINTMENT);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View>
        <ImageBackground
          source={require('../assets/bg_app.png')}
          style={{width: '100%', height: 200}}></ImageBackground>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 30,
          borderRadius: 30,
          bottom: 30,
        }}>
        <View>
          <Text style={styles.title}>Đặt lịch trước</Text>
          <Text style={styles.title}>Kích thước hồ</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={styles.input}
              placeholder="Rộng (cm)"
              placeholderTextColor={'#399839'}
              inputMode="numeric"
              keyboardType="numeric"
              onChangeText={text => {
                const parsedNumber = parseFloat(text); // Chuyển đổi chuỗi thành số thập phân
                if (!isNaN(parsedNumber)) {
                  setWidth(parsedNumber);
                }
              }}></TextInput>
            <Text>x</Text>
            <TextInput
              style={styles.input}
              placeholder="Sâu (cm)"
              placeholderTextColor={'#399839'}
              inputMode="numeric"
              keyboardType="numeric"
              onChangeText={text => {
                const parsedNumber = parseFloat(text); // Chuyển đổi chuỗi thành số thập phân
                if (!isNaN(parsedNumber)) {
                  setDepth(parsedNumber);
                }
              }}></TextInput>
            <Text>x</Text>
            <TextInput
              style={styles.input}
              placeholder="Cao (cm)"
              placeholderTextColor={'#399839'}
              inputMode="numeric"
              keyboardType="numeric"
              onChangeText={text => {
                const parsedNumber = parseFloat(text); // Chuyển đổi chuỗi thành số thập phân
                if (!isNaN(parsedNumber)) {
                  setHeight(parsedNumber);
                }
              }}></TextInput>
          </View>

          <Text style={styles.title}>Chọn ngày</Text>
          <TouchableOpacity
            style={styles.dayPick}
            onPress={() => {
              setShowModalCalendar(true);
            }}>
            <Text style={styles.timeInput}>{datePick}</Text>
            <Icon name="date-range" size={25}></Icon>
          </TouchableOpacity>

          <Text style={styles.title}>Chọn thời gian</Text>
          <TouchableOpacity
            style={styles.dayPick}
            onPress={() => {
              setShowModalTime(true);
            }}>
            <Text style={styles.timeInput}>{timePick}</Text>
            <Icon name="alarm-add" size={25}></Icon>
          </TouchableOpacity>

          <Text style={styles.title}>Ghi chú (nếu có)</Text>
          <CustomInput
            label={'Ghi chú'}
            placeHolder={'Nhập ghi chú'}
            style={styles.note}
            value={note}
            onChangeText={text => {
              setNote(text);
            }}></CustomInput>
          <CustomButton
            text={'Đặt ngay'}
            style={{marginVertical: 20}}
            onPress={() => {
              onPressNext();
            }}></CustomButton>
        </View>
      </View>
      <CalendarModal
        visible={showModalCalendar}
        onClose={onCloseModal}
        onDayPress={onDayPressed}
      />

      <BottomModal
        Data={DATA}
        visible={showModalTime}
        onItemPress={onTimePressed}
      />
    </SafeAreaView>
  );
};

export default MakeAppointment;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#c4c4c4',
    borderRadius: 10,
    width: 80,
    marginHorizontal: 10,
    textAlign: 'center',
    color: '#399839',
    flex: 1,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    paddingVertical: 10,
  },
  dayPick: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#c4c4c4',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeInput: {
    color: '#399839',
    flex: 1,
    fontWeight: 'bold',
  },
});
