import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native';

export default function SB({ navigation }) {

  const PressHandler = () => {
    navigation.navigate('Posts')
  }
  return (

    <View style={styles.container}>
      <View style={styles.usineContainer}>
        <ImageBackground source={require('../../assets/occ1.png')} style={styles.image}>
          <View style={styles.titles}>
            <Text style={styles.title}> Système de production et séchage </Text>
            <Text style={styles.subtitle}> Usine Béni Idir</Text>
            <Button title='nada' onPress={PressHandler} />

          </View>
        </ImageBackground>



      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  usineContainer: {
    width: '100%',
    height: '100%',

  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',

  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
    textAlign:'center'
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    backgroundColor:'#ffffff'

  },
  subtitle: {
    fontSize: 25,
    color: '#1449b3',
    backgroundColor:'#ffffff'


  }
});