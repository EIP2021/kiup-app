import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import styles from './styles/ListTitleStyle';

const ListTitle = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

ListTitle.propTypes = {
  title: PropTypes.string,
};

ListTitle.defaultProps = {
  title: '',
};

export default ListTitle;
