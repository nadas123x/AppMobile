import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView,ImageBackground,TouchableHighlight,Button, Image } from "react-native";

export default function Suite({navigation}) {
    
  const PressHandler = () => {
    navigation.navigate('Fin')
  }
  return (
    <ScrollView>
    <View style={styles.container}>
    <ImageBackground
        source={{uri: 'https://wallpaperaccess.com/full/2693274.jpg'}}
        style={styles.imagee}
    />
        <View style={styles.rect2}>
         
       
       
         
          <Text style={styles.description}> 
          <Text style={styles.name}>Modes de transfert:{"\n"}</Text>
{"\n"}

2) Par rayonnement:

{"\n"}
{"\n"}

-  Ce mode de séchage dépend du rayonnement de la
flamme produite. Si la flamme est très lumineuse, l’
énergie rayonnante favorise les faisceaux valorisants
par contre si elle est peu lumineuse, elle fournit peu
d’énergie rayonnante.
          {"\n"}
 
{"\n"}


      
  
</Text>
<Image
 source={require('../../assets/mode2.png')}
  resizeMode="contain"
            style={styles.image}
          ></Image>
            
            <ScrollView>
              
            </ScrollView>
<TouchableHighlight 
                style ={{
                    height: 60,
                    width:70,
                    borderRadius:80,
                    backgroundColor : "transparent",
                    marginLeft :'75%',
                    marginTop :'10%'
               }}>
            <Button
             title=' -> '
             alignItems='center'
               onPress={PressHandler}

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
    width:420,
    height: 696,
    backgroundColor: "rgba(208,213,214,0.66)",
    marginTop: '10%',
    marginLeft: '1%',
    
    

   
  },
  name:{
    fontSize:18,
    marginLeft:0,
    marginRight:0,
    marginTop:0,
    color:'darkgreen',
    backgroundColor: "transparent",
    textDecorationLine: "underline",

    
    fontWeight:'bold',
  },
  image: {
    width: 500,
    height: 250,
    marginLeft: '-12%',
    marginTop:'10%',
    
  },
  description:{
    fontSize:14,
    fontWeight:'800',
    marginLeft: 0,
    marginRight: 10,
    textAlign: 'left',
    color: "black",
    marginTop:'1%',
    fontStyle:'italic',
  },
  imagee:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',


  },
});