export const getAuth = state => state.auth;

export const getEmailAddress = state => getAuth(state).email;
