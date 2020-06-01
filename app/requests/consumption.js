import moment from 'moment';
import {
  CREATE_DATA,
  READ_DATA,
  fetchRequest,
  updateData,
  navigate,
} from '../actions';
import { kiupURL } from '../config/apisURL';

const weeklyStatsMock = {
  potassium: [320, 430, 210, 560, 0, 320, 730],
  phosphorus: [320, 430, 210, 560, 0, 320, 730],
  proteins: [32, 43, 21, 56, 0, 32, 73],
  salt: [3.2, 4.1, 2.8, 5.1, 0, 3.2, 7.3],
};

const monthlyStatsMock = {
  potassium: [
    320,
    430,
    210,
    560,
    0,
    320,
    730,
    320,
    430,
    210,
    560,
    0,
    320,
    730,
    320,
    430,
    210,
    560,
    0,
    320,
    730,
    320,
    430,
    210,
    560,
    0,
    320,
    730,
  ],
  phosphorus: [
    320,
    430,
    210,
    560,
    0,
    320,
    730,
    320,
    430,
    210,
    560,
    0,
    320,
    730,
    320,
    430,
    210,
    560,
    0,
    320,
    730,
    320,
    430,
    210,
    560,
    0,
    320,
    730,
  ],
  proteins: [
    32,
    43,
    21,
    56,
    0,
    32,
    73,
    32,
    43,
    21,
    56,
    0,
    32,
    73,
    32,
    43,
    21,
    56,
    0,
    32,
    73,
    32,
    43,
    21,
    56,
    0,
    32,
    73,
  ],
  salt: [
    3.2,
    4.1,
    2.8,
    5.1,
    0,
    3.2,
    7.3,
    3.2,
    4.1,
    2.8,
    5.1,
    0,
    3.2,
    7.3,
    3.2,
    4.1,
    2.8,
    5.1,
    0,
    3.2,
    7.3,
    3.2,
    4.1,
    2.8,
    5.1,
    0,
    3.2,
    7.3,
  ],
};

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

export const getConsumption = (key, scope) => {
  return fetchRequest(
    key,
    READ_DATA,
    {
      url: `${kiupURL}/user/stats`,
      method: 'GET',
      parameters: {
        date: moment().format('YYYY-MM-DD'),
        scope,
      },
    },
    'kiup',
    [],
    (name, response, subtype) => {
      if (scope === 'year') {
        return [updateData(name, weeklyStatsMock, subtype)];
      }
      if (scope === 'month') {
        return [updateData(name, monthlyStatsMock, subtype)];
      }
      return [updateData(name, response.stats, subtype)];
    }
  );
};
