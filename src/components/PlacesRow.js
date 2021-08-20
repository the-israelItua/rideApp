import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const PlacesRow = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name="location-pin" size={25} color="white" />
      </View>
      <Text style={styles.location}>{data.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#a2a2a2',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#a2a2a2',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    marginLeft: 15,
  },
});

export default PlacesRow;
