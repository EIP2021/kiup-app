const parseOpenFoodFactNutriments = nutriments => {
  return {
    potassium: {
      amount: nutriments.potassium_100g ? nutriments.potassium_100g : 0,
      unit: nutriments.potassium_unit ? nutriments.potassium_unit : 'mg',
    },
    phosphorus: {
      amount: nutriments.phosphorus_100g ? nutriments.phosphorus_100g : 0,
      unit: nutriments.phosphorus_unit ? nutriments.phosphorus_unit : 'mg',
    },
    proteins: {
      amount: nutriments.proteins_100g ? nutriments.proteins_100g : 0,
      unit: nutriments.proteins_unit ? nutriments.proteins_unit : 'g',
    },
    salt: {
      amount: nutriments.salt_100g ? nutriments.salt_100g : 0,
      unit: nutriments.salt_unit ? nutriments.salt_unit : 'g',
    },
  };
};

export default parseOpenFoodFactNutriments;
