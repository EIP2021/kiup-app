import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles/SeparatorStyle';

const Separator = () => {
  return <View style={styles.separator} />;
};

Separator.propTypes = {};

Separator.defaultProps = {};

export default Separator;
