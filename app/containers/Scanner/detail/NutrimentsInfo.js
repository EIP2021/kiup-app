import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';

import { NutrimentAmountField } from '../../../components';

const NutrimentsInfo = ({ nutriments }) => {
  return (
    <View style={{ marginVertical: moderateScale(8) }}>
      <NutrimentAmountField
        name="Potassium"
        amount={nutriments.potassium.amount}
        unit={nutriments.potassium.unit || 'mg'}
        color="red"
      />
      <NutrimentAmountField
        name="Sel"
        amount={nutriments.salt.amount}
        unit={nutriments.salt.unit || 'g'}
        color="pink"
      />
      <NutrimentAmountField
        name="Protéines"
        amount={nutriments.proteins.amount}
        unit={nutriments.proteins.unit || 'g'}
        color="yellow"
      />
      <NutrimentAmountField
        lastItem
        name="Phosphore"
        amount={nutriments.phosphorus.amount}
        unit={nutriments.phosphorus.unit || 'mg'}
        color="green"
      />
    </View>
  );
};

NutrimentsInfo.propTypes = {
  nutriments: PropTypes.object,
};

NutrimentsInfo.defaultProps = {
  nutriments: {},
};

export default NutrimentsInfo;
