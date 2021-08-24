import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Pressable,
  StyleSheet,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import BottomDrawer from 'react-native-bottom-drawer-view';
import Map from '../../components/Map';
import RidesAvailable from '../../components/RidesAvailable';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const PickRide = () => {
  const route = useRoute();
  console.log(route.props);
  return (
    <View>
      <View style={{height: '100%'}}>
        <Map />
      </View>

      <BottomDrawer
        containerHeight={SCREEN_HEIGHT / 3}
        roundedEdges={true}
        panResponder={false}
        shadow={false}
        bottom={0}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
          }}>
          <View
            style={{
              width: 40,
              height: 5,
              backgroundColor: '#ddd',
              borderRadius: 4,
            }}
          />
          <Text style={{marginTop: 10, color: 'grey'}}>
            Choose a ride, or swipe up for more
          </Text>
          <RidesAvailable />
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Confirm Ride</Text>
          </Pressable>
        </ScrollView>
      </BottomDrawer>
    </View>
  );
};

export default PickRide;
