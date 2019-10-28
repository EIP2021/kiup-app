import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { Image } from 'react-native-elements';

import styles from './styles/ProductHeaderStyle';

const ProductHeader = ({ image, name, brand }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: image }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={{ paddingLeft: 20, width: '70%' }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.brand}>{brand}</Text>
      </View>
    </View>
  );
};

ProductHeader.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  brand: PropTypes.string,
};

ProductHeader.defaultProps = {
  image: '',
  name: '',
  brand: '',
};

export default ProductHeader;
