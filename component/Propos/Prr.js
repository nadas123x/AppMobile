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
 
 export default function Prr( {navigation}){
   
 
   const PressHandler = () => {
     navigation.navigate('SB')
   }
     return (
       <ScrollView>
         <View style={styles.container}>
         <ImageBackground
         source={{uri: 'https://wallpaperaccess.com/full/2693274.jpg'}}
         style={styles.image}
     />
      <View style={styles.ellipseStack}>
         <Svg viewBox="0 0 859.43 890.3" style={styles.ellipse}>
           <Ellipse
             strokeWidth={1}
             fill="rgba(255,255,255,1)"
             cx={410}
             cy={465}
             rx={489}
             ry={435}
           ></Ellipse>
         </Svg>
           <View style={styles.header}>
          
               <Text style={styles.headerTitle}>
 
               <Image source ={{uri:'https://seeklogo.com/images/O/ocp-africa-logo-8D8E6B532F-seeklogo.com.png' }}style={styles.bc} />
               </Text>
               
           </View>
          
           <View style={styles.postContent}>
               <Text style={styles.postTitle}>
               Histoire du groupe OCP:
               </Text>
               <Text style={styles.secTitle}>
             
               </Text>
 
               <Text style={styles.postDescription}>
               
    
 
 
 
               </Text>
               <Text style={styles.secTitle}>
          
               </Text>
               <Text style={styles.postDescription}>
               
               <Text style={styles.secTitle}>
             1920
               </Text> :{"\n"} Création de l’Office Chérifien des Phosphates {"\n"}
               <Text style={styles.secTitle}>
             1975
               </Text>:{"\n"} Création de la société MAROC CHIMIE {"\n"}
               <Text style={styles.secTitle}>
             1975
               </Text>:{"\n"} Création du Groupe OCP {"\n"}Création du Groupe OCP
1976-1986 : Démarrage de Maroc Phosphore I , MP II en 1981 , et
MP III / IV 1986
1996-2004 : Création de plusieurs Joint Venture (JV) avec des
partenaires Indiens et Pakistanais.
2008 : Transformation de l’Office chérifien des phosphates en
société anonyme OCP SA
2009 : Démarrage de la JV maroco-brésilienne : bunge Maroc
Phosphore
2010 : Création d’une JV avec Jacobs engineering (JESA),
Ouverture de bureaux en Argentine et au Brésil
2011 : Lancement de OCP Skills
 
 
 
               </Text>
               <Text style={styles.secTitle}>
             
               </Text>
               <Text style={styles.postDescription}>
               
  
 
 
 
               </Text>
               <TouchableHighlight 
                 style ={{
                     height: 60,
                     width:60,
                     borderRadius:80,
                     backgroundColor : "white",
                     marginLeft :305,
                     marginRight:20,
                     marginTop :60
                 }}>
             <Button
              title=' ►'
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
   container:{
     backgroundColor: 'transparent',
     height: Dimensions.get('window').height,
   
 
   },
   ellipse: {
     top: 0,
     left: 0,
     width:800,
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
     marginTop:70,
     padding:0,
     borderRadius:80,
     
     fontWeight:'bold',
     borderRadius:80,
     
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
  
   secTitle:{
    fontSize:15,
    fontWeight:"bold",
    color:"darkseagreen",
    marginLeft:120,
    marginTop:0,
   },
   postTitle:{
     fontSize:20,
     fontWeight:"bold",
     textDecorationLine: "underline",
     marginLeft:150,
     marginTop:20,
     color:'olive',
     backgroundColor: "transparent",
     padding: 0,
   
     borderRadius: 30
   
   },
   postDescription:{
     fontSize:14,
     marginTop:0,
     marginLeft:50,
   },
 
  
  
   
   name:{
     fontSize:22,
     color:"#00BFFF",
     fontWeight:'600',
     alignSelf:'center',
     marginLeft:10
   }, 
   
 });
  