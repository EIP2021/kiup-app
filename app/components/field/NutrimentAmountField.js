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
          <Image source={images[`${color}Bookmark`]} style={styles.image} />
          <Text style={styles.leftText}>{name}</Text>
        </View>
        <Text style={styles.rightText}>
          {amount} {unit}
        </Text>
      </View>
      {!lastItem && <Divider style={styles.separator} />}
    </>
  );
};

NutrimentAmountField.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['green', 'red', 'yellow', 'pink']).isRequired,
  lastItem: PropTypes.bool,
};

NutrimentAmountField.defaultProps = {
  lastItem: false,
};

export default NutrimentAmountField;
