import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView,ImageBackground,TouchableHighlight,Button, Image } from "react-native";

export default function Cheminee({navigation}) {
    
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
         
<Text style={styles.name}>6) La Cheminée:{"\n"}</Text>
{"\n"}
{"\n"}
•   Elle sert à évacuer la vapeur d’eau due au séchage et le phosphate sous
forme de poussière non récupérable. Le produit ainsi traité est récupéré à
la sortie du four. Un convoyeur achemine le phosphate séché vers les stocks
du phosphate sec. Un autre convoyeur sert à transporter les déchets du
phosphate vers le stock du rejet.
{"\n"}
{"\n"}



       
          
          {"\n"}
 
{"\n"}


      
  
</Text>
<Image
 source={require('../../assets/chem.png')}
  resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.description}>
  
              {"\n"}

            •    C’est un cylindre d’une hauteur de 30m qui a pour rôle d’évacuer :   {"\n"}
   {"\n"}
>	    Les gaz de combustion.   {"\n"}
>	    La vapeur d’eau due au séchage.   {"\n"}
>    	Les particules extra-fines non récupérables
   {"\n"}
            </Text>
          
<TouchableHighlight 
                style ={{
                    height: 60,
                    width:70,
                    borderRadius:80,
                    backgroundColor : "transparent",
                    marginLeft :325,
                    marginRight:20,
                    marginTop :40
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
    height: 250,
    marginLeft: -10,
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