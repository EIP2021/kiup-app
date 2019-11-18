import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { images } from '../../themes';

import styles from './styles/HeaderWithImageStyle';

const HeaderWithImage = ({ image, title }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={
          Object.prototype.hasOwnProperty.call(images, image)
            ? images[image]
            : { uri: image }
        }
      />
      <Text style={styles.title}>
        {title.length > 30 ? `${title.substring(0, 27)}...` : title}
      </Text>
    </View>
  );
};

HeaderWithImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
};

HeaderWithImage.defaultProps = {
  title: '',
};

export default HeaderWithImage;
