import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const HomeMap = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Icon
        name="menu"
        size={35}
        color="white"
        onPress={() => navigation.openDrawer()}
      />

      <View style={styles.textContainer}>
        <Text style={styles.text}>To find your pickup</Text>
        <Text style={styles.text}>location automatically,</Text>
        <Text style={styles.text}>turn on location</Text>
        <Text style={styles.text}>services</Text>
      </View>
      <View style={styles.button}>
        <Button title="Turn on location" color="white" fontSize={10} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1065e9',
    padding: 10,
    paddingTop: '13%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 20,
    width: '40%',
    marginBottom: 50,
    fontSize: 10,
  },
});

export default HomeMap;
