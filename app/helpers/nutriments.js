export const calculNutrimentsQuantity = (quantity, amount) => {
  return amount ? Math.round((amount / 100) * quantity * 100) / 100 : 0;
};

export const calculAllNutrimentsQuantity = (quantity, nutriments) => {
  const { potassium, phosphorus, salt, proteins } = nutriments;
  return {
    potassium: calculNutrimentsQuantity(quantity, potassium.quantity),
    phosphorus: calculNutrimentsQuantity(quantity, phosphorus.quantity),
    salt: calculNutrimentsQuantity(quantity, salt.quantity),
    proteins: calculNutrimentsQuantity(quantity, proteins.quantity),
  };
};

export const addAllNutrimentsQuantity = (nutriments, addNutriments) => {
  return {
    potassium: {
      ...nutriments.potassium,
      quantity:
        nutriments.potassium.quantity + addNutriments.potassium.quantity,
    },
    phosphorus: {
      ...nutriments.phosphorus,
      quantity:
        nutriments.phosphorus.quantity + addNutriments.phosphorus.quantity,
    },
    salt: {
      ...nutriments.salt,
      quantity: nutriments.salt.quantity + addNutriments.salt.quantity,
    },
    proteins: {
      ...nutriments.potassium,
      quantity: nutriments.proteins.quantity + addNutriments.proteins.quantity,
    },
  };
};

export const getPercentage = (value, maximum) => {
  if (!value || !maximum) {
    return 0;
  }
  return Math.round((value / maximum) * 100);
};
