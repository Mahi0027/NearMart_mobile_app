import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from '../styles';
import Header from './elements/Header';

const Test3 = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text>Test 3</Text>
        <Button
          title={'title1'}
          onPress={() => {
            navigation.navigate('Test1');
          }}
        />
      </View>
    </>
  );
};

export default Test3;
