import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CalorieGoalContext } from '../contexts/CalorieGoalContext';
import { WeightContext } from '../contexts/WeightContext';
import { NameContext } from '../contexts/NameContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { CarbContext } from '../contexts/CarbContext';
import { ProteinContext } from '../contexts/ProteinContext';
import { FatContext } from '../contexts/FatContext';


const App = () => {

  // // values of calories (e.g. 1200, 1300, etc.)
  // const calorieGoalContext = useContext(CalorieGoalContext);

  // // values of user's current weight
  // const weightContext = useContext(WeightContext);

    // user's name
    const nameContext = useContext(NameContext);

    // theme (light/dark mode)
    const themeContext = useContext(ThemeContext);
  
    const screenWidth = Dimensions.get('window').width;

    function handleEditName() {  // change name
      nameContext.setName('Apple2');
    }

    return (
      <View style={[styles.screen, {backgroundColor: themeContext.theme === 'dark' ? '#101010' : '#F2F2F2'}]}>
        <Text style={[styles.title, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>Profile</Text>
        <View style={[styles.container, { backgroundColor: themeContext.theme === 'dark' ? '#2E2E2E' : '#F2F2F2' }]}>
          <Image style={styles.profileImage} source={require('../images/profile_pic.png')} />
          <View style={styles.row}>
            <Text style={[styles.title, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }, {flex: 1}]}>{nameContext.name}</Text>
            <TouchableOpacity
              onPress={handleEditName}
              >
              <MaterialCommunityIcons name="pencil" color={themeContext.theme === 'dark' ? 'white' : 'black'} size={screenWidth * 0.05} left='10%' flex={1} marginTop={38} />
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
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    row: {
      flex: 1,
      flexDirection: 'row',
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
    profileImage: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
      top: '5%',
      borderRadius: 100,
    },
});

export default App;