export const calculNutrimentsQuantity = (quantity, amount) => {
  return amount ? Math.round((amount / 100) * quantity * 100) / 100 : 0;
};

export const calculAllNutrimentsQuantity = (quantity, nutriments) => {
  const { potassium, phosphorus, salt, proteins } = nutriments;
  return {
    potassium: calculNutrimentsQuantity(quantity, potassium.amount),
    phosphorus: calculNutrimentsQuantity(quantity, phosphorus.amount),
    salt: calculNutrimentsQuantity(quantity, salt.amount),
    proteins: calculNutrimentsQuantity(quantity, proteins.amount),
  };
};

export const addAllNutrimentsQuantity = (nutriments, addNutriments) => {
  return {
    potassium: {
      ...nutriments.potassium,
      amount: nutriments.potassium.amount + addNutriments.potassium.amount,
    },
    phosphorus: {
      ...nutriments.phosphorus,
      amount: nutriments.phosphorus.amount + addNutriments.phosphorus.amount,
    },
    salt: {
      ...nutriments.salt,
      amount: nutriments.salt.amount + addNutriments.salt.amount,
    },
    proteins: {
      ...nutriments.potassium,
      amount: nutriments.proteins.amount + addNutriments.proteins.amount,
    },
  };
};

export const getPercentage = (value, maximum) => {
  if (!value || !maximum) {
    return 0;
  }
  return Math.round((value / maximum) * 100);
};
