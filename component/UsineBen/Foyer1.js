import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView,ImageBackground,TouchableHighlight,Button, Image } from "react-native";

export default function Foyer1({navigation}) {
    
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
         



{"\n"}
{"\n"}


        
  
</Text>
<Image
 source={require('../../assets/foyee.jpg')}
  resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.description}> 
          {"\n"}

      •    La façade du foyer comporte:{"\n"}
        {"\n"}
        →  Les conduites du fuel. {"\n"}
         {"\n"}
→  La conduite d’air primaire. {"\n"}
 {"\n"}
→  Les appareils de contrôle. {"\n"}
 {"\n"}
→   La conduite d’air secondaire :  {"\n"}
 {"\n"}
Permet l’entrée d’air secondaire qui constitue la masse gazeuse. Il
sert à sécher le phosphate et de guider la flamme vers le sens de
déplacement du produit. {"\n"}
 {"\n"}
→   La conduite d’air secondaire : {"\n"}
 {"\n"}
Permet l’entrée d’air secondaire qui constitue la masse gazeuse. Il
sert à sécher le phosphate et de guider la flamme vers le sens de
déplacement du produit. {"\n"}
 {"\n"}
→  Un détecteur de flamme (cellule photoélectrique) : {"\n"}
Sert à indiquer la présence de la flamme dans le foyer.
          </Text>
<TouchableHighlight 
                style ={{
                    height: 60,
                    width:70,
                    borderRadius:80,
                    backgroundColor : "transparent",
                    marginLeft :325,
                    marginRight:20,
                    marginTop :5
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
    height: 200,
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