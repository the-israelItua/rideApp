import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const Switch = ({time}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={[styles.line, time >= 3 && {backgroundColor: 'black'}]}>
        {time === 2 && <View style={styles.circle} />}
      </View>
      <View style={[styles.line, time >= 4 && {backgroundColor: 'black'}]}>
        {time === 3 && <View style={styles.circle} />}
      </View>
      <View style={[styles.line, time >= 5 && {backgroundColor: 'black'}]}>
        {time === 4 && <View style={styles.circle} />}
      </View>
      <View style={[styles.line, time >= 6 && {backgroundColor: 'black'}]}>
        {time === 5 && <View style={styles.circle} />}
      </View>
      <View style={[styles.line, time >= 7 && {backgroundColor: 'black'}]}>
        {time === 6 && <View style={styles.circle} />}
      </View>
      <View style={[styles.line, time >= 8 && {backgroundColor: 'black'}]}>
        {time === 7 && <View style={styles.circle} />}
      </View>
      <View>
        {time === 8 && <View style={{...styles.circle, left: -20}} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  line: {
    width: 43,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#ddd',
    marginRight: 5,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
    position: 'absolute',
    left: -5,
    top: -10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default Switch;
