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
        <Text style={styles.text} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.imageContainer} />
        <View style={styles.bottomContainer}>
          <Text style={styles.markData}>
            {mark} {markLabel}
          </Text>
          <View style={styles.cookingContainer}>
            <Text style={styles.cookingData}>
              {cookingTime} {nbCutleries}
            </Text>
          </View>
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
