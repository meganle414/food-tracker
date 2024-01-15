import { StatusBar } from 'expo-status-bar';
import { Component, createContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GettingStarted from './src/components/GettingStarted'
import { CalorieGoalContext } from './src/contexts/CalorieGoalContext';

export default function App() {
  const [calorieGoal, setCalorieGoal] = useState();
  return (
    <CalorieGoalContext.Provider value={{calorieGoal, setCalorieGoal}}>
      <GettingStarted></GettingStarted>
    </CalorieGoalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});