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

const Profile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <AntDesign name="close" size={24} />
      </Pressable>
      <ScrollView>
        <Text style={styles.headerText}>Default Payment</Text>
        <View style={styles.body}>
          <Text style={styles.label}>Payment Method</Text>

          <View style={styles.item}>
            <MaterialCommunityIcons name="cash" color="green" size={34} />
            <Text style={styles.itemText}>Cash</Text>
          </View>

          <Pressable>
            <Text style={styles.link}>Add Payment Method</Text>
          </Pressable>
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
  body: {
    margin: 20,
  },
  label: {
    color: 'grey',
    marginTop: 20,
  },
  item: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 15,
  },
  link: {
    color: '#6CB4EE',
    marginTop: 15,
  },
});

export default Profile;
