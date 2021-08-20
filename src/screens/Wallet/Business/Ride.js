import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Entypo';
import ImageBg from '../../../assets/images/office-worker.jpg';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Business = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} />
      </Pressable>
      <ScrollView>
        <Text style={styles.headerText}>Ride for business</Text>
        <Image source={ImageBg} style={styles.image} />

        <View style={styles.rideItem}>
          <Icon name="mail" size={24} />
          <View style={styles.rideRight}>
            <Text style={styles.rideText}>Keep work rides separate</Text>
          </View>
        </View>

        <View style={styles.rideItem}>
          <MaterialCommunityIcons name="bag-carry-on" size={24} />
          <View style={styles.rideRight}>
            <Text style={styles.rideText}>Get travel reports</Text>
          </View>
        </View>

        <View style={styles.rideItem}>
          <Icon name="price-tag" size={24} />
          <View style={styles.rideRight}>
            <Text style={styles.rideText}>Make expensing seamless & easy</Text>
          </View>
        </View>
      </ScrollView>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate('CreateBusiness')}>
        <Text style={styles.btnText}>Join now</Text>
      </Pressable>
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
  image: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 4,
    resizeMode: 'cover',
    marginTop: 20,
  },
  rideItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  rideRight: {
    flex: 1,
    paddingVertical: 29,
    marginLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  rideText: {
    fontSize: 16,
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
    marginLeft: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Business;
