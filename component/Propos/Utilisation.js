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
  

  const PressHandler = () => {
    navigation.navigate('Extraction')
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
               UTILISATION DES PHOSPHATES:

              </Text>
              

              <Text style={styles.postDescription}>
             •  Acide phosphorique : traitement des surfaces des métaux, produit de nettoyage, traitement des eaux usés. {"\n"}
             {"\n"}
•   Les engrais : organique, chimique, verts.. {"\n"}
{"\n"}
•   Aliments pour le bétail









              </Text>
            
<Image
 source={require('../../assets/image.jpg')}
  resizeMode="contain"
            style={styles.imagee}
          ></Image>
          <Image
 source={require('../../assets/image1.jpg')}
  resizeMode="contain"
            style={styles.imag}
          ></Image>
              <TouchableHighlight 
                style ={{
                    height: 60,
                    width:60,
                    borderRadius:80,
                    backgroundColor : "white",
                    marginLeft :'75%',
                    marginTop :'110%'
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
      width: '60%',
      height: '5%',
      resizeMode: 'cover',
      position: 'absolute',
   marginLeft:'5%',
    marginTop:'80%',
  
    },
imag:{
      width: '40%',
      height: '10%',
      resizeMode: 'cover',
      position: 'absolute',
   marginLeft:'45%',
    marginTop:'130%',
},
  postTitle:{
    fontSize:20,
    fontWeight:"bold",
    textDecorationLine: "underline",
    marginLeft:'45%',
    marginTop:'15%',
    color:'olive',
    backgroundColor: "transparent",
  
  },
  postDescription:{
    fontSize:14,
    marginTop:'15%',
    marginLeft:'8%',
    backgroundColor: "transparent",
fontStyle:'italic'
  },

 
 
  
  name:{
    fontSize:22,
    color:"#00BFFF",
    fontWeight:'600',
    alignSelf:'center',
    marginLeft:'10%'
  }, 
  
});