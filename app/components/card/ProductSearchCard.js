import React, { memo } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { images } from '../../themes';
import styles from './styles/ProductSearchCardStyle';

const ProductSearchCard = ({ title, onPress, image }) => {
  const imageDisplayed = image ? { uri: image } : images.noPhoto;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Image
          source={imageDisplayed}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.text}>
          {title.length > 35 ? `${title.substring(0, 32)}...` : title}
        </Text>
      </View>
      <Icon name="chevron-right" color="grey" size={moderateScale(12)} />
    </TouchableOpacity>
  );
};

ProductSearchCard.propTypes = {
  image: PropTypes.string,
  onPress: PropTypes.func,
  title: PropTypes.string,
};

ProductSearchCard.defaultProps = {
  image: '',
  onPress: /* istanbul ignore next */ () => {},
  title: '',
};

export default memo(ProductSearchCard);
