import React, { useRef, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Switch, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { CalorieGoalContext } from '../contexts/CalorieGoalContext';
import { WeightContext } from '../contexts/WeightContext';
import { NameContext } from '../contexts/NameContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { CarbContext } from '../contexts/CarbContext';
import { ProteinContext } from '../contexts/ProteinContext';
import { FatContext } from '../contexts/FatContext';
import { StatusBar } from 'expo-status-bar';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const App = () => {

  // // values of calories (e.g. 1200, 1300, etc.)
  // const calorieGoalContext = useContext(CalorieGoalContext);

  // // values of user's current weight
  // const weightContext = useContext(WeightContext);

  // // values of nutritional goals (carbs, protein, fats) in percentages, adding up to 100% of calorie goal
  // const nutritionGoalContext = useContext(NutritionGoalContext);

  // setting for light/dark mode
  const themeContext = useContext(ThemeContext);

  const navigation = useNavigation();

  function handleBack() {  // change screen to Settings
    navigation.navigate('Settings');
  }

  function handleGoals() {  // change screen to Goals
    navigation.navigate('Goals');
  }

    return (
        <View style={[styles.screen, {backgroundColor: themeContext.theme === 'dark' ? '#101010' : '#F2F2F2'}]}>
          <Text style={[styles.title, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>Goals</Text>
          <TouchableOpacity
              style={styles.settingsButton}
              onPress={handleBack}
              >
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
          <View style={[styles.container, { backgroundColor: themeContext.theme === 'dark' ? '#2E2E2E' : '#F2F2F2' }]}>
            <View style={styles.settingsContainer}>
              <Text style={[styles.settingsText, { color: themeContext.theme === 'dark' ? 'white' : 'black' }]}>Weight Goal</Text>
              <Switch style={styles.toggle} value={themeContext.theme === 'dark'} />
            </View>
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
      marginTop: 50,
      textAlign: 'center',
    },
    backButtonText: {
        fontSize: 16,
        margin: 16,
    },
    settingsText: {
      fontSize: 16,
      flex: 1,
      margin: 16,
      textAlign: 'center',
    },
    toggle: {
      flex: 1,
      left: screenWidth * 0.1,
    },
});

export default App;