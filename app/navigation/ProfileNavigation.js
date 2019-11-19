import { createStackNavigator } from 'react-navigation-stack';

import ProfileScreen from '../containers/Profile/ProfileScreen';
import defaultNavigationOptions from './defaultNavigationOption';

const ProfileNavigation = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
      },
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
