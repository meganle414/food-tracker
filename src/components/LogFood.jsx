import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import * as FileSystem from 'expo-file-system';
import Papa from 'papaparse';
// import fs from 'fs'0
import { CalorieGoalContext } from '../contexts/CalorieGoalContext';
import { WeightContext } from '../contexts/WeightContext';
import { NameContext } from '../contexts/NameContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { CarbContext } from '../contexts/CarbContext';
import { ProteinContext } from '../contexts/ProteinContext';
import { FatContext } from '../contexts/FatContext';

const App = () => {
  const [foodData, setFoodData] = useState([]);

  // values of calories (e.g. 1200, 1300, etc.)
  const calorieGoalContext = useContext(CalorieGoalContext);

  // values of user's current weight
  const weightContext = useContext(WeightContext);

  // // values of nutritional goals (carbs, protein, fats) in percentages, adding up to 100% of calorie goal
  // const nutritionGoalContext = useContext(NutritionGoalContext);

  // setting for light/dark mode
  const themeContext = useContext(ThemeContext);

  const parseCSV = async () => {
    const results = await Papa.parse('nutrients.csv', {
      delimiter: ',',
      header: true,
    });
    console.log('results:', results);
    setFoodData(results.data);
    console.log('foodData:', foodData);
  };

  useEffect(() => {
    parseCSV();
  }, []);

  // const parseCSV = async () => {
  //   const response = await fetch('http://localhost:3000/');
  //   const text = await response.text();
  //   const results = Papa.parse(text, {
  //     header: true,
  //   });
  //   console.log('results:', results);
  //   setFoodData(results.data);
  //   console.log('foodData:', foodData);
  // };
  
  // useEffect(() => {
  //   parseCSV();
  // }, []);

  // const csv = require('csv-parser')
  // const fs = require('fs')
  // const results = []

  // fs.createReadStream('nutrients.csv')
  //   .pipe(csv())
  //   .on('data', (data) => results.push(data))
  //   .on('end', () => {
  //     console.log(results)
  //   })

  // useEffect(() => {
  //   // fetch('nutrients.csv')
  //   // fetch('https://www.kaggle.com/datasets/niharika41298/nutrition-details-for-most-common-foods')
  //   fetch('http://localhost:3000/')
  //  .then(response => response.text())
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network request failed');
  //       }
  //       return response.text();
  //     })
  //    .then(text => {
  //       Papa.parse(text, {
  //         complete: results => {
  //           setFoodData(results.data);
  //         },
  //         header: true,
  //       });
  //     })
  //     .catch(error => {
  //       console.error('Error fetching nutrients.csv:', error);
  //     });
  // }, []);

  const FoodItem = ({ item }) => (
    <View key={item.Food}>
      <Text>{item.Food}</Text>
      <Text>{item.Measure} ({item.Grams}g)</Text>
      <Text>Calories: {item.Calories}</Text>
      <Text>Protein: {item.Protein}g</Text>
      <Text>Fat: {item.Fat}g</Text>
      <Text>Carbs: {item.Carbs}g</Text>
      <Text>Category: {item.Category}</Text>
      {/* category option w/ color coordinated category symbol group */}
    </View>
  );
  
  const renderItem = ({ item }) => (
    <FoodItem item={item} />
  );

    return (
        <View style={[styles.screen, {backgroundColor: themeContext.theme === 'dark' ? '#101010' : '#F2F2F2'}]}>
          <Text style={[styles.title, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>Log Food</Text>
          {/* <Text>{"Food Data " + foodData.map(item => item.Food).join(',')}</Text> */}
          <Text>Food Data ({foodData.length})</Text>
          <View style={[styles.container, { backgroundColor: themeContext.theme === 'dark' ? '#2E2E2E' : '#F2F2F2' }]}>
            {/* <View style={[styles.searchBar, {backgroundColor: themeContext === 'dark' ? 'black' : 'd9dbda'}]}>
              <MaterialCommunityIcons name="magnify" color={themeContext.theme === 'dark' ? 'white' : 'black'} size={screenWidth * 0.1} />
              <TextInput style={[styles.searchText, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]} placeholder='Search' />
            </View>
            <View>
              <Text>HELLO</Text>
            </View> */}
            {/* <ScrollView nestedScrollEnabled={true}>
              <Text>{JSON.stringify(foodData)}</Text>
            </ScrollView> */}
            <FlatList
              style={styles.foodData}
              data={foodData}
              renderItem={renderItem}
              keyExtractor={(item) => item.Food}
            />
            {/* maybe have past 7 days worth of food here as a step graph */}
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
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      marginTop: 50,
      textAlign: 'center',
    },
    searchBar: {
      padding: 10,
      flexDirection: 'row',
      width: '95%',
      borderRadius: 10,
      alignItems: 'center',
    },
    searchText: {
      fontSize: 20,
    },
    // foodDataContainer: {
    //   paddingVertical: 10,
    //   paddingHorizontal: 25,
    // },
    foodData: {
      height: 50,
      width: 300,
      alignContent: 'center',
      borderWidth: 1,
    },
});

export default App;