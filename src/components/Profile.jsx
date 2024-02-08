import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native'
import { CalorieGoalContext } from '../contexts/CalorieGoalContext';
import { WeightContext } from '../contexts/WeightContext';
import { NameContext } from '../contexts/NameContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { CarbContext } from '../contexts/CarbContext';
import { ProteinContext } from '../contexts/ProteinContext';
import { FatContext } from '../contexts/FatContext';


const App = () => {

  // // values of calories (e.g. 1200, 1300, etc.)
  // const calorieGoalContext = useContext(CalorieGoalContext);

  // // values of user's current weight
  // const weightContext = useContext(WeightContext);

  // // values of nutritional goals (carbs, protein, fats) in percentages, adding up to 100% of calorie goal
  // const nutritionGoalContext = useContext(NutritionGoalContext);

  // // setting for light/dark mode
  // const themeContext = useContext(themeContext);

    return (
        <View>
          <Text style={styles.title}>Profile</Text>
        </View>
      );
}

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
});

export default App;