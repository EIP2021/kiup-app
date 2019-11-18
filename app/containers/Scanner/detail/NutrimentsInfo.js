import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { NutrimentAmountField } from '../../../components';
import NutrimentsHeaderBar from './NutrimentsHeaderBar';

const NutrimentsInfo = ({ nutriments }) => {
  return (
    <>
      <NutrimentsHeaderBar />
      <View
        style={{
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: '#C8C8C8',
        }}
      >
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
          color="pink"
        />
        <NutrimentAmountField
          name="Protéines"
          amount={nutriments.proteins.amount}
          unit={nutriments.proteins.unit}
          color="yellow"
        />
        <NutrimentAmountField
          lastItem
          name="Phosphore"
          amount={nutriments.phosphorus.amount}
          unit={nutriments.phosphorus.unit}
          color="green"
        />
      </View>
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
