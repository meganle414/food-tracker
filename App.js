import { StatusBar } from 'expo-status-bar';
import { Component, createContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import GettingStarted from './src/components/GettingStarted'
import Dashboard from './src/components/Dashboard'
import LogFood from './src/components/LogFood'
import Profile from './src/components/Profile'
import Settings from './src/components/Settings'
import { CalorieGoalContext } from './src/contexts/CalorieGoalContext';
import { WeightContext } from './src/contexts/WeightContext';
import { WeightGoalContext } from './src/contexts/WeightGoalContext';
import { CarbGoalContext } from './src/contexts/CarbGoalContext';
import { ProteinGoalContext } from './src/contexts/ProteinGoalContext';
import { FatGoalContext } from './src/contexts/FatGoalContext';
import { CarbContext } from './src/contexts/CarbContext';
import { ProteinContext } from './src/contexts/ProteinContext';
import { FatContext } from './src/contexts/FatContext';
import { ThemeContext } from './src/contexts/ThemeContext';
import { NameContext } from './src/contexts/NameContext';

export default function App() {
  const [calorieGoal, setCalorieGoal] = useState(0);
  const [weight, setWeight] = useState(0);
  const [weightGoal, setWeightGoal] = useState(0);
  const [carbGoal, setCarbGoal] = useState(0);
  const [proteinGoal, setProteinGoal] = useState(0);
  const [fatGoal, setFatGoal] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [name, setName] = useState(0);
  const [theme, setTheme] = useState('light');

  const Stack = createStackNavigator()

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <CalorieGoalContext.Provider value={{calorieGoal, setCalorieGoal}}>
        <WeightContext.Provider value={{weight, setWeight}}>
          <WeightGoalContext.Provider value={{weightGoal, setWeightGoal}}>
            <CarbGoalContext.Provider value={{carbGoal, setCarbGoal}}>
              <ProteinGoalContext.Provider value={{proteinGoal, setProteinGoal}}>
                <FatGoalContext.Provider value={{fatGoal, setFatGoal}}>
                  <NameContext.Provider value={{name, setName}}>
                    <CarbContext.Provider value={{carbs, setCarbs}}>
                      <ProteinContext.Provider value={{protein, setProtein}}>
                        <FatContext.Provider value={{fat, setFat}}>
                          <NavigationContainer>
                            <Stack.Navigator>
                              {/* <Stack.Screen name="GettingStarted" component={GettingStarted} options={{headerShown: false}} /> */}
                              <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
                              <Stack.Screen name="LogFood" component={LogFood} options={{headerShown: false}} />
                              <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}} />
                              <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
                            </Stack.Navigator>
                          </NavigationContainer>
                        </FatContext.Provider>
                      </ProteinContext.Provider>
                    </CarbContext.Provider>
                </NameContext.Provider>
                </FatGoalContext.Provider>
              </ProteinGoalContext.Provider>
            </CarbGoalContext.Provider>
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