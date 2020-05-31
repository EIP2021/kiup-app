import { READ_DATA, fetchRequest, updateData } from '../actions';
import { kiupURL } from '../config/apisURL';

const getSearchedRecipe = () => {
  return fetchRequest(
    'searchRecipes',
    READ_DATA,
    {
      url: `${kiupURL}/recipes/search`,
      method: 'GET',
      parameters: { pageSize: 20 },
    },
    'kiup',
    [
      {
        dataName: 'page',
        type: 'parameter',
        toSelect: state => state.searchRecipe.page + 1,
      },
      {
        dataName: 'categoryId',
        type: 'parameter',
        toSelect: state => state.searchRecipeQuery.categoryId,
      },
      {
        dataName: 'query',
        type: 'parameter',
        toSelect: state => state.searchRecipeQuery.query,
      },
    ],
    (name, response, subtype) => {
      return [updateData(name, response.result, subtype)];
    }
  );
};

export default getSearchedRecipe;
