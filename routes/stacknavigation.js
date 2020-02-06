import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import mainScreen from '../screens/mainscreen';
import registerScreen from '../screens/registerscreen';
import loginScreen from '../screens/loginscreen';

const screens = {
    loginScreen: {
        screen: loginScreen
    },
    registerScreen: {
        screen: registerScreen
    },
    mainScreen: {
        screen: mainScreen
    }
}

const navStack = createStackNavigator(screens);

export default createAppContainer(navStack);