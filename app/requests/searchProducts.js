import { READ_DATA, fetchRequest, updateData } from '../actions';
import { kiupURL } from '../config/apisURL';

const getSearchedProducts = () => {
  return fetchRequest(
    'searchProduct',
    READ_DATA,
    {
      url: `${kiupURL}/aliment/search`,
      method: 'GET',
      parameters: { pageSize: 20 },
    },
    'kiup',
    [
      {
        dataName: 'page',
        type: 'parameter',
        toSelect: state => state.searchProduct.page + 1,
      },
      {
        dataName: 'categoryId',
        type: 'parameter',
        toSelect: state => state.searchProductQuery.categoryId,
      },
      {
        dataName: 'query',
        type: 'parameter',
        toSelect: state => state.searchProductQuery.query,
      },
    ],
    (name, response, subtype) => {
      return [updateData(name, response.result, subtype)];
    }
  );
};

export default getSearchedProducts;
