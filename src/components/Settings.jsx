import React, { useRef, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { CalorieGoalContext } from '../contexts/CalorieGoalContext';
import { WeightContext } from '../contexts/WeightContext';
import { NameContext } from '../contexts/NameContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { CarbContext } from '../contexts/CarbContext';
import { ProteinContext } from '../contexts/ProteinContext';
import { FatContext } from '../contexts/FatContext';
import { StatusBar } from 'expo-status-bar';


const App = () => {

  // // values of calories (e.g. 1200, 1300, etc.)
  // const calorieGoalContext = useContext(CalorieGoalContext);

  // // values of user's current weight
  // const weightContext = useContext(WeightContext);

  // // values of nutritional goals (carbs, protein, fats) in percentages, adding up to 100% of calorie goal
  // const nutritionGoalContext = useContext(NutritionGoalContext);

  // setting for light/dark mode
  const themeContext = useContext(ThemeContext);

    return (
        <View>
          <Text style={styles.title}>Settings</Text>
          <View style={[styles.container, { backgroundColor: themeContext.theme === 'dark' ? 'black' : 'white' }]}>
            <View style={styles.settingsContainer}>
              <Text style={[styles.settingsText, { color: themeContext.theme === 'dark' ? 'white' : 'black' }]}>Dark Mode</Text>
              <Switch style={styles.toggle} value={themeContext.theme === 'dark'} onValueChange={(value) => themeContext.setTheme(value ? 'dark' : 'light')} />
            </View>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '88%',
      minWidth: '80%',
      minHeight: '88%',
    },
    settingsContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#222222',
      marginTop: 50,
      textAlign: 'center',
    },
    settingsText: {
      fontSize: 16,
      flex: 1,
      margin: 16,
    },
    toggle: {
      flex: 1,
    },
});

export default App;