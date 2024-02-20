import React, { useRef, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Switch, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CalorieGoalContext } from '../contexts/CalorieGoalContext';
import { WeightContext } from '../contexts/WeightContext';
import { NameContext } from '../contexts/NameContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { CarbContext, CarbGoalContext } from '../contexts/CarbContext';
import { ProteinContext } from '../contexts/ProteinContext';
import { FatContext } from '../contexts/FatContext';
import { StatusBar } from 'expo-status-bar';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const App = () => {

  // values of calories (e.g. 1200, 1300, etc.)
  const calorieGoalContext = useContext(CalorieGoalContext);

  // // values of user's current weight
  // const weightContext = useContext(WeightContext);

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
          <Text style={[styles.title, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>Goals</Text>
          </View>
          <View style={[styles.container, { backgroundColor: themeContext.theme === 'dark' ? '#2E2E2E' : '#F2F2F2' }]}>
            <View style={styles.settingsContainer}>
              <MaterialCommunityIcons name="food" color={themeContext.theme === 'dark' ? 'white' : 'black'} size={screenWidth * 0.1} left='50%' />
              <Text style={[styles.settingsText, { color: themeContext.theme === 'dark' ? 'white' : 'black' }]}>Calories</Text>
              <View style={styles.settingsTextContainer}></View>
              <Text style={[styles.nutritionPercentageText, { color: themeContext.theme === 'dark' ? 'skyblue' : '#6896E5' }]}>{Intl.NumberFormat("en-US").format(calorieGoalContext.calorieGoal) + ' g'}</Text>
            </View>
            <View style={styles.settingsContainer}>
              <MaterialCommunityIcons name="food-croissant" color={themeContext.theme === 'dark' ? 'white' : 'black'} size={screenWidth * 0.1} left='50%' />
              <Text style={[styles.settingsText, { color: themeContext.theme === 'dark' ? 'white' : 'black' }, { right: '15%' }]}>Carbs</Text>
              <View style={styles.settingsTextContainer}>
                <Text style={[styles.nutritionCalText, { color: themeContext.theme === 'dark' ? 'lightgray' : '#6A6A6A' }]}>{Intl.NumberFormat("en-US").format(Math.round(calorieGoalContext.calorieGoal * (carbContext.carbGoal/100))) + ' g'}</Text>
              </View>
              <Text style={[styles.nutritionPercentageText, { color: themeContext.theme === 'dark' ? 'skyblue' : '#6896E5' }]}>{carbContext.carbGoal + '%'}</Text>
            </View>
            <View style={styles.settingsContainer}>
              <MaterialCommunityIcons name="food-steak" color={themeContext.theme === 'dark' ? 'white' : 'black'} size={screenWidth * 0.1} left='50%' />
              <Text style={[styles.settingsText, { color: themeContext.theme === 'dark' ? 'white' : 'black' }]}>Protein</Text>
              <View style={styles.settingsTextContainer}>
                <Text style={[styles.nutritionCalText, { color: themeContext.theme === 'dark' ? 'lightgray' : '#6A6A6A' }]}>{Intl.NumberFormat("en-US").format(Math.round(calorieGoalContext.calorieGoal * (proteinContext.proteinGoal/100))) + ' g'}</Text>
              </View>
              <Text style={[styles.nutritionPercentageText, { color: themeContext.theme === 'dark' ? 'skyblue' : '#6896E5' }]}>{proteinContext.proteinGoal + '%'}</Text>
            </View>
            <View style={styles.settingsContainer}>
              <MaterialCommunityIcons name="cupcake" color={themeContext.theme === 'dark' ? 'white' : 'black'} size={screenWidth * 0.1} left='50%' />
              <Text style={[styles.settingsText, { color: themeContext.theme === 'dark' ? 'white' : 'black' }]}>Fat</Text>
              <View style={styles.settingsTextContainer}>
                <Text style={[styles.nutritionCalText, { color: themeContext.theme === 'dark' ? 'lightgray' : '#6A6A6A' }]}>{Intl.NumberFormat("en-US").format(Math.round(calorieGoalContext.calorieGoal * (fatContext.fatGoal/100))) + ' g'}</Text>
              </View>
              <Text style={[styles.nutritionPercentageText, { color: themeContext.theme === 'dark' ? 'skyblue' : '#6896E5' }]}>{fatContext.fatGoal + '%'}</Text>
            </View>
            <GestureHandlerRootView style={[{ flex: 1 }, { backgroundColor: 'lightgray' }]}>
              <View style={styles.nutritionGoalsContainer}>
                <View style={styles.carbsCol}>
                  <Text style={styles.optionText}>Carbs</Text>
                  <Text style={styles.subText}>{Math.round(calorieGoalContext.calorieGoal * (carbContext.carbGoal/100)) + ' cal'}</Text>
                  <FlatList
                  data={Array.from({ length: 21 }, (_, i) => i * 5 + '%')}
                  renderItem={({ item }) => (
                    // when item pressed, highlight item
                    <TouchableOpacity
                      style={[styles.optionContainer, (carbContext.carbGoal + '%') === item ? styles.selectedOption : null]}
                      onPress={() => {
                        // set as currently selected carb goal
                        carbContext.setCarbGoal(Number(item.slice(0, -1)));
                        setTotalNutrition(Number(item.slice(0, -1)) + proteinContext.proteinGoal + fatContext.fatGoal);
                      }}
                    >
                      <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.toString()}
                  contentContainerStyle={styles.optionList}
                  extraData={carbContext.carbGoal}
                  />
                </View>
                <View style={styles.proteinCol}>
                  <Text style={styles.optionText}>Protein</Text>
                  <Text style={styles.subText}>{Math.round(calorieGoalContext.calorieGoal * (proteinContext.proteinGoal/100)) + ' cal'}</Text>
                  <FlatList
                  data={Array.from({ length: 21 }, (_, i) => i * 5 + '%')}
                  renderItem={({ item  }) => (
                    // when item pressed, highlight item
                    <TouchableOpacity
                      style={[styles.optionContainer, (proteinContext.proteinGoal + '%') === item ? styles.selectedOption : null]}
                      onPress={() => {
                        // set as currently selected protein goal
                        proteinContext.setProteinGoal(Number(item.slice(0, -1)));
                        setTotalNutrition(carbContext.carbGoal + Number(item.slice(0, -1)) + fatContext.fatGoal);
                      }}
                    >
                      <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.toString()}
                  contentContainerStyle={styles.optionList}
                  extraData={proteinContext.proteinGoal}
                />
                </View>
                <View style={styles.fatCol}>
                  <Text style={styles.optionText}>Fat</Text>
                  <Text style={styles.subText}>{Math.round(calorieGoalContext.calorieGoal * (fatContext.fatGoal/100)) + ' cal'}</Text>
                  <FlatList
                  data={Array.from({ length: 21 }, (_, i) => i * 5 + '%')}
                  renderItem={({ item }) => (
                    // when item pressed, highlight item
                    <TouchableOpacity
                      style={[styles.optionContainer, (fatContext.fatGoal + '%') === item ? styles.selectedOption : null]}
                      onPress={() => {
                        // set as currently selected fat goal
                        fatContext.setFatGoal(Number(item.slice(0, -1)));
                        setTotalNutrition(carbContext.carbGoal + proteinContext.proteinGoal + Number(item.slice(0, -1)));
                      }}
                    >
                      <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.toString()}
                  contentContainerStyle={styles.optionList}
                  extraData={fatContext.fatGoal}
                  />
                </View>
              </View>
              <Text style={styles.totalNutrition}>Calorie Goal: {calorieGoalContext.calorieGoal}</Text>
              <Text style={styles.totalNutrition}>Total: {totalNutrition}%</Text>
            </GestureHandlerRootView>
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
    settingsContainer: {
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop: 16,
      marginBottom: 16,
      // borderWidth: 1,
    },
    settingsTextContainer: {
      flex: 1,
      marginLeft: 16,
      marginRight: '30%',
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
    nutritionPercentageText: {
      fontSize: 16,
      textAlign: 'left',
      right: '50%',
    },
    subText: {
      fontSize: 18,
      marginBottom: 16,
    },
    nutritionGoalsContainer: {
      flexDirection: 'row',
      height: 175,
      backgroundColor: 'darkgray',
    },
    carbsCol: {
      flex: 1,
      alignItems: 'center',
    },
    proteinCol: {
      flex: 1,
      alignItems: 'center',
    },
    fatCol: {
      flex: 1,
      alignItems: 'center',
    },
    totalNutrition: {
      fontSize: 18,
      marginTop: 32,
      textAlign: 'center',
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
    selectedOption: {
      backgroundColor: 'lightgray',
    },
});

export default App;