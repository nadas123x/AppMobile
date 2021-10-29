import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView,ImageBackground,TouchableHighlight,Button, Image } from "react-native";

export default function Usine({navigation}) {
    
  const PressHandler = () => {
    navigation.navigate('UsineInfos')
  }
  return (
    <ScrollView>
    <View style={styles.container}>
    <ImageBackground
        source={{uri: 'https://wallpaperaccess.com/full/2693274.jpg'}}
        style={styles.imagee}
    />
        <View style={styles.rect2}>
          <Text style={styles.name}>Présentation de l’usine BENI-IDIR :</Text>
          <Text style={styles.description}>
          •   L’unité de BENI-IDIR a démarrée en 1965 dans le but de traiter les phosphates fournis
par les unités d’extractions . Elle est
constituée d’une station de chargement et trois usines de traitement : Usine d’enrichissement à sec, usine de séchage et une station de chargement.
             </Text>
       
          <Image
            source={require('../../assets/uz.png')}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.description}> •   L’usine de BENI_IDIR se situe à 17Km à l'Est de
Khouribga, il a démarré avec quatre fours sécheurs
puis, et dans le cadre d'une extension de l'usine, quatre fours
sécheurs ont été mis en service en 1970, cette usine est
destinée au séchage du phosphate fourni par les unités
d’extraction qui
vient avec une humidité de 12% à 18% , le séchage la
diminue à un pourcentage qui ne dépasse pas 2%.
</Text>
<TouchableHighlight 
                style ={{
                    height: 60,
                    width:60,
                    backgroundColor : "transparent",
                    marginLeft :'69%',
                    marginTop :'7%'
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
    marginTop: '10%',
    marginLeft: '0%',
        marginRight: '0%',

    

   
  },
  name:{
    fontSize:19,
    textDecorationLine: "underline",
    marginLeft:'14%',
    marginTop:'1%',
    color:'darkgreen',
    backgroundColor: "transparent",
    
    fontWeight:'bold',
  },
  image: {
    width: '100%',
    height: 312,
    marginTop: '0%',
    marginLeft: '0%'
  },
  description:{
    fontSize:12,
    fontWeight:'800',
    marginLeft: '1%',
    marginRight:'0%',
    textAlign: 'left',
    color: "black",
    marginTop:'6%',
    fontStyle:'italic',
  },
  imagee:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',


  },
});

