import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const CustomInput = ({
  label,
  placeHolder,
  value,
  onChangeText,
  onEndEditing,
  secureTextEntry,
  iconName,
  onPressIcon,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInbound}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          placeholder={placeHolder}
          value={value}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          style={[styles.input]}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={'#399839'}
        />
      </View>

      <>
        {iconName ? (
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              // backgroundColor: 'red',
              paddingHorizontal: 10,
            }}
            onPress={() => onPressIcon(iconName)}>
            <Icon name={iconName} size={15} />
          </TouchableOpacity>
        ) : null}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',

    borderColor: '#e8e8e8',
    borderWidth: 2,
    borderRadius: 10,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  containerInbound: {
    flex: 1,
  },
  label: {
    padding: 0,
    paddingTop: 7,
  },
  input: {
    padding: 0,
    paddingBottom: 7,
    fontWeight: 'bold',
  },
});

export default CustomInput;
