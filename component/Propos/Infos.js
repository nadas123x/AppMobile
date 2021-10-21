
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
 
 export default function Infos( {navigation}){
   
 
   const PressHandler = () => {
     navigation.navigate('Historique')
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
                     Que produit-il?:
               </Text>
               <Text style={styles.secTitle}>
               1. MINERAI DE PHOSPHATE:
               </Text>
 
               <Text style={styles.postDescription}>
               
               La qualité du minerai de phosphate – extrait à ciel ouvert – se mesure en
teneur en phosphore ( P2O5). Après extraction, la roche est traitée pour en
accroître la teneur en phosphore avant d’être
convertie en acide phosphorique. Une tonne de phosphate contient, en
moyenne, 0,32 tonne de P2O5. OCP est le premier exportateur mondial de
phosphate avec 36,7% de parts de marché mondial.
              
 
 
 
               </Text>
               <Text style={styles.secTitle}>
               2. ACIDE PHOSPHORIQUE
               </Text>
               <Text style={styles.postDescription}>
               
               Produit intermédiaire entre le minerai et les engrais, l’acide phosphorique
est en fait le fruit d’un enrichissement de la roche à 52 % en P2O5 obtenu
par réaction de l’acide sulfurique. OCP en a produit 4,4 millions de tonnes
P2O5

en 2011.
 
 
 
               </Text>
               <Text style={styles.secTitle}>
               3. ENGRAIS PHOSPHATÉS
               </Text>
               <Text style={styles.postDescription}>
               
               Au nombre de quatre, ils sont le fruit d’une transformation de l’acide
phosphorique : le DAP (engrais le plus répandu), le TSP (engrais
entièrement phosphaté), le MAP (engrais binaire composé de deux éléments
fertilisants : le phosphore et l’azote) et le NPK (engrais ternaire ).
              
 
 
 
               </Text>
               <TouchableHighlight 
                 style ={{
                     height: 60,
                     width:60,
                     borderRadius:80,
                     backgroundColor : "white",
                     marginLeft :'75%',
                     marginTop :'10%'
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
   
   
 
   image:{
     width: '100%',
     height: '100%',
     resizeMode: 'cover',
     position: 'absolute',
 
 
   },
  
   secTitle:{
    fontSize:15,
    fontWeight:"bold",
    textDecorationLine: "underline",
    color:"darkseagreen",
    marginLeft:120,
    marginTop:'6%',
   },
   postTitle:{
     fontSize:20,
     fontWeight:"bold",
     textDecorationLine: "underline",
     marginLeft:'50%',
     marginTop:'14%',
     color:'olive',
     backgroundColor: "transparent",
     padding: 0,
   
   
   },
   postDescription:{
     fontSize:14,
     marginTop:'5%',
     marginLeft:'15%',
   },
 
  
  
   
   name:{
     fontSize:22,
     color:"#00BFFF",
     fontWeight:'600',
     alignSelf:'center',
     marginLeft:10
   }, 
   
 });
  