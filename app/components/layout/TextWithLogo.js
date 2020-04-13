import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { images } from '../../themes';

import styles from './styles/TextwithLogoStyle';
// import NavigationService from '../../services/navigation';

const TextWithLogo = ({ text, textColor, logo, isLogoBefore = true }) => {
  if (!isLogoBefore) {
    return (
      <Text style={{ color: textColor }}>
        <Image source={images[logo]} />
        {text}
      </Text>
    );
  } else {
    return (
      <Text style={{ color: textColor }}>
        {text}
        <Image source={images[logo]} />
      </Text>
    );
  }
};

TextWithLogo.propTypes = {
  text: PropTypes.string,
  logo: PropTypes.string,
  isLogoBefore: PropTypes.bool,
};

TextWithLogo.defaultProps = {
  text: '',
  logo: '',
  isLogoBefore: false,
};

export default TextWithLogo;
