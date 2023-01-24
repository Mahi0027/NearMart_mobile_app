/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../styles';
import {SafeAreaView} from 'react-navigation';
import AnimatedFlatLists from '../elements/AnimatedFlatLists';
import Header from '../elements/Header';
import ProductFlatLists from '../elements/ProductFlatLists';
import productLists from '../../assets/Data/productLists.json';

let container_padding = 20;
const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = (SCREEN_WIDTH - container_padding * 2) / 8;
const SEARCH_CARD_LENGTH = Dimensions.get('window').width - 40;

let textColor = '#1B1B1B';
let textSize = 16;
let textWeight = '100';
const stars = [0, 1, 2, 3, 4];
const productListsData = JSON.parse(JSON.stringify(productLists));
var getData = [];
let result = [];

const categories = [
  {
    id: 1,
    name: 'Electronics1',
    items: [
      'Electronics1 item1',
      'Electronics1 item2',
      'Electronics1 item3',
      'Electronics1 item4',
      'Electronics1 item5',
    ],
  },
  {
    id: 2,
    name: 'Footwear2',
    items: [
      'Footwear2 item1',
      'Footwear2 item2',
      'Footwear2 item3',
      'Footwear2 item4',
      'Footwear2 item5',
    ],
  },
  {
    id: 3,
    name: 'Clothing3',
    items: [
      'Clothing3 item1',
      'Clothing3 item2',
      'Clothing3 item3',
      'Clothing3 item4',
      'Clothing3 item5',
    ],
  },
  {
    id: 4,
    name: 'Hand Craft4',
    items: [
      'Hand Craft4 item1',
      'Hand Craft4 item2',
      'Hand Craft4 item3',
      'Hand Craft4 item4',
      'Hand Craft4 item5',
    ],
  },
  {
    id: 5,
    name: 'Electronics5',
    items: [
      'Electronics5 item1',
      'Electronics5 item2',
      'Electronics5 item3',
      'Electronics5 item4',
      'Electronics5 item5',
    ],
  },
  {
    id: 6,
    name: 'Footwear6',
    items: [
      'Footwear6 item1',
      'Footwear6 item2',
      'Footwear6 item3',
      'Footwear6 item4',
      'Footwear6 item5',
    ],
  },
  {
    id: 7,
    name: 'Clothing7',
    items: [
      'Clothing7 item1',
      'Clothing7 item2',
      'Clothing7 item3',
      'Clothing7 item4',
      'Clothing7 item5',
    ],
  },
  {
    id: 8,
    name: 'Hand Craft8',
    items: [
      'Hand Craft8 item1',
      'Hand Craft8 item2',
      'Hand Craft8 item3',
      'Hand Craft8 item4',
      'Hand Craft8 item5',
    ],
  },
  {
    id: 9,
    name: 'Electronics9',
    items: [
      'Electronics9 item1',
      'Electronics9 item2',
      'Electronics9 item3',
      'Electronics9 item4',
      'Electronics9 item5',
    ],
  },
  {
    id: 10,
    name: 'Footwear10',
    items: [
      'Footwear10 item1',
      'Footwear10 item2',
      'Footwear10 item3',
      'Footwear10 item4',
      'Footwear10 item5',
    ],
  },
];
const ProductHome = ({navigation}) => {
  const [searchedText, setSearchedText] = useState('');
  const [itemList, setItemList] = useState(categories[0].items);

  useEffect(() => {
    result = [];
    (async () => {
      if (searchedText !== '') {
        await productSearchScreen(searchedText);
      }
    })();
  });

  const items = category => {
    for (let key in categories) {
      if (categories[key].name === category) {
        setItemList(categories[key].items);
        break;
      }
    }
  };

  // product home screen
  const productHomeScreen = () => {
    return (
      <View>
        <View style={styles.elements}>
          <AnimatedFlatLists />
        </View>
        <View style={styles.elements}>
          <ProductFlatLists />
        </View>
        <View style={styles.elements}>
          <ScrollView
            horizontal
            style={{
              borderBottomColor: '#1B1B1B',
              borderBottomWidth: 1.5,
              paddingBottom: 10,
            }}>
            {categories.map((category, index) => (
              <View key={index} style={{flex: 1, flexDirection: 'row'}}>
                <Pressable
                  onPress={() => {
                    items(category.name);
                  }}>
                  <Text
                    style={[
                      styles.textRegular,
                      {
                        flex: 1,
                        marginHorizontal: CARD_WIDTH,
                        fontSize: textSize,
                        color: textColor,
                        fontWeight: textWeight,
                      },
                    ]}>
                    {category.name}
                  </Text>
                </Pressable>
                <Text style={{flex: 1, color: '#1B1B1B'}}>|</Text>
              </View>
            ))}
          </ScrollView>
          <ScrollView
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              paddingBottom: 10,
            }}>
            {itemList.map((item, index) => (
              <View key={index}>
                <Pressable
                  onPress={() => {
                    alert(item);
                  }}>
                  <Text
                    style={[
                      styles.textRegular,
                      {
                        fontsize: 14,
                        padding: 15,
                        textAlign: 'left',
                        borderBottomColor: 'gray',
                        borderBottomWidth: 0.3,
                      },
                    ]}>
                    {item}
                  </Text>
                </Pressable>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };

  // searched item list show
  const productSearchScreen = text => {
    getData = [];
    for (let k in productListsData) {
      if (productListsData[k]['heading'].includes(text)) {
        getData.push(productListsData[k]);
      }
    }
    let jsxArr = [];
    if (getData.length > 0) {
      for (let k in getData) {
        jsxArr.push(
          <View key={getData[k]['id']} style={[styles.elements, styles.box]}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Pressable
                onPress={() => {
                  navigation.navigate('ProductDetail', {
                    productId: getData[k]['id'],
                    productImages: getData[k]['images'],
                    productHeading: getData[k]['heading'],
                    productDetails: getData[k]['details'],
                    productShopId: getData[k]['shopId'],
                    productSeller: getData[k]['sellerName'],
                    productShop: getData[k]['shopName'],
                    productShopRating: getData[k]['shopRating'],
                    productShopUsers: getData[k]['shopUsers'],
                    productOriginalPrize: getData[k]['originalPrize'],
                    productDiscountedPrize: getData[k]['discountedPrize'],
                    productLiked: getData[k]['liked'],
                    productRating: getData[k]['rating'],
                  });
                }}>
                <View style={[{flex: 1}]}>
                  <Image
                    key={getData[k]['id']}
                    source={require('../../assets/Images/extraImages/product-1.jpg')}
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
                      productId: getData[k]['id'],
                      productImages: getData[k]['images'],
                      productHeading: getData[k]['heading'],
                      productDetails: getData[k]['details'],
                      productShopId: getData[k]['shopId'],
                      productSeller: getData[k]['sellerName'],
                      productShop: getData[k]['shopName'],
                      productShopRating: getData[k]['shopRating'],
                      productShopUsers: getData[k]['shopUsers'],
                      productOriginalPrize: getData[k]['originalPrize'],
                      productDiscountedPrize: getData[k]['discountedPrize'],
                      productLiked: getData[k]['liked'],
                      productRating: getData[k]['rating'],
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
                    {getData[k]['heading']}
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
                  {getData[k]['shopName']} | {getData[k]['sellerName']}
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
                      {getData[k]['discountedPrize']} /- ₹{' '}
                      <Text
                        style={{
                          textDecorationLine: 'line-through',
                          color: 'gray',
                          fontSize: 11,
                        }}>
                        {getData[k]['originalPrize']}
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
                          getData[k]['discountedPrize'] *
                            (100 / getData[k]['originalPrize']),
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
                        if (i + 1 <= getData[k]['rating']) {
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
          </View>,
        );
      }
      console.log(jsxArr.length);
      return jsxArr;
    } else {
      return (
        <View style={styles.elements}>
          <Ionicons
            name={'sad-outline'}
            size={100}
            color={'#A6A6A8'}
            style={[
              {
                justifyContent: 'center',
                textAlign: 'center',
              },
            ]}
          />
          <Text style={[styles.textRegular, {color: '#1B1B1B', fontSize: 20}]}>
            Product not found
          </Text>
        </View>
      );
    }
  };

  return (
    <>
      <Header navigation={navigation} />
      <SafeAreaView style={[styles.container]}>
        <View
          style={[
            {
              flexDirection: 'row',
              borderColor: '#A6A6A6',
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 10,
            },
          ]}>
          <Ionicons
            name={'search-outline'}
            size={20}
            color={'#A6A6A8'}
            style={[
              {
                justifyContent: 'center',
                textAlign: 'center',
                marginRight: 5,
                marginTop: 15,
              },
            ]}
          />
          <TextInput
            placeholder="Search..."
            placeholderTextColor={'gray'}
            style={{width: SCREEN_WIDTH * 0.82, fontSize: 16, color: '#1B1B1B'}}
            onChangeText={val => setSearchedText(val)}
          />
        </View>
        <ScrollView>
          {searchedText === ''
            ? productHomeScreen()
            : productSearchScreen(searchedText)}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const internalStyle = StyleSheet.create({
  container: {
    width: SEARCH_CARD_LENGTH,
    height: 180,
  },
  imageStyle: {
    width: SEARCH_CARD_LENGTH * (1 / 3),
    padding: 1,
    height: 173,
    borderRadius: 10,
  },
});
export default ProductHome;
