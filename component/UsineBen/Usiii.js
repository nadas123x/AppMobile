import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView,ImageBackground,TouchableHighlight,Button, Image } from "react-native";

export default function Usiii({navigation}) {
    
  const PressHandler1 = () => {
    navigation.navigate('Foyer')
  }
  const PressHandler2 = () => {
    navigation.navigate('Buse')
  }
  const PressHandler3 = () => {
    navigation.navigate('Virole')
  }
  const PressHandler4 = () => {
    navigation.navigate('Chambre')
  }
  const PressHandler5 = () => {
    navigation.navigate('Filtre')
  }
  const PressHandler6 = () => {
    navigation.navigate('Cheminee')
  }
  return (
    <ScrollView>
    <View style={styles.container}>
    <ImageBackground
        source={{uri: 'https://wallpaperaccess.com/full/2693274.jpg'}}
        style={styles.imagee}
    />
        <View style={styles.rect2}>
          <Text style={styles.name}>Présentation du procédé de séchage :</Text>
         

          <Text style={styles.description}> 
       
          →    L’alimentation de séchage est garantie par une série de convoyeurs permettant de traiter
en parallèle deux qualités sources.{"\n"}
{"\n"}
•  Le produit est contrôlé par deux extracteurs à débit réglable et introduit directement
dans la buse ou se fait le premier contact entre le produit et la masse gazeuse.{"\n"}
{"\n"}

→ Cette dernière
est produite dans la chambre de combustion du fuel. Des ventilateurs de tirage permettent la
transmission du produit et la masse gazeuse de la buse vers la virole.{"\n"}
{"\n"}

→ Ce tube sécheur est
équipé à l’intérieur par des augets et des palettes permettant le transport du produit vers la
chambre à poussière qui récupère les particules du phosphates grosses et fines, alors que les
extra-fines sont dissipées à travers la cheminée par les ventilateurs de tirage.


{"\n"}
          </Text>
          <Image
            source={require('../../assets/Capture.png')}
            resizeMode="center"
            style={styles.image}
          ></Image>
 
<TouchableHighlight 
                style ={{
                    height: 90,
                    width:'8%',
                    borderRadius:80,
                    backgroundColor : "transparent",
                    marginLeft :'15%',
                    marginTop :'-50%'
                }}>
            <Button
             title=' 1'
             alignItems='center'
               onPress={PressHandler1}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
               <TouchableHighlight 
                style ={{
                    height: 90,
                    width:'9%',
                    borderRadius:80,
                    backgroundColor : "transparent",
                    marginLeft :'27%',
                    marginTop :'-19%'
                    
                }}>
            <Button
             title=' 2'
             alignItems='center'
               onPress={PressHandler2}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
               <TouchableHighlight 
                style ={{
                    height: 20,
                    width:'12%',
                    borderRadius:80,
                    backgroundColor : "darkgreen",
                    marginLeft :'39%',
                    marginTop :'-25%'
                }}>
            <Button
             title=' 3'
             alignItems='center'
               onPress={PressHandler3}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
               <TouchableHighlight 
                style ={{
                    height: 30,
                    width:'13%',
                    borderRadius:80,
                    backgroundColor : "darkgreen",
                    marginLeft :'54%',
                    marginTop :'-7%'
                }}>
            <Button
             title=' 4'
             alignItems='center'
               onPress={PressHandler4}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
               <TouchableHighlight 
                style ={{
                    height: 30,
                    width:'14%',
                    borderRadius:80,
                    backgroundColor : "darkgreen",
                    marginLeft :'70%',
                    marginTop :'-11%'
                }}>
            <Button
             title=' 5'
             alignItems='center'
               onPress={PressHandler5}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
               <TouchableHighlight 
                style ={{
                    height: 30,
                    width:'10%',
                    borderRadius:80,
                    backgroundColor : "darkgreen",
                    marginLeft :'88%',
                   
                    marginTop :'15%'
                }}>
            <Button
             title=' 6'
             alignItems='center'
               onPress={PressHandler6}

               color="darkgreen"  
              
                       />
               </TouchableHighlight>
        </View>
      </View>
 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
 
  rect2: {
    width:'100%',
    height: 700,
    backgroundColor: "rgba(208,213,214,0.66)",
    marginTop: '10%',
    marginLeft: '1%',
    
    

   
  },
  name:{
    fontSize:19,
    textDecorationLine: "underline",
    marginLeft:'5%',
    marginRight:'2%',
    marginTop:0,
    color:'darkgreen',
    backgroundColor: "transparent",
    
    fontWeight:'bold',
  },
  image: {
    width: '100%',
    height: '52%',
    marginTop: '-10%',
    marginLeft: '0%'
  },
  description:{
    fontSize:13,
    fontWeight:'800',
    marginLeft: 0,
    marginRight: '1%',
    textAlign: 'left',
    color: "black",
    marginTop:30,
    fontStyle:'italic',
  },
  imagee:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',


  },
});