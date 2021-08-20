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
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const validateEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} />
      </Pressable>
      <Text style={styles.headerText}>What's your business email?</Text>
      <View style={styles.input}>
        <Input
          label="Business email"
          autoFocus
          value={email}
          onChange={setEmail}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.btnContainer}>
        <Pressable
          onPress={() => navigation.navigate('EnterMobile')}
          style={[
            styles.btn,
            !validateEmail(email) && {backgroundColor: '#ddd'},
          ]}
          disabled={!validateEmail(email)}>
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
});

export default TeamAccount;
