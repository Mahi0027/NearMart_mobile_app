import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from '../styles';
import Header from './elements/Header';

const Test2 = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text>Test 2</Text>
        <Button
          title={'title3'}
          onPress={() => {
            navigation.navigate('Test3');
          }}
        />
      </View>
    </>
  );
};

export default Test2;
