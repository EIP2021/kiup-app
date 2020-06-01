import React from 'react';
import { Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { colors, images } from '../../themes';

const TextWithLogo = ({ text, textColor, logo, isLogoBefore }) => {
  if (isLogoBefore) {
    return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 37257c23125520817140a5fc21d52decda9e3c0b
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
