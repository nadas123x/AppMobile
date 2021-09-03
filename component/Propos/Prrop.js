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

export default function Prrop( {navigation}){
  

  const PressHandler = () => {
    navigation.navigate('SB')
  }
    return (
      <ScrollView>
        <View style={styles.container}>
        <ImageBackground
        source={{uri: 'https://lobservateur.info/uploads/imported_images/uploads/2016/09/ocp.png'}}
        style={styles.image}
    />
     <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 859.43 890.3" style={styles.ellipse}>
          <Ellipse
            strokeWidth={1}
            fill="rgba(255,255,255,1)"
            cx={410}
            cy={465}
            rx={439}
            ry={435}
          ></Ellipse>
        </Svg>
          <View style={styles.header}>
         
              <Text style={styles.headerTitle}>

              <Image source ={{uri:'https://www.salon-agriculture.ma/wp-content/uploads/2018/03/Ocp1-660x330.jpg' }}style={styles.bc} />
              </Text>
              
          </View>
          <TouchableHighlight 
                style ={{
                    height: 30,
                    width:30,
                    borderRadius:80,
                    backgroundColor : "olivedrab",
                    marginLeft :13,
                    marginRight:10,
                    marginTop :30
                }}>
            <Button
             title='->'
             alignItems='center'
               onPress={PressHandler}

               color="olivedrab"             />
               </TouchableHighlight>
          <View style={styles.postContent}>
              <Text style={styles.postTitle}>
                    Présentation Groupe OCP:
              </Text>
              

              <Text style={styles.postDescription}>
              OCP a été créé en 1920 en tant que Office Chérifien des Phosphates. Nous avons démarré notre activité avec l’exploitation d’une première mine à Khouribga. Nos activités s’étendent aujourd’hui sur cinq continents et nous travaillons tout au long de la chaîne de valeur des phosphates que ce soit dans l’extraction minière, la transformation industrielle ou encore l’éducation et le développement de communautés.

OCP a démarré sa production en mars 1921 à Khouribga et exporté ses premiers produits depuis le port de Casablanca plus tard la même année. Une deuxième mine a été ouverte à Youssoufia en 1931 ainsi qu’une troisième plus tard en 1976 à Benguerir. Le Groupe OCP s’est ensuite diversifié en investissant dans la transformation des phosphates et en implantant des sites chimiques à Safi (1965) et Jorf Lasfar (1984).



              </Text>
            

              

              

              <View style={styles.profile}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>

                <Text style={styles.name}>
                    Johan Doe
                </Text>
              </View>
      
              <TouchableOpacity style={styles.shareButton}>
                <Text style={styles.shareButtonText}>Like</Text>  
              </TouchableOpacity> 
          </View>
        </View>
        </View>
     </ScrollView>
    );
  }


const styles = StyleSheet.create({
  container:{
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height,
  

  },
  ellipse: {
    top: 0,
    left: 0,
    width:809,
    height: 800,
    position: "absolute"
  },
 
  icon:{
    width:100,
    height:100,
    marginLeft:'50',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  header:{
    padding:15,
    borderRadius:80,
    backgroundColor: "transparent",
    fontWeight:'bold',
    borderRadius:80,
    
  },
  bc: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 1,
   
    width: 60,
    height: 45,
      
   
  },
  headerTitle:{
    fontSize:20,
    color:"cyan",
    marginTop:1,
  },
  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',


  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  postContent: {
    flex: 1,
    padding:30,
  },
  postTitle:{
    fontSize:20,
    fontWeight:"bold",
    marginLeft:110,
    color:'olive',
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 30,
  
  },
  postDescription:{
    fontSize:16,
    marginTop:0,
    marginLeft:90,
  },

 
 
  
  name:{
    fontSize:22,
    color:"#00BFFF",
    fontWeight:'600',
    alignSelf:'center',
    marginLeft:10
  }, 
  
});
 