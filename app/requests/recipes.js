import { READ_DATA, fetchRequest } from '../actions';
import { kiupURL } from '../config/apisURL';

export const getAllRecipes = () => {
  return fetchRequest(
    'recipe',
    READ_DATA,
    {
      url: `${kiupURL}/recipe/`,
      method: 'GET',
    },
    'kiup',
    [],
    (name, response, subtype) => {
      console.log(name, response, subtype);
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
      console.log(name, response, subtype);
    }
  );
};
