/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import RootNavigator from './src/navigation/root';
import {withAuthenticator} from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import 'react-native-gesture-handler';

Amplify.configure(config);

navigator.geolocation = require('@react-native-community/geolocation');

const App: () => Node = () => {
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'RideApp wants to access your location',
          message:
            'RideApp needs access to your location ' + 'to book rides easily.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestLocationPermission();
    } else {
      Geolocation.requestAuthorization();
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </>
  );
};

export default App;
