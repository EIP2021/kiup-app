export const NAVIGATE = 'SAGA/NAVIGATE';

export const navigate = (routeName, parameters = {}) => ({
  type: NAVIGATE,
  routeName,
  parameters,
});
