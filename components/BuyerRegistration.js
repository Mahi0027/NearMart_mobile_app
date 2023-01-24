import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from '../styles';

const BuyerRegistration = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text>Buyer Registration</Text>
      </ScrollView>
    </View>
  );
};

export default BuyerRegistration;
