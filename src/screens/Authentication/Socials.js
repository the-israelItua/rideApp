import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const Socials = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate('EnterMobile')}>
        <Icon name="arrowleft" size={25} />
      </Pressable>
      <Text style={styles.heading}>Choose an account</Text>

      <View style={styles.social}>
        <Icon name="facebook-square" size={24} color="#3457D5" />
        <Text style={styles.socialText}>Facebook</Text>
      </View>

      <View style={styles.social}>
        <Icon name="google" size={24} color="red" />
        <Text style={styles.socialText}>Google</Text>
      </View>
      <View>
        <Text style={styles.footerText}>
          By clicking on a social option you may receive an SMS for
          verification. Message and data rates may apply.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  back: {
    marginTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  social: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  socialText: {
    fontSize: 16,
    marginLeft: 20,
    color: 'grey',
  },
  footerText: {
    color: 'grey',
    marginTop: 20,
    lineHeight: 24,
  },
});

export default Socials;
