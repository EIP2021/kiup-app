import moment from 'moment';
import {
  CREATE_DATA,
  READ_DATA,
  fetchRequest,
  updateData,
  navigate,
} from '../actions';
import { kiupURL } from '../config/apisURL';

export const postConsumption = stats => {
  return fetchRequest(
    'stats',
    CREATE_DATA,
    {
      url: `${kiupURL}/user/stats`,
      method: 'POST',
      payload: {
        date: moment().format('YYYY-MM-DD'),
        stats,
      },
    },
    'kiup',
    [],
    (name, response, subtype) => {
      return [updateData(name, response.stats, subtype), navigate('Profile')];
    }
  );
};

export const getConsumption = () => {
  return fetchRequest(
    'stats',
    READ_DATA,
    {
      url: `${kiupURL}/user/stats`,
      method: 'GET',
      parameters: {
        date: moment().format('YYYY-MM-DD'),
        scope: 'day',
      },
    },
    'kiup',
    [],
    (name, response, subtype) => {
      return [updateData(name, response.stats, subtype)];
    }
  );
};
