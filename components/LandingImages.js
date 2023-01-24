/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import styles from '../styles';

const CARD_LENGTH = Dimensions.get('window').width - 40;

const images = [
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1756&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
];
const LandingImages = () => {
  return (
    <View>
      <ScrollView pagingEnabled horizontal style={[imageStyle.container]}>
        {images.map((image, index) => (
          <View>
            <View>
              <Image
                key={index}
                source={{uri: image}}
                style={imageStyle.imageStyle}
                resizeMode="contain"
                resizeMethod="resize"
              />
            </View>
            <View style={{marginTop: 50}}>
              <Text style={styles.textRegular}>
                how to move text to the bottom of the screen
              </Text>
              <Text style={styles.textRegular}>
                Answers related to “how to{' '}
              </Text>
              <Text style={styles.textRegular}>
                how to move text to the bottom of the screen
              </Text>
              <Text style={styles.textRegular}>
                Answers related to “how to{' '}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const imageStyle = StyleSheet.create({
  container: {
    width: CARD_LENGTH,
    height: 550,
  },
  imageStyle: {
    width: CARD_LENGTH,
    height: 300,
    borderRadius: 10,
  },
});
export default LandingImages;
