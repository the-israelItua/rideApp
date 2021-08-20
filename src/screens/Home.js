import React from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Map from '../components/Map';
import Icon from 'react-native-vector-icons/Feather';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable style={styles.drawer} onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={35} color="black" />
      </Pressable>
      <View style={{height: '70%'}}>
        <Map />
      </View>
      <Button
        title="Search places"
        onPress={() => navigation.navigate('SearchPlace')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    top: '8%',
    left: '3%',
    backgroundColor: 'white',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
});

export default HomeScreen;
