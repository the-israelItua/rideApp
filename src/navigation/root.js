import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerMenu from './drawer';
import AuthStack from './auth-stack';

const RootNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerMenu /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
