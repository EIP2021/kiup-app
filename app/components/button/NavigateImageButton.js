import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { images } from '../../themes';
import styles from './styles/NavigateImageButtonStyle';
import NavigationService from '../../services/navigation';

const NavigateImageButton = ({ title, screenName, image, params }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        NavigationService.navigate(screenName, params);
      }}
    >
      <Image source={images[image]} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

NavigateImageButton.propTypes = {
  image: PropTypes.string.isRequired,
  screenName: PropTypes.string.isRequired,
  title: PropTypes.string,
  params: PropTypes.object,
};

NavigateImageButton.defaultProps = {
  title: '',
  params: {},
};

export default NavigateImageButton;
