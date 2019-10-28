export const RETRIEVE_STATISTICS = 'RETRIEVE_STATISTICS';
export const SET_STATISTICS = 'SET_STATISTICS';

export const retrieveStatistics = () => ({
  type: RETRIEVE_STATISTICS,
});

export const setStatistics = statistics => ({
  type: SET_STATISTICS,
  statistics,
});
