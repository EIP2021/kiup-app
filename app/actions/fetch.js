export const FETCH_START = 'FETCH_START';
export const FETCH_END = 'FETCH_END';
export const FETCH_ERROR = 'FETCH_ERROR';
export const ERROR_DETAILS = 'ERROR_DETAILS';

export const fetchStart = () => ({
  type: FETCH_START,
});

export const fetchEnd = () => ({
  type: FETCH_END,
});

export const fetchError = (title, description, error, redirectRoute) => ({
  type: FETCH_ERROR,
  title,
  description,
  error,
  redirectRoute,
});

export const errorDetails = (title, error) => ({
  type: ERROR_DETAILS,
  title,
  error,
});
