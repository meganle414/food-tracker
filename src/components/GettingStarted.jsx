import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel'

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

const App = () => {
    const cards = [
        {"id": 1, "image": require("../images/hazel_swimming.png"), "text": "deez"},
    ]
    return (
        <>
        <Text style={styles.title}>Getting Started</Text>
        <View style={styles.container}>
            {
                cards.map(card => {
                    return <View key={card.id}>
                        <Image
                            source={card.image}
                            style={styles.image}
                        >
                        </Image>
                        <Text style={styles.text}>{card.text}</Text>
                    </View>     
                })
            }
        </View>
        <View style={style.overlay}>
            {/* put  left and right arrows here*/}
            
        </View>
        </>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        marginTop: 46,
        paddingVertical: 8,
        textAlign: 'center',
        fontSize: 30,
        color: '#222222',
    },
    image: {
        alignItems: 'center',
        width: screenwidth - 100,
        height: screenheight - 500,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: '#222222',
    },
    overlay: {
        width: 100,
        height: 100,
        position:'absolute',
        bottom: 20,
    },
    // ScrollView: {
    //     marginTop: 32,
    //     alignItems: 'center',
    // }
  });