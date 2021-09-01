import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Posts from '../UzinItem/Posts';
import SB from '../StyledButton/SB';

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
