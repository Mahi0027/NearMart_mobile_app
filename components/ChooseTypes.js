/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles';

const ChooseTypes = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={[styles.setFlex4]}>
          <Text style={[styles.textRegular, {textAlign: 'left'}]}>
            Choose type
          </Text>
        </View>
        <View style={[styles.border, styles.setFlex1]}>
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate('BuyerRegistration');
            }}>
            <Text style={styles.buttonText}>
              <FontAwesome5
                name={'shopping-cart'}
                size={14}
                color="#FFFFFF"
                solid
              />
              &nbsp;&nbsp;&nbsp;&nbsp;Buyer
            </Text>
          </Pressable>
          <Text />
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate('ChooseType');
            }}>
            <Text style={styles.buttonText}>
              <FontAwesome5 name={'user'} size={14} color="#FFFFFF" solid />
              &nbsp;&nbsp;&nbsp;&nbsp;Seller
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChooseTypes;
