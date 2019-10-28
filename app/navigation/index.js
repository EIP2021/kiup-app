import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import AuthenticationNavigation from './AuthenticationNavigation';
import AuthLoadingScreen from '../containers/Authentication/AuthLoadingScreen';
import ScannerNavigation from './ScannerNavigation';

const BottomTabNavigator = createBottomTabNavigator({
  Scanner: ScannerNavigation,
});

const AppSwitch = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthenticationNavigation,
  App: BottomTabNavigator,
});

const NavigationAppRoot = createAppContainer(AppSwitch);

export default NavigationAppRoot;
