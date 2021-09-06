import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
        <ScrollView>

      <View style={styles.container}>
         
             <Text style={styles.name}>Présentation de l’usine BENI-IDIR :</Text>
             <Text style={styles.description}>
             L’unité de BENI-IDIR a démarrée en 1965 dans le but de traiter les phosphates fournis
par les unités d’extractions . Elle est
constituée d’une station de chargement et trois usines de traitement : Usine d’enrichissement à sec, usine de séchage et une station de chargement.
             </Text>
          <View style={styles.header}>

          <ImageBackground source={require('../../assets/uz.png')}   resizeMode="cover"  style={styles.image}>
               
               </ImageBackground>
          </View>
          <View style={styles.body}>
              
            <View style={styles.bodyContent}>
              <Text style={styles.description}>
              L’usine de BENI_IDIR se situe à 17Km à l'Est de
Khouribga, il a démarré avec quatre fours sécheurs
puis, et dans le cadre d'une extension de l'usine, quatre fours
sécheurs ont été mis en service en 1970, cette usine est
destinée au séchage du phosphate fourni par les unités
d’extraction qui
vient avec une humidité de 12% à 18% , le séchage la
diminue à un pourcentage qui ne dépasse pas 2%.
Cette usine est constitué de plusieurs unités qui fonctionnent
de façon liée, et les éléments de chaque de chaque unité sont
en double pour assurer la continuité de service.
              </Text>
              
               
            
              
            </View>
        </View>
      </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  header:{
      marginTop:50,
    backgroundColor: "transparent",
    height:200,
  },
 
  image:{
    width: '100%',
    height: '130%',
    flex: 1,
    marginTop:1,

    justifyContent: "center"
  },
  body:{
    marginTop:60,
  },
 
  name:{
    fontSize:19,
    textDecorationLine: "underline",
    marginLeft:60,
    marginRight:40,
    marginTop:10,
    color:'olive',
    backgroundColor: "transparent",
    
    fontWeight:'bold',
  },
 
  description:{
    fontSize:15,
    fontWeight:'bold',

    color: "darkslategrey",
    marginTop:40,
    textAlign: 'center'
  },
  
});
