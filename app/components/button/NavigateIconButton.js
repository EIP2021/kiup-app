import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import NavigationService from '../../services/navigation';

import { images } from '../../themes';
import styles from './styles/NavigateIconButtonStyle';

const NavigateIconButton = ({ title, screenName, image }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        NavigationService.navigate(screenName);
      }}
    >
      <Image source={images[image]} style={styles.icon} />
      <Text style={styles.text}> {title} </Text>
      <Image source={images.arrowRight} style={styles.next} />
    </TouchableOpacity>
  );
};

NavigateIconButton.propsType = {
  image: PropTypes.string.isRequired,
  screenName: PropTypes.string,
  title: PropTypes.string,
};

NavigateIconButton.defaultProps = {
  title: '',
  screenName: '',
};

export default NavigateIconButton;
