import React from 'react';
import { Text, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, images } from '../../themes';
import styles from './styles/TextwithLogoStyle';

const TextWithLogo = ({ text, textColor, logo, isLogoBefore }) => {
  if (isLogoBefore) {
    return (
      <Text style={{ color: colors[textColor] }}>
        <View>
          <Image source={images[logo]} />
        </View>
        {text}
      </Text>
    );
  }
  return (
    <Text style={{ color: colors[textColor] }}>
      {text}
      <View>
        <Image source={images[logo]} />
      </View>
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
