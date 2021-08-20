import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchPlace from '../screens/SearchPlaces';
import PickRide from '../screens/PickRide';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SearchPlace" component={SearchPlace} />
      <Stack.Screen name="PickRide" component={PickRide} />
    </Stack.Navigator>
  );
};

export default HomeStack;
