import React, {useState} from 'react';
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
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import Map from '../../components/Map';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ImageBg from '../../assets/images/homebg.jpg';
import ImageRide from '../../assets/images/UberX.jpeg';
import ImageHour from '../../assets/images/UberXL.jpeg';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
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
          <Pressable
            onPress={() => navigation.navigate('SearchPlace')}
            style={styles.item}>
            <Image source={ImageRide} style={styles.itemImage} />
            <Text style={styles.itemText}>Ride</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('Hourly')}
            style={styles.item}>
            <Image source={ImageHour} style={styles.itemImage} />
            <Text style={styles.itemText}>Hourly</Text>
          </Pressable>
        </View>

        <View style={styles.pickup}>
          <Pressable
            onPress={() => navigation.navigate('SearchPlace')}
            style={styles.pickSearch}>
            <Text style={styles.pickupText}>Enter pickup point</Text>
          </Pressable>
          <Pressable style={styles.pickupTime} onPress={toggleModal}>
            <AntDesign name="clockcircle" size={20} />
            <Text style={styles.pickupTimeText}>Now</Text>
            <Icon name="chevron-down" size={15} />
          </Pressable>
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

        <View>
          <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
            <View style={styles.modal}>
              <Text style={styles.modalHeader}>Schedule a Ride</Text>
              <View style={styles.modalTime}>
                <Text style={styles.modalText}>Sat, Aug 21</Text>
                <View style={styles.divider} />
                <Text style={styles.modalText}>8:15 PM - 8:25 PM</Text>
              </View>
              <Pressable
                style={styles.btn}
                onPress={() => navigation.navigate('EnterMobile')}>
                <Text style={styles.btnText}>Set pickup time</Text>
              </Pressable>
            </View>
          </Modal>
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
  pickSearch: {
    flex: 1,
    marginRight: 20,
    height: 40,
    justifyContent: 'center',
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
  modal: {
    height: SCREEN_HEIGHT / 2.5,
    width: SCREEN_WIDTH,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    marginLeft: -20,
    marginBottom: -20,
    alignItems: 'center',
    textAlign: 'center',
  },
  modalHeader: {
    paddingVertical: 30,
    fontSize: 26,
  },
  modalTime: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  modalText: {
    paddingVertical: 20,
    fontSize: 18,
  },
  divider: {
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    width: SCREEN_WIDTH - 40,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: 'black',
    width: SCREEN_WIDTH - 40,
    height: 55,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
