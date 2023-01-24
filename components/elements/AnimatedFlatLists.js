/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Image, FlatList, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  interpolate,
  Extrapolate,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const SRC_WIDTH = Dimensions.get('window').width - 40;
const CARD_LENGTH = SRC_WIDTH;
const SPACING = SRC_WIDTH * 0.02;
// const SIDECARD_LENGTH = (SRC_WIDTH * 0.18) / 2;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const DATA = [
  {
    id: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    title: '1',
  },
  {
    id: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: '2',
  },
  {
    id: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: '3',
  },
  {
    id: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: '4',
  },
  {
    id: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1756&q=80',
    title: '5',
  },
  {
    id: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: '6',
  },
];

function Item({index, scrollX}) {
  const size = useSharedValue(0.8);

  const inputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ];

  size.value = interpolate(
    scrollX,
    inputRange,
    [0.8, 1, 0.8],
    Extrapolate.CLAMP,
  );

  const cardStyle = useAnimatedStyle(() => {
    return {transform: [{scaleY: size.value}]};
  });
  return (
    <Animated.View
      style={[
        innerStyle.card,
        cardStyle,
        {
          marginLeft: index === 0 ? 0 : SPACING,
          marginRight: index === 5 ? 0 : SPACING,
        },
      ]}>
      <Image
        source={require('../../assets/Images/LandingPage/image_2.jpg')}
        style={{width: '100%', height: '100%'}}
      />
    </Animated.View>
  );
}

const AnimatedFlatLists = () => {
  const [scrollX, setScrollX] = useState(0);
  return (
    <Animated.View>
      <AnimatedFlatList
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={true}
        decelerationRate={0.8}
        snapToInterval={CARD_LENGTH + SPACING * 1.72}
        disableIntervalMomentum={false}
        disableScrollViewPanResponder={false}
        snapToAlignment={'center'}
        data={DATA}
        horizontal={true}
        renderItem={({item, index}) => {
          return <Item index={index} scrollX={scrollX} />;
        }}
        keyExtractor={item => item.id}
        onScroll={event => {
          setScrollX(event.nativeEvent.contentOffset.x);
        }}
      />
    </Animated.View>
  );
};

const innerStyle = StyleSheet.create({
  card: {
    width: CARD_LENGTH,
    height: 250,
    overflow: 'hidden',
    borderRadius: 10,
  },
});

export default AnimatedFlatLists;
