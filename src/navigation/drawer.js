import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button, View} from 'react-native';
import HomeStack from './home-stack';
import WalletStack from './wallet-stack';
import AccountStack from './account-stack';
import CustomDrawer from '../components/Custom-drawer';
import SettingsStack from './settings-stack';

const Drawer = createDrawerNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const DrawerMenu = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Index" component={HomeStack} />
      <Drawer.Screen name="Help" component={NotificationsScreen} />
      <Drawer.Screen name="WalletStack" component={WalletStack} />
      <Drawer.Screen name="SettingsStack" component={SettingsStack} />
      <Drawer.Screen name="AccountStack" component={AccountStack} />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;
