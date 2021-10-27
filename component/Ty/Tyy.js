            
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';

import {BackHandler} from 'react-native';
const SignUpView  = ({navigation}) =>  {
  const [fullName, setFullName] = useState('');
 
  const [Email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const onClickListener = () => {
    if(fullName === '' || message ==='' || Email===''){
      Alert.alert("", "Merci de remplir tous les champs");
    }else {
      console.log("fullName : " + fullName);
      console.log("Message : " + Email);

      console.log("Message : " + message);
      Alert.alert("", "Merci pour votre visite");
      navigation.navigate('SB')
    }
  }

  
  
    return (
      <View style={styles.container}>
         <ImageBackground source={require('../../assets/ocpp.jpg')} resizeMode="cover" style={styles.image}></ImageBackground>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => setFullName(fullName)}/>
        </View>

     
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(Email) => setEmail(Email)}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs} multiline
              placeholder="Message"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(message) => setMessage(message)}/>
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => onClickListener('sign_up')}>
          <Text style={styles.signUpText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
  
///
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "olivedrab",
  },
  signUpText: {
    color: 'white',
    fontSize:20,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: "center",
    position:'absolute'

  },

});
export default SignUpView;
