import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import ScreenImage from '../../assets/images/get_started.jpg';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const EnterMobile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate('Welcome')}>
        <Icon name="arrowleft" size={25} />
      </Pressable>
      <Text style={styles.heading}>Enter your mobile number</Text>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.textInput}
          autoFocus
          keyboardType="number-pad"
          returnKeyType="next"
          returnKeyLabel="next"
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Socials')}
        style={styles.auth}>
        <Text style={styles.authText}>Or connect with social</Text>
        <Icon name="arrowright" size={18} color="#3457D5" />
      </Pressable>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.footer}>
        <View>
          <Text style={styles.footerText}>
            By continuing you may receive an SMS for verification. Message and
            data rates may apply.
          </Text>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Next</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  back: {
    marginTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  textInput: {
    borderBottomWidth: 1,
    padding: 10,
  },
  auth: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  authText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3457D5',
    marginRight: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
  },
  footerText: {
    color: 'grey',
    marginVertical: 3,
    lineHeight: 24,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: 'black',
    width: SCREEN_WIDTH - 40,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EnterMobile;
