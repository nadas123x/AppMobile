import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView,ImageBackground,TouchableHighlight,Button, Image } from "react-native";

export default function Sechagedef({navigation}) {
    
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
         
<Text style={styles.name}>Définition:{"\n"}</Text>
{"\n"}
{"\n"}
•   Le séchage est une opération unitaire
largement utilisé dans l'industrie minière,
souvent en complément d'opérations comme
la sédimentation, la filtration ou l'essorage.

Il permet la réduction de l'humidité d'un
solide à une certaine limite.
Il a pour but  de rendre le minerai
sec et marchand conformément aux
exigences des clients.

{"\n"}
{"\n"}
NB: Le séchage n'est pas un traitement
d'enrichissement.

{"\n"}
{"\n"}



       
          
          {"\n"}
 
{"\n"}


      
  
</Text>

            <Text style={styles.description}>
  
           
            </Text>
          
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
    width: 500,
    height: 250,
    marginLeft: '0%',
    marginTop:'-15%',
    
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