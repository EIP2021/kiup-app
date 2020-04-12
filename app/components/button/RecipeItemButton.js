import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles/RecipeItemButtonStyle';
// import NavigationService from '../../services/navigation';

const RecipeItemButton = ({
  title,
  mark,
  markLabel,
  cookingTime,
  nbCutleries,
  favByUser,
}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.markData}>
            {mark} {markLabel}
            <Text style={styles.cookingData}>
              {cookingTime} {nbCutleries}
            </Text>
          </Text>
        </View>
      </View>
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
