import { StatusBar } from 'expo-status-bar';
import React, { cloneElement } from 'react';
import { ImageBackground, TouchableHighlight, Image, StyleSheet, Text, View, Button } from 'react-native';

export default function SB({ navigation }) {
  const PressHandler = () => {
    navigation.navigate('Actu')
  }
  return (

    <View style={styles.container}>
      <View style={styles.usineContainer}>
        <ImageBackground source={require('../../assets/ocpp.jpg')} resizeMode="cover" style={styles.image}>
          <View style={styles.titles}>
            <Image source={{ uri: "https://www.afriquemagazine.com/sites/default/files/2021-04/logo%20OCP%20Quadri%5B1%5D.png" }} style={styles.bc} />
            <TouchableHighlight
              style={{
                height: 30,
                width: 100,
                borderRadius: 80,
                backgroundColor: "olivedrab",
                marginTop: 30,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Button
                title='Start'
                alignItems='center'
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
                onPress={PressHandler}

                color="olivedrab" />
            </TouchableHighlight>

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
    flex: 1,
    justifyContent: "center"

  },

  bc: {
    width: 90,
    height: 100,
    marginLeft: 8,
    alignSelf: 'center',
    justifyContent: 'center',


  },
  button1: {
    width: 500,
    marginTop: 20,
    backgroundColor: "green",
    padding: 15,
    borderRadius: 50,
  },
  title: {
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 122,
    backgroundColor: "black",
  }


}

);