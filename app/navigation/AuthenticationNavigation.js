import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from '../containers/Authentication/WelcomeScreen';
import LoginScreen from '../containers/Authentication/LoginScreen';
import RegisterScreen from '../containers/Authentication/RegisterScreen';
import RegisterInformationScreen from '../containers/Authentication/RegisterInformationScreen';
import ForgottenScreen from '../containers/Authentication/ForgottenScreen';
import ReinitializeScreen from '../containers/Authentication/ReinitializeScreen';
import defaultNavigationOptions from './defaultNavigationOption';
import { colors } from '../themes';

const AuthenticationNavigation = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        header: null,
        title: 'Bienvenue',
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Connexion',
        headerStyle: {
          ...defaultNavigationOptions.headerStyle,
          borderBottomWidth: 1,
          borderColor: colors.separator,
        },
      },
    },
    Register: {
      screen: RegisterScreen,
    },
    RegisterInformation: {
      screen: RegisterInformationScreen,
    },
    Forgotten: {
      screen: ForgottenScreen,
    },
    Reinitialize: {
      screen: ReinitializeScreen,
    },
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      ...defaultNavigationOptions,
    },
  }
);

export default AuthenticationNavigation;
