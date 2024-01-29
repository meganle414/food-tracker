import { StatusBar } from 'expo-status-bar';
import { Component, createContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import GettingStarted from './src/components/GettingStarted'
import Home from './src/components/Home'
import LogFood from './src/components/LogFood'
import Profile from './src/components/Profile'
import Settings from './src/components/Settings'
import { CalorieGoalContext } from './src/contexts/CalorieGoalContext';
import { WeightContext } from './src/contexts/WeightContext';
import { NutritionGoalContext } from './src/contexts/NutritionGoalContext';
import { ThemeContext } from './src/contexts/ThemeContext';
import { NameContext } from './src/contexts/NameContext';
import { WeightGoalContext } from './src/contexts/WeightGoalContext';

export default function App() {
  const [calorieGoal, setCalorieGoal] = useState(0);
  const [weight, setWeight] = useState(0);
  const [weightGoal, setWeightGoal] = useState(0);
  const [nutritionGoal, setNutritionGoal] = useState(0);
  const [name, setName] = useState(0);
  const [theme, setTheme] = useState('light');

  const Stack = createStackNavigator()

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <CalorieGoalContext.Provider value={{calorieGoal, setCalorieGoal}}>
        <WeightContext.Provider value={{weight, setWeight}}>
          <WeightGoalContext.Provider value={{weightGoal, setWeightGoal}}>
            <NutritionGoalContext.Provider value={{nutritionGoal, setNutritionGoal}}>
              <NameContext.Provider value={{name, setName}}>
                <NavigationContainer>
                  <Stack.Navigator>
                    <Stack.Screen name="GettingStarted" component={GettingStarted} options={{headerShown: false}} />
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                    <Stack.Screen name="LogFood" component={LogFood} options={{headerShown: false}} />
                    <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
                    <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}} />
                  </Stack.Navigator>
                </NavigationContainer>
              </NameContext.Provider>
            </NutritionGoalContext.Provider>
          </WeightGoalContext.Provider>
        </WeightContext.Provider>
      </CalorieGoalContext.Provider>
    </ThemeContext.Provider>
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