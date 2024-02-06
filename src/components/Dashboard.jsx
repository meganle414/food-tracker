import React, { useRef, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
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
            <Text style={styles.containerText}>Carbs</Text>
            {/* <Text style={styles.containerText}>{carbContext.carbs}</Text> */}
            <Text style={styles.containerText}>Protein</Text>
            {/* <Text style={styles.containerText}>{proteinContext.protein}</Text> */}
            <Text style={styles.containerText}>Fat</Text>
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
      marginLeft: 32,
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
      marginBottom: 16,
      textAlign: 'left',
      marginLeft: 32,
      color: 'white',
    },
});

export default App;