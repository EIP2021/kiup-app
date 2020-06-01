import { createStackNavigator } from 'react-navigation-stack';

import { moderateScale } from 'react-native-size-matters';
import ListRecipeScreen from '../containers/Recipe/ListRecipeScreen';
import RecipeScreen from '../containers/Recipe/RecipeScreen';
import { colors } from '../themes';
import AddRecipeScreen from '../containers/Recipe/AddRecipeScreen';
import AddRecipeTimeScreen from '../containers/Recipe/AddRecipeTimeScreen';
import AddRecipeStepsScreen from '../containers/Recipe/AddRecipeStepsScreen';
import AddRecipeRecapScreen from '../containers/Recipe/AddRecipeRecapScreen';
import RecipesSearchScreen from '../containers/Search/RecipesSearchScreen';

import defaultNavigationOptions from './defaultNavigationOption';

const RecipeNavigation = createStackNavigator(
  {
    ListRecipe: {
      screen: ListRecipeScreen,
      navigationOptions: {
        title: 'Recettes',
        headerTitleStyle: {
          color: colors.primary,
          fontSize: moderateScale(30),
          fontWeight: 'bold',
          marginLeft: 0,
        },
        headerTintColor: colors.primary,
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor: '#FFFFFF',
        },
      },
    },
    Recipe: {
      screen: RecipeScreen,
      navigationOptions: {
        header: null,
      },
    },
    RecipeSearch: {
      screen: RecipesSearchScreen,
      navigationOptions: {
        title: 'Rechercher une recette',
        headerTitleStyle: {
          color: colors.primary,
          fontSize: moderateScale(25),
          fontWeight: 'bold',
          marginLeft: 0,
        },
        headerTintColor: colors.primary,
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor: '#FFFFFF',
        },
      },
    },
    AddRecipe: {
      screen: AddRecipeScreen,
      navigationOptions: {
        title: 'Nouvelle Recette',
      },
    },
    AddRecipeTime: {
      screen: AddRecipeTimeScreen,
    },
    AddRecipeSteps: {
      screen: AddRecipeStepsScreen,
    },
    AddRecipeRecap: {
      screen: AddRecipeRecapScreen,
    },
  },
  {
    initialRouteName: 'ListRecipe',
    defaultNavigationOptions: {
      ...defaultNavigationOptions,
    },
  }
);

export default RecipeNavigation;
