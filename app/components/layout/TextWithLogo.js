import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { colors, images } from '../../themes';

import styles from './styles/TextwithLogoStyle';

const TextWithLogo = ({ text, textColor, logo, isLogoBefore }) => {
  if (isLogoBefore) {
    return (
      <View style={styles.container}>
        <Image source={images[logo]} style={{ paddingHorizontal: 5 }} />
        <Text style={{ color: colors[textColor] }}>{text}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={{ color: colors[textColor], paddingHorizontal: 5 }}>
        {text}
      </Text>
      <Image source={images[logo]} />
    </View>
  );
};

TextWithLogo.propTypes = {
  text: PropTypes.string,
  logo: PropTypes.string,
  textColor: PropTypes.string,
  isLogoBefore: PropTypes.bool,
};

TextWithLogo.defaultProps = {
  text: '',
  logo: '',
  textColor: '',
  isLogoBefore: false,
};

export default TextWithLogo;
