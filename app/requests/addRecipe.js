<<<<<<< HEAD
import { CREATE_DATA, fetchRequest, navigate, setError } from '../actions';
=======
import {
  CREATE_DATA,
  fetchRequest,
  navigate,
  setError,
  updateData,
} from '../actions';
>>>>>>> 37257c23125520817140a5fc21d52decda9e3c0b
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
<<<<<<< HEAD
    () => {
      return [navigate('recipe')];
=======
    (name, response, subtype) => {
      return [updateData(name, payload, subtype), navigate('Recipe')];
>>>>>>> 37257c23125520817140a5fc21d52decda9e3c0b
    },
    (name, err) => {
      return [setError(`${err.message}, veuillez réessayer.`)];
    }
  );
};

export default addRecipe;
