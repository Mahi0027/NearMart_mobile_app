/* eslint-disable react-native/no-inline-styles */
'use strict';

import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Linking,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import styles from '../../styles';

export default class ScanScreen extends Component {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        showMarker={true}
        fadeIn={true}
        cameraTimeout={1000 * 60 * 5}
        ref={node => {
          this.scanner = node;
        }}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={[styles.elements, internalStyles.centerText]}>
            Scan QR code to get shop details.
          </Text>
        }
        bottomContent={
          <View
            style={[
              internalStyles.bottomButtons,
              {flex: 1, flexDirection: 'row'},
            ]}>
            {/* <View style={{flex: 1}}>
              <Pressable
                style={[styles.button, {margin: '4%'}]}
                onPress={() => {
                  navigation.navigate('ShopHome');
                }}>
                <Text style={styles.buttonText}>Back</Text>
              </Pressable>
            </View> */}
            <View style={{flex: 1}}>
              <Pressable
                style={[styles.button, {margin: '4%'}]}
                onPress={() => {
                  this.scanner.reactivate();
                }}>
                <Text style={styles.buttonText}>Reload</Text>
              </Pressable>
            </View>
          </View>
          // <TouchableOpacity style={internalStyles.buttonTouchable}>
          //   <Text style={internalStyles.buttonText}>OK. Got it!</Text>
          // </TouchableOpacity>
        }
      />
    );
  }
}

const internalStyles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    padding: 32,
    color: '#1B1B1B',
  },
  bottomButtons: {
    marginTop: '25%',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

AppRegistry.registerComponent('default', () => ScanScreen);
