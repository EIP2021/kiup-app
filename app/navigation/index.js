import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import AuthenticationNavigation from './AuthenticationNavigation';
import AuthLoadingScreen from '../containers/Authentication/AuthLoadingScreen';

// const AppTabs = createBottomTabNavigator({});

const AppSwitch = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthenticationNavigation,
});

const NavigationAppRoot = createAppContainer(AppSwitch);

export default NavigationAppRoot;
