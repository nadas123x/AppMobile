import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView,ImageBackground,TouchableHighlight,Button, Image } from "react-native";

export default function Buse({navigation}) {
    
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
         
<Text style={styles.name}>2) La buse:{"\n"}</Text>
{"\n"}
{"\n"}
•    C’est  un élément intermédiaire entre le foyer et la virole d’une structure géométrique spéciale. Au niveau de la buse se fait le premier contact du phosphate avec la masse gazeuse. Cet élément est porté à une température d’environ 900°C dans le but de sécher le phosphate.
{"\n"}
{"\n"}



       
          
          {"\n"}
 
{"\n"}


  {"\n"}
  {"\n"}      
  
</Text>
<Image
 source={require('../../assets/buse.jpg')}
  resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.description}>
            {"\n"}
              {"\n"}

            •   La buse joue un rôle très important dans l’adaptation de la
chaleur entre le foyer et la virole.
            </Text>
          
<TouchableHighlight 
                style ={{
                    height: 60,
                    width:70,
                    borderRadius:80,
                    backgroundColor : "transparent",
                    marginLeft :325,
                    marginRight:20,
                    marginTop :40
                }}>
            <Button
             title=' exit '
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
    marginTop:0,
    color:'darkgreen',
    backgroundColor: "transparent",
    textDecorationLine: "underline",

    
    fontWeight:'bold',
  },
  image: {
    width: 400,
    height: 300,
    marginLeft: 0,
    marginTop:-60,
    
  },
  description:{
    fontSize:14,
    fontWeight:'800',
    marginLeft: 0,
    marginRight: 10,
    textAlign: 'left',
    color: "black",
    marginTop:10,
    fontStyle:'italic',
  },
  imagee:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',


  },
});