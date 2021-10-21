import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView,ImageBackground,TouchableHighlight,Button, Image } from "react-native";

export default function Usii({navigation}) {
    
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
          {"\n"}
<Text style={styles.name}>	→ Unité de stockage et chargement du phosphate sec : {"\n"} </Text>
{"\n"}
          {"\n"}
          •   Le phosphate criblé alimente le circuit sec où il sera classé en
différentes qualités, cette unité comporte trois stocks ayant
une capacité globale de 500 000 tonnes.Une station de
chargement permet de remplir les wagons à destination du
Port de Casablanca, et du Port de Jorf-ellasfar.{"\n"}
          {"\n"}
          <Text style={styles.name}>	→ Unité de séchage : {"\n"} </Text>
          {"\n"}
          {"\n"}
          •    Elle comprend 8 fours sécheurs d’une capacité de 300  t/h
chacun. Son rôle est de diminuer, par échange thermique
l’humidité contenue dans le phosphate brut ou lavé.{"\n"}
{"\n"}
{"\n"}

<Text style={styles.name}>	♦ Pourquoi le séchage ? : {"\n"} </Text>

{"\n"}
{"\n"}

•   L’eau contenue dans le phosphate augmente les frais
de transport du produit.{"\n"}
{"\n"}

•   La valorisation du produit : les clients exigent une
humidité bien déterminée. Au-delà de cette valeur le
phosphate n’est pas accepté par les clients.
</Text>
<TouchableHighlight 
                style ={{
                    height: 60,
                    width:60,
                    borderRadius:80,
                    backgroundColor : "transparent",
                    marginLeft :'70%',
                    marginTop :'5%'
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
 width:'100%',
    height: '100%',
    backgroundColor: "rgba(208,213,214,0.66)",
    marginTop: '8%',
    marginLeft: '1%',
    
    

   
  },
  name:{
    fontSize:18,
    marginLeft:0,
    marginRight:0,
    marginTop:0,
    color:'darkgreen',
    backgroundColor: "transparent",
    
    fontWeight:'bold',
  },
  image: {
    width: '100%',
    height: 314,
    marginTop: -20,
    marginLeft: 2
  },
  description:{
    fontSize:14,
    fontWeight:'800',
    marginLeft: 0,
    marginRight: '5%',
    textAlign: 'left',
    color: "black",
    marginTop:'1%',
    fontStyle:'italic',
  },
  imagee:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',


  },
});