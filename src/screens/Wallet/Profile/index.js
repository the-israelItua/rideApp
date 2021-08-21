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
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import ImageBg from '../../../assets/images/5283.jpg';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Profile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <AntDesign name="close" size={24} />
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headerText}>Profile settings</Text>
        <Pressable
          onPress={() => navigation.navigate('EditName')}
          style={styles.businessItem}>
          <MaterialCommunityIcons name="briefcase" size={24} />
          <View style={styles.businessDetails}>
            <View style={styles.businessDetailComp}>
              <Text style={styles.subTitle}>Profile Name</Text>
              <Text style={styles.businessText}>Personal</Text>
            </View>
            <FontAwesome5
              name="chevron-right"
              size={18}
              color="grey"
              style={styles.chevron}
            />
          </View>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('ReceiptEmail')}
          style={styles.businessItem}>
          <Entypo name="mail" size={24} />
          <View style={styles.businessDetails}>
            <View style={styles.businessDetailComp}>
              <Text style={styles.subTitle}>Email for receipt</Text>
              <Text style={styles.businessText}>israelitua20@gmail.com</Text>
            </View>
            <FontAwesome5
              name="chevron-right"
              size={18}
              color="grey"
              style={styles.chevron}
            />
          </View>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('DefaultPayment')}
          style={styles.businessItem}>
          <Foundation name="credit-card" size={28} />
          <View style={[styles.businessDetails, {borderBottomWidth: 0}]}>
            <View style={styles.businessDetailComp}>
              <Text style={styles.subTitle}>Default payment</Text>
              <Text style={styles.businessText}>Cash</Text>
            </View>
            <FontAwesome5
              name="chevron-right"
              size={18}
              color="grey"
              style={styles.chevron}
            />
          </View>
        </Pressable>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            When you ride using this profile, these prefereces will be selected
            by default
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    height: SCREEN_HEIGHT / 3,
    resizeMode: 'cover',
  },
  businessItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
  },
  businessDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingRight: 20,
  },
  businessDetailComp: {
    width: '80%',
  },
  businessText: {
    color: 'grey',
    lineHeight: 22,
  },
  subTitle: {
    fontWeight: 'bold',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 20,
  },
  footerText: {
    color: 'grey',
    fontSize: 12,
    lineHeight: 18,
  },
});

export default Profile;
