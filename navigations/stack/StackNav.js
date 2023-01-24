import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChooseTypes from '../../components/ChooseTypes';
import Landing from '../../components/Landing';
import BuyerRegistration from '../../components/BuyerRegistration';
import MobileNumber from '../../components/Login/MobileNumber';
import Username from '../../components/Login/Username';
import OtpCheck from '../../components/OtpCheck';
import Home from '../../components/Home/Home';
import Setting from '../../components/setting/Setting';
import DrawerNav from '../drawer/DrawerNav';
import Test1 from '../../components/Test1';
import Test2 from '../../components/Test2';
import Test3 from '../../components/Test3';
import EditUser from '../../components/user/EditUser';
import User from '../../components/user/User';
import ScanScreen from '../../components/elements/ScanScreen';
import ProductDetail from '../../components/product/ProductDetail';
import ShopDetail from '../../components/shop/ShopDetails';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#1B1B1B',
        headerTransparent: true,
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: 'Montserrat-Medium',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChooseType"
        component={ChooseTypes}
        options={{title: ''}}
      />
      <Stack.Screen
        name="Login by Username & Password"
        component={Username}
        options={{title: ''}}
      />
      <Stack.Screen
        name="Login By Mobile Number"
        component={MobileNumber}
        options={{title: ''}}
      />
      <Stack.Screen
        name="Check Otp"
        component={OtpCheck}
        options={{title: ''}}
      />

      <Stack.Screen
        name="Start"
        component={DrawerNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="User"
        component={User}
        options={{title: 'User Name', headerShown: true}}
      />
      <Stack.Screen
        name="EditUser"
        component={EditUser}
        options={{title: 'Edit User', headerShown: true}}
      />
      {/* <Stack.Screen
        name="Test2"
        component={Test2}
        options={{headerShown: true}}
      /> */}
      {/* <Stack.Screen
        name="Test3"
        component={Test3}
        options={{headerShown: true}}
      /> */}
      <Stack.Screen name="BuyerRegistration" component={BuyerRegistration} />
      <Stack.Screen
        name="Scanner"
        component={ScanScreen}
        options={{title: '', headerShown: true}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{title: '', headerShown: true}}
      />
      <Stack.Screen
        name="ShopDetail"
        component={ShopDetail}
        options={{title: '', headerShown: true}}
      />
    </Stack.Navigator>
  );
};
export default StackNav;
