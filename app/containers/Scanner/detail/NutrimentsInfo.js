import React from 'react';
import PropTypes from 'prop-types';

import { NutrimentAmountField } from '../../../components';
import NutrimentsHeaderBar from './NutrimentsHeaderBar';

const NutrimentsInfo = ({ nutriments }) => {
  return (
    <>
      <NutrimentsHeaderBar />
      <NutrimentAmountField
        name="Potassium"
        amount={nutriments.potassium.amount}
        unit={nutriments.potassium.unit}
        color="red"
      />
      <NutrimentAmountField
        name="Sel"
        amount={nutriments.salt.amount}
        unit={nutriments.salt.unit}
        color="green"
      />
      <NutrimentAmountField
        name="Protéines"
        amount={nutriments.proteins.amount}
        unit={nutriments.proteins.unit}
        color="blue"
      />
      <NutrimentAmountField
        lastItem
        name="Phosphore"
        amount={nutriments.phosphorus.amount}
        unit={nutriments.phosphorus.unit}
        color="orange"
      />
    </>
  );
};

NutrimentsInfo.propTypes = {
  nutriments: PropTypes.object,
};

NutrimentsInfo.defaultProps = {
  nutriments: {},
};

export default NutrimentsInfo;
