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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="white" />
        <Text style={styles.headerText}>Account Settings</Text>
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable
          style={styles.user}
          onPress={() => navigation.navigate('AccountStack')}>
          <View style={styles.userIcon}>
            <Entypo name="user" color="#ccc" size={40} />
          </View>
          <View style={styles.userDetails}>
            <Text>Israel Itua</Text>
            <Text>+234 802 253 5456</Text>
            <Text>israelitua20@gmail.com</Text>
          </View>
        </Pressable>
        <Pressable style={styles.warning}>
          <Entypo name="warning" color="#e1ad01" size={20} />
          <Text style={styles.warningText}>
            For added security, please verify your email
          </Text>
        </Pressable>
        <View style={styles.favourites}>
          <Text style={styles.favouritesHeader}>Favourites</Text>
          <Pressable style={styles.favouritesItem}>
            <Entypo name="home" size={25} />
            <Text style={styles.favouritesText}>Add Home</Text>
          </Pressable>
          <Pressable style={styles.favouritesItem}>
            <MaterialIcons name="work" size={25} />
            <Text style={styles.favouritesText}>Add Work</Text>
          </Pressable>

          <Pressable>
            <Text style={styles.favouritesBottom}>More Saved Places</Text>
          </Pressable>
        </View>
        <View style={styles.favourites}>
          <Text style={styles.favouritesHeader}>Safety</Text>
          <View></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    marginLeft: 20,
    fontSize: 20,
  },
  user: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
  },
  userIcon: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userDetails: {
    marginLeft: 20,
  },
  warning: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
  },
  warningText: {
    color: '#e1ad01',
    marginLeft: 20,
  },
  favourites: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
  },
  favouritesHeader: {
    marginBottom: 20,
  },
  favouritesItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  favouritesText: {
    marginLeft: 20,
  },
  favouritesBottom: {
    marginTop: 20,
    color: '#6CB4EE',
  },
});

export default SettingsScreen;
