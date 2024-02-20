import React, { useRef, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Switch, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
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

  function handleGoals() {  // change screen to Goals
    navigation.navigate('Goals');
  }

    return (
        <View style={[styles.screen, {backgroundColor: themeContext.theme === 'dark' ? '#101010' : '#F2F2F2'}]}>
          <Text style={[styles.title, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>Settings</Text>
          <View style={[styles.container, { backgroundColor: themeContext.theme === 'dark' ? '#2E2E2E' : '#F2F2F2' }]}>
            <View style={styles.settingsContainer}>
            <MaterialCommunityIcons name="theme-light-dark" color={themeContext.theme === 'dark' ? 'white' : 'black'} size={screenWidth * 0.1} left='50%' />
              <Text style={[styles.settingsText, { color: themeContext.theme === 'dark' ? 'white' : 'black' }]}>Dark Mode</Text>
              <Switch style={styles.toggle} value={themeContext.theme === 'dark'} onValueChange={(value) => themeContext.setTheme(value ? 'dark' : 'light')} />
            </View>
            <View style={styles.settingsContainer}>
              <MaterialCommunityIcons name="dumbbell" color={themeContext.theme === 'dark' ? 'white' : 'black'} size={screenWidth * 0.1} left='50%' />
              <Text style={[styles.settingsText, { color: themeContext.theme === 'dark' ? 'white' : 'black' }]}>Goals</Text>
              <TouchableOpacity
              style={styles.settingsButton}
              onPress={handleGoals}
              >
                <MaterialCommunityIcons name="chevron-right" color={themeContext.theme === 'dark' ? 'white' : 'black'} size={screenWidth * 0.12}/>
            </TouchableOpacity>
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
      // alignItems: 'center',
      // justifyContent: 'center',
      width: '100%',
      height: '88%',
      minWidth: '80%',
      minHeight: '88%',
    },
    settingsContainer: {
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 16,
      marginBottom: 16,
    },
    settingsButton: {
      flex: 1,
      left: screenWidth * 0.15,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      marginTop: 50,
      textAlign: 'center',
    },
    settingsText: {
      fontSize: 16,
      flex: 1,
      margin: 16,
      left: '50%',
      textAlign: 'left',
    },
    finishButtonText: {
      fontSize: 16,
    },
    toggle: {
      flex: 1,
      left: screenWidth * 0.15,
    },
});

export default App;