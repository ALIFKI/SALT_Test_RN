import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './routerNav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsScreens from '../screens/products';
import TailwindScreen from '../screens/tailwind';

export type RootStackParamList = {
  Tailwind: undefined;
  Home: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

class Route extends Component {
  render(): React.ReactNode {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="Tailwind"
            component={TailwindScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={ProductsScreens}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Route;
