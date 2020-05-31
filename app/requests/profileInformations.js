import moment from 'moment';
import { UPDATE_DATA, READ_DATA, fetchRequest, updateData } from '../actions';
import { kiupURL } from '../config/apisURL';

const parseProfileInformations = informations => {
  return {
    ...informations,
    birthdate: moment(informations.dateOfBirth).format('DD/MM/YYYY'),
    gender: informations.gender === 'male' ? 'Homme' : 'Femme',
    weight: `${informations.weight} kg`,
  };
};

export const getProfileInformations = () => {
  return fetchRequest(
    'profileInformations',
    READ_DATA,
    {
      url: `${kiupURL}/user/profile`,
      method: 'GET',
    },
    'kiup',
    [],
    (name, response, subtype) => {
      const info = parseProfileInformations(response.info);
      return [updateData(name, info, subtype)];
    }
  );
};

export const updateProfileInformation = payload => {
  return fetchRequest(
    'profileInformations',
    UPDATE_DATA,
    {
      url: `${kiupURL}/user/profile`,
      method: 'POST',
      payload,
    },
    'kiup',
    [],
    (name, response, subtype) => {
      const info = parseProfileInformations(response.info);
      return [updateData(name, info, subtype)];
    }
  );
};
