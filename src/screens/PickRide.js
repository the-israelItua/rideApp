import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Map from '../components/Map';
import RidesAvailable from '../components/RidesAvailable';

const PickRide = () => {
  const route = useRoute();
  console.log(route.props);
  return (
    <View>
      <View style={{height: '50%'}}>
        <Map />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{height: '50%'}}>
        <RidesAvailable />
      </ScrollView>
    </View>
  );
};

export default PickRide;
