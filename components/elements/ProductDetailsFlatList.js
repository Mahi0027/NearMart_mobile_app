import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles';

const CARD_LENGTH = Dimensions.get('window').width;

const ProductDetailsFlatList = ({images}) => {
  const [imgActive, setImgActive] = useState(0);
  const navigation = useNavigation();

  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / CARD_LENGTH);
      if (slide !== imgActive) {
        setImgActive(slide);
      }
    }
  };
  return (
    <>
      <ScrollView
        pagingEnabled
        horizontal
        bounces={false}
        bouncesZoom={true}
        showsHorizontalScrollIndicator={true}
        onScroll={({nativeEvent}) => onchange(nativeEvent)}
        style={[internalStyle.container]}>
        {images.map((image, index) => (
          <View key={index} style={[internalStyle.box]}>
            <Image
              key={index}
              source={image}
              style={internalStyle.imageStyle}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
        ))}
      </ScrollView>
      <View style={internalStyle.normalDot}>
        {images.map((image, index) => (
          <Text
            key={index}
            style={
              imgActive === index
                ? internalStyle.dotActive
                : internalStyle.dotInActive
            }>
            ●
          </Text>
        ))}
      </View>
    </>
  );
};

const internalStyle = StyleSheet.create({
  container: {
    width: CARD_LENGTH,
    height: 500,
  },
  box: {
    width: CARD_LENGTH,
    height: 500,
    borderRadius: 10,
    color: '#C5C5C5',
    fontFamily: 'Montserrat-Regular',
  },
  imageStyle: {
    width: CARD_LENGTH,
    height: 500,
    borderRadius: 10,
  },
  normalDot: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
    zIndex: 999,
  },
  dotActive: {
    marginHorizontal: 8,
    color: '#1B1B1B',
    opacity: 0.8,
    fontSize: 20,
  },
  dotInActive: {
    marginHorizontal: 5,
    color: '#1B1B1B',
    opacity: 0.3,
    fontSize: 10,
  },
});
export default ProductDetailsFlatList;
