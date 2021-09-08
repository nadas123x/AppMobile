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
import Tyy from '../Ty/Tyy';
import Usine from '../UsineBen/Usine';
import Usi from '../UsineBen/Usi';
import Usii from '../UsineBen/Usii';
import Usiii from '../UsineBen/Usiii';
import Foyer from '../UsineBen/Foyer';
import Foyer1 from '../UsineBen/Foyer1';
import Buse from '../UsineBen/Buse';
import Virole from '../UsineBen/Virole';
import Chambre from '../UsineBen/Chambre';
import Filtre from '../UsineBen/Filtre';
import Cheminee from '../UsineBen/Cheminee';
import Pho from '../Propos/Pho';

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
    Tyy:{
      screen: Tyy
    },
    Pr:{
      screen:Pr
    },
    Prr:{
screen:Prr
    },
    Usine:{
      screen:Usine
    },
    
    News:{
        screen: News

    },
   Usi:{
     screen: Usi
   },
   Usii:{
    screen: Usii
  },
  Usiii:{
    screen: Usiii
  },
  Foyer:{
    screen: Foyer
  },
  Foyer1:{
    screen: Foyer1
  },
  Buse:{
    screen: Buse
  },
  Virole:{
    screen: Virole
  },
  Chambre:{
    screen: Chambre
  },
  Filtre:{
    screen: Filtre
  },
  Cheminee:{
    screen: Cheminee
  },
  Pho:{
    screen: Pho
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
