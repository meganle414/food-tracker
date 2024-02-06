import React, { useRef, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import Carousel from 'react-native-snap-carousel';
import {Picker} from '@react-native-picker/picker';
import { CalorieGoalContext } from '../contexts/CalorieGoalContext';
import { WeightContext } from '../contexts/WeightContext';
import { WeightGoalContext } from '../contexts/WeightGoalContext';
import { CarbGoalContext } from '../contexts/CarbGoalContext';
import { ProteinGoalContext } from '../contexts/ProteinGoalContext';
import { FatGoalContext } from '../contexts/FatGoalContext';
import { NameContext } from '../contexts/NameContext';

// image carousel slides and text
const cards = [
  { id: 1, image: require('../images/logo.png'), text: 'Welcome\n', subtext: 'Thank you for choosing Food Tracker\n\n\n\n\n\n\n\n\n\n\n\n' },
  { id: 2, image: require('../images/calorie_intake.png'), text: 'What is your calories intake goal?', subtext: '' },
  { id: 3, image: require('../images/scale.png'), text: 'What is your current weight?', subtext: '\n\n\n\n\n\n' },
  { id: 4, image: require('../images/scale.png'), text: 'What is your goal weight?\n', subtext: '' },
  { id: 5, image: require('../images/nutrition_goals.png'), text: 'What are your nutrition goals?', subtext: '\n\n' },
  { id: 6, image: require('../images/name.png'), text: 'What is your name?\n', subtext: '\n\n\n\n\n\n\n\n\n\n\n\n' },
  { id: 7, image: require('../images/celebrate.png'), text: 'All set!\n', subtext: '\n\n\n\n\n\n' },
];

const App = () => {
  const carouselRef = useRef(null);
  // index of calorie list
  const [activeIndex, setActiveIndex] = useState(0);
  // values of calories (e.g. 1200, 1300, etc.)
  const calorieGoalContext = useContext(CalorieGoalContext);

  // value of user's current weight
  const weightContext = useContext(WeightContext);

  // value of user's current weight
  const weightGoalContext = useContext(WeightGoalContext);

  // values of nutrition goals (carbs, protein, fats) in percentages, adding up to 100% of calorie goal
  const carbGoalContext = useContext(CarbGoalContext);
  const proteinGoalContext = useContext(ProteinGoalContext);
  const fatGoalContext = useContext(FatGoalContext);

  // total percentage of nutrition goals
  const [totalNutrition, setTotalNutrition] = useState(0);

  // user's name
  const nameContext = useContext(NameContext);

  const navigation = useNavigation()

  function handleFinish() {  // change screen to Home screen
    navigation.navigate('Dashboard')
  }

  const renderItem = ({ item }) => {
    if (item.id === 2) {  // if at calorie intake goal selection card, provide calories choices
      return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={styles.cardContainer}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.text}</Text>
            <Text style={styles.optionText}>Generally, the recommended daily calorie intake is 2,000 calories a day for women and 2,500 for men</Text>
            <FlatList
              data={Array.from({ length: 29 }, (_, i) => i * 100 + 1200)}
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
    } else if (item.id === 3) {  // if at current weight selection card, provide weight choices
      return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.cardContainer}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardText}>{item.text}</Text>
              <FlatList
                data={Array.from({ length: 211 }, (_, i) => (i + 90) + ' lbs')}
                renderItem={({ item }) => (
                  // when item pressed, highlight item
                  <TouchableOpacity
                    style={[styles.optionContainer, weightContext.weight === item ? styles.selectedOption : null]}
                    onPress={() => {
                      // set as currently selected weight
                      weightContext.setWeight(item);
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
    } else if (item.id === 4) {  // if at goal weight selection card, provide weight choices
        return (
          <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.cardContainer}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardText}>{item.text}</Text>
              <FlatList
                data={Array.from({ length: 211 }, (_, i) => (i + 90) + ' lbs')}
                renderItem={({ item }) => (
                  // when item pressed, highlight item
                  <TouchableOpacity
                    style={[styles.optionContainer, weightGoalContext.weightGoal === item ? styles.selectedOption : null]}
                    onPress={() => {
                      // set as currently selected weight goal
                      weightGoalContext.setWeightGoal(item);
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
    } else if (item.id === 5) {  // if at nutrition goal selection card, provide 3 col percentage choices
      return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={styles.cardContainer}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.text}</Text>
            <View style={styles.nutritionGoalsContainer}>
              <View style={styles.carbsCol}>
                <Text style={styles.optionText}>Carbs</Text>
                <Text style={styles.cardSubText}>{Math.round(calorieGoalContext.calorieGoal * (carbGoalContext.carbGoal/100)) + ' cal'}</Text>
                <FlatList
                data={Array.from({ length: 21 }, (_, i) => i * 5 + '%')}
                renderItem={({ item }) => (
                  // when item pressed, highlight item
                  <TouchableOpacity
                    style={[styles.optionContainer, (carbGoalContext.carbGoal + '%') === item ? styles.selectedOption : null]}
                    onPress={() => {
                      // set as currently selected carb goal
                      carbGoalContext.setCarbGoal(Number(item.slice(0, -1)));
                      setTotalNutrition(Number(item.slice(0, -1)) + proteinGoalContext.proteinGoal + fatGoalContext.fatGoal);
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
              <View style={styles.proteinCol}>
                <Text style={styles.optionText}>Protein</Text>
                <Text style={styles.cardSubText}>{Math.round(calorieGoalContext.calorieGoal * (proteinGoalContext.proteinGoal/100)) + ' cal'}</Text>
                <FlatList
                data={Array.from({ length: 21 }, (_, i) => i * 5 + '%')}
                renderItem={({ item  }) => (
                  // when item pressed, highlight item
                  <TouchableOpacity
                    style={[styles.optionContainer, (proteinGoalContext.proteinGoal + '%') === item ? styles.selectedOption : null]}
                    onPress={() => {
                      // set as currently selected protein goal
                      proteinGoalContext.setProteinGoal(Number(item.slice(0, -1)));
                      setTotalNutrition(carbGoalContext.carbGoal + Number(item.slice(0, -1)) + fatGoalContext.fatGoal);
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
              <View style={styles.fatCol}>
                <Text style={styles.optionText}>Fat</Text>
                <Text style={styles.cardSubText}>{Math.round(calorieGoalContext.calorieGoal * (fatGoalContext.fatGoal/100)) + ' cal'}</Text>
                <FlatList
                data={Array.from({ length: 21 }, (_, i) => i * 5 + '%')}
                renderItem={({ item }) => (
                  // when item pressed, highlight item
                  <TouchableOpacity
                    style={[styles.optionContainer, (fatGoalContext.fatGoal + '%') === item ? styles.selectedOption : null]}
                    onPress={() => {
                      // set as currently selected fat goal
                      fatGoalContext.setFatGoal(Number(item.slice(0, -1)));
                      setTotalNutrition(carbGoalContext.carbGoal + proteinGoalContext.proteinGoal + Number(item.slice(0, -1)));
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
            </View>
            <Text style={styles.totalNutrition}>Calorie Goal: {calorieGoalContext.calorieGoal}</Text>
            <Text style={styles.totalNutrition}>Total: {totalNutrition}%</Text>
          </View>
        </GestureHandlerRootView>
      );
  } else if (item.id === 6) {return (  // if at name input field, give text input box
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.cardImage} />
          <Text style={styles.cardText}>{item.text}</Text>
          <TextInput
            style={styles.input}
            onChangeText={nameContext.setName}
            inputMode="text"
            placeholder="John Doe"
          />
          <Text style={styles.cardSubText}>{item.subtext}</Text>
        </View>
      </GestureHandlerRootView>
    );
    } else if (item.id === 7) {  // if at end of setup, give 'finish' button to proceed to Home
      return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={styles.cardContainer}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.text}</Text>
            <Text style={styles.cardSubText}>Name: {nameContext.name}</Text>
            <Text style={styles.cardSubText}>Calorie Goal: {calorieGoalContext.calorieGoal}</Text>
            <Text style={styles.cardSubText}>Current Weight: {weightContext.weight}</Text>
            <Text style={styles.cardSubText}>Goal Weight: {weightGoalContext.weightGoal}</Text>
            {/* unnecessary information for now */}
            {/* <Text style={styles.cardSubText}>Carbs Goal: {Math.round(calorieGoalContext.calorieGoal * (carbGoalContext.carbGoal/100)) + ' cal'}</Text>
            <Text style={styles.cardSubText}>Protein Goal: {Math.round(calorieGoalContext.calorieGoal * (proteinGoalContext.proteinGoal/100)) + ' cal'}</Text>
            <Text style={styles.cardSubText}>Fat Goal: {Math.round(calorieGoalContext.calorieGoal * (fatGoalContext.fatGoal/100)) + ' cal'}</Text> */}
            {/* button to go to Home screen */}
            <TouchableOpacity
              style={styles.finishButton}
              onPress={handleFinish}
            >
              <Text style={styles.finishButtonText}>Finish</Text>
            </TouchableOpacity>
            <Text style={styles.cardSubText}>{item.subtext}</Text>
          </View>
        </GestureHandlerRootView>
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
    if (index > 1 && calorieGoalContext.calorieGoal === 0) {
      // brings user back to calorie goal choice if it is not chosen and swiped past it
      setActiveIndex(1);
      carouselRef.current.snapToItem(1, false, false)
      Alert.alert('Warning', 'Please choose a calorie goal to continue', [
        {
          text: 'OK',
          onPress: () => console.log('Warning: Calorie Goal not chosen yet'),
        }
      ]);
    } else if (index > 2 && weightContext.weight === 0) {
      // brings user back to weight choice if it is not chosen and swiped past it
      setActiveIndex(2);
      carouselRef.current.snapToItem(2, false, false)
      Alert.alert('Warning', 'Please choose a weight to continue', [
        {
          text: 'OK',
          onPress: () => console.log('Warning: Weight Goal not chosen yet'),
        }
      ]);
    } else if (index > 3 && weightGoalContext.weightGoal === 0) {
      // brings user back to weight goal choice if it is not chosen and swiped past it
      setActiveIndex(3);
      carouselRef.current.snapToItem(3, false, false)
      Alert.alert('Warning', 'Please choose a weight goal to continue', [
        {
          text: 'OK',
          onPress: () => console.log('Warning: Weight Goal not chosen yet'),
        }
      ]);
    } else if (index > 4 && carbGoalContext.carbGoal === 0 && proteinGoalContext.proteinGoal === 0
      && fatGoalContext.fatGoal === 0) {
      // brings user back to nutrition goal choice if it is not chosen and swiped past it
      setActiveIndex(4);
      carouselRef.current.snapToItem(4, false, false)
      Alert.alert('Warning', 'Please choose a nutrition goal to continue', [
        {
          text: 'OK',
          onPress: () => console.log('Warning: Nutrition Goal not chosen yet'),
        }
      ]);
    } else if (index > 4 && (carbGoalContext.carbGoal + proteinGoalContext.proteinGoal 
      + fatGoalContext.fatGoal !== 100)) {
        // brings user back to nutrition goal choice if nutrition percentages don't add up to 100%
      setActiveIndex(4);
      carouselRef.current.snapToItem(4, false, false)
      Alert.alert('Warning', 'The nutrition goals you have chosen do not add up to 100%', [
        {
          text: 'OK',
          onPress: () => console.log('Warning: Nutrition Goals chosen do not add up to 100%'),
        }
      ]);
    } else if (index > 5 && nameContext.name === 0) {
      // brings user back to name if it is not chosen and swiped past it
      setActiveIndex(5);
      carouselRef.current.snapToItem(5, false, false)
      Alert.alert('Warning', 'Please choose a name to continue', [
        {
          text: 'OK',
          onPress: () => console.log('Warning: Name not chosen yet'),
        }
      ]);
    } else {
      setActiveIndex(index);
    }
  };

  const renderArrow = (direction) => {
    if (direction === 'left' && activeIndex !== 0) {
      // if not first card in carousel, include a left arrow
      return (
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={() => carouselRef.current?.snapToPrev()}
        >
          <Image source={require('../images/left_arrow.png')} style={styles.arrowImage} />
        </TouchableOpacity>
      );
    } else if (direction === 'right' && activeIndex < cards.length - 1) {
      if ((activeIndex === 1 && calorieGoalContext.calorieGoal === 0)
        || (activeIndex === 2 && weightContext.weight === 0)
        || (activeIndex === 3 && weightGoalContext.weightGoal === 0)
        || (activeIndex === 4 && carbGoalContext.carbGoal + proteinGoalContext.proteinGoal 
        + fatGoalContext.fatGoal !== 100)
        || (activeIndex === 5 && nameContext.name === 0)) {
        // gray out right arrow when calorie goal, weight, nutrition goal, or name isn't chosen/correct yet
        return (
          <Image source={require('../images/right_arrow.png')} style={styles.arrowImageDisabled} />
        );
      }
      // if not last card in carousel, include a right arrow
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
    // creates a dot for each card and sets the current active card as a darker dot
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
    height: 600,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    top: '0%',
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
  nutritionGoalsContainer: {
    flexDirection: 'row',
    height: 175,
  },
  carbsCol: {
    flex: 1,
    alignItems: 'center',
  },
  proteinCol: {
    flex: 1,
    alignItems: 'center',
  },
  fatCol: {
    flex: 1,
    alignItems: 'center',
  },
  totalNutrition: {
    fontSize: 18,
    marginTop: 32,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: 300,
    fontSize: 18,
    borderWidth: 1,
    padding: 10,
    marginBottom: 8,
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
  arrowImageDisabled: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    opacity: 0.25,
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
    paddingHorizontal: 25,
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
  weightContainer: {
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  weightList: {
    marginTop: 16,
    height: 50,
    width: 300,
    // alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  selectedWeight: {
    fontWeight: 'bold',
    // backgroundColor: 'lightgray',
  },
  finishButton: {
    position: 'absolute',
    top: '95%',
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