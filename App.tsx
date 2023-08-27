/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import routes from './src/constants/routes.js';

import Dashboard from './src/screens/Dashboard.js';
import SignUp from './src/screens/SignUp.js';
import SignIn from './src/screens/SignIn.js';
import CustomBack from './src/components/CustomBack.js';
import SignUpAuth from './src/screens/SignUpAuth.js';
import ForgotPassword from './src/screens/ForgotPassword.js';
import BottomNavigator from './src/components/BottomNavigator.js';
import StaffProfile from './src/screens/StaffProfile.js';
import MakeAppointment from './src/screens/MakeAppointment.js';
import MakeAppointment2 from './src/screens/MakeAppointment2.js';
import ConfirmAppointment from './src/screens/ConfirmAppointment.js';
import FinishAppointment from './src/screens/FinishAppointment.js';
import Appointments_Tab from './src/screens/Appointments_Tab.js';
import AccountSetting from './src/screens/AccountSetting.js';
import Chat_Tab from './src/screens/Chat_Tab.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.DASHBOARD}>
        <Stack.Screen
          name={routes.DASHBOARD}
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.SIGN_IN}
          component={SignIn}
          options={() => ({
            title: '',
            headerShadowVisible: false,
            headerLeft: () => <CustomBack />,
          })}
        />
        <Stack.Screen
          name={routes.SIGN_UP}
          component={SignUp}
          options={() => ({
            title: '',
            headerShadowVisible: false,
            headerLeft: () => <CustomBack />,
          })}
        />
        <Stack.Screen
          name={routes.FORGOT_PASSWORD}
          component={ForgotPassword}
          options={() => ({
            title: '',
            headerShadowVisible: false,
            headerLeft: () => <CustomBack />,
          })}
        />
        <Stack.Screen
          name={routes.SIGN_UP_AUTH}
          component={SignUpAuth}
          options={() => ({
            title: '',
            headerShadowVisible: false,
            headerLeft: () => <CustomBack />,
          })}
        />
        <Stack.Screen
          name={routes.HOME}
          component={BottomNavigator}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name={routes.PERSON}
          component={StaffProfile}
          options={() => ({
            title: '',
            headerShadowVisible: false,
            headerLeft: () => <CustomBack />,
          })}
        />
        <Stack.Screen
          name={routes.MAKE_APPOINTMENTS}
          component={MakeAppointment}
          options={() => ({
            title: '',
            headerShadowVisible: false,
            headerTransparent: true,
            headerLeft: () => <CustomBack />,
            headerRight: () => (
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
                1/3
              </Text>
            ),
          })}
        />
        <Stack.Screen
          name={routes.INFO_APPOINTMENT}
          component={MakeAppointment2}
          options={() => ({
            title: '',
            headerShadowVisible: false,
            headerLeft: () => <CustomBack />,
            headerRight: () => (
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
                2/3
              </Text>
            ),
          })}
        />
        <Stack.Screen
          name={routes.CONFIRM_APPOINTMENT}
          component={ConfirmAppointment}
          options={() => ({
            title: '',
            headerShadowVisible: false,
            headerLeft: () => <CustomBack />,
            headerRight: () => (
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
                3/3
              </Text>
            ),
          })}
        />
        <Stack.Screen
          name={routes.FINISH_APPOINTMENT}
          component={FinishAppointment}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name={routes.APPOINTMENTS_TAB}
          component={Appointments_Tab}
          options={() => ({headerShown: false})}
        />
        <Stack.Screen
          name={routes.ACCOUNT_SETTINGS}
          component={AccountSetting}
          options={() => ({title: 'Cài đặt tài khoản'})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
