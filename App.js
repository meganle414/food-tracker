import { StatusBar } from 'expo-status-bar';
import { Component, createContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import GettingStarted from './src/components/GettingStarted'
import Home from './src/components/Home'
import { CalorieGoalContext } from './src/contexts/CalorieGoalContext';

export default function App() {
  const [calorieGoal, setCalorieGoal] = useState(0);
  const Stack = createStackNavigator()

  return (
    <CalorieGoalContext.Provider value={{calorieGoal, setCalorieGoal}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="GettingStarted" component={GettingStarted} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
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