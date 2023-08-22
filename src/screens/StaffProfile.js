import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import Share from 'react-native-share';
import CustomShare from '../components/CustomShare';
import {useNavigation} from '@react-navigation/native';
import routes from '../constants/routes';

const StaffProfile = ({route}) => {
  const navigation = useNavigation();
  const {item} = route.params;

  const onShareProfile = async () => {
    const shareOptions = {
      message: `Bạn có thể đặt lịch nhân viên ${item.name} với điểm chất lượng ${item.rating}/10 vệ sinh và chăm sóc cho chiếc hồ của bạn tại ứng dụng Aquarium Balace`,
      //url: dùng base64 cú pháp (data:image/jpeg;base64./)
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };

  const onMakeAppointment = () => {
    navigation.navigate(routes.MAKE_APPOINTMENTS);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInbound}>
        <View style={styles.viewInfo}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={styles.imgAvt}
              source={require('../assets/img_avatar.png')}
              resizeMode="center"></Image>
            <CustomShare onPress={onShareProfile} />
          </View>

          <View style={styles.viewContent}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={{color: 'black'}}>
              Điểm chất lượng:{' '}
              <Text style={styles.boldText}>{item.rating}/10</Text>
            </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            padding: 10,
          }}>
          <Text style={styles.number}>
            {' '}
            <Text style={styles.boldText}>12+</Text>
            {'\n'}năm kinh nghiệm
          </Text>
          <Text style={styles.number}>
            {' '}
            <Text style={styles.boldText}>130+</Text>
            {'\n'}sự hài lòng
          </Text>
          <Text style={styles.number}>
            {' '}
            <Text style={styles.boldText}>200</Text>
            {'\n'}công việc đã hoàn thành
          </Text>
        </View>
        <View style={styles.containerOther}>
          <Text style={styles.description}>{item.desc}</Text>
          <Text style={styles.relatedInfo}>Thông tin liên quan</Text>
          <Text style={{color: 'black'}}>Mức thuê: {item.salary} VNĐ/giờ</Text>
          <Text style={{color: 'black'}}>
            Thời gian hoạt động: 7 giờ - 19 giờ
          </Text>
          <Text style={{color: 'black'}}>
            Công việc có thể làm: Chăm sóc, bảo trì định kỳ
          </Text>
        </View>
      </View>
      <CustomButton text="Đặt lịch" onPress={onMakeAppointment}></CustomButton>
    </SafeAreaView>
  );
};

export default StaffProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  containerInbound: {
    alignItems: 'center',
    flex: 1,
  },
  viewInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  imgAvt: {
    backgroundColor: 'blue',
    height: 110,
    width: 110,
    borderRadius: 60,
  },
  viewContent: {
    flex: 2,
    padding: 10,
  },
  name: {
    color: '#399839',
    fontWeight: 'bold',
    fontSize: 30,
  },
  boldText: {
    fontWeight: 'bold',
  },
  number: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
  },
  description: {
    textAlign: 'center',
    color: 'black',
  },
  containerOther: {
    flex: 1,
  },
  relatedInfo: {
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
});
