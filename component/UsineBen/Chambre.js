import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView,ImageBackground,TouchableHighlight,Button, Image } from "react-native";

export default function Chambre({navigation}) {
    
  const PressHandler = () => {
    navigation.navigate('Usiii')
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
         
<Text style={styles.name}>4) La chambre à poussière :{"\n"}</Text>
{"\n"}

•  C’est la partie située juste après le tube sécheur d’une longueur supérieure
au diamètre de la virole, ce qui assure une baisse de vitesse de la masse
gazeuse afin de récupérer les grosses particules par effet de gravitation et
les particules fines au niveau de la chambre de dépoussiérage par les filtres
à manches.{"\n"}
{"\n"}
</Text>
        <Image
 source={require('../../assets/ch.jpg')}
  resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.description}> 
•  Elle se compose de deux parties, chambre de détente et chambre à tubix :{"\n"}

<Text style={styles.namee}>→	Chambre de détente :
{"\n"}</Text>

 C’est l’élément qui vient juste après la virole, sa longueur est supérieure au diamètre du tube sécheur, ce qui entraîne la diminution de la vitesse de la masse gazeuse et par conséquent une perte d’aptitude des grosses particules, alors que les particules fines s’échappent et continuent leur chemin vers les tubix.{"\n"}

<Text style={styles.namee}>→   Chambre à tubix :{"\n"}
</Text>
Elle est constituée des cyclones qui permettent de freiner et récupérer sous l’effet de centrifugation les particules fines.{"\n"}





 


  
</Text>

            <Text style={styles.description}>
            

            </Text>
    
          <TouchableHighlight 
                style ={{
                    height: 60,
                    width:60,
                    borderRadius:80,
                    backgroundColor : "transparent",
                    marginLeft :'80%',
                    marginRight:20,
                    marginTop :'-9%'
                }}>
            <Button
             title=' exit '
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
    marginLeft:'1%',
    
    

   
  },
  name:{
    fontSize:18,
    marginLeft:0,
    marginRight:0,
    marginTop:'10%',
    color:'darkgreen',
    backgroundColor: "transparent",
    textDecorationLine: "underline",

    
    fontWeight:'bold',
  },
  namee:{
    fontSize:16,
    marginLeft:0,
    marginRight:0,
    marginTop:0,
    color:'darkgreen',
    backgroundColor: "transparent",

    
    fontWeight:'bold',
  },
  image: {
    width: 390,
    height: 300,
    marginLeft: '1%',
    marginTop:'-15%',
    
  },
  description:{
    fontSize:14,
    fontWeight:'800',
    marginLeft: 0,
    textAlign: 'left',
    color: "black",
    marginTop:0,
    fontStyle:'italic',
  },
  imagee:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',


  },
});