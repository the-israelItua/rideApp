import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Input = ({
  label,
  placeholder,
  autoFocus,
  value,
  onChange,
  containertStyles,
  labelStyles,
  iconVariant,
}) => {
  return (
    <View style={styles.container}>
      <Text style={{...styles.label, ...labelStyles}}>{label}</Text>
      <View style={{...styles.inputContainer, ...containertStyles}}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          autoFocus={autoFocus}
          onChangeText={text => onChange(text)}
        />
        {value.length > 0 && (
          <View style={styles.icon}>
            {iconVariant === 'plain' ? (
              <EvilIcons name="close" size={24} onPress={() => onChange('')} />
            ) : (
              <Icon
                name="close-circle"
                size={24}
                onPress={() => onChange('')}
              />
            )}
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
