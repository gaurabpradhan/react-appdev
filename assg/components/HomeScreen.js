import React from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  Pressable,
  Image,
} from 'react-native';
import styles from '../styles/styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../components/FavoriteScreen';
import Product from'../components/Product';
import Home from '../components/Home';
import Cart from '../components/Cart';


const Bottom = createBottomTabNavigator();
const Welcome = () => {
  return (
    <Bottom.Navigator>

    <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
         tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 24, height: 24, }}
            />
          ),
         }}
      />
      
      <Bottom.Screen
        name="Product"
        component={Product}
        options={{
          headerShown: false,
           tabBarLabel: 'Product',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/product.png')}
              style={{ width: 24, height: 24, }}
            />
          ),
        }}
      />

      <Bottom.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerShown: false,
           tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/cart.png')}
              style={{ width: 24, height: 24, }}
            />
          ),
        }}
      />

      <Bottom.Screen
        name="AddtoCart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/fav.png')}
              style={{ width: 24, height: 24, }}
            />
          ),
         }}
      />
    </Bottom.Navigator>
  );
};

export default Welcome;