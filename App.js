import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GettingStarted from './src/components/GettingStarted'
import Dashboard from './src/components/Dashboard'
import LogFood from './src/components/LogFood'
import Profile from './src/components/Profile'
import Settings from './src/components/Settings'
import { CalorieGoalContext } from './src/contexts/CalorieGoalContext';
import { WeightContext } from './src/contexts/WeightContext';
import { CarbContext } from './src/contexts/CarbContext';
import { ProteinContext } from './src/contexts/ProteinContext';
import { FatContext } from './src/contexts/FatContext';
import { ThemeContext } from './src/contexts/ThemeContext';
import { NameContext } from './src/contexts/NameContext';

export default function App() {
  const [calorieGoal, setCalorieGoal] = useState(1600);
  const [weight, setWeight] = useState(150);
  const [weightGoal, setWeightGoal] = useState(140);
  const [carbGoal, setCarbGoal] = useState(35);
  const [proteinGoal, setProteinGoal] = useState(35);
  const [fatGoal, setFatGoal] = useState(30);
  const [carbs, setCarbs] = useState(150);
  const [protein, setProtein] = useState(350);
  const [fat, setFat] = useState(100);
  const [name, setName] = useState('Apple');
  const [theme, setTheme] = useState('light');

  const Stack = createStackNavigator()
  const Tab = createBottomTabNavigator();

  function Home() {
    return (
      <Tab.Navigator
        style={styles.tabNavigator}
        tabBarOptions={{
          activeBackgroundColor: theme === 'light' ? 'lightgray' : 'darkgray',
          inactiveBackgroundColor: theme === 'light' ? 'white' : 'lightgray',
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={'black'} size={size} />
            ),
            tabBarLabelStyle: {color: 'black'},
          }}
        />
        <Tab.Screen
          name="LogFood"
          component={LogFood}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="food" color={'black'} size={size} />
            ),
            tabBarLabelStyle: {color: 'black'},
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-circle" color={'black'} size={size} />
            ),
            tabBarLabelStyle: {color: 'black'},
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="settings-helper" color={'black'} size={size} />
            ),
            tabBarLabelStyle: {color: 'black'},
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <CalorieGoalContext.Provider value={{calorieGoal, setCalorieGoal}}>
        <WeightContext.Provider value={{weight, setWeight, weightGoal, setWeightGoal}}>
            <CarbContext.Provider value={{carbs, setCarbs, carbGoal, setCarbGoal}}>
              <ProteinContext.Provider value={{protein, setProtein, proteinGoal, setProteinGoal}}>
                <FatContext.Provider value={{fat, setFat, fatGoal, setFatGoal}}>
                  <NameContext.Provider value={{name, setName}}>
                    <NavigationContainer>
                        <Stack.Navigator>
                          {/* <Stack.Screen name="GettingStarted" component={GettingStarted} options={{headerShown: false}} /> */}
                          <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{ headerShown: false }}
                          />
                        </Stack.Navigator>
                    </NavigationContainer>
                  </NameContext.Provider>
                </FatContext.Provider>
              </ProteinContext.Provider>
            </CarbContext.Provider>
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
  tabNavigator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
  }
});