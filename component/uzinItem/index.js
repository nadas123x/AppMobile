import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';

const UzinItem = (props) => {
    return(
   
    <View style={styles.usineContainer}>
    <View style={styles.titles}>
        <Text style={styles.title}> Système de production et séchage </Text>
        <Text style={styles.subtitle}> Usine Béni Idir</Text>
      </View>
        <ImageBackground source={require('../../assets/occ1.png')}
            style={styles.image}
    
        />
        </View>
     
);     
    }
export default UzinItem ;
