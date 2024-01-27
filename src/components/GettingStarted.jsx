import React, { useRef, useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Carousel from 'react-native-snap-carousel';
import { CalorieGoalContext } from '../contexts/CalorieGoalContext';

// image carousel slides and text
const cards = [
  { id: 1, image: require('../images/hazel_swimming.png'), text: 'Welcome', subtext: 'Thank you for choosing Food Tracker by Megan L\n\n\n\n\n\n' },
  { id: 2, image: require('../images/business.png'), text: 'What is your calories intake goal?', subtext: '' },
  { id: 3, image: require('../images/pleasure.png'), text: 'deez 3', subtext: 'deez 3' },
  { id: 4, image: require('../images/pleasure.png'), text: 'deez 4', subtext: 'deez 4' },
  { id: 5, image: require('../images/pleasure.png'), text: 'All set!', subtext: 'Press the "Finish" button to continue' },
];

const App = () => {
  const carouselRef = useRef(null);
  // index of calorie list
  const [activeIndex, setActiveIndex] = useState(0);
  // values of calories (e.g. 1200, 1300, etc.)
  const calorieGoalContext = useContext(CalorieGoalContext);

  const navigation = useNavigation()

  function handleFinish() {
    navigation.navigate('Home')
  }

  const renderItem = ({ item }) => {
    // if at the calorie intake goal selection card, provide calories choices
    if (item.id === 2) {
      return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={styles.cardContainer}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.text}</Text>
            <FlatList
              data={Array.from({ length: 14 }, (_, i) => i * 100 + 1200)}
              renderItem={({ item }) => (
                // when item pressed, highlight item
                <TouchableOpacity
                  style={[styles.optionContainer, calorieGoalContext.calorieGoal === item ? styles.selectedOption : null]}
                  onPress={() => {
                    // set as currently selected calorie goal
                    calorieGoalContext.setCalorieGoal(item);
                  }}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.toString()}
              contentContainerStyle={styles.optionList}
              extraData={activeIndex}
            />
          </View>
        </GestureHandlerRootView>
      );
    } else if (item.id === 5) {
      return (
        <View styles={styles.cardContainer}>
          <Image source={item.image} style={styles.cardImage} />
          <Text style={styles.cardText}>{item.text}</Text>
          <Text style={styles.cardSubText}>{item.subtext}</Text>
          <TouchableOpacity
            style={styles.finishButton}
            onPress={handleFinish}
          >
            <Text style={styles.finishButtonText}>Finish</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.cardImage} />
        <Text style={styles.cardText}>{item.text}</Text>
        <Text style={styles.cardSubText}>{item.subtext}</Text>
      </View>
    );
  };

  const onSnapToItem = (index) => {
    // brings user back to calorie goal choice if it is not chosen and swiped past it
    if (index > 1 && calorieGoalContext.calorieGoal === 0) {
      carouselRef.current.snapToItem(1, false, false)
      Alert.alert('Warning', 'Please choose a calorie goal to continue', [
        {
          text: 'OK',
          onPress: () => console.log('Warning: Calorie Goal not chosen yet'),
        }
      ]);
    }
    setActiveIndex(index);
  };

  const renderArrow = (direction) => {
    if (direction === 'left' && activeIndex !== 0) {
      return (
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={() => carouselRef.current?.snapToPrev()}
        >
          <Image source={require('../images/left_arrow.png')} style={styles.arrowImage} />
        </TouchableOpacity>
      );
    } else if (direction === 'right' && activeIndex === 1 && calorieGoalContext.calorieGoal === 0) {
      return (
        <Image source={require('../images/right_arrow.png')}
          style={{
            width: 30,
            height: 30,
            resizeMode: 'contain',
            opacity: 0.25
          }} />
      );
    } else if (direction === 'right' && activeIndex !== cards.length - 1) {
      return (
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={() => carouselRef.current?.snapToNext()}
        >
          <Image source={require('../images/right_arrow.png')} style={styles.arrowImage} />
        </TouchableOpacity>
      );
    }
    return null;
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
    textAlign: 'center',
  },
  cardContainer: {
    width: 300,
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  cardSubText: {
    fontSize: 18,
    marginBottom: 16,
  },
  arrowContainerLeft: {
    position: 'absolute',
    left: 25,
    top: '50%',
    transform: [{ translateY: 325 }],
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowContainerRight: {
    position: 'absolute',
    right: 25,
    top: '50%',
    transform: [{ translateY: 325 }],
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
    marginBottom: 65,
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
  optionContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 18,
  },
  optionList: {
    marginTop: 16,
  },
  selectedOption: {
    backgroundColor: 'lightgray',
  },
  finishButton: {
    position: 'absolute',
    top: '105%',
    left: '25%',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#338FFF',
  },
  finishButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;