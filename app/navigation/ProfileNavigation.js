import { createStackNavigator } from 'react-navigation-stack';

import ProfileScreen from '../containers/Profile/ProfileScreen';
import SettingScreen from '../containers/Profile/SettingScreen';
import HistoryScreen from '../containers/Profile/HistoryScreen';
import ConsumptionScreen from '../containers/Profile/ConsumptionScreen';
import defaultNavigationOptions from './defaultNavigationOption';

const ProfileNavigation = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
      },
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        header: null,
      },
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: {
        header: null,
      },
    },
    Consumption: {
      screen: ConsumptionScreen,
    },
  },
  {
    initialRouteName: 'Profile',
    defaultNavigationOptions: {
      ...defaultNavigationOptions,
    },
  }
);

export default ProfileNavigation;
