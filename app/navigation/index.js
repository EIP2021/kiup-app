import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import AuthenticationNavigation from './AuthenticationNavigation';
import AuthLoadingScreen from '../containers/Authentication/AuthLoadingScreen';
import ScannerNavigation from './ScannerNavigation';
import NonScanProductNavigation from './NonScanProductNavigation';

const BottomTabNavigator = createBottomTabNavigator({
  Scanner: ScannerNavigation,
  Products: NonScanProductNavigation,
});

const AppSwitch = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthenticationNavigation,
  App: BottomTabNavigator,
});

const NavigationAppRoot = createAppContainer(AppSwitch);

export default NavigationAppRoot;
