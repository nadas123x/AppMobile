import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Presentation from '../Propos/Presentation';
import {StyleSheet} from "react-native";
import Posts from '../UzinItem/Posts';
import SB from '../StyledButton/SB';
import Animation from '../Animation/Animation';
import News from '../StyledButton/News';
import Infos from '../Propos/Infos';
import Historique from '../Propos/Historique';
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
import Général from '../Propos/Général';
import Utilisation from '../Propos/Utilisation';
import Extraction from '../Propos/Extraction';
import Foration from '../Propos/Foration';
import Sautage from '../Propos/Sautage';
import Décapage from '../Propos/Décapage';
import Defruitage from '../Propos/Defruitage';
import Transport from '../Propos/Transport';
import Epierage from '../Propos/Epierage';
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
   Presentation:{
        screen: Presentation
        
    },
    Tyy:{
      screen: Tyy
    },
    Infos:{
      screen:Infos
    },
    Historique:{
screen:Historique
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
  Général:{
    screen: Général
  },
  Utilisation:{
    screen: Utilisation
  },
  Extraction:{
    screen: Extraction
  },
  Foration:{
    screen: Foration
  },
  Sautage:{
    screen: Sautage
  },
  Décapage:{
    screen: Décapage
  },
 
  Defruitage:{
    screen: Defruitage
  },
  Transport:{
    screen: Transport
  },
  Epierage:{
    screen: Epierage
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
