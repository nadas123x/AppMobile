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
                    backgroundColor : "transparent",
                    marginLeft :'75%',
                    marginTop :'2%'
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
    width:'100%',
    height: 300,
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
    width: '100%',
    height: 20,
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