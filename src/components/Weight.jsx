import React, { useRef, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Alert, Switch, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CalorieGoalContext } from '../contexts/CalorieGoalContext';
import { WeightContext } from '../contexts/WeightContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { CarbContext } from '../contexts/CarbContext';
import { ProteinContext } from '../contexts/ProteinContext';
import { FatContext } from '../contexts/FatContext';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const App = () => {
  const [visibleCalories, setVisibleCalories] = useState(false);
  const [visibleNutrition, setVisibleNutrition] = useState(false);
  const [calorieGoalVisible, setCalorieGoalVisible] = useState(false);
  const [calorieGoalButtonVisible, setCalorieGoalButtonVisible] = useState(false);
  const [nutritionGoalsVisible, setNutritionGoalsVisible] = useState(false);
  const [nutritionGoalsButtonVisible, setNutritionGoalsButtonVisible] = useState(false);
  const [weightVisible, setWeightVisible] = useState(false);
  const [weightButtonVisible, setWeightButtonVisible] = useState(false);
  const [weightGoalVisible, setWeightGoalVisible] = useState(false);
  const [weightGoalButtonVisible, setWeightGoalButtonVisible] = useState(false);

  // values of calories (e.g. 1200, 1300, etc.)
  const calorieGoalContext = useContext(CalorieGoalContext);

  // values of user's current weight
  const weightContext = useContext(WeightContext);

  // values of nutrition goals (carbs, protein, fats) in percentages, adding up to 100% of calorie goal and current macros (carbs, protein, fats) in calories
  const carbContext = useContext(CarbContext);
  const proteinContext = useContext(ProteinContext);
  const fatContext = useContext(FatContext);

  // values of nutritional goals (carbs, protein, fats) in percentages, adding up to 100% of calorie goal
  const [totalNutrition, setTotalNutrition] = useState(carbContext.carbGoal + proteinContext.proteinGoal + fatContext.fatGoal);

  // setting for light/dark mode
  const themeContext = useContext(ThemeContext);

  const navigation = useNavigation();

  function handleBack() {  // change screen to Settings
    navigation.navigate('Settings');
  }

    return (
        <View style={[styles.screen, {backgroundColor: themeContext.theme === 'dark' ? '#101010' : '#F2F2F2'}]}>
          <View style={styles.titleContainer}>
          <TouchableOpacity
              style={styles.settingsButton}
              onPress={handleBack}
              >
              <MaterialCommunityIcons style={styles.backButton} name="chevron-left" color={themeContext.theme === 'dark' ? 'white' : 'black'} size={screenWidth * 0.12}/>
          </TouchableOpacity>
          <Text style={[styles.title, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>Weight</Text>
          </View>
          <View style={[styles.container, { backgroundColor: themeContext.theme === 'dark' ? '#2E2E2E' : '#F2F2F2' }]}>
            <View style={styles.settingsContainer}>
              <MaterialCommunityIcons name="scale-bathroom" color={themeContext.theme === 'dark' ? 'white' : 'black'} size={screenWidth * 0.1} left='50%' />
              <Text style={[styles.settingsText, { color: themeContext.theme === 'dark' ? 'white' : 'black' }]}>Current Weight</Text>
              <TouchableOpacity
                onPress={() => {
                  setWeightVisible(true);
                  setWeightButtonVisible(true);
                }}>
                <Text style={[styles.weightText, { color: themeContext.theme === 'dark' ? 'skyblue' : '#6896E5' }]}>{weightContext.weight.toString().includes(' lbs') ? weightContext.weight : weightContext.weight + ' lbs'}</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.weightContainer, { backgroundColor: themeContext.theme === 'dark' ? '#2E2E2E' : '#F2F2F2' }, {display: weightVisible ? 'block' : 'none'}]}>
              {weightVisible && (
                <FlatList
                    data={Array.from({ length: 211 }, (_, i) => (i + 90) + ' lbs')}
                    renderItem={({ item }) => (
                    // when item pressed, highlight item
                    <TouchableOpacity
                        style={[styles.optionContainer, weightContext.weight === item ? {backgroundColor: themeContext.theme === 'dark' ? 'darkgray' : 'lightgray'} : null]}
                        onPress={() => {
                        // set as currently selected weight
                        weightContext.setWeight(item);
                        }}
                    >
                        <Text style={[styles.optionText, { color: themeContext.theme === 'dark' ? 'white' : 'black' }]}>{item}</Text>
                    </TouchableOpacity>
                    )}
                    keyExtractor={item => item.toString()}
                    contentContainerStyle={styles.optionList}
                    extraData={weightContext.weight}
                />
              )}
            </View>
            <View style={[styles.check, {display: weightButtonVisible ? 'flex' : 'none'}]}>
              {weightButtonVisible && (
                <TouchableOpacity
                  onPress={() => {
                    setWeightVisible(false);
                    setWeightButtonVisible(false);
                  }}>
                  <MaterialCommunityIcons name="check" color={themeContext.theme === 'dark' ? 'white' : 'black'} size={screenWidth * 0.1} left='50%' />
              </TouchableOpacity>
              )}
            </View>
            <View style={styles.settingsContainer}>
              <MaterialCommunityIcons name="scale-bathroom" color={themeContext.theme === 'dark' ? 'white' : 'black'} size={screenWidth * 0.1} left='50%' />
              <Text style={[styles.settingsText, { color: themeContext.theme === 'dark' ? 'white' : 'black' }]}>Goal Weight</Text>
              <TouchableOpacity
                onPress={() => {
                  setWeightGoalVisible(true);
                  setWeightGoalButtonVisible(true);
                }}>
                <Text style={[styles.weightText, { color: themeContext.theme === 'dark' ? 'skyblue' : '#6896E5' }]}>{weightContext.weightGoal.toString().includes(' lbs') ? weightContext.weightGoal : weightContext.weightGoal + ' lbs'}</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.weightContainer, { backgroundColor: themeContext.theme === 'dark' ? '#2E2E2E' : '#F2F2F2' }, {display: weightGoalVisible ? 'block' : 'none'}]}>
              {weightGoalVisible && (
                <FlatList
                    data={Array.from({ length: 211 }, (_, i) => (i + 90) + ' lbs')}
                    renderItem={({ item }) => (
                    // when item pressed, highlight item
                    <TouchableOpacity
                        style={[styles.optionContainer, weightContext.weightGoal === item ? {backgroundColor: themeContext.theme === 'dark' ? 'darkgray' : 'lightgray'} : null]}
                        onPress={() => {
                        // set as currently selected weight
                        weightContext.setWeightGoal(item);
                        }}
                    >
                        <Text style={[styles.optionText, { color: themeContext.theme === 'dark' ? 'white' : 'black' }]}>{item}</Text>
                    </TouchableOpacity>
                    )}
                    keyExtractor={item => item.toString()}
                    contentContainerStyle={styles.optionList}
                    extraData={weightContext.weightGoal}
                />
              )}
            </View>
            <View style={[styles.check, {display: weightGoalButtonVisible ? 'flex' : 'none'}]}>
              {weightGoalButtonVisible && (
                <TouchableOpacity
                  onPress={() => {
                    setWeightGoalVisible(false);
                    setWeightGoalButtonVisible(false);
                  }}>
                  <MaterialCommunityIcons name="check" color={themeContext.theme === 'dark' ? 'white' : 'black'} size={screenWidth * 0.1} left='50%' />
              </TouchableOpacity>
              )}
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
    titleContainer: {
      flexDirection: 'row',
    },
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
      width: '100%',
      height: '88%',
      minWidth: '80%',
      minHeight: '88%',
      // borderWidth: 1,
    },
    weightContainer: {
      width: screenWidth * 0.3,
      height: screenHeight * 0.35,
      alignItems: 'center',
      justifyContent: 'center',
      left: '35%',
      bottom: '2%',
    },
    settingsContainer: {
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop: 16,
      marginBottom: 16,
      // borderWidth: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      marginTop: 50,
      left: '120%',
      textAlign: 'center',
    },
    backButton: {
      flex: 1,
      marginTop: 41,
    },
    settingsText: {
      flex: 1,
      fontSize: 16,
      marginTop: 16,
      marginBottom: 16,
      marginLeft: 8,
      left: '50%',
      fontWeight: 'bold',
      textAlign: 'left',
    },
    nutritionCalText: {
      fontSize: 16,
      textAlign: 'left',
      right: '10%',
    },
    weightText: {
      fontSize: 16,
      textAlign: 'left',
      right: '50%',
    },
    subText: {
      fontSize: 18,
      marginBottom: 16,
    },
    check: {
      width: screenWidth * 0.1,
      height: screenWidth * 0.1,
      left: '40%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    nutritionGoalsContainer: {
      flexDirection: 'row',
      height: screenHeight * 0.25,
      top: '4%',
    },
    optionContainer: {
      paddingVertical: 10,
      paddingHorizontal: 25,
    },
    optionText: {
      fontSize: 18,
    },
    optionList: {
      marginTop: 16,
    },
});

export default App;