import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles/RowInputButtonStyle';
import { HalfButton } from '../button';
import { UnitInput } from '../input';

const RowInputButton = ({ inputProps, buttonProps }) => {
  return (
    <View style={styles.container}>
      <UnitInput {...inputProps} />
      <HalfButton {...buttonProps} />
    </View>
  );
};

RowInputButton.propTypes = {
  inputProps: PropTypes.object,
  buttonProps: PropTypes.object,
};

RowInputButton.defaultProps = {
  inputProps: {},
  buttonProps: {},
};

export default RowInputButton;
