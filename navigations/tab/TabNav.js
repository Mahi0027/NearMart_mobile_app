import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductHome from '../../components/product/ProductHome';
import ShopHome from '../../components/shop/ShopHome';
import Cart from '../../components/cart/Cart';

const Tab = createBottomTabNavigator();
const size = 22;
const color = '#1B1B1B';

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        // tabBarStyle: {backgroundColor: '#1B1B1B'},
        tabBarInactiveTintColor: '#1B1B1B',
      }}>
      <Tab.Screen
        name="ProductHome"
        component={ProductHome}
        options={{
          title: 'Products',
          tabBarBadge: null,
          tabBarIcon: ({size, color}) => (
            <Ionicons name={'cube-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ShopHome"
        component={ShopHome}
        options={{
          title: 'Store',
          tabBarBadge: null,
          tabBarIcon: ({size, color}) => (
            <Ionicons name={'grid'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Cart',
          tabBarBadge: null,
          tabBarIcon: ({size, color}) => (
            <Ionicons name={'wallet-outline'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
