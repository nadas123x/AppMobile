import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView, Image } from "react-native";

function Untitled(props) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.rect3}>
        <View style={styles.rect2}>
          <Text style={styles.name}>Présentation de l’usine BENI-IDIR :</Text>
          <Text style={styles.description}>
             L’unité de BENI-IDIR a démarrée en 1965 dans le but de traiter les phosphates fournis
par les unités d’extractions . Elle est
constituée d’une station de chargement et trois usines de traitement : Usine d’enrichissement à sec, usine de séchage et une station de chargement.
             </Text>
          <Image
            source={require('../../assets/uz.png')}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.description}>  L’usine de BENI_IDIR se situe à 17Km à l'Est de
Khouribga, il a démarré avec quatre fours sécheurs
puis, et dans le cadre d'une extension de l'usine, quatre fours
sécheurs ont été mis en service en 1970, cette usine est
destinée au séchage du phosphate fourni par les unités
d’extraction qui
vient avec une humidité de 12% à 18% , le séchage la
diminue à un pourcentage qui ne dépasse pas 2%.
Cette usine est constitué de plusieurs unités qui fonctionnent
de façon liée, et les éléments de chaque de chaque unité sont
en double pour assurer la continuité de service.</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect3: {
    height: 780,
    backgroundColor: "rgba(143,177,130,1)",
    width: 415,
    marginTop: 0,
    marginLeft: 0

  },
  rect2: {
    width:430,
    height: 696,
    backgroundColor: "rgba(208,213,214,0.66)",
    marginTop: 45,
    marginLeft: 0
    

   
  },
  name:{
    fontSize:19,
    textDecorationLine: "underline",
    marginLeft:60,
    marginRight:20,
    marginTop:0,
    color:'darkgreen',
    backgroundColor: "transparent",
    
    fontWeight:'bold',
  },
  image: {
    width: 400,
    height: 314,
    marginTop: 3,
    marginLeft: 8
  },
  description:{
    fontSize:12,
    fontWeight:'800',
    marginLeft: 5,

    color: "black",
    marginTop:30,
  },
});

export default Untitled;
