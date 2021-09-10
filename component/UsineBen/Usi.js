import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView,ImageBackground,TouchableHighlight,Button, Image } from "react-native";

export default function Usi({navigation}) {
    
  const PressHandler = () => {
    navigation.navigate('Usii')
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
          {"\n"}   • Cette usine est constitué de plusieurs unités qui fonctionnent
de façon liée, et les éléments de chaque de chaque unité sont
en double pour assurer la continuité de service.
{"\n"}
          {"\n"}
             </Text>
       
         
          <Text style={styles.description}> 
          <Text style={styles.name}>	→ Unité de stockage du phosphate humide: {"\n"} </Text>
          {"\n"}
          {"\n"}
          •    Cette unité assure la fonction de la réception du phosphate
humide provenant de la laverie , du criblage et du parc
Elwafi . Elle est équipée de : Quatre machines de stockage
 et de deux machines de déstockage.{"\n"}
{"\n"}


<Text style={styles.name}>	→ Unité de stockage du fuel : {"\n"} </Text>
{"\n"}
          {"\n"}

          •   Cette unité est destinée à la réception et le stockage du fuel
dans des réservoirs qui alimentent les chaudières et les fours
sécheurs.{"\n"}
{"\n"}


<Text style={styles.name}>	→ Unité de chaufferie : {"\n"} </Text>
{"\n"}
          {"\n"}

          •   C’est là où on la chaudière qui produit la vapeur chaude à
partir de l’eau déminéralisée. La vapeur permet de
réchauffer le fuel , la température à
laquelle il sera injecté dans le four.{"\n"}
{"\n"}
        

</Text>
<TouchableHighlight 
                style ={{
                    height: 60,
                    width:60,
                    backgroundColor : "transparent",
                    marginLeft :'76%',
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
    
    fontWeight:'bold',
  },
  image: {
    width: 400,
    height: 314,
    marginTop: '1%',
  },
  description:{
    fontSize:14,
    fontWeight:'800',
    marginRight: '5%',
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
