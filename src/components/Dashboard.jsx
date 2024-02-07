import React, { useRef, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { CalorieGoalContext } from '../contexts/CalorieGoalContext';
import { WeightContext } from '../contexts/WeightContext';
import { WeightGoalContext } from '../contexts/WeightGoalContext';
import { CarbGoalContext } from '../contexts/CarbGoalContext';
import { ProteinGoalContext } from '../contexts/ProteinGoalContext';
import { FatGoalContext } from '../contexts/FatGoalContext';
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

  // value of user's current weight
  const weightContext = useContext(WeightContext);

  // value of user's current weight
  const weightGoalContext = useContext(WeightGoalContext);

  // values of nutrition goals (carbs, protein, fats) in percentages, adding up to 100% of calorie goal
  const carbGoalContext = useContext(CarbGoalContext);
  const proteinGoalContext = useContext(ProteinGoalContext);
  const fatGoalContext = useContext(FatGoalContext);

  // values of current macros (carbs, protein, fats) in calories
  const carbContext = useContext(CarbContext);
  const proteinContext = useContext(ProteinContext);
  const fatContext = useContext(FatContext);

  // total percentage of nutrition goals
  const [totalNutrition, setTotalNutrition] = useState(0);

  // user's name
  const nameContext = useContext(NameContext);

  // theme (light/dark mode)
  const themeContext = useContext(ThemeContext);

  const navigation = useNavigation()

  const radius = 50;
  const circleCircumference = 2 * Math.PI * radius;

  const percentageCarbs = (carbContext.carbs / (calorieGoalContext.calorieGoal * (carbGoalContext.carbGoal / 100))) * 100;
  const strokeDashoffsetCarbs = circleCircumference - (circleCircumference * percentageCarbs) / 100;

  const percentageProtein = (proteinContext.protein / (calorieGoalContext.calorieGoal * (proteinGoalContext.proteinGoal / 100))) * 100;
  const strokeDashoffsetProtein = circleCircumference - (circleCircumference * percentageProtein) / 100;

  const percentageFat = (fatContext.fat / (calorieGoalContext.calorieGoal * (fatGoalContext.fatGoal / 100))) * 100;
  const strokeDashoffsetFat = circleCircumference - (circleCircumference * percentageFat) / 100;

    return (
        <View>
          <Text style={styles.title}>Food Tracker</Text>
          <View style={styles.container}>
            <Text style={styles.containerTitle}>Calories</Text>
            <Text style={styles.caloriesText}>Base Goal</Text>
            <Text style={styles.caloriesText}>{calorieGoalContext.calorieGoal}</Text>
            <Text style={styles.caloriesText}>Food</Text>
            {/* replace below line with current food calories */}
            <Text style={styles.caloriesText}>{calorieGoalContext.calorieGoal}</Text>
            <Text style={styles.caloriesText}>Exercise</Text>
            {/* replace below line with current calories burned from exercise */}
            <Text style={styles.caloriesText}>{calorieGoalContext.calorieGoal}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.containerTitle}>Macros</Text>
            <View style={styles.macrosContainer}>
              <View style={styles.carbsCol}>
                <Text style={styles.containerText}>Carbs</Text>
                <View style={styles.graphWrapper}>
                  <Svg height='160' width='160' viewBox='0 0 180 180'>
                    <G rotation={-90} originX='90' originY='90'>
                      <Circle
                        cx='50%'
                        cy='50%'
                        r={radius}
                        stroke='#F1F6F9'
                        fill='transparent'
                        strokeWidth='10'
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
                  <Text style={styles.graphText}>{carbContext.carbs}</Text>
                </View>
              </View>
              <View style={styles.proteinCol}>
                <Text style={styles.containerText}>Protein</Text>
                <View style={styles.graphWrapper}>
                  <Svg height='160' width='160' viewBox='0 0 180 180'>
                    <G rotation={-90} originX='90' originY='90'>
                      <Circle
                        cx='50%'
                        cy='50%'
                        r={radius}
                        stroke='#F1F6F9'
                        fill='transparent'
                        strokeWidth='10'
                      />
                      <Circle
                        cx='50%'
                        cy='50%'
                        r={radius}
                        stroke='#BC8CD1'
                        fill='transparent'
                        strokeWidth='10'
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={strokeDashoffsetProtein}
                        strokeLinecap='round'
                      />
                    </G>
                  </Svg>
                  <Text style={styles.graphText}>{proteinContext.protein}</Text>
                </View>
              </View>
              <View style={styles.fatCol}>
                <Text style={styles.containerText}>Fat</Text>
                <View style={styles.graphWrapper}>
                  <Svg height='160' width='160' viewBox='0 0 180 180'>
                    <G rotation={-90} originX='90' originY='90'>
                      <Circle
                        cx='50%'
                        cy='50%'
                        r={radius}
                        stroke='#F1F6F9'
                        fill='transparent'
                        strokeWidth='10'
                      />
                      <Circle
                        cx='50%'
                        cy='50%'
                        r={radius}
                        stroke='#F3A638'
                        fill='transparent'
                        strokeWidth='10'
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={strokeDashoffsetFat}
                        strokeLinecap='round'
                      />
                    </G>
                  </Svg>
                  <Text style={styles.graphText}>{fatContext.fat}</Text>
                </View>
              </View>
            </View>
            {/* <Text style={styles.containerText}>{carbContext.carbs}</Text> */}
            {/* <Text style={styles.containerText}>{proteinContext.protein}</Text> */}
            {/* <Text style={styles.containerText}>{fatContext.fat}</Text> */}
          </View>
          {/* need a bar at the bottom to go to Dashboard, Log Food, and Settings TAB NAVIGATION*/}
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '35%',
      width: '90%',
      left: '5%',
      minHeight: '35%',
      minWidth: '80%',
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: '#2E2E2E',
      marginTop: 16,
      borderRadius: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#222222',
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
      color: 'white',
    },
    caloriesText: {
      fontSize: 18,
      marginBottom: 16,
      textAlign: 'left',
      marginLeft: 32,
      color: 'white',
      left: '55%',
    },
    containerText: {
      fontSize: 18,
      marginTop: 16,
      textAlign: 'center',
      color: 'white',
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
    graphWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    graphText: {
      position: 'absolute',
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 18,
      color: 'white',
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
});

export default App;