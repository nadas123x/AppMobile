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
         
<Text style={styles.name}>5) Ventilateur de tirage:{"\n"}</Text>
{"\n"}

•    Deux ventilateurs (entrainés par deux moteurs électrique, pilotés par des
variateurs de vitesse) permettent de régler la vitesse du séchage en agissant
sur la vitesse de déplacement de la masse gazeuse.{"\n"}
 {"\n"}
•    Ils sont situés à l’extérieur de la chambre à poussière. Leurs rôles est de
mettre en dépression l’ensemble du four sécheur. Ils créent une dépression
en tête du tube ce qui provoque une circulation de l’air à l’intérieur du
four.
Ils facilitent :{"\n"}{"\n"}
- Le déplacement du phosphate vers la chambre à poussière.
{"\n"}

- L’évacuation des gaz de combustion. {"\n"}
- L’évacuation de la vapeur d’eau due au séchage. {"\n"}
- L’évacuation de la poussière irrécupérable du phosphate à travers la
cheminée. {"\n"}
- L’orientation de la flamme dans le sens de déplacement du produit pour
éviter le retour de flamme vers l’entrée du four, ce qui provoque des dégâts. {"\n"}

       
          
          
 
{"\n"}


  {"\n"}
  {"\n"}      
  
</Text>
<Image
 source={require('../../assets/fi.jpg')}
  resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.description}>
           
           

           
            </Text>
          
<TouchableHighlight 
                style ={{
                    height: 60,
                    width:70,
                    borderRadius:80,
                    backgroundColor : "transparent",
                    marginLeft :325,
                    marginRight:20,
                    marginTop :-25
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
    width: 500,
    height: 230,
    marginLeft: -50,
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