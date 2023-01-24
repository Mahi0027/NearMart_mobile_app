/* eslint-disable no-shadow */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Setting from '../../components/setting/Setting';
import User from '../../components/user/User';
import CustomDrawer from './CustomDrawer';
import Home from '../../components/Home/Home';
import TabNav from '../tab/TabNav';
import ProductHome from '../../components/product/ProductHome';
import Test2 from '../../components/Test2';
import Test1 from '../../components/Test1';
import Test3 from '../../components/Test3';

const Drawer = createDrawerNavigator();
const color = '#1B1B1B';
const size = 22;
const fontFamily = 'Montserrat-Regular';
const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          fontSize: 16,
          fontFamily: fontFamily,
          marginLeft: -25,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={TabNav}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name={'home-outline'} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Products"
        component={User}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name={'basket-outline'} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Shops"
        component={Setting}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name={'bookmarks-outline'} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name={'cog-outline'} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Test1"
        component={Test1}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />
      <Drawer.Screen
        name="Test3"
        component={Test3}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />
      <Drawer.Screen
        name="Test2"
        component={Test2}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
