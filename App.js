import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GettingStarted from './src/components/GettingStarted'
import PropTypes from 'prop-types';

export default function App() {
  return (
    <GettingStarted></GettingStarted>
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