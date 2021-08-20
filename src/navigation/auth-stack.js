import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Authentication/Welcome';
import EnterMobile from '../screens/Authentication/EnterMobile';
import Socials from '../screens/Authentication/Socials';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="EnterMobile" component={EnterMobile} />
      <Stack.Screen name="Socials" component={Socials} />
    </Stack.Navigator>
  );
};

export default AuthStack;
