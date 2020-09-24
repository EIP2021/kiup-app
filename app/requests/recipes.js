import { READ_DATA, fetchRequest, updateData } from '../actions';
import { kiupURL } from '../config/apisURL';

export const getBestRecipes = () => {
  return fetchRequest(
    'bestRecipes',
    READ_DATA,
    {
      url: `${kiupURL}/recipe`,
      method: 'GET',
    },
    'kiup',
    [],
    (name, response, subtype) => {
      const recipes = response.body;
      return [updateData(name, recipes, subtype)];
    }
  );
};

export const getRecommendedRecipes = () => {
  return fetchRequest(
    'recommendedRecipes',
    READ_DATA,
    {
      url: `${kiupURL}/recipeRecommendation`,
      method: 'GET',
    },
    'kiup',
    [],
    (name, response, subtype) => {
      const recipes = response.body;
      return [updateData(name, recipes, subtype)];
    }
  );
};

export const getRecipeByID = id => {
  return fetchRequest(
    'recipe',
    READ_DATA,
    {
      url: `${kiupURL}/recipe/get/${id}`,
      method: 'GET',
    },
    'kiup',
    [],
    (name, response, subtype) => {
      return [updateData(name, response, subtype)];
    }
  );
};
