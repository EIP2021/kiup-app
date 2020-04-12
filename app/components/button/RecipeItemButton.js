import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles/RecipeItemButtonStyle';
// import NavigationService from '../../services/navigation';

const RecipeItemButton = ({ title }) => {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

RecipeItemButton.propTypes = {
  title: PropTypes.string,
};

RecipeItemButton.defaultProps = {
  title: '',
};

export default RecipeItemButton;
