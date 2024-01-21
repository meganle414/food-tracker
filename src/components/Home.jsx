import React, { useRef, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { CalorieGoalContext } from '../contexts/CalorieGoalContext';

const App = () => {
    return (
        <View></View>
        //   <Text style={styles.title}>Home</Text>
        // </View>
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