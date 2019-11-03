import React from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

const routeIcon = {
  Products: 'search',
  Scanner: 'barcode',
  Profile: 'person',
};

const TabBarIcon = ({ routeName, tintColor, size }) => {
  const type = Platform.OS === 'ios' ? 'ios' : 'md';
  return (
    <Ionicons
      name={`${type}-${routeIcon[routeName]}`}
      size={size}
      color={tintColor}
    />
  );
};

TabBarIcon.propTypes = {
  routeName: PropTypes.string.isRequired,
  tintColor: PropTypes.string.isRequired,
  size: PropTypes.number,
};

TabBarIcon.defaultProps = {
  size: 30,
};

export default TabBarIcon;
