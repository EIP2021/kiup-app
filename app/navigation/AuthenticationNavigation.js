import { createStackNavigator } from 'react-navigation';

import WelcomeScreen from '../containers/Authentication/WelcomeScreen';
import LoginScreen from '../containers/Authentication/LoginScreen';
import RegisterScreen from '../containers/Authentication/RegisterScreen';
import RegisterInformationScreen from '../containers/Authentication/RegisterInformationScreen';
import ForgottenScreen from '../containers/Authentication/ForgottenScreen';
import ReinitializeScreen from '../containers/Authentication/ReinitializeScreen';
import defaultNavigationOptions from './defaultNavigationOption';

const AuthenticationNavigation = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Connexion',
      },
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        headerStyle: {
          ...defaultNavigationOptions.headerStyle,
          borderBottomWidth: 0,
        },
      },
    },
    RegisterInformation: {
      screen: RegisterInformationScreen,
      navigationOptions: {
        headerStyle: {
          ...defaultNavigationOptions.headerStyle,
          borderBottomWidth: 0,
        },
      },
    },
    Forgotten: {
      screen: ForgottenScreen,
      navigationOptions: {
        headerStyle: {
          ...defaultNavigationOptions.headerStyle,
          borderBottomWidth: 0,
        },
      },
    },
    Reinitialize: {
      screen: ReinitializeScreen,
      navigationOptions: {
        headerStyle: {
          ...defaultNavigationOptions.headerStyle,
          borderBottomWidth: 0,
        },
      },
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
