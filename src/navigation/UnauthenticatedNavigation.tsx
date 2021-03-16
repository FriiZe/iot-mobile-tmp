
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Toast from 'react-native-toast-message';

import type { UnsignedRoutes } from '../routes';
import SignInScreen from '../screens/SignInScreen';

const UnauthenticatedNavigation: React.FC = () => {
  const Stack = createStackNavigator<UnsignedRoutes>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={SignInScreen} name="SignIn" options={{ title: 'Connexion' }} />
      </Stack.Navigator>
      <Toast ref={(ref: unknown) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

export default UnauthenticatedNavigation;