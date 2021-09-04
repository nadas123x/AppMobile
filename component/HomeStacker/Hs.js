import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Prrop from '../Propos/Prrop';
import {StyleSheet} from "react-native";
import Posts from '../UzinItem/Posts';
import SB from '../StyledButton/SB';
import Animation from '../Animation/Animation';
import News from '../StyledButton/News';
import Pr from '../Propos/Pr';
import Prr from '../Propos/Prr';
import ActualiteContent from '../ActualiteContent/ActuContent'

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

    Pr:{
      screen:Pr
    },
    Prr:{
screen:Prr
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
    ActualiteContent:{
      screen:ActualiteContent,
    },
   


}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#153237'
    }
   
  });
const Homestacker= createStackNavigator(screens);
export default createAppContainer(Homestacker);
