/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  View,
  TextInput,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import styles from '../../styles';

const Username = ({navigation}) => {
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={[styles.setFlex1]}>
          <Text style={[styles.textRegular, {textAlign: 'left'}]}>
            Get started
          </Text>
        </View>
        <View style={[styles.setFlex1, {justifyContent: 'center'}]}>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
          />
          <Pressable
            onPress={() => {
              navigation.navigate('Login By Mobile Number');
            }}>
            <Text style={{textAlign: 'right', color: '#5E53E6'}}>
              Forgot password?
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button, {marginTop: '5%', marginBottom: '9%'}]}
            onPress={() => {
              navigation.navigate('Start');
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <View
            style={[
              styles.setFlex1,
              {flexDirection: 'row', marginBottom: '4%'},
            ]}>
            <View style={{flex: 3}}>
              <View style={internalStyle.line} />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.textRegular}>or</Text>
            </View>
            <View style={{flex: 3}}>
              <View style={internalStyle.line} />
            </View>
          </View>
          <View style={[styles.setFlex5]}>
            <Pressable
              style={[styles.buttonAnother, styles.shadow]}
              onPress={() => {
                navigation.navigate('Login By Mobile Number');
              }}>
              <Text style={styles.buttonTextAnother}>
                Continue with mobile number
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.setFlex1]} />
      </ScrollView>
    </View>
  );
};

const internalStyle = StyleSheet.create({
  line: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#1B1B1B',
    borderBottomWidth: 0.5,
    marginTop: 10,
  },
});
export default Username;
