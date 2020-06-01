import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import { images } from '../../themes';
import styles from './styles/ProductHeaderStyle';
import { FavoriteButton } from '../button';

const ProductHeader = ({ title, brand, image, isLiked }) => {
  const imageDisplayed = image ? { uri: image } : images.noPhoto;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageDisplayed} />
      <View style={styles.rightContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {title.length > 30 ? `${title.substring(0, 20)}...` : title}
          </Text>
          <Text style={styles.brand}>{brand}</Text>
        </View>
        <FavoriteButton defaultStatus={isLiked} />
      </View>
    </View>
  );
};

ProductHeader.propTypes = {
  title: PropTypes.string,
  brand: PropTypes.string,
  image: PropTypes.string,
  isLiked: PropTypes.bool,
};

ProductHeader.defaultProps = {
  title: '',
  brand: '',
  image: '',
  isLiked: false,
};

export default ProductHeader;
