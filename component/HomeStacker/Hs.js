import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Posts from './component/Posts';
import SB from './component/StyledButton/SB';

const screens={
    
    SB:{
        screen: SB
    },

    Posts:{
        screen: Posts
    }
}
const Homestacker= createStackNavigator(screens);
export default createAppContainer(Homestacker);
