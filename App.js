import 'react-native-gesture-handler';
import React from 'react';
import PropTypes from 'prop-types';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './navigations/stack/StackNav';
import DrawerNav from './navigations/drawer/DrawerNav';

const App = () => {
  return (
    <NavigationContainer independent={true}>
      {/* <DrawerNav /> */}
      <StackNav />
    </NavigationContainer>
  );
};
export default App;
