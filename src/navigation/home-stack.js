import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchPlace from '../screens/Home/SearchPlaces';
import PickRide from '../screens/Home/PickRide';
import Hourly from '../screens/Home/Hourly';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SearchPlace" component={SearchPlace} />
      <Stack.Screen name="PickRide" component={PickRide} />
      <Stack.Screen name="Hourly" component={Hourly} />
    </Stack.Navigator>
  );
};

export default HomeStack;
