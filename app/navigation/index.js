import React from 'react';
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { moderateScale } from 'react-native-size-matters';

import { TabBarIcon } from '../components';
import AuthenticationNavigation from './AuthenticationNavigation';
import AuthLoadingScreen from '../containers/Authentication/AuthLoadingScreen';
import ScannerNavigation from './ScannerNavigation';
import ProductsNavigation from './NonScanProductNavigation';
import { colors } from '../themes';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Scanner: ScannerNavigation,
    Products: ProductsNavigation,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => (
        <TabBarIcon
          routeName={navigation.state.routeName}
          tintColor={tintColor}
        />
      ),
      tabBarOptions: {
        activeTintColor: colors.primary,
        inactiveTintColor: colors.light_grey,
        labelStyle: {
          fontSize: moderateScale(10),
        },
      },
    }),
  }
);

const AppSwitch = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthenticationNavigation,
  App: BottomTabNavigator,
});

const NavigationAppRoot = createAppContainer(AppSwitch);

export default NavigationAppRoot;
