/* eslint-disable react-native/no-inline-styles */
import {View, Image} from 'react-native';
import React from 'react';

const BannerSlider = ({data}) => {
  return (
    <View>
      <Image
        source={data}
        style={{height: 150, width: 300, borderRadius: 10}}
      />
    </View>
  );
};

export default BannerSlider;
