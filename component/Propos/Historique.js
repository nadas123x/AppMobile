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
     navigation.navigate('Posts')
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
               </Text> :{"\n"} Création de l’Office Chérifien des Phosphates. {"\n"}
               <Text style={styles.secTitle}>
             1965
               </Text>:{"\n"} Création de la société MAROC CHIMIE. {"\n"}
               <Text style={styles.secTitle}>
             1975
               </Text>:{"\n"} Création du Groupe OCP. {"\n"}
               <Text style={styles.secTitle}>
             1976-1986
               </Text> :{"\n"}  Démarrage de Maroc Phosphore I , MP II en 1981 , et
                  MP III / IV en 1986. {"\n"}
<Text style={styles.secTitle}>
1996-2004 :
               </Text> :{"\n"}  Création de plusieurs Joint Venture (JV) avec des
partenaires Indiens et Pakistanais. {"\n"}

<Text style={styles.secTitle}>
2008
               </Text> :{"\n"} Transformation de l’Office chérifien des phosphates en
société anonyme OCP SA. {"\n"}
<Text style={styles.secTitle}>
             2009
               </Text> :{"\n"}  Démarrage de la JV maroco-brésilienne : bunge Maroc
Phosphore. {"\n"}
<Text style={styles.secTitle}>
             2010
               </Text> :{"\n"}  Création d’une JV avec Jacobs engineering (JESA),
Ouverture de bureaux en Argentine et au Brésil. {"\n"}
<Text style={styles.secTitle}>
             2011
               </Text> :{"\n"}  Lancement de OCP Skills. {"\n"}

 
 
 
               </Text>
               <Text style={styles.secTitle}>
             
               </Text>
               <Text style={styles.postDescription}>
               
  
 
 
 
               </Text>
               <TouchableHighlight 
                 style ={{
                     height: 60,
                     width:60,
                     backgroundColor : "white",
                     marginLeft :'79%',
                     marginTop :'-6%'
                 }}>
             <Button
              title=' EXIT'
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
  
   
 
   image:{
     width: '100%',
     height: '100%',
     resizeMode: 'cover',
     position: 'absolute',
 
 
   },
   
  
   secTitle:{
    fontSize:17,
    fontWeight:"bold",
    color:"darkseagreen",
    marginLeft:'40%',
    marginTop:'-3%',
   },
   postTitle:{
     fontSize:20,
     fontWeight:"bold",
     textDecorationLine: "underline",
     marginLeft:'30%',
     marginTop:'22%',
     color:'olive',
     backgroundColor: "transparent",
     padding: 0,
   
   
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
  