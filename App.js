import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import UzinItem from './component/UzinItem';

export default function App() {
  return (
    <View style={styles.container}>

 
 <UzinItem>

 </UzinItem>




      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  
    alignItems: 'center',
    justifyContent: 'center',
  }
});
