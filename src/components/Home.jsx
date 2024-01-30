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

const App = () => {

  // index of calorie list
  const [activeIndex, setActiveIndex] = useState(0);
  // values of calories (e.g. 1200, 1300, etc.)
  const calorieGoalContext = useContext(CalorieGoalContext);

  // value of user's current weight
  const weightContext = useContext(WeightContext);

  // value of user's current weight
  const weightGoalContext = useContext(WeightGoalContext);

  // values of nutritional goals (carbs, protein, fats) in percentages, adding up to 100% of calorie goal
  const nutritionGoalContext = useContext(NutritionGoalContext);

  // user's name
  const nameContext = useContext(NameContext);

  const navigation = useNavigation()

    return (
        <View>
          <Text style={styles.title}>Home</Text>
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