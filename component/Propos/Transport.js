import React, { Component,useEffect,useFocusEffect } from 'react';

import Svg, { Ellipse } from "react-native-svg";
import {
  StyleSheet,
  Text,
  View,
  Image,
  opacity,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
 Button,

  Dimensions,
  ScrollView
} from 'react-native';

export default function Transport( {navigation}){
  

  const PressHandler = () => {
    navigation.navigate('Phooo')
  }
    return (
      <ScrollView>
        <View style={styles.container}>
        <ImageBackground
        source={{uri: 'https://i.pinimg.com/originals/03/02/bc/0302bc613ea56d6e74c6edb151712364.jpg'}}
        style={styles.imagee}
    />
        <ImageBackground
        source={{uri: 'https://wallpaperaccess.com/full/2693274.jpg'}}
        style={styles.image}
    />
     <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 859.43 890.3" style={styles.ellipse}>
          <Ellipse
            strokeWidth={1}
            fill="rgba(255,255,255,1)"
            cx={'41%'}
            cy={'51%'}
            rx={'50%'}
            ry={'50%'}
          ></Ellipse>
        </Svg>
          <View style={styles.header}>
         
              <Text style={styles.headerTitle}>

              <Image source ={{uri:'https://seeklogo.com/images/O/ocp-africa-logo-8D8E6B532F-seeklogo.com.png' }}style={styles.bc} />
              </Text>
              
          </View>
         
          <View style={styles.postContent}>
              <Text style={styles.postTitle}>
         Le transport:

              </Text>
              

              <Text style={styles.postDescription}>
           •    Le transport vers les trémies d’épierrage et criblage est assuré par des camions de capacité de 110 t et de 170 t.{"\n"}
L’affectation des camions aux machines obéit au principe qu’aucune machine (pelle ou dragline) ne soit en arrêt sauf en cas de panne en plus des paramètres suivants :{"\n"}
{"\n"}
>  Rendement des machines et camions (heures continues de travail pour les machines et le nombre de voyage pour les camions){"\n"}
{"\n"}
>  Cycle des machines et camions.{"\n"}

>  Distance de transport.{"\n"}

>  Niveau à charger (couche mince ou épaisse){"\n"}

>  Capacité trémie d’épierrage – criblage.

{"\n"}
{"\n"}










              </Text>
            <Image
 source={require('../../assets/transp.jpg')}
  resizeMode="contain"
            style={styles.imagee}
          ></Image>
 <Text style={styles.postDescription1}>
  
              </Text>
              <TouchableHighlight 
                style ={{
                    height: 60,
                    width:80,
                    borderRadius:80,
                    backgroundColor : "white",
                    marginLeft :'75%',
                    marginTop :'0%'
                }}>
            <Button
             title=' exit'
             alignItems='center'
               onPress={PressHandler}

               color="olive"  
              
                       />
               </TouchableHighlight>

              

              <View style={styles.profile}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>

              
              </View>
      
              <TouchableOpacity style={styles.shareButton}>
                <Text style={styles.shareButtonText}>
                  
                  </Text>  
              </TouchableOpacity> 
          </View>
        </View>
        </View>
     </ScrollView>
    );
  }


const styles = StyleSheet.create({
  octet: {
    fontFamily: 'icomoon',
    fontSize: 20,
  },
  container:{
    backgroundColor: 'black',
    height: Dimensions.get('window').height,
  

  },
  ellipse: {
    top: 0,
    left: 0,
    width:800,
    height: 800,
    position: "absolute"
  },
 
  
  
  post:{
fontSize:15,
    fontWeight:"bold",
    marginLeft:'45%',
    marginTop:'24%',
    color:'olive',
    backgroundColor: "transparent",
  },

  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',


  },
  
  
  imagee:{
      width: 305,
      height: 360,
       marginLeft:'38%',
    marginTop:'111%',
      resizeMode: 'cover',
      position: 'absolute',
  
  
    },

  postTitle:{
    fontSize:20,
    fontWeight:"bold",
    textDecorationLine: "underline",
    marginLeft:'55%',
    marginTop:'12%',
    color:'olive',
    backgroundColor: "transparent",
  
  },
  postDescription:{
    fontSize:14,
    marginTop:'5%',
    marginLeft:'21%',
    backgroundColor: "transparent",
fontStyle:'italic'
  },

 postDescription1:{
    fontSize:14,
    marginTop:'65%',
    marginLeft:'15%',
    backgroundColor: "transparent",
fontStyle:'italic'
  },
 
  
 
  
});