import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routes from '../constants/routes';
import Home_Tab from '../screens/Home_Tab';
import Account_Tab from '../screens/Account_Tab';
import Appointments_Tab from '../screens/Appointments_Tab';

function SettingsScreen() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#399839',
        tabBarShowLabel: false,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === routes.HOME_TAB) {
            iconName = 'home';
          } else if (route.name === routes.APPOINTMENTS_TAB) {
            iconName = 'file-document';
          } else if (route.name === routes.DISCUSSION) {
            iconName = 'chat';
          } else if (route.name === routes.ACCOUNT_TAB) {
            iconName = 'account';
          }

          return <Icon name={iconName} color={color} size={27}></Icon>;
        },
      })}>
      <Tab.Screen name={routes.HOME_TAB} component={Home_Tab} />
      <Tab.Screen name={routes.APPOINTMENTS_TAB} component={Appointments_Tab} />
      <Tab.Screen name={routes.DISCUSSION} component={SettingsScreen} />
      <Tab.Screen name={routes.ACCOUNT_TAB} component={Account_Tab} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
