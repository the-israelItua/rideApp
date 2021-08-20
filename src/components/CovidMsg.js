import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const CovidMsg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if neccessary.</Text>
      <Text style={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
      </Text>
      <View style={styles.learn}>
        <Text style={styles.learnText}>Learn more</Text>
        <Icon name="arrowright" size={15} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1065e9',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: -10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: '#bed9ff',
    fontSize: 15,
    marginBottom: 10,
  },
  learn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  learnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default CovidMsg;
