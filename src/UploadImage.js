import React, { useState, useContext, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeContext } from './contexts/ThemeContext';

const screenWidth = Dimensions.get('window').width;
export default function UploadImage() {
  const [image, setImage] = useState(null);

  // theme (light/dark mode)
  const themeContext = useContext(ThemeContext);

  const addImage = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {  // was cancelled before
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <View style={styles.uploadButtonContainer}>
        <TouchableOpacity onPress={addImage} style={styles.uploadButton}>
          <Text>{image ? 'Edit' : 'Upload'} Image</Text>
          <MaterialCommunityIcons name="camera" size={screenWidth * 0.06} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 200,
    width: 200,
    backgroundColor: '#EFEFEF',
    position: 'relative',
    borderRadius: 999,
    overflow: 'hidden',
    top: '3%',
  },
  uploadButtonContainer: {
    opacity: 0.7,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '25%',
  },
  uploadButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});