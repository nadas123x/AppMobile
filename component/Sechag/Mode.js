import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView,ImageBackground,TouchableHighlight,Button, Image } from "react-native";

export default function Mode({navigation}) {
    
  const PressHandler = () => {
    navigation.navigate('Suite')
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
          <Text style={styles.name}>Modes de transfert:{"\n"}</Text>
{"\n"}

1) Par conduction:

{"\n"}
{"\n"}

-   L’énergie thermique nécessaire au séchage est
apportée non pas par un gaz en mouvement autour
du produit à sécher, mais par contact direct entre
le produit et une paroi chauffée. Les vapeurs
libérées par le séchage sont soit aspirées (séchage
par ébullition), soit entraînées par un gaz de
balayage dont le débit est toujours faible en
comparaison de celui nécessaire à un séchage
convectif. Ce type de sécheur est donc très
intéressant lorsque l’on désire réduire la quantité
d’effluents gazeux rejetés.
          
          {"\n"}
 
{"\n"}


      
  
</Text>
<Image
 source={require('../../assets/mode1.png')}
  resizeMode="contain"
            style={styles.image}
          ></Image>
            
            <ScrollView>
              
            </ScrollView>
<TouchableHighlight 
                style ={{
                    height: 60,
                    width:70,
                    borderRadius:80,
                    backgroundColor : "transparent",
                    marginLeft :'75%',
                    marginTop :'10%'
               }}>
            <Button
             title=' -> '
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
    width: 500,
    height: 250,
    marginLeft: '-5%',
    marginTop:'10%',
    
  },
  description:{
    fontSize:14,
    fontWeight:'800',
    marginLeft: 0,
    marginRight: 10,
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