/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import styles from '../../styles';

const EditUser = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text>Edit User</Text>
      </ScrollView>
    </View>
  );
};

const internalStyle = StyleSheet.create({});
export default EditUser;
