/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import styles from '../../styles';

const User = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text>User</Text>
      </ScrollView>
    </View>
  );
};

const internalStyle = StyleSheet.create({});
export default User;
