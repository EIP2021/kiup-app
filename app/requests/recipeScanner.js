import { READ_DATA, fetchRequest, updateData } from '../actions';
import { openFoodFactURL } from '../config/apisURL';
import { parseOpenFoodFactNutriments } from '../helpers';

const getRecipeScannedProduct = barcode => {
  console.log('scan')
  return fetchRequest(
    'recipeProductScanned',
    READ_DATA,
    {
      url: `${openFoodFactURL}/produit/${barcode}.json`,
      method: 'GET',
    },
    false,
    [],
    (name, response, subtype) => {
      const { product } = response;
      const { nutriments } = product;
      return [
        updateData(
          name,
          {
            id: barcode + Math.floor(Math.random() * 100000) + 1,
            brand: product.brands.split(',')[0],
            image: product.image_front_url,
            nutriments: parseOpenFoodFactNutriments(nutriments),
            title: product.product_name,
          },
          subtype
        ),
      ];
    }
  );
};

export default getRecipeScannedProduct;
