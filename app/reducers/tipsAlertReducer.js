import {
  CREATE_NUTRIMENT_ALERT,
  DELETE_NUTRIMENT_ALERT,
  CREATE_ALIMENT_ALERT,
  DELETE_ALIMENT_ALERT,
} from '../actions';

const defaultState = {
  nutrimentsCountAlert: {
    potassium: false,
    phosphorus: false,
    proteins: false,
    salt: false,
  },
  productAlerts: [],
  alertCount: 0,
};

const tipsAlertReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case CREATE_NUTRIMENT_ALERT:
      return {
        ...state,
        nutrimentsCountAlert: {
          ...state.nutrimentsCountAlert,
          [action.nutriment]: true,
        },
        alertCount: state.alertCount + 1,
      };
    case DELETE_NUTRIMENT_ALERT:
      return {
        ...state,
        nutrimentsCountAlert: {
          ...state.nutrimentsCountAlert,
          [action.nutriment]: false,
        },
        alertCount: state.alertCount - 1,
      };
    case CREATE_ALIMENT_ALERT:
      return {
        ...state,
        alertCount: state.alertCount + 1,
        productAlerts: [action.product, ...state.productAlerts],
      };
    case DELETE_ALIMENT_ALERT:
      return {
        ...state,
        alertCount: state.alertCount - 1,
        productAlerts: state.productAlerts.filter(
          product => product.id !== action.id
        ),
      };
    default:
      return state;
  }
};

export default tipsAlertReducer;
