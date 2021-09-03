import React, { useRef,useState,useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button,Easing } from "react-native";

const timer = require('react-native-timer');
import * as elements from './elements.json';
const Animation = ({navigation}) => {
  function intervalAction() {

      if(count.current==13){
        timer.clearInterval('tim')
        timer.setTimeout("lol",()=>{navigation.navigate('Posts')},2000)
        
        
        
      }
      
      count.current+=1
      vitesse.current-=1
      setAbrev(tab.current[count.current]['abrev'])
      setMass(tab.current[count.current]['mass'])
      setAtomicN(tab.current[count.current]['atomicN'])
      setName(tab.current[count.current]['name'])
      setMassFloat(tab.current[count.current]['massFloat'])
    
  }
  const tab=useRef([])
  const count=useRef(0)
  const vitesse=useRef(1000)
  const [mass,setMass]=useState(1)
  const [name,setName]=useState("Hydrogène")
  const [atomicN,setAtomicN]=useState(1)
  const [abrev,setAbrev]=useState("H")
  const [massFloat,setMassFloat]=useState(1)
  const fadeAnim = useRef(new Animated.Value(0)).current;
  // Similaire à componentDidMount et componentDidUpdate :
/*
  useEffect(()=>{
    
    timer.clearInterval("tim")
    timer.setInterval("tim",intervalAction,400)
    
  },[vitesse.current]);*/
  useEffect(  () => {
    Animated.timing(fadeAnim, {
      toValue: 100,
      duration: 7000,
      useNativeDriver:false,
      easing:Easing.linear
      
    }).start();
   
    function loadData(){
      
       var r= elements["records"]


       for(let i = 0;i<r.length;i++){
        if(r[i]['fields']['atomicmass'].includes(".")){
          var massi =parseInt(r[i]['fields']['atomicmass'].split('.')[0])
        }else{
          
          var massi = parseInt(r[i]['fields']['atomicmass'].substring(1,r[i]['fields']['atomicmass'].length-1))
        }
        
        tab.current.push({"abrev":r[i]['fields']['symbol'],"mass":massi,"atomicN":r[i]['fields']['atomicnumber'],"name":r[i]['fields']['name'],"massFloat":r[i]['fields']['atomicmass']})
      }


      
      
   }
     loadData();

    timer.setInterval('tim',intervalAction,200)
  },[]);

 

  
    

  return (
    

      <View style={styles.container}>
  <Animated.View style={{border:'1px solid white',backgroundColor:"#EFE5E0",height:300,width:300,padding:'1%',opacity:fadeAnim.interpolate({inputRange:[0,20,40,60,80,100],outputRange:[0.4,1,0.4,1,0.4,1]})}} >
  <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{display:"flex",color:"#fd6968",fontWeight:"bold",fontSize:35}} id="atomicN" >{atomicN}</Text>
<Text style={{color:"#117dc0",fontWeight:"bold",fontSize:35}} id="mass">{mass}</Text>
</View>
  <Text style={{color:"#A4BD24",fontWeight:"bold",textAlign:'center',fontSize:70,marginTop:'5%'}} id="abrev">{abrev}</Text>
  <View style={{marginTop:'15%'}}>
  <Text style={{color:"grey",textAlign:'center',fontSize:30}} id="name">{name}</Text>
  <Text style={{color:"grey",textAlign:'center',fontSize:30}} id="massFloat">{massFloat}</Text>
  </View>
</Animated.View>
      </View>
     
  );
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#A4BD24'
  },
 divi:{
   color:"red",
   
 }
});

export default Animation;