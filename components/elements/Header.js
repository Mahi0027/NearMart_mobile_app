/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Pressable, Text, StyleSheet} from 'react-native';
import styles from '../../styles';

const Header = props => {
  return (
    <View style={[innerStyle.container]}>
      <Pressable onPress={() => props.navigation.openDrawer()}>
        <Text style={[styles.textRegular, innerStyle.text]}>User Name</Text>
      </Pressable>
      <Pressable
        style={[{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}]}
        onPress={() => props.navigation.openDrawer()}>
        <Image
          source={require('../../assets/Images/userImage/profileImage.png')}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
          }}
        />
      </Pressable>
    </View>
  );
};

const innerStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: '3%',
    marginBottom: '-4%',
    paddingHorizontal: 20,
    height: 40,
  },
  text: {
    flex: 1,
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'left',
    paddingTop: 6,
  },
});
export default Header;
