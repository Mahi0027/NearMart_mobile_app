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
import SelectList from 'react-native-dropdown-select-list';

const MobileNumber = ({navigation}) => {
  const [selected, setSelected] = React.useState('');
  const [mobile, setMobile] = React.useState(null);
  const data = [
    {key: '1', value: 'Jammu & Kashmir'},
    {key: '2', value: 'Gujrat'},
    {key: '3', value: 'Maharashtra'},
    {key: '4', value: 'Goa'},
    {key: '5', value: 'Jammu & Kashmir'},
    {key: '6', value: 'Gujrat'},
    {key: '7', value: 'Maharashtra'},
    {key: '8', value: 'Goa'},
    {key: '9', value: 'Jammu & Kashmir'},
    {key: '10', value: 'Gujrat'},
    {key: '11', value: 'Maharashtra'},
    {key: '12', value: 'Goa'},
    {key: '13', value: 'Jammu & Kashmir'},
    {key: '14', value: 'Gujrat'},
    {key: '15', value: 'Maharashtra'},
    {key: '16', value: 'Goa'},
    {key: '17', value: 'Jammu & Kashmir'},
    {key: '18', value: 'Gujrat'},
    {key: '19', value: 'Maharashtra'},
    {key: '20', value: 'Goa'},
  ];
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={[styles.setFlex1]}>
          <Text style={[styles.textRegular, {textAlign: 'left'}]}>
            Get started
          </Text>
        </View>
        <View style={[styles.setFlex1, {justifyContent: 'center'}]}>
          <SelectList
            setSelected={setSelected}
            placeholder="Select your country..."
            data={data}
            onSelect={() => alert(selected)}
            inputStyles={styles.dropdownInputStyles}
            dropdownTextStyles={styles.dropdownTextStyles}
            boxStyles={styles.dropdownBoxStyles}
          />
          <TextInput
            style={styles.input}
            onChangeText={setMobile}
            value={mobile}
            keyboardType={'numeric'}
            placeholder="Mobile number"
            placeholderTextColor={'gray'}
          />
          <Pressable
            style={[styles.button, {marginVertical: '9%'}]}
            onPress={() => {
              navigation.navigate('Check Otp');
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
                navigation.navigate('Login by Username & Password');
              }}>
              <Text style={styles.buttonTextAnother}>
                Continue with username & password
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
export default MobileNumber;
