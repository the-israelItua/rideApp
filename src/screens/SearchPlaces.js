import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, View, Text, TextInput, StyleSheet} from 'react-native';
import GoogleInput from '../components/GoogleInput';

const SearchPlace = () => {
  const navigation = useNavigation();
  const [pickup, setPickup] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    if (pickup && destination) {
      navigation.navigate('PickRide', {
        pickup,
        destination,
      });
    }
  }, [pickup, destination]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GoogleInput
          placeholder="From"
          setLocation={data => setPickup(data)}
          position={0}
          listView={{
            position: 'absolute',
            top: 95,
          }}
        />
        <GoogleInput
          placeholder="Where To?"
          setLocation={data => setDestination(data)}
          position={45}
          listView={{
            position: 'absolute',
            top: 50,
          }}
        />

        <View style={styles.circle} />

        <View style={styles.line} />

        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    height: '100%',
  },
  textInput: {
    backgroundColor: '#eee',
    marginVertical: 5,
    padding: 10,
  },
  circle: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 20,
    left: 15,
  },
  line: {
    width: 1,
    height: 33,
    backgroundColor: 'black',
    position: 'absolute',
    top: 30,
    left: 16,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 70,
    left: 15,
  },
});

export default SearchPlace;
