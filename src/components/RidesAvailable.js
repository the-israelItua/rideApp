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
              <Text style={styles.time}> 4:03pm dropoff</Text>
            </View>
          </View>
          <View>
            <Text style={styles.price}>
              <Icon name="pricetag" color="#42d742" size={16} /> {'  '}est. $
              {item.price}
            </Text>
          </View>
        </View>
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Confirm Ride</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
  },
  row: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
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
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'black',
    margin: 20,
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

export default RidesAvailable;
