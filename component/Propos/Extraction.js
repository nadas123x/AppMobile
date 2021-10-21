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

export default function Pho( {navigation}){
  

  const PressHandler1 = () => {
    navigation.navigate('Foration')
  }
  const PressHandler2 = () => {
    navigation.navigate('Sautage')
  }
  const PressHandler3 = () => {
    navigation.navigate('Décapage')
  }
  const PressHandler4 = () => {
    navigation.navigate('Defruitage')
  }
  const PressHandler5 = () => {
    navigation.navigate('Transport')
  }
  const PressHandler6 = () => {
    navigation.navigate('Epierage')
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
            cx={'37%'}
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
              CHAINE CINEMATIQUE D’EXTRACTION DES PHOSPHATES:   


              </Text>
              

              <Text style={styles.postDescription}>
 









              </Text>
            
<Image
 source={require('../../assets/Captur.png')}
  resizeMode="contain"
            style={styles.imagee}
          ></Image>
      
              

              

              <View style={styles.profile}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>

              
              </View>
      
             <TouchableHighlight 
                style ={{
                    height: 30,
                    width:100,
                    borderRadius:80,
                    backgroundColor : "transparent",
                    marginLeft :'41%',
                    marginTop :'6%'
                }}>
            <Button
             title=' Foration'
             alignItems='center'
               onPress={PressHandler1}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
               <TouchableHighlight 
                style ={{
                    height: 90,
                    width:100,
                    borderRadius:80,
                    backgroundColor : "transparent",
                    marginLeft :'41%',
                    marginTop :'8%'
                    
                }}>
            <Button
             title=' sautage'
             alignItems='center'
               onPress={PressHandler2}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
               <TouchableHighlight 
                style ={{
                    height: 30,
                    width:110,
                    borderRadius:80,
                    backgroundColor : "darkgreen",
                    marginLeft :'41%',
                    marginTop :'-6%'
                }}>
            <Button
             title=' décapage  '
             alignItems='center'
               onPress={PressHandler3}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
               <TouchableHighlight 
                style ={{
                    height: 30,
                    width:120,
                    borderRadius:80,
                    backgroundColor : "darkgreen",
                    marginLeft :'40%',
                    marginTop :'10%'
                }}>
            <Button
             title=' défruitage'
             alignItems='center'
               onPress={PressHandler4}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
               <TouchableHighlight 
                style ={{
                    height: 30,
                    width:350,
                    borderRadius:80,
                    backgroundColor : "darkgreen",
                    marginLeft :'4%',
                    marginTop :'8%'
                }}>
            <Button
             title=' TRANSPORT DES PHOSPHATES PAR CAMION
'
             alignItems='center'
               onPress={PressHandler5}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
               <TouchableHighlight 
                style ={{
                    height: 30,
                    width:245,
                    borderRadius:80,
                    backgroundColor : "darkgreen",
                    marginLeft :'26%',
                   
                    marginTop :'11%'
                }}>
            <Button
             title=' EPIERRAGE ET MISE EN STOCK
'
             alignItems='center'
               onPress={PressHandler6}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
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
      width: 105,
      height: 320,
      resizeMode: 'cover',
      position: 'absolute',
   marginLeft:'35%',
    marginTop:'40%',
  
    },
imag:{
      width: '40%',
      height: '10%',
      resizeMode: 'cover',
      position: 'absolute',
   marginLeft:'45%',
    marginTop:'133%',
},
  postTitle:{
    fontSize:20,
    fontWeight:"bold",
    textDecorationLine: "underline",
    marginLeft:'40%',
    marginTop:'10%',
    color:'olive',
    backgroundColor: "transparent",
  
  },
 
 
 
  
  name:{
    fontSize:22,
    color:"#00BFFF",
    fontWeight:'600',
    alignSelf:'center',
    marginLeft:'10%'
  }, 
  
});