import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton';

const listTab = [
  {
    status: 'Tất cả',
  },
  {
    status: 'Chưa hoàn tất',
  },
  {
    status: 'Hoàn tất',
  },
];

export const Data = [
  {
    service: 'Thay nước',
    datePick: 'Thứ tư, ngày 29 tháng 8 năm 2023',
    timePick: '20:00',
    id: 12345,
    status: 'Chưa hoàn tất',
  },
  {
    service: 'Hút cặn',
    datePick: 'Thứ tư, ngày 29 tháng 8 năm 2023',
    timePick: '20:00',
    id: 67890,
    status: 'Hoàn tất',
  },
  {
    service: 'Bổ sung vi sinh',
    datePick: 'Thứ tư, ngày 29 tháng 8 năm 2023',
    timePick: '20:00',
    id: 54321,
    status: 'Chưa hoàn tất',
  },
  {
    service: 'Vệ sinh hệ thống lọc',
    datePick: 'Thứ tư, ngày 29 tháng 8 năm 2023',
    timePick: '20:00',
    id: 98765,
    status: 'Hoàn tất',
  },
  {
    service: 'Tỉa cây',
    datePick: 'Thứ tư, ngày 29 tháng 8 năm 2023',
    timePick: '20:00',
    id: 23456,
    status: 'Chưa hoàn tất',
  },
  {
    service: 'Đo chỉ số và cân bằng nước',
    datePick: 'Thứ tư, ngày 29 tháng 8 năm 2023',
    timePick: '20:00',
    id: 78901,
    status: 'Hoàn tất',
  },
  {
    service: 'Thay nước',
    datePick: 'Thứ tư, ngày 29 tháng 8 năm 2023',
    timePick: '20:00',
    id: 34567,
    status: 'Chưa hoàn tất',
  },
  {
    service: 'Hút cặn',
    datePick: 'Thứ tư, ngày 29 tháng 8 năm 2023',
    timePick: '20:00',
    id: 89012,
    status: 'Hoàn tất',
  },
  {
    service: 'Bổ sung vi sinh',
    datePick: 'Thứ tư, ngày 29 tháng 8 năm 2023',
    timePick: '20:00',
    id: 45678,
    status: 'Chưa hoàn tất',
  },
  {
    service: 'Vệ sinh hệ thống lọc',
    datePick: 'Thứ tư, ngày 29 tháng 8 năm 2023',
    timePick: '20:00',
    id: 90123,
    status: 'Hoàn tất',
  },
];

const Appointments_Tab = () => {
  const [status, setStatus] = useState('Tất cả');
  const [dataList, setDataList] = useState(Data);

  const dataFilter = status => {
    if (status !== 'Tất cả') {
      setDataList([...Data.filter(e => e.status === status)]);
    } else {
      setDataList(Data);
    }
    setStatus(status);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {listTab.map((e, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.btnTab, status === e.status && styles.tabActive]}
            onPress={() => dataFilter(e.status)}>
            <Text
              style={[
                styles.btnText,
                status === e.status && styles.btnTextActive,
              ]}>
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={dataList}
        renderItem={({item}) => (
          <View style={styles.itemTab}>
            <Text style={styles.itemHeader}>{item.service}</Text>

            <View style={{flexDirection: 'row', paddingBottom: 10}}>
              <View style={{flex: 2}}>
                <Text>Ngày hẹn:</Text>
                <Text style={styles.itemTextBold}>{item.datePick}</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', paddingBottom: 20}}>
              <View style={{flex: 1}}>
                <Text>Thời gian:</Text>
                <Text style={styles.itemTextBold}>{item.timePick}</Text>
              </View>

              <View style={{flex: 1}}>
                <Text>ID:</Text>
                <Text style={styles.itemTextBold}>#{item.id}</Text>
              </View>

              <View style={{flex: 1}}>
                <Text>Tình trạng:</Text>
                <Text style={styles.itemTextBold}>{item.status}</Text>
              </View>
            </View>

            {item.status === 'Chưa hoàn tất' ? (
              <CustomButton
                text={'HỦY'}
                type={'WARNING'}
                style={{width: '50%'}}
              />
            ) : (
              <CustomButton text={'HOÀN TẤT'} style={{width: '50%'}} />
            )}
          </View>
        )}
        keyExtractor={index => index.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Appointments_Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listTab: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  btnTab: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: '#e8e8e8',
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'center',
  },
  btnText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
  },
  btnTextActive: {
    color: '#399839',
  },
  tabActive: {
    borderColor: '#399839',
  },
  itemTab: {
    margin: 20,
    padding: 20,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#e8e8e8',
  },
  itemHeader: {
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 10,
  },
  itemTextBold: {
    color: 'black',
  },
});
