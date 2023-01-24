import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';
import Header from '../elements/Header';

const Cart = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />
      <View>
        <Text style={styles.textRegular}>Cart</Text>
      </View>
    </>
  );
};

export default Cart;
