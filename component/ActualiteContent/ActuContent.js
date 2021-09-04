import React,{useEffect,useState} from 'react'
import {Text,View,StyleSheet,Image,ScrollView } from 'react-native'
function ActuContent({navigation}) {
    
const [actualite,setActualite]=useState(navigation.state.params['actualite'])
    useEffect(()=>{
console.log(actualite)
    },[])
    return (
        <View  style={styles.container}>
        <ScrollView  style={styles.containerText}>
            <Text style={styles.title}>{actualite.title}...</Text>
            <Text style={styles.date}>07/08/2001</Text>
            <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginBottom:'10%',marginTop:'2%',opacity:0.2}}/>
            <Image style ={styles.image} source={{uri:actualite.img}}/>
            <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginBottom:'10%',marginTop:'2%',opacity:0.2}}/>
            <Text>{actualite.content}</Text>
            </ScrollView>
        </View>
       
    )
}
const styles = StyleSheet.create({
    title: {
      fontSize:30,
    },
    container:{
        flex:1,
        display:'flex',
        alignItems:'center',
        marginTop:'2%'
    },
    containerText:{
        width:"80%",
        marginBottom:'10%'
    },
    date:{
        fontSize:13,
        fontWeight:'bold',
        color:"#000000"
        
    },
    image:{
        height: 200,
        width: 200, 
        marginLeft:'20%',
        marginBottom:'10%'
      }
   
  });
export default ActuContent
