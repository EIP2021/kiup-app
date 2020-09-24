import { READ_DATA, fetchRequest, updateData } from '../actions';
import { kiupURL } from '../config/apisURL';

const noValue = {
  unit: null,
  amount: 0,
};

const mockNutriments = {
  potassium: {
    unit: 'mg',
    amount: '3.2',
  },
  phosphorus: {
    unit: 'mg',
    amount: '0.3',
  },
  proteins: {
    unit: 'g',
    amount: '13.2',
  },
  salt: {
    unit: 'g',
    amount: '1.1',
  },
};

const getAlimentInformation = (id, alimName, alimImage) => {
  return fetchRequest(
    'alimentSearched',
    READ_DATA,
    {
      url: `${kiupURL}/aliment/${id}`,
      method: 'GET',
    },
    'kiup',
    [],
    (name, response, subtype) => {
      return [
        updateData(
          name,
          {
            nutriments: response.nutriments,
            title: alimName,
            image: alimImage,
          },
          subtype
        ),
      ];
    }
  );
};

export default getAlimentInformation;
