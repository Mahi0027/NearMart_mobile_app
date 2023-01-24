import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from '../styles';
import Header from './elements/Header';

const Test1 = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text>Test 1</Text>
        <Button
          title={'title2'}
          onPress={() => {
            navigation.navigate('Test2');
          }}
        />
      </View>
    </>
  );
};

export default Test1;
