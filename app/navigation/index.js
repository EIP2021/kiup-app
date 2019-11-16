import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { moderateScale } from 'react-native-size-matters';

import { TabBarIcon } from '../components';
import AuthenticationNavigation from './AuthenticationNavigation';
import AuthLoadingScreen from '../containers/Authentication/AuthLoadingScreen';
import ScannerNavigation from './ScannerNavigation';
import ProductsNavigation from './NonScanProductNavigation';
import { colors } from '../themes';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Recipe: {
      screen: () => null,
      navigationOptions: {
        title: 'Recette',
        tabBarOnPress: () => {},
      },
    },
    Products: {
      screen: ProductsNavigation,
      navigationOptions: {
        title: 'Rechercher',
      },
    },
    Scanner: {
      screen: ScannerNavigation,
      navigationOptions: {
        title: 'Scan',
      },
    },
    Profile: {
      screen: () => null,
      navigationOptions: {
        title: 'Profil',
        tabBarOnPress: () => {},
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: props => (
        <TabBarIcon {...props} routeName={navigation.state.routeName} />
      ),
      initialRouteName: 'Scanner',
      tabBarOptions: {
        activeTintColor: colors.primary,
        inactiveTintColor: colors.light_grey,
        style: {
          paddingTop: 3,
        },
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

export default createAppContainer(AppSwitch);
