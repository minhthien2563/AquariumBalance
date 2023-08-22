import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import routes from '../constants/routes';
import {useAtom} from 'jotai';
import {appointmentState} from '../state';
import BottomModal from '../components/BottomModal';

const MakeAppointment2 = () => {
  const DATA = [
    {
      title: 'Cơ bản',
      data: ['Thay nước, hút cặn, vệ sinh cơ bản, bổ sung vi sinh'],
    },
    {
      title: 'Nâng cao',
      data: [
        'Thay nước, hút cặn, bổ sung vi sinh, vệ sinh hệ thống lọc, tỉa cây',
      ],
    },
    {
      title: 'Chi tiết',
      data: [
        'Thay nước, hút cặn, bổ sung vi sinh, vệ sinh hệ thống lọc, tỉa cây, đo chỉ số và cân bằng nước',
      ],
    },
  ];

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [service, setService] = useState('Chọn dịch vụ');

  const [showModalService, setShowModalService] = useState(false);
  const onCloseModal = () => {
    setShowModalService(false);
  };
  const onServicePress = service => {
    setShowModalService(false);
    console.log(service);
    setService(service);
  };

  const [appointment, setAppointment] = useAtom(appointmentState);
  const onPressConfirm = () => {
    if (name.length < 1)
      return Alert.alert('Error', 'Bạn chưa nhập tên của bạn!');

    if (number === 0)
      return Alert.alert('Error', 'Bạn chưa nhập số điện thoại!');

    if (city.length < 1)
      return Alert.alert('Error', 'Bạn chưa nhập thành phố!');

    if (address.length < 1)
      return Alert.alert('Error', 'Bạn chưa nhập địa chỉ!');

    setAppointment(prev => ({...prev, name, number, city, address, service}));
    navigation.navigate(routes.CONFIRM_APPOINTMENT);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInbound}>
        <Text style={styles.headerText}>Nhập thông tin chi tiết</Text>
        <View style={styles.containerInput}>
          <CustomInput
            label="Tên của bạn"
            placeHolder={'Nhập tên'}
            value={name}
            onChangeText={text => {
              setName(text);
            }}
          />
          <CustomInput
            label="Số điện thoại"
            placeHolder={'Nhập số điện thoại'}
            inputMode="numeric"
            keyboardType="numeric"
            onChangeText={text => {
              const parsedNumber = parseFloat(text); // Chuyển đổi chuỗi thành số thập phân
              if (!isNaN(parsedNumber)) {
                setNumber(parsedNumber);
              }
            }}
          />
          <CustomInput
            label="Thành phố"
            placeHolder={'Nhập thành phố'}
            value={city}
            onChangeText={text => {
              setCity(text);
            }}
          />
          <CustomInput
            label="Địa chỉ"
            placeHolder={'Nhập địa chỉ'}
            value={address}
            onChangeText={text => {
              setAddress(text);
            }}
          />
          <TouchableOpacity
            onPress={() => setShowModalService(true)}
            style={styles.service}>
            <View>
              <Text>Dịch vụ</Text>
              <Text style={{color: '#399839', fontWeight: 'bold'}}>
                {service}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <CustomButton
          text="Tiếp tục"
          onPress={() => {
            onPressConfirm();
          }}></CustomButton>

        <BottomModal
          Data={DATA}
          visible={showModalService}
          onItemPress={onServicePress}
        />
      </View>
    </SafeAreaView>
  );
};

export default MakeAppointment2;

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
  containerInput: {
    paddingVertical: 20,
  },
  service: {
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});
