import { createStackNavigator } from 'react-navigation-stack';

import { moderateScale } from 'react-native-size-matters';
import ListRecipeScreen from '../containers/Recipe/ListRecipeScreen';
import RecipeScreen from '../containers/Recipe/RecipeScreen';
import { colors } from '../themes';
import AddRecipeProductScreen from '../containers/Recipe/AddRecipeProductScreen';
import RecipesSearchScreen from '../containers/Search/RecipesSearchScreen';
import MyRecipesScreen from '../containers/Search/MyRecipesScreen';
import FavRecipesScreen from '../containers/Search/FavRecipesScreen';
import AddRecipeScannerScreen from '../containers/Recipe/AddRecipeScannerScreen';
import AddRecipeScreen from '../containers/Recipe/AddRecipeScreen';
import AddRecipeTimeScreen from '../containers/Recipe/AddRecipeTimeScreen';
import AddRecipeStepsScreen from '../containers/Recipe/AddRecipeStepsScreen';
import AddRecipeRecapScreen from '../containers/Recipe/AddRecipeRecapScreen';
import AddRecipeProductTypeScreen from '../containers/Recipe/AddRecipeProductTypeScreen';
import defaultNavigationOptions from './defaultNavigationOption';

const RecipeNavigation = createStackNavigator(
  {
    ListRecipe: {
      screen: ListRecipeScreen,
      navigationOptions: {
        header: null,
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
        header: null,
      },
    },
    MyRecipe: {
      screen: MyRecipesScreen,
      navigationOptions: {
        header: null,
      },
    },
    FavRecipe: {
      screen: FavRecipesScreen,
      navigationOptions: {
        header: null,
      },
    },
    AddRecipe: {
      screen: AddRecipeScreen,
      navigationOptions: {
        title: 'Nouvelle Recette',
      },
    },
    AddRecipeProducts: {
      screen: AddRecipeProductScreen,
    },
    AddRecipeScanner: {
      screen: AddRecipeScannerScreen,
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
    AddRecipeProductType: {
      screen: AddRecipeProductTypeScreen,
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
