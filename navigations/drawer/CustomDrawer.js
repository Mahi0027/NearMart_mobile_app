/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import EditUser from '../../components/user/EditUser';

const CustomDrawer = props => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#FFFFFF'}}>
        <View style={[styles.container, {flexDirection: 'row'}]}>
          <View style={{flex: 1}}>
            <Pressable
              onPress={() => {
                navigation.navigate('User');
              }}>
              <Image
                source={require('../../assets/Images/userImage/profileImage.png')}
                style={innerStyle.userImage}
              />
            </Pressable>
          </View>
          <View style={{flex: 9, justifyContent: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('User');
              }}>
              <Text style={styles.textRegular}>Profile</Text>
            </Pressable>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('EditUser');
              }}>
              <Text>
                <Ionicons name={'create-outline'} size={22} color="#1B1B1B" />
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={innerStyle.footer}>
        <TouchableOpacity
          onPress={() => {
            alert('share this app');
          }}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name={'share-social-outline'} size={22} color="#1B1B1B" />
            <Text style={[styles.textRegular, {paddingHorizontal: 10}]}>
              Share this app
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert('logout');
          }}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name={'log-out-outline'} size={22} color="#1B1B1B" />
            <Text style={[styles.textRegular, {paddingHorizontal: 10}]}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const innerStyle = StyleSheet.create({
  userImage: {
    height: 40,
    width: 40,
    borderRadious: 20,
  },
  footer: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#1B1B1B',
  },
});
export default CustomDrawer;
