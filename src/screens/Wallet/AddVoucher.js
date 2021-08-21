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
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Input from '../../components/input';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const AddPromo = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="white" />
        <Text style={styles.headerText}>Add Voucher Code</Text>
      </Pressable>

      <View style={styles.input}>
        <Input
          label="Code"
          placeholder="Enter voucher code"
          autoFocus
          value={code}
          onChange={setCode}
          labelStyles={{color: 'grey'}}
          containertStyles={{
            backgroundColor: 'white',
            borderWidth: 0,
            borderBottomWidth: 2,
            paddingHorizontal: 0,
          }}
          iconVariant="plain"
        />
        <Text style={styles.text}>
          Enter the code in order to claim and use your voucher
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.btnContainer}>
        <Pressable
          onPress={() => navigation.navigate('EnterMobile')}
          style={[styles.btn, code.length === 0 && {backgroundColor: '#ddd'}]}
          disabled={code.length === 0}>
          <Text style={styles.btnText}>Continue</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    marginLeft: 20,
    fontSize: 20,
  },
  input: {
    margin: 20,
  },
  text: {
    marginTop: 10,
    color: 'grey',
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

export default AddPromo;
