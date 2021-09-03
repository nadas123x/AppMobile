import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Prrop from '../Propos/Prrop';
import {StyleSheet} from "react-native";
import Posts from '../UzinItem/Posts';
import SB from '../StyledButton/SB';
import Animation from '../Animation/Animation';
import News from '../StyledButton/News';
const screens={

    
    SB:{
        screen: SB,
        navigationOptions: ({ navigation }) => ({
            title: `terribl`,
            headerShown:false,
            
          }),
    },

    Posts:{
        screen: Posts,
        navigationOptions: ({ navigation }) => ({
            title: `terribl`,
            headerShown:false,
            
          }),
    },
    Prrop:{
        screen: Prrop
    },
    
    News:{
        screen: News

    },
    Animation:{
        screen:Animation,
        navigationOptions: ({ navigation }) => ({
            title: `terribl`,
            headerShown:false
          }),
    },
   


}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#153237'
    }
   
  });
const Homestacker= createStackNavigator(screens);
export default createAppContainer(Homestacker);
