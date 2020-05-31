import { Alert } from 'react-native';

import {
  CREATE_DATA,
  fetchRequest,
  updateData,
  addToken,
  setError,
  navigate,
} from '../actions';
import { getConsumption } from './consumption';
import { getProfileInformations } from './profileInformations';
import { kiupURL } from '../config/apisURL';

export const login = payload => {
  return fetchRequest(
    'auth',
    CREATE_DATA,
    {
      url: `${kiupURL}/user/login`,
      method: 'POST',
      payload,
    },
    '',
    [],
    (name, response, subtype) => {
      return [
        updateData(name, { email: response.email, isLogged: true }, subtype),
        addToken('kiup', response.token),
        getConsumption(),
        getProfileInformations(),
        navigate('Profile'),
      ];
    },
    (name, err) => {
      return [setError(`${err.message}, veuillez réessayer.`)];
    }
  );
};

export const register = payload => {
  return fetchRequest(
    'auth',
    CREATE_DATA,
    {
      url: `${kiupURL}/user/register`,
      method: 'POST',
      payload,
    },
    '',
    [],
    (name, response, subtype) => {
      return [
        updateData(name, { email: response.email, isLogged: true }, subtype),
        addToken('kiup', response.token),
        navigate('Profile'),
      ];
    },
    (name, err) => {
      console.log(err);
      return [setError(`${err.message}, veuillez réessayer.`)];
    }
  );
};

export const reinitializePassword = payload => {
  return fetchRequest(
    'auth',
    CREATE_DATA,
    {
      url: `${kiupURL}/password/forgot`,
      method: 'POST',
      payload,
    },
    'kiup',
    [],
    () => {
      Alert.alert(
        'Email envoyé',
        'Un email vous a été envoyé afin de réinitialiser votre mot de passe.',
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: false }
      );
      return [navigate('Profile')];
    },
    (name, err) => {
      return [setError(`${err.message}, veuillez réessayer.`)];
    }
  );
};

export const modifyPassword = payload => {
  return fetchRequest(
    'auth',
    CREATE_DATA,
    {
      url: `${kiupURL}/password/reset`,
      method: 'POST',
      payload,
    },
    '',
    [],
    () => {
      Alert.alert(
        'Mot de passe réinitialiser',
        'Votre mot de passe a été réinitialiser avec succès.',
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: false }
      );
      return [navigate('Profile')];
    },
    (name, err) => {
      return [setError(`${err.message}, veuillez réessayer.`)];
    }
  );
};
