export const CREATE_NUTRIMENT_ALERT = 'CREATE_NUTRIMENT_ALERT';
export const DELETE_NUTRIMENT_ALERT = 'DELETE_NUTRIMENT_ALERT';
export const CREATE_ALIMENT_ALERT = 'CREATE_ALIMENT_ALERT';
export const DELETE_ALIMENT_ALERT = 'DELETE_ALIMENT_ALERT';

export const createNutrimentAlert = nutriment => ({
  type: CREATE_NUTRIMENT_ALERT,
  nutriment,
});

export const deleteNutrimentAlert = nutriment => ({
  type: DELETE_NUTRIMENT_ALERT,
  nutriment,
});

export const createAlimentAlert = product => ({
  type: CREATE_ALIMENT_ALERT,
  product,
});

export const deleteAlimentAlert = id => ({
  type: DELETE_ALIMENT_ALERT,
  id,
});
