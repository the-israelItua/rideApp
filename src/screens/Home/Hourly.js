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
import ImageBg from '../../assets/images/5283.jpg';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Hourly = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} />
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={ImageBg} style={styles.image} />
        <View style={{paddingBottom: 160}}>
          <Text style={styles.headerText}>Rumper Hourly</Text>
          <View style={styles.rideItem}>
            <MaterialCommunityIcons name="fuel" size={24} />
            <View style={styles.rideRight}>
              <Text style={styles.rideText}>
                As many stops as you need in one car
              </Text>
            </View>
          </View>

          <View style={styles.rideItem}>
            <MaterialCommunityIcons name="bus-stop" size={24} />
            <View style={styles.rideRight}>
              <Text style={styles.rideText}>Change your stops on the go</Text>
            </View>
          </View>

          <View style={styles.rideItem}>
            <MaterialCommunityIcons name="car-brake-parking" size={24} />
            <View style={styles.rideRight}>
              <Text style={styles.rideText}>Don't spend time to park</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <Text style={styles.footerRowText}>Starting at</Text>
          <Text style={styles.footerRowText}>NGN 2385.00/hour</Text>
        </View>
        <Pressable style={styles.btn} onPress={() => navigation.navigate('')}>
          <Text style={styles.btnText}>Get started</Text>
          <AntDesign
            name="arrowright"
            color="white"
            style={styles.btnIcon}
            size={24}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 30,
  },
  image: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 2.5,
    resizeMode: 'cover',
  },
  rideItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  rideRight: {
    flex: 1,
    paddingVertical: 20,
    marginLeft: 20,
  },
  rideText: {
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    width: SCREEN_WIDTH,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  footerRowText: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
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
    marginBottom: 40,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnIcon: {
    position: 'absolute',
    right: 20,
  },
});

export default Hourly;
