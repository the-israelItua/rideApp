import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlacesRow from './PlacesRow';
import {API_KEY} from '@env';

const GoogleInput = ({placeholder, setLocation, position, listView}) => {
  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      onPress={(data, details = null) => {
        setLocation({data, details});
      }}
      suppressDefaultStyles
      enablePoweredByContainer={false}
      styles={{
        textInput: styles.textInput,
        container: [styles.container, {top: position}],
        listView: listView,
      }}
      fetchDetails
      query={{
        key: API_KEY,
        language: 'en',
      }}
      renderRow={data => <PlacesRow data={data} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 10,
    right: 10,
  },
  textInput: {
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
    padding: 10,
  },
});
export default GoogleInput;
