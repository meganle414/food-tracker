import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SQLite from 'react-native-sqlite-storage';
import { CalorieGoalContext } from '../contexts/CalorieGoalContext';
import { WeightContext } from '../contexts/WeightContext';
import { NameContext } from '../contexts/NameContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { CarbContext } from '../contexts/CarbContext';
import { ProteinContext } from '../contexts/ProteinContext';
import { FatContext } from '../contexts/FatContext';

const App = () => {
  // index of calorie list
  const [activeIndex, setActiveIndex] = useState(0);
  // values of calories (e.g. 1200, 1300, etc.)
  const calorieGoalContext = useContext(CalorieGoalContext);

  // value of user's current weight and weight goal
  const weightContext = useContext(WeightContext);

  // values of nutrition goals (carbs, protein, fats) in percentages, adding up to 100% of calorie goal and current macros (carbs, protein, fats) in calories
  const carbContext = useContext(CarbContext);
  const proteinContext = useContext(ProteinContext);
  const fatContext = useContext(FatContext);

  // total percentage of nutrition goals
  // const [totalNutrition, setTotalNutrition] = useState(0);

  // user's name
  const nameContext = useContext(NameContext);

  // theme (light/dark mode)
  const themeContext = useContext(ThemeContext);

  const screenWidth = Dimensions.get('window').width;
  // const screenHeight = Dimensions.get('window').height;

  const radiusCalories = screenWidth * 0.2;
  const circleCircumferenceCalories = 2 * Math.PI * radiusCalories;

  const radius = screenWidth * 0.125;
  const circleCircumference = 2 * Math.PI * radius;

  const totalCalories = carbContext.carbs + proteinContext.protein + fatContext.fat;
  const percentageCalories = (totalCalories / calorieGoalContext.calorieGoal) * 100;
  const strokeDashoffsetCalories = circleCircumferenceCalories - (circleCircumferenceCalories * percentageCalories) / 100;

  const percentageCarbs = (carbContext.carbs / (calorieGoalContext.calorieGoal * (carbContext.carbGoal / 100))) * 100;
  const strokeDashoffsetCarbs = circleCircumference - (circleCircumference * percentageCarbs) / 100;

  const percentageProtein = (proteinContext.protein / (calorieGoalContext.calorieGoal * (proteinContext.proteinGoal / 100))) * 100;
  const strokeDashoffsetProtein = circleCircumference - (circleCircumference * percentageProtein) / 100;

  const percentageFat = (fatContext.fat / (calorieGoalContext.calorieGoal * (fatContext.fatGoal / 100))) * 100;
  const strokeDashoffsetFat = circleCircumference - (circleCircumference * percentageFat) / 100;

  const navigation = useNavigation();

  function handleLogFood() {  // change screen to Log Food
    navigation.navigate('LogFood');
  }

    return (
      // for some reason making this whole screen the style screen shifts the containers
        <View style={[styles.screen, {backgroundColor: themeContext.theme === 'dark' ? '#101010' : '#F2F2F2'}]}>
          <Text style={[styles.title, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>{nameContext.name}'s Food Tracker</Text>
          <View style={[styles.container, { backgroundColor: themeContext.theme === 'dark' ? '#2E2E2E' : '#C7C7C7' }]}>
          <Text style={[styles.containerTitle, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>Calories</Text>
            <Text style={[styles.equationText, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>Remaining = Goal - Food + Exercise</Text>
            <View style={styles.caloriesCol}>
            <View style={styles.graphWrapperCalories}>
                  <Svg height='160' width='160' viewBox='0 0 180 180'>
                    <G rotation={-90} originX='90' originY='90'>
                      <Circle
                        cx='50%'
                        cy='50%'
                        r={radiusCalories}
                        fill='transparent'
                        style={[{stroke: themeContext.theme === 'dark' ? '#F1F6F9' : '#4F4F4F', strokeWidth: '10'}]}
                      />
                      <Circle
                        cx='50%'
                        cy='50%'
                        r={radiusCalories}
                        stroke='#38F358'
                        fill='transparent'
                        strokeWidth='10'
                        strokeDasharray={circleCircumferenceCalories}
                        strokeDashoffset={strokeDashoffsetCalories}
                        strokeLinecap='round'
                      />
                    </G>
                  </Svg>
                  <Text style={[styles.graphTextCalories, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>{Intl.NumberFormat("en-US").format(calorieGoalContext.calorieGoal - (carbContext.carbs + proteinContext.protein + fatContext.fat))}</Text>
                  <Text style={[styles.graphSubTextCalories, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>{"remaining"}</Text>
                </View>
            </View>
            <View style={styles.row}>
              <Image
              source={require('../images/flag.png')}
              style={[styles.icon, { tintColor: '#1275E5'}]}
              />
              <Text style={[styles.caloriesText, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>Base Goal</Text>
            </View>
            <View style={styles.row}>
              <Image
                source={require('../images/flag.png')}
                style={[styles.icon, { opacity: 0 }]}
              />
              <Text style={[styles.caloriesText, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>{Intl.NumberFormat("en-US").format(calorieGoalContext.calorieGoal)}</Text>
            </View>
            <View style={styles.row}>
              <Image
              source={require('../images/spoon_fork.png')}
              style={[styles.icon, { tintColor: themeContext.theme === 'dark' ? 'white' : '#222222' }]}
              />
              <Text style={[styles.caloriesText, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>Food</Text>
            </View>
            <View style={styles.row}>
              <Image
                source={require('../images/spoon_fork.png')}
                style={[styles.icon, { opacity: 0 }]}
              />
              <Text style={[styles.caloriesText, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>{Intl.NumberFormat("en-US").format(carbContext.carbs + proteinContext.protein + fatContext.fat)}</Text>
            </View>
            {/* replace below line with current calories burned from exercise */}
            <View style={styles.row}>
              <Image
              source={require('../images/fire.png')}
              style={styles.icon}
              />
              <Text style={[styles.caloriesText, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>Exercise</Text>
            </View>
            <View style={styles.row}>
              <Image
                source={require('../images/fire.png')}
                style={[styles.icon, { opacity: 0 }]}
              />
              <Text style={[styles.caloriesText, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>{Intl.NumberFormat("en-US").format(calorieGoalContext.calorieGoal)}</Text>
            </View>
          </View>
          <View style={[styles.container, { backgroundColor: themeContext.theme === 'dark' ? '#2E2E2E' : '#C7C7C7', minHeight: '28%' }]}>
            <Text style={[styles.containerTitle, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>Macros</Text>
            <View style={styles.macrosContainer}>
              <View style={styles.carbsCol}>
                <Text style={[styles.containerText, { color: themeContext.theme === 'dark' ? 'white' : '#222222', marginTop: 0 }]}>Carbs</Text>
                <View style={styles.graphWrapper}>
                  <Svg height='160' width='160' viewBox='0 0 180 180'>
                    <G rotation={-90} originX='90' originY='90'>
                      <Circle
                        cx='50%'
                        cy='50%'
                        r={radius}
                        fill='transparent'
                        style={[{stroke: themeContext.theme === 'dark' ? '#F1F6F9' : '#4F4F4F', strokeWidth: '10'}]}
                      />
                      <Circle
                        cx='50%'
                        cy='50%'
                        r={radius}
                        stroke='#33E6FF'
                        fill='transparent'
                        strokeWidth='10'
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={strokeDashoffsetCarbs}
                        strokeLinecap='round'
                      />
                    </G>
                  </Svg>
                  <Text style={[styles.graphText, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>{Intl.NumberFormat("en-US").format(carbContext.carbs)}</Text>
                </View>
              </View>
              <View style={styles.proteinCol}>
                <Text style={[styles.containerText, { color: themeContext.theme === 'dark' ? 'white' : '#222222', marginTop: 0  }]}>Protein</Text>
                <View style={styles.graphWrapper}>
                  <Svg height='160' width='160' viewBox='0 0 180 180'>
                    <G rotation={-90} originX='90' originY='90'>
                      <Circle
                        cx='50%'
                        cy='50%'
                        r={radius}
                        fill='transparent'
                        style={[{stroke: themeContext.theme === 'dark' ? '#F1F6F9' : '#4F4F4F', strokeWidth: '10'}]}
                      />
                      <Circle
                        cx='50%'
                        cy='50%'
                        r={radius}
                        fill='transparent'
                        style={[{stroke: themeContext.theme === 'dark' ? '#BC8CD1' : '#AD55D1', strokeWidth: '10'}]}
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={strokeDashoffsetProtein}
                        strokeLinecap='round'
                      />
                    </G>
                  </Svg>
                  <Text style={[styles.graphText, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>{Intl.NumberFormat("en-US").format(proteinContext.protein)}</Text>
                </View>
              </View>
              <View style={styles.fatCol}>
                <Text style={[styles.containerText, { color: themeContext.theme === 'dark' ? 'white' : '#222222', marginTop: 0  }]}>Fat</Text>
                <View style={styles.graphWrapper}>
                  <Svg height='160' width='160' viewBox='0 0 180 180'>
                    <G rotation={-90} originX='90' originY='90'>
                      <Circle
                        cx='50%'
                        cy='50%'
                        r={radius}
                        fill='transparent'
                        style={[{stroke: themeContext.theme === 'dark' ? '#F1F6F9' : '#4F4F4F', strokeWidth: '10'}]}
                      />
                      <Circle
                        cx='50%'
                        cy='50%'
                        r={radius}
                        fill='transparent'
                        style={[{stroke: themeContext.theme === 'dark' ? '#FF9700' : '#F3A638', strokeWidth: '10'}]}
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={strokeDashoffsetFat}
                        strokeLinecap='round'
                      />
                    </G>
                  </Svg>
                  <Text style={[styles.graphText, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>{Intl.NumberFormat("en-US").format(fatContext.fat)}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.buttonContainer, { backgroundColor: themeContext.theme === 'dark' ? '#2E2E2E' : '#C7C7C7' }]}>
            <TouchableOpacity
              style={styles.logFoodButton}
              onPress={handleLogFood}
            >
              <View style={[{flexDirection: 'row'}, {alignItems: 'center'}]}>
                <MaterialCommunityIcons name="plus" color={themeContext.theme === 'dark' ? 'white' : 'black'} size={screenWidth * 0.1}/>
                <Text style={[styles.logFoodButtonText, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>Log Food</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    screen: {
    flex: 1,
    minHeight: '100%',
    minWidth: '100%',
    },
    container: {
      flex: 1,
      height: '35%',
      width: '90%',
      left: '5%',
      minHeight: '35%',
      minWidth: '80%',
      marginTop: 16,
      borderRadius: 10,
    },
    buttonContainer: {
      flex: 1,
      height: '10%',
      width: '90%',
      left: '5%',
      minHeight: '10%',
      minWidth: '80%',
      marginTop: 16,
      marginBottom: 16,
      borderRadius: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 50,
      textAlign: 'center',
    },
    containerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 16,
      marginBottom: 16,
      marginLeft: 20,
      textAlign: 'left',
    },
    row: {
      flex: 1,
      flexDirection: 'row',
    },
    equationText: {
      fontSize: 12,
      textAlign: 'left',
      marginLeft: 20,
      bottom: '4%',
    },
    caloriesText: {
      flex: 1,
      fontSize: 18,
      marginBottom: 5,
      textAlign: 'left',
      left: '160%',
      bottom: '8%',
    },
    containerText: {
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 16,
      textAlign: 'center',
    },
    macrosContainer: {
      flexDirection: 'row',
      flex: 1,
      height: '35%',
      width: '90%',
      left: '5%',
      minHeight: '35%',
      minWidth: '80%',
    },
    graphWrapperCalories: {
      alignItems: 'center',
      justifyContent: 'center',
      transform: [{ translateY: -10 }],
    },
    graphWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    graphTextCalories: {
      position: 'absolute',
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 32,
      transform: [{ translateY: -15 }],
    },
    graphSubTextCalories: {
      position: 'absolute',
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 18,
      transform: [{ translateY: 15 }],
    },
    graphText: {
      position: 'absolute',
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 18,
    },
    icon: {
      flex: 1,
      width: 30,
      height: 30,
      marginRight: 5,
      marginLeft: 32,
      left: '380%',
      bottom: '9%',
      resizeMode: 'contain',
    },
    caloriesCol: {
      flex: 1,
      alignItems: 'center',
      right: '18%',
      top: '20%',
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
    logFoodButton: {
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logFoodButtonText: {
      fontSize: 24,
      fontWeight: 'bold',
    }
});

export default App;