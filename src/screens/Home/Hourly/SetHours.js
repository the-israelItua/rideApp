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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Switch from '../../../components/Switch';
import ImageBg from '../../../assets/images/5283.jpg';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Hourly = () => {
  const [time, setTime] = useState(2);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} />
      </Pressable>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <Text style={styles.bodyHeader}>How much time do you need?</Text>

          <View style={{...styles.item, marginLeft: 20}}>
            <MaterialCommunityIcons name="car-arrow-left" size={24} />
            <Text style={styles.itemText}>Start now</Text>
          </View>

          <View style={styles.bg}>
            <View style={styles.item}>
              <MaterialCommunityIcons name="car-arrow-right" size={24} />
              <Text style={styles.itemText}>End time</Text>
            </View>
            <View>
              <View style={styles.time}>
                <Pressable
                  onPress={() => setTime(time - 1)}
                  disabled={time === 2}
                  style={styles.timeIcon}>
                  <AntDesign
                    name="minus"
                    color={time === 2 ? '#E8E8E8' : 'black'}
                    size={24}
                  />
                </Pressable>
                <Text style={styles.timeText}>{time} hours</Text>
                <Pressable
                  onPress={() => setTime(time + 1)}
                  disabled={time === 8}
                  style={styles.timeIcon}>
                  <AntDesign
                    name="plus"
                    color={time === 8 ? '#E8E8E8' : 'black'}
                    size={24}
                  />
                </Pressable>
              </View>
              <View style={styles.switch}>
                <Switch time={time} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <Text style={styles.footerRowText}>Starting at</Text>
          <Text style={styles.footerRowText}>NGN 2385.00/hour</Text>
        </View>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate('PickRide')}>
          <Text style={styles.btnText}>Next</Text>
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
    margin: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 30,
  },
  body: {
    margin: 20,
  },
  bodyHeader: {
    fontSize: 28,
    fontWeight: '600',
    marginVertical: 20,
  },
  bg: {
    backgroundColor: '#E8E8E8',
    padding: 20,
    borderRadius: 10,
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  timeIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  timeText: {
    fontSize: 28,
    fontWeight: '500',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 20,
    marginVertical: 20,
  },
  switch: {
    marginVertical: 30,
    marginLeft: 10,
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
});

export default Hourly;
