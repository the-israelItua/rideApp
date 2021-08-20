import React from 'react';
import {StyleSheet, View, Image, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Marker} from 'react-native-maps';
import carsData from '../assets/data/cars';
import {API_KEY} from '@env';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const Map = () => {
  const getImage = type => {
    if (type === 'UberX') return require('../assets/images/top-UberX.png');
    if (type === 'Comfort') return require('../assets/images/top-Comfort.png');
    return require('../assets/images/top-UberXL.png');
  };

  const origin = {latitude: 28.440627, longitude: -16.263045};
  const destination = {latitude: 28.460627, longitude: -16.263045};
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={API_KEY}
          strokeWidth={5}
          strokeColor="red"
        />
        <Marker coordinate={origin} title="Pickup" />
        <Marker coordinate={destination} title="Destination" />

        {carsData.map(item => (
          <Marker
            key={item.id}
            coordinate={{latitude: item.latitude, longitude: item.longitude}}>
            <Image
              source={getImage(item.type)}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'cover',
                transform: [
                  {
                    rotate: `${item.heading}deg`,
                  },
                ],
              }}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default Map;
