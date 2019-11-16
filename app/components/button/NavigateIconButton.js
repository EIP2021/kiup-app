import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
      <View style={styles.leftContainer}>
        <Image
          source={images[image]}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.text}>{title}</Text>
      </View>
      <Icon name="chevron-right" color="grey" size={moderateScale(12)} />
    </TouchableOpacity>
  );
};

NavigateIconButton.propTypes = {
  image: PropTypes.string.isRequired,
  screenName: PropTypes.string,
  title: PropTypes.string,
};

NavigateIconButton.defaultProps = {
  screenName: '',
  title: '',
};

export default NavigateIconButton;
