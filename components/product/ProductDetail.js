/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Pressable, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../styles';
import {SafeAreaView} from 'react-navigation';
import ProductDetailsFlatList from '../elements/ProductDetailsFlatList';
import {ScrollView} from 'react-native-gesture-handler';
import {style} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import productReview from '../../assets/Data/productReview.json';

const productReviewData = JSON.parse(JSON.stringify(productReview));
const stars = [0, 1, 2, 3, 4];

const ProductDetail = ({navigation, route}) => {
  const {
    productId,
    productImages,
    productHeading,
    productDetails,
    productShopId,
    productSeller,
    productShop,
    productShopUsers,
    productShopRating,
    productOriginalPrize,
    productDiscountedPrize,
    productLiked,
    productRating,
  } = route.params;
  return (
    <>
      <ScrollView>
        <View>
          <ProductDetailsFlatList images={productImages} />
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
        {/* horizontal line */}
        <View style={{borderBottomColor: '#1B1B1B', borderBottomWidth: 0.5}} />
        {/* shop name and seller name */}
        <View style={[styles.container, {marginTop: 0}]}>
          <Pressable
            onPress={() => {
              alert('shop details');
            }}>
            <Text
              style={[styles.textMedium, {textAlign: 'left', fontSize: 16}]}>
              <Text style={{color: 'gray'}}>Shop: </Text>
              {productShop} |{' '}
              <Text style={{fontSize: 12}}>{productSeller}</Text>
            </Text>
          </Pressable>
          {/* shop rating and users */}
          <View style={[{flex: 1, flexDirection: 'row', marginTop: 5}]}>
            <View style={[{flex: 2}]}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                {stars.map((star, i) => {
                  if (i + 1 <= productShopRating) {
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
                | {productShopUsers} Users
              </Text>
            </View>
          </View>
          {/* location */}
          <View style={{flex: 1, flexDirection: 'row', marginTop: 5}}>
            <View style={{flex: 1}}>
              <Text
                style={[
                  styles.textMedium,
                  {fontSize: 14, color: '#3DDE61', textAlign: 'left'},
                ]}>
                Nearly 5Km far from you
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Pressable
                onPress={() => {
                  alert('location');
                }}>
                <Ionicons
                  name={'location-outline'}
                  size={30}
                  color={'#3DDE61'}
                />
              </Pressable>
            </View>
          </View>
          {/* add review button */}
          <View style={[styles.elements, {marginTop: 5}]}>
            <Pressable
              style={[styles.button]}
              onPress={() => {
                alert('Add Review');
              }}>
              <Text style={styles.buttonText}>Add Review</Text>
            </Pressable>
          </View>
          {/* add to card button */}
          <View style={[styles.elements, {marginTop: 5}]}>
            <Pressable
              style={[styles.button]}
              onPress={() => {
                alert('Add To Cart');
              }}>
              <Text style={styles.buttonText}>Add To Cart</Text>
            </Pressable>
          </View>
        </View>
        {/* horizontal line */}
        <View
          style={{
            borderBottomColor: '#1B1B1B',
            borderBottomWidth: 0.5,
          }}
        />
        {/* product user reviews */}
        <View style={[styles.container, {marginTop: 0}]}>
          <Text style={[styles.textMedium, {fontSize: 20}]}>
            Ratings & Reviews
          </Text>
          {productReviewData.map((productReview, index) => (
            <View>
              <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                {productReview.images.map((image, index) => (
                  <View key={index} style={{}}>
                    <Image
                      key={index}
                      source={require('../../assets/Images/extraImages/product-1.jpg')}
                      style={internalStyle.imageStyle}
                      resizeMode="contain"
                      resizeMethod="resize"
                    />
                  </View>
                ))}
              </View>
              <Text style={[internalStyle.badge, {color: '#FFFFFF'}]}>
                {productReview.rating}
                {'  '}
                <Ionicons
                  name={'star-outline'}
                  size={14}
                  color={'#FFFFFF'}
                  style={{textAlignVertical: 'center', alignItems: 'center'}}
                />
              </Text>
              <Text style={[styles.textRegular, {textAlign: 'left'}]}>
                "{productReview.review}"
              </Text>
              <Text
                style={[
                  styles.textRegular,
                  {
                    textAlign: 'right',
                    fontSize: 12,
                    fontStyle: 'italic',
                    color: 'gray',
                  },
                ]}>
                {productReview.username}
              </Text>
              {/* horizontal line */}
              <View
                style={{
                  borderBottomColor: '#1B1B1B',
                  borderBottomWidth: 0.5,
                  opacity: 0.2,
                }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const internalStyle = StyleSheet.create({
  badge: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    backgroundColor: '#1B1B1B',
    marginTop: '1%',
    width: 50,
    height: 20,
    borderRadius: 10,
  },
  imageStyle: {
    width: 75,
    height: 75,
    padding: 1,
    borderRadius: 10,
  },
});
export default ProductDetail;
