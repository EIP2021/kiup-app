import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { Image } from 'react-native-elements';

import styles from './styles/ProductHeaderStyle';

const ProductHeader = ({ image, name, brand }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image
          style={styles.image}
          source={{ uri: image }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.brand}>{brand}</Text>
        </View>
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
