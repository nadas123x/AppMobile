import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView,ImageBackground,TouchableHighlight,Button, Image } from "react-native";

export default function Fin({navigation}) {
    
  const PressHandler = () => {
    navigation.navigate('Posts')
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

3)  Par convection ou par entrainement:

{"\n"}
{"\n"}

-  Ce mode de séchage est très répandu, le gaz de
séchage (communément de l’air, ce peut être
aussi de l’azote ou de la vapeur d’eau surchauffée)
assurant simultanément les transferts de chaleur
et de matière. L’eau d’humidité n’entre pas
nécessairement en ébullition mais se vaporise à la
surface du solide, la pression partielle de l’eau
dans le gaz de séchage étant inférieure à la
pression de vapeur saturante de l’eau d’humidité à
la température du solide humide pendant le
séchage.
          {"\n"}
 
{"\n"}


      
  
</Text>
<Image
 source={require('../../assets/mode3.png')}
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
             title=' EXIT '
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
    marginLeft: '-12%',
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