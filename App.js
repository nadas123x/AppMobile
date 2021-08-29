import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
<View style={styles.usineContainer}>
    <ImageBackground source={require('./occ.png')}
        style={styles.image}

    />
  <View style={styles.titles}>
    <Text style={styles.title}> Système de production et séchage </Text>
    <Text style={styles.subtitle}> Usine Béni Idir</Text>
  </View>



</View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  usineContainer:{
    width: '100%' ,
        height: '100%' ,

  },
    image:{
      width:'100%',
        height:'100%',
        resizeMode:'contain',

    },
  titles:{
marginTop:'30%',
    width: '100%' ,
    alignItems:'center' ,
  },
  title: {
    fontSize: 40,
    fontWeight:'500',

  },
  subtitle:{
    fontSize: 15,
    color:'#1449b3',


  }
});
