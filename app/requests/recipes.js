import { UPDATE_DATA, READ_DATA, fetchRequest, updateData } from '../actions';
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
      console.log('______')
      console.log(name)
      console.log(subtype)
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
      const recipes = response.recipe;
      return [updateData(name, recipes, subtype)];
    }
  );
};

export const getMyRecipes = () => {
  return fetchRequest(
    'myRecipes',
    READ_DATA,
    {
      url: `${kiupURL}/my`,
      method: 'GET',
    },
    'kiup',
    [],
    (name, response, subtype) => {
      const recipes = response.recipe;
      return [updateData(name, recipes, subtype)];
    }
  );
};

export const getFavRecipes = () => {
  return fetchRequest(
    'favRecipes',
    READ_DATA,
    {
      url: `${kiupURL}/fav`,
      method: 'GET',
    },
    'kiup',
    [],
    (name, response, subtype) => {
      const recipes = response.recipe;
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

export const updateRecipe = (id, payload, index) => {
  return fetchRequest(
    'recipe',
    UPDATE_DATA,
    {
      url: `${kiupURL}/recipe/edit/${id}`,
      method: 'POST',
      payload,
    },
    'kiup',
    [],
    (name, response, subtype) => {
      const info = parseProfileInformations(response.info);
      return [updateData(name, payload, subtype, {index})];
    }
  );
};

