import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView,ImageBackground,TouchableHighlight,Button, Image } from "react-native";

export default function Foyer({navigation}) {
    
  const PressHandler = () => {
    navigation.navigate('Foyer1')
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
         
<Text style={styles.name}>1) Le foyer  :{"\n"}</Text>
{"\n"}

•    C’est une chambre de combustion d’une forme cylindrique en tôle d’acier, couverte
intérieurement par des briques isolantes pour limiter l’échange thermique avec l’extérieur et
protéger les tôles d’acier contre la fonte. Ce cylindre est de 14.4 m de longueur, 3m de diamètre interne et un volume de 74 métres au cube.
{"\n"}
{"\n"}



       
          
          {"\n"}
 
{"\n"}


        
  
</Text>
<Image
 source={require('../../assets/foye.png')}
  resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.description}>
            {"\n"}
            •   Cette chambre à pour rôle de générer le gaz
chaud produit par une réaction chimique de combustion qui ne peut se produire que si l’on
réunit trois éléments : {"\n"}
{"\n"}

→ Un combustible : C’est le fuel pulvérisé en fines gouttelettes par l’intermédiaire
d’un brûleur. {"\n"}
{"\n"}
→  Un comburant : C’est l’air primaire injecté par un ventilateur VRB, qui donne
naissance à l’oxygène nécessaire à la combustion.{"\n"}
{"\n"}
→ Une énergie d’activation : assurer par une torche.
            </Text>
          
<TouchableHighlight 
                style ={{
                    height: 60,
                    width:60,
                    borderRadius:80,
                    backgroundColor : "transparent",
                    marginLeft :'78%',
                    marginTop :'3%'
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
    marginTop: '10%',
    marginLeft: '1%',
    
    

   
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
    height: 200,
    marginLeft: 0,
    marginTop:'-15%',
    
  },
  description:{
    fontSize:14,
    fontWeight:'800',
    marginLeft: 0,
    marginRight: '1%',
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