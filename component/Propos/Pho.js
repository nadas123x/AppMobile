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
    navigation.navigate('Phoo')
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
               HISTORIQUE:
              </Text>
              

              <Text style={styles.postDescription}>
             •   <Text style={styles.post}>
            En 1669: {"\n"}
              </Text> >  Extraction du phosphore  pour la première fois de l’urine humaine par l’alchimiste allemand de Hambourg Henning Brandt. {"\n"}


 •   <Text style={styles.post}>
            En 1769: {"\n"}
              </Text> >  Découverte du phosphore dans les os par le chimiste suédois Carl Wilhelm Scheele{"\n"}

  •   <Text style={styles.post}>
            En 1850: {"\n"}
              </Text> >  Début d’exploitation des premiers gisements européens.{"\n"}

•  <Text style={styles.post}>
             En 20ème siècle : {"\n"}
              </Text>  >  Découverte de gros gisement en Amérique et en Afrique.








              </Text>
            
<Image
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/b/be/%C4%8Cerven%C3%BD_fosfor.png'}}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
              <TouchableHighlight 
                style ={{
                    height: 60,
                    width:60,
                    borderRadius:80,
                    backgroundColor : "white",
                    marginLeft :'75%',
                    marginTop :'70%'
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
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
  
  
    },
image2:{
   width: 305,
      height: 160,
       marginLeft:'20%',
    marginTop:'106%',
      resizeMode: 'cover',
      position: 'absolute',
},
  postTitle:{
    fontSize:20,
    fontWeight:"bold",
    textDecorationLine: "underline",
    marginLeft:'35%',
    marginTop:'24%',
    color:'olive',
    backgroundColor: "transparent",
  
  },
  postDescription:{
    fontSize:14,
    marginTop:'10%',
    marginLeft:'5%',
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