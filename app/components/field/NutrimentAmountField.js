import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Divider } from 'react-native-elements';

import { images } from '../../themes';
import styles from './styles/NutrimentAmountFieldStyle';

const NutrimentAmountField = ({ name, amount, unit, color, lastItem }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={images[`${color}Banner`]} style={styles.image} />
          <Text style={styles.leftText}>{name}</Text>
        </View>
        <Text style={styles.rightText}>
          {amount} {unit}
        </Text>
      </View>
      <Divider
        style={{
          width: lastItem ? '100%' : '90%',
          alignSelf: 'flex-end',
          backgroundColor: '#C8C8C8',
        }}
      />
    </>
  );
};

NutrimentAmountField.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['blue', 'red', 'orange', 'green']).isRequired,
  lastItem: PropTypes.bool,
};

NutrimentAmountField.defaultProps = {
  lastItem: false,
};

export default NutrimentAmountField;
