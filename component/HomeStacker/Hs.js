import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Prrop from '../Propos/Prrop';

import Posts from '../UzinItem/Posts';
import SB from '../StyledButton/SB';
import News from '../StyledButton/News';
const screens={

    
    SB:{
        screen: SB
    },

    Posts:{
        screen: Posts
    },
    
    News:{
        screen: News

    },
    Prrops:{
        screen: Prrops
    },


}
const Homestacker= createStackNavigator(screens);
export default createAppContainer(Homestacker);
