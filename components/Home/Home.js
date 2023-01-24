import React from 'react';
import {ScrollView, View, Text, Pressable, Button} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import styles from '../../styles';
import Header from '../elements/Header';

const Home = ({navigation}) => {
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
    <>
      <Header navigation={navigation} />
      <View style={[styles.container, styles.border]}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {/* <SelectList
            setSelected={setSelected}
            placeholder="Select your city..."
            data={data}
            onSelect={() => alert(selected)}
            inputStyles={[styles.dropdownInputStyles, {justifyContent: }]}
            dropdownTextStyles={styles.dropdownTextStyles}
            boxStyles={[styles.dropdownBoxStyles, {marginHorizontal: '25%'}]}
          /> */}
        </ScrollView>
      </View>
    </>
  );
};

export default Home;
