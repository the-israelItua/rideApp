import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  ScrollView,
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Map from '../components/Map';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ImageBg from '../assets/images/homebg.jpg';
import ImageRide from '../assets/images/UberX.jpeg';
import ImageHour from '../assets/images/UberXL.jpeg';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={35} color="black" />
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
        <ImageBackground
          source={ImageBg}
          style={styles.imageBg}
          imageStyle={{borderRadius: 10}}>
          <View style={styles.inner}>
            <Text style={styles.title}>Enhance your pickup experience</Text>
            <View style={styles.subTitle}>
              <Text style={styles.subTitleText}>Share location</Text>
              <Icon name="arrow-right" size={20} color="white" />
            </View>
          </View>
        </ImageBackground>

        <View style={styles.itemContainer}>
          <View style={styles.item}>
            <Image source={ImageRide} style={styles.itemImage} />
            <Text style={styles.itemText}>Ride</Text>
          </View>

          <View style={styles.item}>
            <Image source={ImageHour} style={styles.itemImage} />
            <Text style={styles.itemText}>Hourly</Text>
          </View>
        </View>

        <View style={styles.pickup}>
          <Text style={styles.pickupText}>Enter pickup point</Text>
          <View style={styles.pickupTime}>
            <AntDesign name="clockcircle" size={20} />
            <Text style={styles.pickupTimeText}>Now</Text>
            <Icon name="chevron-down" size={15} />
          </View>
        </View>

        <View style={styles.savedRides}>
          <View style={styles.starContainer}>
            <Entypo name="star" size={20} />
          </View>
          <View style={styles.savedRidesDetails}>
            <View>
              <Text style={styles.savedRidesTitle}>Ebidhaa</Text>
              <Text style={styles.savedRidesSub}>Melon</Text>
            </View>
            <FontAwesome5
              name="chevron-right"
              size={18}
              color="grey"
              style={styles.chevron}
            />
          </View>
        </View>

        <View style={styles.savedRides}>
          <View style={styles.starContainer}>
            <Entypo name="star" size={20} />
          </View>
          <View style={styles.savedRidesDetails}>
            <View>
              <Text style={styles.savedRidesTitle}>Igbogbo Garage</Text>
              <Text style={styles.savedRidesSub}>
                HGQ9+J9J, IKORODU104102, Ikorodu
              </Text>
            </View>
            <FontAwesome5
              name="chevron-right"
              size={18}
              color="grey"
              style={styles.chevron}
            />
          </View>
        </View>
        <Text style={styles.headText}>Around you</Text>
        <View style={{height: 200, marginBottom: 100}}>
          <Map />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    paddingTop: 0,
  },
  body: {
    marginHorizontal: 20,
    height: SCREEN_HEIGHT - 80,
  },
  imageBg: {
    width: '100%',
    height: 150,
    borderRadius: 20,
  },
  inner: {
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    width: '70%',
    lineHeight: 24,
  },
  subTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  subTitleText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  item: {
    width: '48%',
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  itemImage: {
    height: 60,
    width: 100,
    position: 'absolute',
    right: 0,
    top: 20,
  },
  itemText: {
    position: 'absolute',
    bottom: 10,
    left: 20,
  },
  pickup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#E8E8E8',
    padding: 10,
    borderRadius: 5,
  },
  pickupText: {
    fontSize: 18,
    fontWeight: '500',
  },
  pickupTime: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 6,
    padding: 10,
    borderRadius: 20,
  },
  pickupTimeText: {
    marginHorizontal: 10,
  },
  savedRides: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8E8E8',
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  savedRidesDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 30,
  },
  savedRidesTitle: {
    marginBottom: 5,
    fontWeight: '500',
    fontSize: 16,
  },
  savedRidesSub: {
    color: 'grey',
  },
  headText: {
    paddingVertical: 30,
    fontWeight: '500',
    fontSize: 18,
  },
});

export default HomeScreen;
