import { createStackNavigator } from 'react-navigation-stack';

<<<<<<< HEAD
import { moderateScale } from 'react-native-size-matters';
import ListRecipeScreen from '../containers/Recipe/ListRecipeScreen';
import RecipeScreen from '../containers/Recipe/RecipeScreen';
import { colors } from '../themes';
=======
import AddRecipeProductScreen from '../containers/Recipe/AddRecipeProductScreen';
import RecipeSearchScreen from '../containers/Search/RecipesSearchScreen';
>>>>>>> 37257c23125520817140a5fc21d52decda9e3c0b
import AddRecipeScreen from '../containers/Recipe/AddRecipeScreen';
import AddRecipeTimeScreen from '../containers/Recipe/AddRecipeTimeScreen';
import AddRecipeStepsScreen from '../containers/Recipe/AddRecipeStepsScreen';
import AddRecipeRecapScreen from '../containers/Recipe/AddRecipeRecapScreen';
<<<<<<< HEAD
import RecipesSearchScreen from '../containers/Search/RecipesSearchScreen';

=======
>>>>>>> 37257c23125520817140a5fc21d52decda9e3c0b
import defaultNavigationOptions from './defaultNavigationOption';

const RecipeNavigation = createStackNavigator(
  {
<<<<<<< HEAD
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
=======
    Recipe: {
      screen: RecipeSearchScreen,
      navigationOptions: {
        header: null,
        title: 'Recipe',
>>>>>>> 37257c23125520817140a5fc21d52decda9e3c0b
      },
    },
    AddRecipe: {
      screen: AddRecipeScreen,
      navigationOptions: {
        title: 'Nouvelle Recette',
      },
    },
<<<<<<< HEAD
=======
    AddRecipeProducts: {
      screen: AddRecipeProductScreen,
    },
>>>>>>> 37257c23125520817140a5fc21d52decda9e3c0b
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
<<<<<<< HEAD
    initialRouteName: 'ListRecipe',
=======
    initialRouteName: 'Recipe',
>>>>>>> 37257c23125520817140a5fc21d52decda9e3c0b
    defaultNavigationOptions: {
      ...defaultNavigationOptions,
    },
  }
);

export default RecipeNavigation;
