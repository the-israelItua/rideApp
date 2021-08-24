import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import types from '../assets/data/types';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const RidesAvailable = () => {
  const navigation = useNavigation();
  const getImage = type => {
    if (type === 'UberX') return require('../assets/images/UberX.jpeg');
    if (type === 'Comfort') return require('../assets/images/Comfort.jpeg');
    return require('../assets/images/UberXL.jpeg');
  };

  return (
    <View style={styles.container}>
      {types.map(item => (
        <View style={styles.row} key={item.id}>
          <View style={styles.detailsContainer}>
            <Image source={getImage(item.type)} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>
                {item.type} <Icon name="person" /> 3
              </Text>
              <Text style={styles.time}> 40 kilometers included</Text>
            </View>
          </View>
          <View>
            <Text style={styles.price}>NGN {item.price}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
  },
  row: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  details: {
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  time: {
    color: '#5d5d5d',
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
  },
});

export default RidesAvailable;
