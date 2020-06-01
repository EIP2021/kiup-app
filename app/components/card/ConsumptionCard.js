import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { images } from '../../themes';
import styles from './styles/ConsumptionCardStyle';

const ConsumptionCard = ({ image, name, quantity, date, onPress }) => {
  const displayedImage = image ? { uri: image } : images.noPhoto;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={displayedImage} />
      <View style={styles.rightContainer}>
        <View style={styles.verticalContainer}>
          <Text style={styles.primaryText}>
            {name.length + date.length < 40
              ? name
              : `${name.substring(0, 36 - date.length)}...`}
          </Text>
          <Text style={styles.secondaryText}>{quantity}</Text>
        </View>
        <Text style={styles.secondaryText}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

ConsumptionCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  quantity: PropTypes.string,
  date: PropTypes.string,
  onPress: PropTypes.func,
};

ConsumptionCard.defaultProps = {
  image: '',
  name: '',
  quantity: '',
  date: '',
  onPress: /* istanbul ignore next */ () => {},
};

export default ConsumptionCard;
