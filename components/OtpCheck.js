/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from '../styles';

const screenWidth = Dimensions.get('window').width;
const OtpCheck = ({navigation}) => {
  let textInput = useRef(null);
  let clockCall = null;
  const defaultCountdown = 30;
  const lengthInput = 6;
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(defaultCountdown);
  const [enableResend, setEnableResend] = useState(false);

  useEffect(() => {
    if (otp.length === 6) {
      navigation.navigate('Start');
    }
  });

  const onChangeText = val => {
    setOtp(val);
  };

  useEffect(() => {
    clockCall = setInterval(() => {
      decrementClock();
    }, 1000);
    return () => {
      clearInterval(clockCall);
    };
  });

  const decrementClock = () => {
    if (countdown === 0) {
      setEnableResend(true);
      setCountdown(0);
      clearInterval(clockCall);
    } else {
      setCountdown(countdown - 1);
    }
  };

  useEffect(() => {
    textInput.focus();
  });

  const onResetOtp = () => {
    if (enableResend) {
      setCountdown(defaultCountdown);
      setEnableResend(false);
      clearInterval(clockCall);
      clockCall = setInterval(() => {
        decrementClock(0);
      }, 1000);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={[styles.setFlex1]}>
          <Text style={[styles.textRegular, {textAlign: 'left'}]}>
            Please enter the 6-digit code sent to you at +91-XXXXXXXXXX
          </Text>
        </View>
        <View style={[styles.setFlex1, {justifyContent: 'center'}]}>
          <KeyboardAvoidingView
            keyboardVerticalOffset={50}
            behavior={'padding'}
            style={styles.internalStyle}>
            <View>
              <TextInput
                ref={input => (textInput = input)}
                onChangeText={onChangeText}
                style={{width: 0, height: 0}}
                value={otp}
                maxLength={lengthInput}
                returnKeyType="done"
                keyboardType="numeric"
              />
              <View style={[internalStyle.containerInput]}>
                {Array(lengthInput)
                  .fill()
                  .map((data, index) => (
                    <View
                      key={index}
                      style={[
                        internalStyle.cellView,
                        {
                          borderBottomColor:
                            index === otp.length ? '#C0C0C0' : '#1B1B1B',
                        },
                      ]}>
                      <Text
                        style={[internalStyle.cellText]}
                        onPress={() => textInput.focus()}>
                        {otp && otp.length > 0 ? otp[index] : ''}
                      </Text>
                    </View>
                  ))}
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={[{flex: 1}]}>
                <Text style={{textAlign: 'left', fontSize: 16, color: 'gray'}}>
                  OTP will expire in 10 minutes
                </Text>
              </View>
              <View style={[{flex: 1}]}>
                <Text
                  style={{
                    textAlign: 'right',
                    fontSize: 16,
                    color: enableResend ? '#234DB7' : 'gray',
                  }}
                  onPress={onResetOtp}>
                  Resend code in{' '}
                  <Text style={{fontWeight: 'bold'}}>{countdown} seconds</Text>
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
        <View style={[styles.setFlex1]} />
      </ScrollView>
    </View>
  );
};

const internalStyle = StyleSheet.create({
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellView: {
    width: screenWidth / 8,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  cellText: {
    textAlign: 'center',
    color: '#1B1B1B',
    fontSize: 18,
    width: 50,
    height: 40,
  },
});
export default OtpCheck;
