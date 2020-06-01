import {
  CREATE_DATA,
  fetchRequest,
  navigate,
  setError,
  updateData,
} from '../actions';
import { kiupURL } from '../config/apisURL';

const addRecipe = payload => {
  return fetchRequest(
    'addRecipe',
    CREATE_DATA,
    {
      url: `${kiupURL}/recipe`,
      method: 'POST',
      payload,
    },
    'kiup',
    [],
    (name, response, subtype) => {
      return [updateData(name, payload, subtype), navigate('Recipe')];
    },
    (name, err) => {
      return [setError(`${err.message}, veuillez réessayer.`)];
    }
  );
};

export default addRecipe;
