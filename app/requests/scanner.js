import { READ_DATA, fetchRequest, navigate } from '../actions';
import { openFoodFactURL } from '../config/apisURL';
import { parseOpenFoodFactNutriments } from '../helpers';

const getScannedProduct = barcode => {
  return fetchRequest(
    'scan',
    READ_DATA,
    {
      url: `${openFoodFactURL}/produit/${barcode}.json`,
      method: 'GET',
    },
    false,
    [],
    (name, response) => {
      const { product } = response;
      const { nutriments } = product;
      return [
        navigate('ProductInformation', {
          brands: product.brands,
          image: product.image_front_url,
          nutriments: parseOpenFoodFactNutriments(nutriments),
          title: product.product_name,
        }),
      ];
    }
  );
};

export default getScannedProduct;
