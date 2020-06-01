import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { moderateScale } from 'react-native-size-matters';

import { TabBarIcon } from '../components';
import AuthenticationNavigation from './AuthenticationNavigation';
import AuthLoadingScreen from '../containers/Authentication/AuthLoadingScreen';
import ScannerNavigation from './ScannerNavigation';
import SearchNavigation from './SearchNavigation';
import ProfileNavigation from './ProfileNavigation';
import RecipeNavigation from './RecipeNavigation';
import { colors } from '../themes';
import SearchScreen from '../containers/Search/SearchScreen';
import RecipesSearchScreen from '../containers/Search/RecipesSearchScreen';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Recipe: {
      screen: RecipeNavigation,
      navigationOptions: {
        title: 'Recette',
      },
    },
    Search: {
      screen: SearchNavigation,
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
      screen: ProfileNavigation,
      navigationOptions: {
        title: 'Profil',
      },
    },
  },
  {
    initialRouteName: 'Profile',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: props => (
        <TabBarIcon {...props} routeName={navigation.state.routeName} />
      ),
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
