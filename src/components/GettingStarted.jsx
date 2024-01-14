import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'deprecated-react-native-prop-types';

const cards = [
  { id: 1, image: require('../images/hazel_swimming.png'), text: 'Welcome', subtext: 'Thank you for choosing Food Tracker by Megan L' },
  { id: 2, image: require('../images/business.png'), text: 'What is your calories intake goal per day?', subtext: 'On average, a woman should eat 2000 calories per day to maintain her weight, and she should limit her caloric intake to 1500 or less in order to lose one pound per week. For the average male to maintain his body weight, he should eat 2500 calories per day, or 2000 a day if he wants to lose one pound per week.' },
  { id: 3, image: require('../images/pleasure.png'), text: 'deez 3', subtext: 'deez 3' },
  { id: 4, image: require('../images/owo7.png'), text: 'deez 4', subtext: 'deez 4' },
  { id: 5, image: require('../images/tired.png'), text: 'deez 5', subtext: 'deez 5' },
];

const App = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.cardImage} />
        <Text style={styles.cardText}>{item.text}</Text>
        <Text style={styles.cardSubText}>{item.subtext}</Text>
      </View>
    );
  };

  const onSnapToItem = (index) => {
    setActiveIndex(index);
  };

  const renderArrow = (direction) => {
    if (direction === 'left') {
      return (
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={() => carouselRef.current?.snapToPrev()}>
          <Image source={require('../images/left_arrow.png')} style={styles.arrowImage} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={() => carouselRef.current?.snapToNext()}>
          <Image source={require('../images/right_arrow.png')} style={styles.arrowImage} />
        </TouchableOpacity>
      );
    }
  };

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < cards.length; i++) {
      dots.push(
        <View
          key={i}
          style={[
            styles.dot,
            i === activeIndex ? styles.activeDot : null,
          ]}
        />,
      );
    }
    return dots;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Getting Started</Text>
      <Carousel
        ref={carouselRef}
        data={cards}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        onSnapToItem={onSnapToItem}
      />
      <View style={styles.arrowContainerLeft}>{renderArrow('left')}</View>
      <View style={styles.arrowContainerRight}>{renderArrow('right')}</View>
      <View style={styles.dotContainer}>{renderDots()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#222222',
    marginTop: 50,
  },
  cardContainer: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
  },
  cardSubText: {
    fontSize: 18,
    marginTop: 32,
    marginBottom: 16,
  },
  arrowContainerLeft: {
    position: 'absolute',
    left: 25,
    top: '50%',
    transform: [{ translateY: 250 }],
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowContainerRight: {
    position: 'absolute',
    right: 25,
    top: '50%',
    transform: [{ translateY: 250 }],
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 140,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'black',
  },
});

export default App;