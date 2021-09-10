import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView,ImageBackground,TouchableHighlight,Button, Image } from "react-native";

export default function Virole({navigation}) {
    
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
         
<Text style={styles.name}>3) La virole ( tube sécheur ):{"\n"}</Text>
{"\n"}

•   C’est un tube cylindrique de 25m de longueur et de 1.70m de diamètre, tournant avec une vitesse de rotation constante de 8 tours/min, équipée avec des augets et des palettes tout le long de sa paroi interne, dont :{"\n"}
{"\n"}


<Text style={styles.namee}>→ 	Les augets :

{"\n"}</Text>
{"\n"}

 •  Permettent de faire tomber le produit en pluie pour augmenter la surface d’échange thermique entre ce dernier et la masse gazeuse.{"\n"}

{"\n"}


<Text style={styles.namee}>→ 	Les palettes :

{"\n"}</Text>

{"\n"}


 •  Permettent l’acheminement du produit vers l’extérieur.{"\n"}




    
 


  
</Text>

            <Text style={styles.description}>
            

            </Text>
           
            <Image
 source={require('../../assets/virole.jpg')}
  resizeMode="contain"
            style={styles.image}
          ></Image>
        
         <TouchableHighlight 
                style ={{
                    height: 60,
                    width:70,
                    borderRadius:80,
                    backgroundColor : "transparent",
                    marginLeft :'75%',
                    marginRight:0,
                    marginTop :'65%'
                
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
    height: 300,
    marginLeft: 0,
    marginTop:'75%',
    position:'absolute'
    
  },
   namee:{
    fontSize:16,
    marginLeft:0,
    marginRight:0,
    marginTop:0,
    color:'darkgreen',
    backgroundColor: "transparent",

    
    fontWeight:'bold',
  },
  description:{
    fontSize:14,
    fontWeight:'800',
    marginLeft: 0,
    textAlign: 'left',
    color: "black",
    marginTop:'2%',
    fontStyle:'italic',
  },
  imagee:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',


  },
});