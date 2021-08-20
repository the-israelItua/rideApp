import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Input = ({label, autoFocus, value, onChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          autoFocus={autoFocus}
          onChangeText={text => onChange(text)}
        />
        {value.length > 0 && (
          <View style={styles.icon}>
            <Icon name="close-circle" size={24} onPress={() => onChange('')} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    height: 50,
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#ddd',
  },
  label: {
    fontWeight: '500',
  },
  input: {
    height: 50,
    color: 'black',
    width: '100%',
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export default Input;
