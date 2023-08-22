import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import React from 'react';

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

const TimeModal = ({visible, onTimePress}) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.bottomView}>
        <View style={styles.modalView}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => onTimePress(item)}>
                <Text style={styles.title}>{item}</Text>
              </TouchableOpacity>
            )}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default TimeModal;

const styles = StyleSheet.create({
  bottomView: {
    backgroundColor: '#00000070',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    padding: 50,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  timePick: {
    margin: 20,
    padding: 10,
  },
  header: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
  },
  title: {
    fontSize: 15,
  },
});
