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

export default function Foration( {navigation}){
  

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
          Le défruitage:

              </Text>
              

              <Text style={styles.postDescription}>
•  Il s’agit de prendre le fruit qui n’est que le phosphate.           {"\n"}
           {"\n"}

Les couches minces sont aménagées par les bulles puis chargées par des chargeuses, tandis que les couches épaisses chargées par les draglines.

           {"\n"}
                      {"\n"}
           {"\n"}
                      {"\n"}
           {"\n"}

           

          







 



              </Text>
            <Image
 source={require('../../assets/defr.jpg')}
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
                    marginTop :'20%'
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
       marginLeft:'20%',
    marginTop:'70%',
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
    marginTop:'8%',
    marginLeft:'21%',
    backgroundColor: "transparent",
fontStyle:'italic'
  },

 postDescription1:{
    fontSize:14,
    marginTop:'55%',
    marginLeft:'18%',
    backgroundColor: "transparent",
fontStyle:'italic'
  },
 
  
 
  
});