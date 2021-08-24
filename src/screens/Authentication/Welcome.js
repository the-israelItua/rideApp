import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import ScreenImage from '../../assets/images/get_started.jpg';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Rumper</Text>
      <Image source={ScreenImage} style={styles.image} />
      <Text style={styles.subText}>Move with Safety</Text>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate('EnterMobile')}>
        <Text style={styles.btnText}>Get Started</Text>
        <View style={styles.icon}>
          <Icon name="arrowright" size={25} color="white" />
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 50,
  },
  image: {
    height: '60%',
    width: '100%',
    resizeMode: 'cover',
  },
  subText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 40,
    backgroundColor: 'black',
    width: SCREEN_WIDTH - 40,
    height: 55,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    right: 20,
  },
});

export default WelcomeScreen;
