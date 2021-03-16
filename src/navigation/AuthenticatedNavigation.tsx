/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';

import type { SignedRoutes } from '../routes';
import DashboardScreen from '../screens/DashboardScreen';

const AuthenticatedNavigation: React.FC = () => {
  const Tab = createBottomTabNavigator<SignedRoutes>();
  const dispatch = useDispatch();


  return (
    <NavigationContainer>
      <Tab.Navigator
        lazy
        initialRouteName="Dashboard"
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }): JSX.Element => {
            let iconName = '';

            if (route.name === 'Dashboard') {
              iconName = 'ios-person';
            }

            return <Ionicons color={color} key={iconName} size={size} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#3a77d2',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen component={DashboardScreen} name="Dashboard" options={{ title: 'Dashboard' }} />
      </Tab.Navigator>
      <Toast ref={(ref: unknown) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

export default AuthenticatedNavigation;