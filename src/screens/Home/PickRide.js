import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import BottomDrawer from 'react-native-bottom-drawer-view';
import Map from '../../components/Map';
import RidesAvailable from '../../components/RidesAvailable';

const PickRide = () => {
  const route = useRoute();
  console.log(route.props);
  return (
    <View>
      <View style={{height: '50%'}}>
        <Map />
      </View>
      <BottomDrawer
        containerHeight={420}
        offset={10}
        downDisplay={340}
        roundedEdges={true}
        panResponder={false} // add panResponder to false
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{height: '50%'}}>
          <RidesAvailable />
        </ScrollView>
      </BottomDrawer>
    </View>
  );
};

export default PickRide;
