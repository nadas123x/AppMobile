import React,{useEffect,useState} from 'react'
import {Text,View} from 'react-native'
function ActuContent({navigation}) {
const [actualite,setActualite]=useState(navigation.state.params['actualite'])
    useEffect(()=>{
console.log(actualite)
    },[])
    return (
        <View>
            <Text h1>{actualite.title}</Text>
            <Text>{actualite.content}</Text>
        </View>
       
    )
}

export default ActuContent
