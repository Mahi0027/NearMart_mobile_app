/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Pressable, Text} from 'react-native';
import styles from '../../styles';

const ActionBarImage = ({navigation}) => {
  return (
    <View
      style={{flexDirection: 'row', marginTop: '5%', paddingHorizontal: 20}}>
      <Text
        style={[
          styles.textRegular,
          styles.border,
          {flex: 1, textAlign: 'left', paddingTop: 6},
        ]}>
        User Name
      </Text>
      <Pressable
        style={[styles.border, {flex: 1, alignItems: 'flex-end'}]}
        onPress={() => navigation.openDrawer()}>
        <Image
          source={require('../../assets/Images/userImage/profileImage.png')}
          style={{
            width: 30,
            height: 30,
            borderRadius: 30 / 2,
          }}
        />
      </Pressable>
    </View>
  );
};

export default ActionBarImage;
