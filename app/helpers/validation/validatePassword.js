export const validatePasswordLogin = password => {
  if (!password) {
    return undefined;
  }
  if (password.length < 8) {
    return 'Le mot de passe doit contenir un minimum de 8 caracteres';
  }
  return undefined;
};

export const validatePasswordRegister = password => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  if (!password || password.length < 8 || !hasNumbers || !hasUpperCase) {
    return 'Le mot de passe doit contenir un chiffre, une majuscule et un minimum de 8 caractères.';
  }
  return undefined;
};
