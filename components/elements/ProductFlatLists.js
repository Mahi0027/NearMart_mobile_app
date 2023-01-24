/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles';

const CARD_LENGTH = Dimensions.get('window').width - 40;
const stars = [0, 1, 2, 3, 4];

const data = [
  {
    id: 1,
    images: [
      require('../../assets/Images/extraImages/product-1.jpg'),
      require('../../assets/Images/extraImages/product-2.jpg'),
      require('../../assets/Images/extraImages/product-3.jpg'),
      require('../../assets/Images/extraImages/product-4.jpg'),
      require('../../assets/Images/extraImages/product-5.jpg'),
      require('../../assets/Images/extraImages/product-6.jpg'),
      require('../../assets/Images/extraImages/product-7.jpg'),
      require('../../assets/Images/extraImages/product-8.jpg'),
    ],
    heading: 'Product name appear and variant name',
    details: [
      'Frost Free, Double Door: auto defrost to stop ice-build up',
      'Capacity 253 liters: suitable for families with 2 to 3 members and bachelors.Material of Shelf : Plastic',
      'Energy rating 3 Star : high Energy Efficiency',
      'Manufacturer warranty: 1 year on product, 10 years on compressor',
      'Digital Inverter Compressor : automatic adjustment of speed in response to cooling demand, quieter operation and uses less power',
      'Shelf type: spill proof toughened glass',
      'Inside box: 1 unit Refrigerator & 1 unit user manual',
      'Spl. Features: convertible 3in1 up to 88L extra storage, convert freezer to fridge | voltage range : 100V - 300V | stabilizer free operation | digital display | fresh room | deodorizer',
    ],
    sellerName: 'Ram Naresh Sharma',
    shopName: 'Shree Krishna Electronics',
    originalPrize: '4999',
    discountedPrize: '3999',
    liked: true,
    rating: 4,
  },
  {
    id: 2,
    images: [
      require('../../assets/Images/extraImages/product-1.jpg'),
      require('../../assets/Images/extraImages/product-2.jpg'),
      require('../../assets/Images/extraImages/product-3.jpg'),
      require('../../assets/Images/extraImages/product-4.jpg'),
      require('../../assets/Images/extraImages/product-5.jpg'),
      require('../../assets/Images/extraImages/product-6.jpg'),
      require('../../assets/Images/extraImages/product-7.jpg'),
      require('../../assets/Images/extraImages/product-8.jpg'),
    ],
    heading: 'Product name appear and variant name',
    details: [
      'Frost Free, Double Door: auto defrost to stop ice-build up',
      'Capacity 253 liters: suitable for families with 2 to 3 members and bachelors.Material of Shelf : Plastic',
      'Energy rating 3 Star : high Energy Efficiency',
      'Manufacturer warranty: 1 year on product, 10 years on compressor',
      'Digital Inverter Compressor : automatic adjustment of speed in response to cooling demand, quieter operation and uses less power',
      'Shelf type: spill proof toughened glass',
      'Inside box: 1 unit Refrigerator & 1 unit user manual',
      'Spl. Features: convertible 3in1 up to 88L extra storage, convert freezer to fridge | voltage range : 100V - 300V | stabilizer free operation | digital display | fresh room | deodorizer',
    ],
    sellerName: 'Ram Naresh Sharma',
    shopName: 'Shree Krishna Electronics',
    originalPrize: '4999',
    discountedPrize: '3999',
    liked: true,
    rating: 4,
  },
  {
    id: 3,
    images: [
      require('../../assets/Images/extraImages/product-1.jpg'),
      require('../../assets/Images/extraImages/product-2.jpg'),
      require('../../assets/Images/extraImages/product-3.jpg'),
      require('../../assets/Images/extraImages/product-4.jpg'),
      require('../../assets/Images/extraImages/product-5.jpg'),
      require('../../assets/Images/extraImages/product-6.jpg'),
      require('../../assets/Images/extraImages/product-7.jpg'),
      require('../../assets/Images/extraImages/product-8.jpg'),
    ],
    heading: 'Product name appear and variant name',
    details: [
      'Frost Free, Double Door: auto defrost to stop ice-build up',
      'Capacity 253 liters: suitable for families with 2 to 3 members and bachelors.Material of Shelf : Plastic',
      'Energy rating 3 Star : high Energy Efficiency',
      'Manufacturer warranty: 1 year on product, 10 years on compressor',
      'Digital Inverter Compressor : automatic adjustment of speed in response to cooling demand, quieter operation and uses less power',
      'Shelf type: spill proof toughened glass',
      'Inside box: 1 unit Refrigerator & 1 unit user manual',
      'Spl. Features: convertible 3in1 up to 88L extra storage, convert freezer to fridge | voltage range : 100V - 300V | stabilizer free operation | digital display | fresh room | deodorizer',
    ],
    sellerName: 'Ram Naresh Sharma',
    shopName: 'Shree Krishna Electronics',
    originalPrize: '2399',
    discountedPrize: '2199',
    liked: true,
    rating: 5,
  },
  {
    id: 4,
    images: [
      require('../../assets/Images/extraImages/product-1.jpg'),
      require('../../assets/Images/extraImages/product-2.jpg'),
      require('../../assets/Images/extraImages/product-3.jpg'),
      require('../../assets/Images/extraImages/product-4.jpg'),
      require('../../assets/Images/extraImages/product-5.jpg'),
      require('../../assets/Images/extraImages/product-6.jpg'),
      require('../../assets/Images/extraImages/product-7.jpg'),
      require('../../assets/Images/extraImages/product-8.jpg'),
    ],
    heading: 'Product name appear and variant name',
    details: [
      'Frost Free, Double Door: auto defrost to stop ice-build up',
      'Capacity 253 liters: suitable for families with 2 to 3 members and bachelors.Material of Shelf : Plastic',
      'Energy rating 3 Star : high Energy Efficiency',
      'Manufacturer warranty: 1 year on product, 10 years on compressor',
      'Digital Inverter Compressor : automatic adjustment of speed in response to cooling demand, quieter operation and uses less power',
      'Shelf type: spill proof toughened glass',
      'Inside box: 1 unit Refrigerator & 1 unit user manual',
      'Spl. Features: convertible 3in1 up to 88L extra storage, convert freezer to fridge | voltage range : 100V - 300V | stabilizer free operation | digital display | fresh room | deodorizer',
    ],
    sellerName: 'Ram Naresh Sharma',
    shopName: 'Shree Krishna Electronics',
    originalPrize: '999',
    discountedPrize: '899',
    liked: false,
    rating: 0,
  },
  {
    id: 5,
    images: [
      require('../../assets/Images/extraImages/product-1.jpg'),
      require('../../assets/Images/extraImages/product-2.jpg'),
      require('../../assets/Images/extraImages/product-3.jpg'),
      require('../../assets/Images/extraImages/product-4.jpg'),
      require('../../assets/Images/extraImages/product-5.jpg'),
      require('../../assets/Images/extraImages/product-6.jpg'),
      require('../../assets/Images/extraImages/product-7.jpg'),
      require('../../assets/Images/extraImages/product-8.jpg'),
    ],
    heading: 'Product name appear and variant name',
    details: [
      'Frost Free, Double Door: auto defrost to stop ice-build up',
      'Capacity 253 liters: suitable for families with 2 to 3 members and bachelors.Material of Shelf : Plastic',
      'Energy rating 3 Star : high Energy Efficiency',
      'Manufacturer warranty: 1 year on product, 10 years on compressor',
      'Digital Inverter Compressor : automatic adjustment of speed in response to cooling demand, quieter operation and uses less power',
      'Shelf type: spill proof toughened glass',
      'Inside box: 1 unit Refrigerator & 1 unit user manual',
      'Spl. Features: convertible 3in1 up to 88L extra storage, convert freezer to fridge | voltage range : 100V - 300V | stabilizer free operation | digital display | fresh room | deodorizer',
    ],
    sellerName: 'Ram Naresh Sharma',
    shopName: 'Shree Krishna Electronics',
    originalPrize: '10000',
    discountedPrize: '4500',
    liked: false,
    rating: 2,
  },
];

const setStars = value => {
  let start = '';
  for (let i = 0; i < stars; i++) {
    start += (
      <Text style={{color: 'black'}}>
        {i}:{value}
      </Text>
    );
  }
  return start;
};

const ProductFlatLists = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView pagingEnabled horizontal style={[internalStyle.container]}>
        {data.map((product, index) => (
          <View key={index} style={[styles.box]}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Pressable
                onPress={() => {
                  navigation.navigate('ProductDetail', {
                    productId: product.id,
                    productImages: product.images,
                    productHeading: product.heading,
                    productDetails: product.details,
                    productSeller: product.sellerName,
                    productShop: product.shopName,
                    productOriginalPrize: product.originalPrize,
                    productDiscountedPrize: product.discountedPrize,
                    productLiked: product.liked,
                    productRating: product.rating,
                  });
                }}>
                <View style={[{flex: 1}]}>
                  <Image
                    key={index}
                    source={product.images[0]}
                    style={internalStyle.imageStyle}
                    resizeMode="contain"
                    resizeMethod="resize"
                  />
                </View>
              </Pressable>
              <View style={[{flex: 2, paddingLeft: '5%', paddingRight: '1%'}]}>
                {/* Product heading */}
                <Pressable
                  onPress={() => {
                    navigation.navigate('ProductDetail', {
                      productId: product.id,
                      productImages: product.images,
                      productHeading: product.heading,
                      productDetails: product.details,
                      productSeller: product.sellerName,
                      productShop: product.shopName,
                      productOriginalPrize: product.originalPrize,
                      productDiscountedPrize: product.discountedPrize,
                      productLiked: product.liked,
                      productRating: product.rating,
                    });
                  }}>
                  <Text
                    style={[
                      styles.textMedium,
                      {
                        textAlign: 'left',
                        justifyContent: 'space-around',
                        fontSize: 14,
                        marginTop: '4%',
                      },
                    ]}>
                    {product.heading}
                  </Text>
                </Pressable>
                {/* seller and shop name  */}
                <Text
                  style={[
                    styles.textRegular,
                    {
                      textAlign: 'left',
                      justifyContent: 'space-around',
                      fontSize: 11,
                      color: 'gray',
                      marginTop: '2%',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.textRegular,
                      {color: 'gray', fontWeight: 'bold'},
                    ]}>
                    seller:&nbsp;&nbsp;
                  </Text>
                  {product.shopName} | {product.sellerName}
                </Text>
                {/* product price and discount */}
                <View
                  style={[
                    {
                      flex: 1,
                      flexDirection: 'row',
                      marginTop: '4%',
                      marginBottom: '-8%',
                    },
                  ]}>
                  <View style={[{flex: 3}]}>
                    <Text
                      style={[
                        styles.textRegular,
                        {
                          textAlign: 'left',
                          fontSize: 14,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.textRegular,
                          {color: 'gray', fontWeight: 'bold', fontSize: 11},
                        ]}>
                        PRICE:&nbsp;
                      </Text>
                      {product.discountedPrize} /- ₹{' '}
                      <Text
                        style={{
                          textDecorationLine: 'line-through',
                          color: 'gray',
                          fontSize: 11,
                        }}>
                        {product.originalPrize}
                      </Text>
                    </Text>
                  </View>
                  <View style={{flex: 2}}>
                    <Text
                      style={[
                        styles.textRegular,
                        {fontSize: 11, color: '#3DDE61'},
                      ]}>
                      {' '}
                      {100 -
                        Math.trunc(
                          product.discountedPrize *
                            (100 / product.originalPrize),
                        )}
                      % Discount
                    </Text>
                  </View>
                </View>
                {/* bottom starts and other icons */}
                <View style={[{flex: 1, flexDirection: 'row'}]}>
                  <View style={[{flex: 1}]}>
                    <View
                      style={{flex: 1, flexDirection: 'row', marginTop: '14%'}}>
                      {stars.map((star, i) => {
                        if (i + 1 <= product.rating) {
                          return (
                            <Ionicons
                              name={'star'}
                              size={18}
                              color={'#1B1B1B'}
                            />
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
                  <View style={[{flex: 1, flexDirection: 'row'}]}>
                    <View style={[{flex: 1, justifyContent: 'center'}]}>
                      <Ionicons
                        name={'eye-outline'}
                        size={30}
                        color={'#1B1B1B'}
                        style={[
                          {
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginRight: 5,
                          },
                        ]}
                      />
                    </View>
                    <View style={{flex: 2, justifyContent: 'center'}}>
                      <Pressable
                        style={[styles.button, {height: 40}]}
                        onPress={() => {
                          alert('add to cart');
                        }}>
                        <Text style={styles.buttonText}>add to cart</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const internalStyle = StyleSheet.create({
  container: {
    width: CARD_LENGTH,
    height: 180,
  },
  imageStyle: {
    width: CARD_LENGTH * (1 / 3),
    padding: 1,
    height: 173,
    borderRadius: 10,
  },
});
export default ProductFlatLists;
