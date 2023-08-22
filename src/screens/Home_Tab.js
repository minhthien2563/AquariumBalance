import {FlatList, Image, StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useMemo, useState} from 'react';
import FlatListItem from '../components/FlatListItem';
import {ImageSlider} from 'react-native-image-slider-banner';
import filter from 'lodash.filter';
import {useNavigation} from '@react-navigation/native';

export const DATA = [
  {
    id: 'abc123',
    name: 'Nguyễn Văn A',
    salary: '120.000',
    desc: 'Nguyễn Văn A là một người yêu thú cưng và có niềm đam mê mãnh liệt với thủy sinh. Anh ấy tạo ra những hồ cá cảnh đẹp mắt với sự sáng tạo và tâm huyết. Anh ấy luôn chú trọng tạo ra môi trường sống cân bằng và tự nhiên cho các loài cá và cây cỏ trong hồ.',
    rating: 9.2,
  },
  {
    id: 'def456',
    name: 'Trần Thị B',
    salary: '150.000',
    desc: 'Trần Thị B là một người chơi thủy sinh có kinh nghiệm, cô ấy tạo ra những hồ cá mini với các loài cá nhỏ và cây cỏ đơn giản nhưng không kém phần cuốn hút. Cô ấy luôn chú trọng tạo ra môi trường hồ cá luôn trong tình trạng tốt nhất để cá cảnh có thể phát triển và phát triển mạnh mẽ.',
    rating: 8.5,
  },
  {
    id: 'ghi789',
    name: 'Lê Quang C',
    salary: '130.000',
    desc: 'Lê Quang C là một người đam mê thủy sinh từ nhỏ. Anh ấy đã sáng tạo ra những hồ cá cảnh độc đáo với thiết kế và trang trí đẹp mắt. Anh ấy luôn chú trọng đến việc bảo vệ môi trường hồ cá và tạo điều kiện tốt nhất cho các loài cá và cây cỏ.',
    rating: 9.8,
  },
  {
    id: 'jkl012',
    name: 'Phạm Thị D',
    salary: '140.000',
    desc: 'Phạm Thị D là một người đam mê thủy sinh từ nhỏ. Cô ấy đã xây dựng những hồ cá cảnh đẹp mắt với sự sáng tạo và tâm huyết. Cô ấy luôn chú trọng tạo ra môi trường sống tự nhiên và thoải mái nhất cho các loài cá và cây cỏ.',
    rating: 8.9,
  },
  {
    id: 'mno345',
    name: 'Hoàng Văn E',
    salary: '110.000',
    desc: 'Hoàng Văn E là một người yêu thú cưng và có niềm đam mê mãnh liệt với thủy sinh. Anh ấy đã tạo ra những hồ cá cảnh đẹp mắt với sự sáng tạo và tâm huyết. Anh ấy luôn chú trọng tạo ra môi trường sống cân bằng và tự nhiên cho các loài cá và cây cỏ trong hồ.',
    rating: 9.5,
  },
  {
    id: 'pqr678',
    name: 'Ngô Thị F',
    salary: '160.000',
    desc: 'Ngô Thị F là một người chơi thủy sinh có kinh nghiệm, cô ấy tạo ra những hồ cá mini với các loài cá nhỏ và cây cỏ đơn giản nhưng không kém phần cuốn hút. Cô ấy luôn chú trọng tạo ra môi trường hồ cá luôn trong tình trạng tốt nhất để cá cảnh có thể phát triển và phát triển mạnh mẽ.',
    rating: 8.7,
  },
  {
    id: 'stu901',
    name: 'Vũ Văn G',
    salary: '115.000',
    desc: 'Vũ Văn G là một người đam mê thủy sinh từ nhỏ. Anh ấy đã sáng tạo ra những hồ cá cảnh độc đáo với thiết kế và trang trí đẹp mắt. Anh ấy luôn chú trọng đến việc bảo vệ môi trường hồ cá và tạo điều kiện tốt nhất cho các loài cá và cây cỏ.',
    rating: 9.3,
  },
  {
    id: 'vwx234',
    name: 'Phan Thị H',
    salary: '135.000',
    desc: 'Phan Thị H là một người đam mê thủy sinh từ nhỏ. Cô ấy đã xây dựng những hồ cá cảnh đẹp mắt với sự sáng tạo và tâm huyết. Cô ấy luôn chú trọng tạo ra môi trường sống tự nhiên và thoải mái nhất cho các loài cá và cây cỏ.',
    rating: 8.8,
  },
  {
    id: 'yza567',
    name: 'Trịnh Văn I',
    salary: '125.000',
    desc: 'Trịnh Văn I là một người yêu thú cưng và có niềm đam mê mãnh liệt với thủy sinh. Anh ấy đã tạo ra những hồ cá cảnh đẹp mắt với sự sáng tạo và tâm huyết. Anh ấy luôn chú trọng tạo ra môi trường sống cân bằng và tự nhiên cho các loài cá và cây cỏ trong hồ.',
    rating: 9.1,
  },
  {
    id: 'abc789',
    name: 'Hồ Thị J',
    salary: '115.000',
    desc: 'Hồ Thị J là một người chơi thủy sinh có kinh nghiệm, cô ấy tạo ra những hồ cá mini với các loài cá nhỏ và cây cỏ đơn giản nhưng không kém phần cuốn hút. Cô ấy luôn chú trọng tạo ra môi trường hồ cá luôn trong tình trạng tốt nhất để cá cảnh có thể phát triển và phát triển mạnh mẽ.',
    rating: 8.6,
  },
];

const Home_Tab = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [dataStaff, setDataStaff] = useState(DATA);

  const handleSearch = query => {
    setSearchQuery(query);
    const filteredData = filter(DATA, user => {
      return contains(user, query);
    });
    setDataStaff(filteredData);
  };

  const contains = ({name}, query) => {
    if (name.includes(query)) {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.headerTitle, {color: 'black', paddingBottom: 20}]}>
        Aquarium <Text style={{color: '#399839'}}>Balance</Text>
      </Text>

      <View
        style={{
          marginVertical: 10,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#399839',
        }}>
        <Text style={styles.label}>Tìm nhân viên</Text>
        <TextInput
          placeholder="Nhập tên"
          value={searchQuery}
          onChangeText={query => handleSearch(query)}
          style={[styles.input]}
          placeholderTextColor={'#399839'}
        />
      </View>

      <ImageSlider
        data={[
          {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaxWa8-peDRMlC5vPUnx1lGV7D809IMfpBQ',
          },
          {
            img: 'https://static.vecteezy.com/system/resources/thumbnails/004/580/579/small/home-cleaning-service-banner-editable-of-square-background-suitable-for-social-media-feed-card-greetings-print-and-web-internet-ads-vector.jpg',
          },
          {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-BnpyzW5IaRGhPmVVUrnK0tYUvMtMT-5Ag',
          },
        ]}
        // caroselImageStyle={{resizeMode: 'contain', marginBottom: 20}}
        autoPlay={true}
        timer={4000}
        preview={false}
        activeIndicatorStyle={{backgroundColor: '#399839'}}
        indicatorContainerStyle={{bottom: 0}}
        caroselImageStyle={{
          resizeMode: 'contain',
          padding: 0,
          height: '100%',
        }}
        caroselImageContainerStyle={{
          padding: 0,
          height: 130,
        }}
      />
      <Text style={styles.headerText}>Danh sách nhân viên</Text>
      <FlatList
        data={dataStaff}
        renderItem={({item}) => <FlatListItem item={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.container}
        initialNumToRender={4}
      />
    </View>
  );
};

export default Home_Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Handjet',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    padding: 5,
  },
  label: {
    padding: 0,
    paddingTop: 7,
    fontWeight: '300',
  },
  input: {
    padding: 0,
    paddingBottom: 7,
    fontWeight: 'bold',
  },
});
