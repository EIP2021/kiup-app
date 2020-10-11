import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { images } from '../../themes';
import styles from './styles/NavigateProductCategoryRecipeButtonStyle';
import NavigationService from '../../services/navigation';

const NavigateProductCategoryRecipeButton = ({
  title,
  screenName,
  image,
  onPress,
  params,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onPress();
        NavigationService.navigate(screenName, params);
      }}
    >
      <View style={styles.imageContainer}>
        <Image source={images[image]} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

NavigateProductCategoryRecipeButton.propTypes = {
  image: PropTypes.string.isRequired,
  screenName: PropTypes.string,
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  params: PropTypes.object,
};

NavigateProductCategoryRecipeButton.defaultProps = {
  screenName: '',
  title: '',
  params: {},
};

export default NavigateProductCategoryRecipeButton;
