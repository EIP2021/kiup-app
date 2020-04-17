import { createStackNavigator } from 'react-navigation-stack';

import RecipeScreen from '../containers/Recipe/RecipeScreen';
import AddRecipeScreen from '../containers/Recipe/AddRecipeScreen';
import AddRecipeTimeScreen from '../containers/Recipe/AddRecipeTimeScreen';
import AddRecipeStepsScreen from '../containers/Recipe/AddRecipeStepsScreen';
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
      screen: AddRecipeTimeScreen,
    },
    AddRecipeSteps: {
      screen: AddRecipeStepsScreen,
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
