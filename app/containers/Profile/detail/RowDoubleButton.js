import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { RoundedHalfButton } from '../../../components';
import styles from './styles/RowDoubleButtonStyle';

const RowDoubleButton = ({ leftButtonProps, rightButtonProps }) => {
  return (
    <View style={styles.container}>
      <RoundedHalfButton {...leftButtonProps} />
      <RoundedHalfButton {...rightButtonProps} />
    </View>
  );
};

RowDoubleButton.propTypes = {
  leftButtonProps: PropTypes.object,
  rightButtonProps: PropTypes.object,
};

RowDoubleButton.defaultProps = {
  leftButtonProps: {},
  rightButtonProps: {},
};

export default RowDoubleButton;
