import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView,ImageBackground,TouchableHighlight,Button, Image } from "react-native";

export default function Usiii({navigation}) {
    
  const PressHandler1 = () => {
    navigation.navigate('Foyer')
  }
  const PressHandler2 = () => {
    navigation.navigate('Usine')
  }
  const PressHandler3 = () => {
    navigation.navigate('Foyer')
  }
  const PressHandler4 = () => {
    navigation.navigate('Usine')
  }
  const PressHandler5 = () => {
    navigation.navigate('Usine')
  }
  const PressHandler6 = () => {
    navigation.navigate('Usine')
  }
  return (
    <ScrollView>
    <View style={styles.container}>
    <ImageBackground
        source={{uri: 'https://wallpaperaccess.com/full/2693274.jpg'}}
        style={styles.imagee}
    />
        <View style={styles.rect2}>
          <Text style={styles.name}>Présentation du procédé de séchage :</Text>
         

          <Text style={styles.description}> 
       
          →    L’alimentation de séchage est garantie par une série de convoyeurs permettant de traiter
en parallèle deux qualités sources.{"\n"}
{"\n"}
•  Le produit est contrôlé par deux extracteurs à débit réglable et introduit directement
dans la buse ou se fait le premier contact entre le produit et la masse gazeuse.{"\n"}
{"\n"}

→ Cette dernière
est produite dans la chambre de combustion du fuel. Des ventilateurs de tirage permettent la
transmission du produit et la masse gazeuse de la buse vers la virole.{"\n"}
{"\n"}

→ Ce tube sécheur est
équipé à l’intérieur par des augets et des palettes permettant le transport du produit vers la
chambre à poussière qui récupère les particules du phosphates grosses et fines, alors que les
extra-fines sont dissipées à travers la cheminée par les ventilateurs de tirage.


{"\n"}
          </Text>
          <Image
            source={require('../../assets/Capture.png')}
            resizeMode="center"
            style={styles.image}
          ></Image>
 
<TouchableHighlight 
                style ={{
                    height: 90,
                    width:30,
                    borderRadius:80,
                    backgroundColor : "transparent",
                    marginLeft :75,
                    marginRight:20,
                    marginTop :-230
                }}>
            <Button
             title=' 1'
             alignItems='center'
               onPress={PressHandler1}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
               <TouchableHighlight 
                style ={{
                    height: 90,
                    width:30,
                    borderRadius:80,
                    backgroundColor : "transparent",
                    marginLeft :128,
                    marginRight:40,
                    marginTop :-80
                    
                }}>
            <Button
             title=' 2'
             alignItems='center'
               onPress={PressHandler2}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
               <TouchableHighlight 
                style ={{
                    height: 20,
                    width:60,
                    borderRadius:80,
                    backgroundColor : "darkgreen",
                    marginLeft :175,
                    marginRight:20,
                    marginTop :-91
                }}>
            <Button
             title=' 3'
             alignItems='center'
               onPress={PressHandler3}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
               <TouchableHighlight 
                style ={{
                    height: 30,
                    width:55,
                    borderRadius:80,
                    backgroundColor : "darkgreen",
                    marginLeft :256,
                    marginRight:20,
                    marginTop :-31
                }}>
            <Button
             title=' 4'
             alignItems='center'
               onPress={PressHandler4}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
               <TouchableHighlight 
                style ={{
                    height: 30,
                    width:50,
                    borderRadius:80,
                    backgroundColor : "darkgreen",
                    marginLeft :320,
                    marginRight:20,
                    marginTop :-45
                }}>
            <Button
             title=' 5'
             alignItems='center'
               onPress={PressHandler5}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
               <TouchableHighlight 
                style ={{
                    height: 30,
                    width:45,
                    borderRadius:80,
                    backgroundColor : "darkgreen",
                    marginLeft :366,
                    marginRight:20,
                    marginTop :60
                }}>
            <Button
             title=' 6'
             alignItems='center'
               onPress={PressHandler6}

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
    marginLeft: 2,
    
    

   
  },
  name:{
    fontSize:19,
    textDecorationLine: "underline",
    marginLeft:50,
    marginRight:20,
    marginTop:0,
    color:'darkgreen',
    backgroundColor: "transparent",
    
    fontWeight:'bold',
  },
  image: {
    width: 450,
    height: 400,
    marginTop: -40,
    marginLeft: 2
  },
  description:{
    fontSize:13,
    fontWeight:'800',
    marginLeft: 0,
    marginRight: 10,
    textAlign: 'left',
    color: "black",
    marginTop:30,
  },
  imagee:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',


  },
});