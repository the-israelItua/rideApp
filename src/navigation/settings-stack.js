import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsScreen from '../screens/Settings';

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
