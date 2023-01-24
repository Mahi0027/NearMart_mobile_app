import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../styles';

const CARD_LENGTH = Dimensions.get('window').width;

const ShopDetail = ({navigation, route}) => {
  return (
    <>
      <ScrollView>
        <View>
          <Image
            source={require('../../assets/Images/extraImages/shop.jpg')}
            style={internalStyle.imageStyle}
            resizeMode="stretch"
            resizeMethod="resize"
          />
        </View>
        <View style={internalStyle.ShopKeeperBox}>
          <Image
            source={require('../../assets/Images/extraImages/shopkeeper.jpg')}
            style={internalStyle.shopkeeperImage}
            resizeMode="stretch"
            resizeMethod="resize"
          />
        </View>
        <View style={[styles.container, {marginTop: 0}]}>
          <Text style={[styles.textMedium, {textAlign: 'left', fontSize: 20}]}>
            {productHeading}
          </Text>
          {/* rating and user */}
          <View
            style={[
              styles.elements,
              {flex: 1, flexDirection: 'row', marginTop: 5},
            ]}>
            <View style={[{flex: 2}]}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                {stars.map((star, i) => {
                  if (i + 1 <= productRating) {
                    return (
                      <Ionicons name={'star'} size={18} color={'#1B1B1B'} />
                    );
                  } else {
                    return (
                      <Ionicons
                        name={'star-outline'}
                        size={18}
                        color={'#1B1B1B'}
                      />
                    );
                  }
                })}
              </View>
            </View>
            <View style={[{flex: 5}]}>
              <Text style={[styles.textRegular, {textAlign: 'left'}]}>
                | 30 Users
              </Text>
            </View>
          </View>
          {/* price */}
          <View
            style={[
              styles.elements,
              {flex: 1, flexDirection: 'row', marginTop: 5, textAlign: 'left'},
            ]}>
            <View style={{flex: 1}}>
              <Text
                style={[styles.textRegular, {textAlign: 'left', marginTop: 3}]}>
                Price:
              </Text>
            </View>
            <View style={{flex: 5}}>
              <Text
                style={[styles.textRegular, {textAlign: 'left', fontSize: 20}]}>
                {productDiscountedPrize} /- &#8377;{' '}
                <Text
                  style={{textDecorationLine: 'line-through', color: 'gray'}}>
                  {' '}
                  {productOriginalPrize}
                </Text>
              </Text>
            </View>
            <View style={{flex: 3}}>
              <Text
                style={[styles.textRegular, {fontSize: 20, color: '#3DDE61'}]}>
                {100 -
                  Math.trunc(
                    productDiscountedPrize * (100 / productOriginalPrize),
                  )}
                % Discount
              </Text>
            </View>
          </View>
          {/* details */}
          <View style={[{marginTop: 5}]}>
            <Text style={{color: 'gray'}}>Details:</Text>
            {productDetails.map((productDetail, index) => (
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textRegular}>{'\u2022'}</Text>
                <Text
                  style={[
                    styles.textRegular,
                    {flex: 1, paddingLeft: 5, textAlign: 'left'},
                  ]}>
                  {productDetail}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const internalStyle = StyleSheet.create({
  container: {
    width: CARD_LENGTH,
    height: 500,
  },
  ShopKeeperBox: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginTop: -75,
  },
  imageStyle: {
    width: CARD_LENGTH,
    height: 250,
  },
  shopkeeperImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
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
export default ShopDetail;
