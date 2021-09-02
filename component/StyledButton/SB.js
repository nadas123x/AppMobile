import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, TouchableHighlight,Image,StyleSheet, Text, View, Button } from 'react-native';

export default function SB({ navigation }) {

  const PressHandler = () => {
    navigation.navigate('Posts')
  }
  return (

    <View style={styles.container}>
      <View style={styles.usineContainer}>
        <ImageBackground source={require('../../assets/ocpp.jpg')}  resizeMode="cover"  style={styles.image}>
          <View style={styles.titles}>
            <Image source ={{uri:"https://ocpsiteprodsa.blob.core.windows.net/media/2021-03/OCP%20Group_s.png" }}style={styles.bc} />
            <TouchableHighlight 
                style ={{
                    height: 30,
                    width:150,
                    borderRadius:80,
                    backgroundColor : "olivedrab",
                    marginLeft :130,
                    marginRight:200,
                    marginTop :30
                }}>
            <Button
             title='Start'
             alignItems='center'
               onPress={PressHandler}

               color="olivedrab"             />
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
}


  }
 
);