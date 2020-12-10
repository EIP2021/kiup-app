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
        amount={nutriments.potassium.quantity}
        unit={
          nutriments.potassium.unit.substr(
            0,
            nutriments.potassium.unit.indexOf('/')
          ) || 'mg'
        }
        color="red"
      />
      <NutrimentAmountField
        name="Sel"
        amount={nutriments.salt.quantity}
        unit={
          nutriments.salt.unit.substr(0, nutriments.salt.unit.indexOf('/')) ||
          'g'
        }
        color="pink"
      />
      <NutrimentAmountField
        name="Protéines"
        amount={nutriments.proteins.quantity}
        unit={
          nutriments.proteins.unit.substr(
            0,
            nutriments.proteins.unit.indexOf('/')
          ) || 'g'
        }
        color="yellow"
      />
      <NutrimentAmountField
        lastItem
        name="Phosphore"
        amount={nutriments.phosphorus.quantity}
        unit={
          nutriments.phosphorus.unit.substr(
            0,
            nutriments.phosphorus.unit.indexOf('/')
          ) || 'mg'
        }
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
