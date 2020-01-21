export const getPendingStatus = (state, name) =>
  state.fetch[name] ? state.fetch[name].pending : false;

export const getFetchError = state => state.fetch.error;
