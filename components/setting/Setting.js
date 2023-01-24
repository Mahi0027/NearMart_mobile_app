import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from '../../styles';
import Header from '../elements/Header';

const Setting = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text>Setting</Text>
        </ScrollView>
      </View>
    </>
  );
};

export default Setting;
