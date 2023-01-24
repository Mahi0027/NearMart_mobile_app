/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import styles from '../styles';
import LandingImages from './LandingImages';
const Landing = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* top portion */}
        <View View style={{flex: 10}}>
          <Image
            source={require('../assets/Images/Logos/0.5x-light-mode.png')}
            style={[LandingPageStyles.imageAlign]}
            resizeMode="contain"
            resizeMethod="resize"
          />
          <Text style={[styles.textRegular, {fontSize: 34}]}>NearMart</Text>
        </View>
        {/* middle portion */}
        <View style={{flex: 1}}>
          <LandingImages />
        </View>
        {/* bottom portion */}
        <View style={{flex: 2}}>
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate('ChooseType');
            }}>
            <Text style={styles.buttonText}>Get started</Text>
          </Pressable>
          <View style={[styles.textRegular, {flexDirection: 'row'}]}>
            <Text style={[styles.textRegular, {marginTop: 10}]}>
              Already have an account?{' '}
            </Text>
            <Text
              style={{color: '#5E53E6', marginTop: 10}}
              onPress={() => {
                navigation.navigate('Login By Mobile Number');
              }}>
              Log in
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const LandingPageStyles = StyleSheet.create({
  imageAlign: {
    width: 100,
    height: 80,
    alignSelf: 'center',
  },
});
export default Landing;
