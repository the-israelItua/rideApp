import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../../../components/input';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const TeamAccount = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} />
      </Pressable>
      <Text style={styles.headerText}>What's your team name?</Text>
      <View style={styles.input}>
        <Input label="Team name" autoFocus value={name} onChange={setName} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.btnContainer}>
        <Text style={styles.footerText}>
          By creating this account, you agree to the{' '}
          <Text style={styles.footerSpan}>Rumper for business</Text> Terms of
          Service and Conditions.
        </Text>
        <Pressable
          onPress={() => navigation.navigate('EnterMobile')}
          style={[styles.btn, name.length === 0 && {backgroundColor: '#ddd'}]}
          disabled={name.length === 0}>
          <Text style={styles.btnText}>Next</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  input: {
    margin: 20,
  },
  btnContainer: {
    position: 'absolute',
    bottom: 40,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: 'black',
    width: SCREEN_WIDTH - 40,
    height: 55,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginBottom: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    color: 'grey',
    margin: 20,
    lineHeight: 20,
    fontSize: 12,
  },
  footerSpan: {
    textDecorationLine: 'underline',
  },
});

export default TeamAccount;
