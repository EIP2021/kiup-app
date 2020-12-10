import { READ_DATA, fetchRequest, updateData } from '../actions';
import { kiupURL } from '../config/apisURL';

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
