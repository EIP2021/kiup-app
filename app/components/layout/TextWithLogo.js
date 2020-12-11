import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { colors, images } from '../../themes';

import styles from './styles/TextwithLogoStyle';

const TextWithLogo = ({ text, textColor, logo, position }) => {
  if (position === 'before') {
    return (
      <View style={styles.container}>
        <Image source={images[logo]} style={{ paddingHorizontal: 5 }} />
        <Text style={{ color: colors[textColor] }}>{text}</Text>
      </View>
    );
  }
  if (position === 'after') {
    return (
      <View style={styles.container}>
        <Text style={{ color: colors[textColor], paddingHorizontal: 5 }}>
          {text}
        </Text>
        <Image source={images[logo]} />
      </View>
    );
  }
  if (position === 'inside') {
    return (
      <View style={{justifyContent: 'center',alignItems: 'center'}}>
        <Text style={{ fontSize: 10,color: colors[textColor], position: "absolute" }}>
          {text}
        </Text>
        <Image style={{width: 50, height: 50}} source={images[logo]} />
      </View>
    );
  }
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
