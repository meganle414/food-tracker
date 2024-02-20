import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Dialog from "react-native-dialog";
import { CalorieGoalContext } from '../contexts/CalorieGoalContext';
import { WeightContext } from '../contexts/WeightContext';
import { NameContext } from '../contexts/NameContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { CarbContext } from '../contexts/CarbContext';
import { ProteinContext } from '../contexts/ProteinContext';
import { FatContext } from '../contexts/FatContext';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const App = () => {
  const [visible, setVisible] = useState(false);
  const [newName, setNewName] = useState('');

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  // // values of calories (e.g. 1200, 1300, etc.)
  // const calorieGoalContext = useContext(CalorieGoalContext);

  // // values of user's current weight
  // const weightContext = useContext(WeightContext);

    // user's name
    const nameContext = useContext(NameContext);

    // theme (light/dark mode)
    const themeContext = useContext(ThemeContext);

    const handleEditName = (newName) => {  // change name
      nameContext.setName(newName);
      setVisible(false);
    }

    return (
      <View style={[styles.screen, {backgroundColor: themeContext.theme === 'dark' ? '#101010' : '#F2F2F2'}]}>
        <Text style={[styles.title, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>Profile</Text>
        <View style={[styles.container, { backgroundColor: themeContext.theme === 'dark' ? '#2E2E2E' : '#F2F2F2' }]}>
          <Image style={styles.profileImage} source={require('../images/profile_pic.png')} />
          <View style={styles.row}>
            <Text style={[styles.title, { color: themeContext.theme === 'dark' ? 'white' : '#222222' }]}>{nameContext.name}</Text>
            <TouchableOpacity
              onPress={showDialog}
              >
              <MaterialCommunityIcons name="pencil" style={styles.pencilIcon} color={themeContext.theme === 'dark' ? '#23AAF2' : '#06619C'} size={screenWidth * 0.06} />
            </TouchableOpacity>
          </View>
          <View>
            <Dialog.Container visible={visible}>
              <Dialog.Title titleStyle={{ color: themeContext.theme === 'dark' ? 'white' : 'black' }}>Account Name Change</Dialog.Title>
                <Dialog.Description>What do you want to change your name to?</Dialog.Description>
                <Dialog.Input onChangeText={(text) => setNewName(text)} />
                <Dialog.Button
                  label='Cancel'
                  onPress={handleCancel}
                  containerStyle={{ backgroundColor: themeContext.theme === 'dark' ? 'black' : 'white', color: themeContext.theme === 'dark' ? 'white' : 'black' }}
                />
                <Dialog.Button
                  label='Set Name'
                  onPress={() => handleEditName(newName)}
                  containerStyle={{ backgroundColor: themeContext.theme === 'dark' ? 'black' : 'white', color: themeContext.theme === 'dark' ? 'white' : 'black' }}
                />
            </Dialog.Container>
          </View>
          <View style={styles.row}>

          </View>
          <View style={styles.row}>

          </View>
          <View style={styles.row}>

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
      justifyContent: 'flex-start',
      // width: screenWidth * 0.9,
      backgroundColor: 'gray',
      borderWidth: 1,
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
    pencilIcon: {
      marginLeft: 10,
      marginTop: 38,
    },
});

export default App;