import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView,ImageBackground,TouchableHighlight,Button, Image } from "react-native";

export default function Foyer({navigation}) {
    
  const PressHandler = () => {
    navigation.navigate('Usiii')
  }
  return (
    <ScrollView>
    <View style={styles.container}>
    <ImageBackground
        source={{uri: 'https://wallpaperaccess.com/full/2693274.jpg'}}
        style={styles.imagee}
    />
        <View style={styles.rect2}>
         
          <Text style={styles.description}>
    
             </Text>
       
         
          <Text style={styles.description}> 
         
<Text style={styles.name}>1) Le foyer : {"\n"} </Text>

          {"\n"}
          C’est une chambre de combustion d’une forme cylindrique en tôle d’acier, couverte
intérieurement par des briques isolantes pour limiter l’échange thermique avec l’extérieur et
protéger les tôles d’acier contre la fonte. Ce cylindre est de 14.4 m de longueur,
3 m de diamètre interne et un volume de 74 m 3
          
          <Image
            source={require('../../assets/foye.png')}
            resizeMode="center"
            style={styles.image}
          ></Image>
  
</Text>
<TouchableHighlight 
                style ={{
                    height: 60,
                    width:60,
                    borderRadius:80,
                    backgroundColor : "transparent",
                    marginLeft :305,
                    marginRight:20,
                    marginTop :18
                }}>
            <Button
             title=' ►'
             alignItems='center'
               onPress={PressHandler}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
        </View>
      </View>
 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
 
  rect2: {
    width:420,
    height: 696,
    backgroundColor: "rgba(208,213,214,0.66)",
    marginTop: 45,
    marginLeft: 4,
    
    

   
  },
  name:{
    fontSize:18,
    marginLeft:0,
    marginRight:0,
    marginTop:20,
    color:'darkgreen',
    backgroundColor: "transparent",
    textDecorationLine: "underline",

    
    fontWeight:'bold',
  },
  image: {
    width: 40,
    height: 100,
    marginTop: 9,
    marginLeft: -80
  },
  description:{
    fontSize:14,
    fontWeight:'800',
    marginLeft: 0,
    marginRight: 10,
    textAlign: 'left',
    color: "black",
    marginTop:10,
  },
  imagee:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',


  },
});