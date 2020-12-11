import { take, put, select } from 'redux-saga/effects';

import {
  READ_DATA,
  CREATE_DATA,
  createNutrimentAlert,
  deleteNutrimentAlert,
  createAlimentAlert,
} from '../actions';
import { generateID } from '../helpers';

const maxNutriments = {
  potassium: 600,
  phosphorus: 1000,
  salt: 5,
  proteins: 60,
};

export default function* watch() {
  while (true) {
    const { name, data } = yield take([READ_DATA, CREATE_DATA]);
    if (name === 'dailyStatistics') {
      const nutrimentsCountAlert = yield select(
        state => state.tipsAlert.nutrimentsCountAlert
      );
      // eslint-disable-next-line
      for (const [key, value] of Object.entries(maxNutriments)) {
        if (data[key] > value && nutrimentsCountAlert[key] === false) {
          yield put(createNutrimentAlert(key));
        }
        if (data[key] < value && nutrimentsCountAlert[key] === true) {
          yield put(deleteNutrimentAlert(key));
        }
      }
    }
    if (name === 'consumptionHistory') {
      const { nutriments, title, image } = data;
      // eslint-disable-next-line
      for (const [key, value] of Object.entries(maxNutriments)) {
        if (nutriments[key].quantity * 2 > value) {
          yield put(
            createAlimentAlert({
              id: generateID(),
              title,
              image,
              nutriment: key,
            })
          );
        }
      }
    }
  }
}
