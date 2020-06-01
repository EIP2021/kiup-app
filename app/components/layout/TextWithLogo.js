import React from 'react';
import { Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { colors, images } from '../../themes';

const TextWithLogo = ({ text, textColor, logo, isLogoBefore }) => {
  if (isLogoBefore) {
    return (
      <Text style={{ color: colors[textColor] }}>
        <Image source={images[logo]} />
        {text}
      </Text>
    );
  }
  return (
    <Text style={{ color: colors[textColor] }}>
      {text}
      <Image source={images[logo]} />
    </Text>
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
