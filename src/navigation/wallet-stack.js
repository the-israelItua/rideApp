import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WalletScreen from '../screens/Wallet';
import AddPromoScreen from '../screens/Wallet/AddPromo';
import AddVoucherScreen from '../screens/Wallet/AddVoucher';
import BusinessScreen from '../screens/Wallet/Business';
import BusinessRide from '../screens/Wallet/Business/Ride';
import BusinessTeam from '../screens/Wallet/Business/Team';
import BusinessAccount from '../screens/Wallet/Business/Account';
import CreateTeam from '../screens/Wallet/Business/CreateTeam';
import CreateBusiness from '../screens/Wallet/Business/CreateBusiness';

const Stack = createStackNavigator();

const WalletStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="AddPromo" component={AddPromoScreen} />
      <Stack.Screen name="AddVoucher" component={AddVoucherScreen} />
      <Stack.Screen name="Business" component={BusinessScreen} />
      <Stack.Screen name="BusinessRide" component={BusinessRide} />
      <Stack.Screen name="BusinessTeam" component={BusinessTeam} />
      <Stack.Screen name="BusinessAccount" component={BusinessAccount} />
      <Stack.Screen name="CreateTeam" component={CreateTeam} />
      <Stack.Screen name="CreateBusiness" component={CreateBusiness} />
    </Stack.Navigator>
  );
};

export default WalletStack;
