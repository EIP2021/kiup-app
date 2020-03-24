import { createStackNavigator } from 'react-navigation-stack';

import RecipeScreen from '../containers/Recipe/RecipeScreen';
import AddRecipeScreen from '../containers/Recipe/AddRecipeScreen';
import AddRecipeTime from '../containers/Recipe/AddRecipeTimeScreen';
import defaultNavigationOptions from './defaultNavigationOption';

const RecipeNavigation = createStackNavigator(
  {
    Recipe: {
      screen: RecipeScreen,
      navigationOptions: {
        header: null,
        title: 'Recipe',
      },
    },
    AddRecipe: {
      screen: AddRecipeScreen,
      navigationOptions: {
        title: 'Nouvelle Recette',
      },
    },
    AddRecipeTime: {
      screen: AddRecipeTime,
    },
  },
  {
    initialRouteName: 'Recipe',
    defaultNavigationOptions: {
      ...defaultNavigationOptions,
    },
  }
);

export default RecipeNavigation;
