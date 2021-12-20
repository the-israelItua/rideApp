import React from 'react';
import {View, Text, StyleSheet, Pressable, Dimensions} from 'react-native';
import {
  DrawerContentScrollView,
  // DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import {useDrawerStatus} from '@react-navigation/drawer';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const CustomDrawer = props => {
  const navigation = useNavigation();
  const drawerIsOpen = useDrawerStatus() === 'open';
  return (
    <View
      style={[styles.container, drawerIsOpen && {width: SCREEN_WIDTH - 50}]}>
      <View style={styles.topView}>
        <View style={styles.user}>
          <Pressable
            onPress={() => navigation.navigate('AccountStack')}
            style={styles.userIcon}>
            <Icon name="user" color="#DCDCDC" size={40} />
          </Pressable>
          <View style={styles.userDetails}>
            <Text style={styles.userDetailsText}>Israel Itua</Text>
          </View>
        </View>
        <Pressable style={styles.messages}>
          <Text style={styles.btnText}>Messages</Text>
          <Icon name="chevron-right" color="#dddddd" size={20} />
        </Pressable>
      </View>
      {/* <DrawerItemList {...props} /> */}
      <View style={styles.menubar}>
        <Pressable style={styles.menuItem}>
          <Text style={styles.menuItemText}>Your Trips</Text>
        </Pressable>

        <Pressable style={styles.menuItem}>
          <Text style={styles.menuItemText}>Help</Text>
        </Pressable>

        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate('WalletStack')}>
          <Text style={styles.menuItemText}>Wallet</Text>
        </Pressable>

        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate('SettingsStack')}>
          <Text style={styles.menuItemText}>Settings</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.legal}>Legal</Text>
        <Text style={styles.version}>v4.381.10003</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  topView: {
    backgroundColor: 'black',
    padding: 15,
    paddingTop: '16%',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  userIcon: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userDetails: {
    marginLeft: 15,
  },
  userDetailsText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  messages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  btns: {
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
  },
  btnText: {
    color: '#dddddd',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menubar: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  menuItem: {
    paddingVertical: 15,
  },
  menuItemText: {
    fontSize: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderTopColor: '#DCDCDC',
    borderTopWidth: 1,
  },
  version: {
    color: 'grey',
    fontSize: 12,
  },
});

export default CustomDrawer;
