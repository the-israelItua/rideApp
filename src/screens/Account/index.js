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
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SOME_KEY} from '@env';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.header}>
        <AntDesign name="arrowleft" size={24} color="white" />
        <Text style={styles.headerText}>Edit Account</Text>
      </Pressable>
      <ScrollView>
        <View style={styles.profileImageContainer}>
          <Pressable style={styles.profileImage}>
            <Entypo name="user" color="#DCDCDC" size={45} />
          </Pressable>
          <View style={styles.profileEdit}>
            <Ionicons name="md-pencil-sharp" size={15} color="white" />
          </View>
        </View>

        <View style={styles.profileDetails}>
          <View style={styles.profileItem}>
            <Text style={styles.profileLabel}>First Name</Text>
            <Text style={styles.profileItemText}>Israel</Text>
          </View>

          <View style={styles.profileItem}>
            <Text style={styles.profileLabel}>Last Name</Text>
            <Text style={styles.profileItemText}>Itua</Text>
          </View>

          <View style={styles.profileItem}>
            <Text style={styles.profileLabel}>Phone Number</Text>
            <Text style={styles.profileItemText}>+234 802 253 2456</Text>
          </View>

          <View style={styles.profileItem}>
            <Text style={styles.profileLabel}>Email</Text>
            <Text style={styles.profileItemText}>israelitua20@gmail.com</Text>
          </View>

          <View style={styles.profileItem}>
            <Text style={styles.profileLabel}>Password</Text>
            <Text style={styles.profileItemText}>********</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: '15%',
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    marginLeft: 20,
    fontSize: 20,
  },
  profileImageContainer: {
    margin: 20,
    width: 100,
    height: 100,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileEdit: {
    position: 'absolute',
    bottom: 0,
    left: '10%',
    backgroundColor: 'black',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileDetails: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 20,
  },
  profileItem: {
    marginBottom: 25,
  },
});

export default AccountScreen;
