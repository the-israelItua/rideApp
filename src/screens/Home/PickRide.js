import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Pressable,
  StyleSheet,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import BottomDrawer from 'react-native-bottom-drawer-view';
import Map from '../../components/Map';
import RidesAvailable from '../../components/RidesAvailable';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const PickRide = () => {
  const route = useRoute();
  const navigation = useNavigation();
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
            alignItems: 'center',
            padding: 10,
            flex: 1,
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

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'black',
    // margin: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    position: 'absolute',
    width: SCREEN_WIDTH - 40,
    top: '75%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PickRide;
