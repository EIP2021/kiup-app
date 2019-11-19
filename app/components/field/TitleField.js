import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles/TitleFieldStyle';

const TitleFieldStyle = ({ title, titleStyle }) => {
  return <Text style={[styles.title, titleStyle]}>{title}</Text>;
};

TitleFieldStyle.propTypes = {
  title: PropTypes.string,
  titleStyle: Text.propTypes.style,
};

TitleFieldStyle.defaultProps = {
  title: '',
  titleStyle: {},
};

export default TitleFieldStyle;
